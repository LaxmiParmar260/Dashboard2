import React, { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const data = [
  { month: 'Jan', value: 18000 },
  { month: 'Feb', value: 22000 },
  { month: 'Mar', value: 15000 },
  { month: 'Apr', value: 20000 },
  { month: 'May', value: 17000 },
  { month: 'Jun', value: 25000 },
  { month: 'Jul', value: 22430, highlighted: true },
  { month: 'Aug', value: 19000 },
  { month: 'Sep', value: 16000 },
  { month: 'Oct', value: 21000 },
  { month: 'Nov', value: 23000 },
  { month: 'Dec', value: 24000 },
]

const CustomBar = (props) => {
  const { x, y, width, height, highlighted } = props
  const radius = 8

  if (highlighted) {
    return (
      <g>
        <defs>
          <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={radius}
          fill="url(#blueGrad)"
        />
      </g>
    )
  }

  return (
    <g>
      <defs>
        <pattern id={`stripe-${props.index}`} patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#d1d5db" strokeWidth="3" />
        </pattern>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius}
        fill={`url(#stripe-${props.index})`}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    </g>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length && payload[0].payload.highlighted) {
    return (
      <div className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-lg">
        ${payload[0].value.toLocaleString()}
      </div>
    )
  }
  return null
}

export default function RevenueInsights() {
  const [period, setPeriod] = useState('Yearly')

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full">
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h2 className="text-base font-bold text-gray-800">Revenue Insights</h2>
        <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
          {['Monthly', 'Yearly'].map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                period === p ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <div>
          <span className="text-3xl font-bold text-gray-900">$5,567</span>
          <span className="text-2xl font-bold text-gray-900">.00</span>
          <span className="ml-2 text-xs text-green-500 font-semibold bg-green-50 px-2 py-0.5 rounded-full">↑ 4.9%</span>
        </div>
        <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>Earning
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>Sales
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block"></span>Refunds
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barCategoryGap="20%" barGap={4} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
          <YAxis tickFormatter={v => `${v / 1000}k`} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} ticks={[0, 10000, 20000, 30000, 40000]} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar dataKey="value" shape={<CustomBar />} radius={[8, 8, 8, 8]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} highlighted={entry.highlighted} index={index} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
