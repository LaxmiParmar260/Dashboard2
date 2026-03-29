import React from 'react'

const stats = [
  {
    label: 'Total Orders',
    value: '2,500',
    change: '4.9%',
    color: 'bg-blue-500',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="1.5"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="white" fill="none" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Total Customers',
    value: '1,340',
    change: '2.7%',
    color: 'bg-purple-100',
    iconColor: 'text-purple-500',
    iconBg: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    label: 'Total Revenue',
    value: '$5,567',
    change: '4.9%',
    color: 'bg-green-100',
    iconBg: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    label: 'Returning Buyers',
    value: '865',
    change: '3.4%',
    color: 'bg-orange-100',
    iconBg: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
]

export default function StatsCards() {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className={`w-9 h-9 ${i === 0 ? 'bg-blue-500' : stat.color} rounded-xl flex items-center justify-center`}>
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-gray-600">{stat.label}</span>
            </div>
            <button className="text-gray-300 hover:text-gray-400">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-green-500 flex items-center gap-0.5 font-semibold">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
              </svg>
              {stat.change}
            </span>
            <span className="text-gray-400">From the Last month:</span>
          </div>
        </div>
      ))}
    </div>
  )
}
