/**
 * Lightweight inline-SVG sparkline (no chart library overhead) used for the
 * "Last 7 Days" column in dense market tables, where dozens of tiny charts
 * need to render cheaply side by side.
 */
export default function Sparkline({ data, width = 108, height = 36, positive = true, className = '' }) {
  if (!data || data.length < 2) {
    return <div className={`h-9 w-[108px] ${className}`} />
  }

  const values = data.map(d => (typeof d === 'number' ? d : d.value ?? d.price))
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width
    const y = height - ((v - min) / range) * height
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })

  const color = positive ? 'var(--color-mint-500)' : 'var(--color-danger-500)'
  const areaPath = `M0,${height} L${points.join(' L')} L${width},${height} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className={className} preserveAspectRatio="none">
      <polyline points={points.join(' ')} fill="none" stroke={color} strokeWidth="1.75" strokeLinejoin="round" strokeLinecap="round" />
      <path d={areaPath} fill={color} opacity="0.08" />
    </svg>
  )
}
