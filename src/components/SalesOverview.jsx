import React from 'react'

// Semicircle gauge using SVG
function GaugeChart({ value = 70.8 }) {
  const cx = 110
  const cy = 110
  const r = 85
  const strokeWidth = 22
  const circumference = Math.PI * r // half circle
  const segments = 12
  const segmentAngle = 180 / segments
  const gap = 3

  // Generate arc paths for each segment
  const getArcPath = (startAngle, endAngle, radius) => {
    const toRad = (deg) => (deg * Math.PI) / 180
    const x1 = cx + radius * Math.cos(toRad(180 + startAngle))
    const y1 = cy + radius * Math.sin(toRad(180 + startAngle))
    const x2 = cx + radius * Math.cos(toRad(180 + endAngle))
    const y2 = cy + radius * Math.sin(toRad(180 + endAngle))
    const largeArc = endAngle - startAngle > 180 ? 1 : 0
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`
  }

  const filled = Math.round((value / 100) * segments)

  return (
    <svg width="220" height="130" viewBox="0 0 220 130">
      {Array.from({ length: segments }).map((_, i) => {
        const start = i * segmentAngle + gap / 2
        const end = (i + 1) * segmentAngle - gap / 2
        const isFilled = i < filled
        const isLight = i >= filled && i < filled + 2

        let color
        if (isFilled) {
          // Gradient from dark blue to medium blue
          const progress = i / (segments - 1)
          color = isFilled ? (i < filled * 0.6 ? '#1d4ed8' : '#3b82f6') : '#dbeafe'
        } else if (isLight) {
          color = '#bfdbfe'
        } else {
          color = '#e2e8f0'
        }

        return (
          <path
            key={i}
            d={getArcPath(start, end, r)}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
        )
      })}

      {/* Center text */}
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="26" fontWeight="800" fill="#1e293b" fontFamily="DM Sans, sans-serif">
        {value}%
      </text>
      <text x={cx} y={cy + 26} textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="DM Sans, sans-serif">
        Sales Growth
      </text>
    </svg>
  )
}

export default function SalesOverview() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-bold text-gray-800">Sales Overview</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <GaugeChart value={70.8} />
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm text-gray-500 font-medium">Sales</span>
          <span className="text-sm text-gray-400">Target <span className="font-semibold text-gray-600">$20,000.00</span></span>
        </div>
        <div className="text-lg font-bold text-gray-900 mb-2">$3,884.00</div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-blue-500"
            style={{ width: '19.4%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
