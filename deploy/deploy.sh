#!/bin/bash
# =============================================================
# CoinBidex Site — Deploy Bootstrap
# Run manually ONCE for the first setup (SSL cert + nginx + first
# container start). Ongoing deploys happen automatically via GitHub
# Actions (.github/workflows/deploy.yml), which only pulls the
# already-built image — it never touches nginx/certbot after this.
#
# Assumes the shared VPS bootstrap (Docker, Nginx, Certbot, UFW,
# fail2ban, the `deploy` user) has already been run once via
# trading-coinbidex's deploy/vps-setup.sh — this script does not repeat
# that, it only adds this project on top of it.
#
# Usage: bash deploy/deploy.sh coinbidex.com you@yourdomain.com
# =============================================================
set -e

DOMAIN=${1:?"Usage: bash deploy/deploy.sh coinbidex.com you@yourdomain.com"}
EMAIL=${2:?"Usage: bash deploy/deploy.sh coinbidex.com you@yourdomain.com"}
APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"

RED='\033[0;31m'; GREEN='\033[0;32m'; BLUE='\033[0;34m'; YELLOW='\033[1;33m'; NC='\033[0m'
log()  { echo -e "${BLUE}▶ $1${NC}"; }
ok()   { echo -e "${GREEN}✅ $1${NC}"; }
warn() { echo -e "${YELLOW}⚠  $1${NC}"; }
err()  { echo -e "${RED}❌ $1${NC}"; exit 1; }

if [ "$EUID" -ne 0 ]; then
  echo "Root privileges needed for Nginx/Certbot — re-running with sudo..."
  exec sudo -E bash "$0" "$@"
fi

if [ -f /home/deploy/.docker/config.json ] && [ ! -f /root/.docker/config.json ]; then
  mkdir -p /root/.docker
  cp /home/deploy/.docker/config.json /root/.docker/config.json
fi

echo ""
echo -e "${GREEN}╔══════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║       CoinBidex Site — Deploy            ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════╝${NC}"
echo -e "  Site: ${BLUE}https://${DOMAIN}${NC}  ($APP_DIR)"
echo ""

if [ ! -f "$APP_DIR/.env" ]; then
  warn ".env not found — generating from .env.example"
  cp "$APP_DIR/.env.example" "$APP_DIR/.env"
  ok "Created .env — defaults are fine for this project, no secrets needed"
fi

# ── SSL ──────────────────────────────────────────────────────
log "Issuing SSL certificates..."
systemctl stop nginx 2>/dev/null || true
for domain in "$DOMAIN" "www.$DOMAIN"; do
  if [ ! -d "/etc/letsencrypt/live/$domain" ]; then
    certbot certonly --standalone --email "$EMAIL" --agree-tos --no-eff-email -d "$domain" --non-interactive --quiet \
      && ok "SSL cert: $domain" || warn "SSL failed for $domain — check DNS points here first"
  else
    ok "SSL cert already exists: $domain"
  fi
done
systemctl start nginx

# ── Nginx ────────────────────────────────────────────────────
log "Writing Nginx configuration..."
if [ -d "/etc/letsencrypt/live/$DOMAIN" ]; then
cat > /etc/nginx/sites-available/coinbidex-site << NGINX
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ${DOMAIN} www.${DOMAIN};

    ssl_certificate     /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL_site:10m;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options SAMEORIGIN always;
    add_header X-Content-Type-Options nosniff always;

    location / {
        proxy_pass         http://127.0.0.1:3030;
        proxy_http_version 1.1;
        proxy_set_header   Host \$host;
        proxy_set_header   X-Real-IP \$remote_addr;
        proxy_set_header   X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto \$scheme;
    }
}
NGINX
  ln -sf /etc/nginx/sites-available/coinbidex-site /etc/nginx/sites-enabled/coinbidex-site
  if ! nginx -t; then
    err "Nginx config test failed — not reloading, fix the error above and re-run."
  fi
  systemctl reload nginx
  ok "Nginx configured for $DOMAIN"
else
  warn "No cert yet for $DOMAIN — skipping Nginx block. Fix DNS and re-run."
fi

# ── Start container ──────────────────────────────────────────
log "Pulling and starting the site container..."
cd "$APP_DIR"
docker compose --env-file .env pull
docker compose --env-file .env up -d --no-build
ok "coinbidex-site container started"

# ── SSL auto-renewal (idempotent — safe alongside other projects' cron) ──
(crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet && systemctl reload nginx") | sort -u | crontab -

echo ""
echo -e "${GREEN}🚀 https://${DOMAIN} is live${NC}"
