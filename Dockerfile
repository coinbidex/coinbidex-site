# ── Build stage ──────────────────────────────────────────────
FROM node:20-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
ARG VITE_TRADE_URL=https://trade.coinbidex.com
ENV VITE_TRADE_URL=$VITE_TRADE_URL
RUN npm run build

# ── Runtime stage — static files served by nginx ────────────────
FROM nginx:1.27-alpine AS runner

COPY deploy/nginx.container.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/health || exit 1
