import React, { useState } from 'react'

const orders = [
  {
    id: '789901',
    date: '2 Dec 2026',
    customer: 'Oliver John Brown',
    category: 'Shoes, Shirt',
    status: 'Pending',
    items: '2 Items',
    total: '$789.00',
  },
  {
    id: '789902',
    date: '1 Dec 2026',
    customer: 'Noah James Smith',
    category: 'Sneakers, T-shirt',
    status: 'Completed',
    items: '3 Items',
    total: '$967.00',
  },
  {
    id: '789903',
    date: '30 Nov 2026',
    customer: 'Emma Rose Davis',
    category: 'Jacket, Pants',
    status: 'Completed',
    items: '2 Items',
    total: '$1,245.00',
  },
]

const statusColors = {
  Pending: 'bg-amber-50 text-amber-600 border border-amber-200',
  Completed: 'bg-green-50 text-green-600 border border-green-200',
  Cancelled: 'bg-red-50 text-red-600 border border-red-200',
}

export default function RecentSales() {
  const [search, setSearch] = useState('')
  const [checked, setChecked] = useState([])

  const filtered = orders.filter(o =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.id.includes(search)
  )

  const toggleCheck = (id) => {
    setChecked(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 flex items-center gap-3 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-800 flex-1">Recent Sales</h2>
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent text-sm text-gray-600 outline-none w-32 placeholder-gray-400"
          />
        </div>
        <button className="flex items-center gap-2 px-3.5 py-2 bg-gray-100 rounded-xl text-sm text-gray-600 font-medium hover:bg-gray-200 transition">
          All Category
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button className="flex items-center gap-2 px-3.5 py-2 bg-gray-100 rounded-xl text-sm text-gray-600 font-medium hover:bg-gray-200 transition">
          Filter
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="w-10 px-5 py-3">
                <input type="checkbox" className="rounded w-4 h-4 accent-blue-500" />
              </th>
              {['Order Id', 'Date', 'Customer', 'Category', 'Status', 'Items', 'Total'].map(h => (
                <th key={h} className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((order, i) => (
              <tr key={order.id} className={`border-t border-gray-50 hover:bg-blue-50/30 transition ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                <td className="px-5 py-3.5">
                  <input
                    type="checkbox"
                    checked={checked.includes(order.id)}
                    onChange={() => toggleCheck(order.id)}
                    className="rounded w-4 h-4 accent-blue-500"
                  />
                </td>
                <td className="px-3 py-3.5 text-sm text-gray-600 font-medium">{order.id}</td>
                <td className="px-3 py-3.5 text-sm text-gray-500">{order.date}</td>
                <td className="px-3 py-3.5 text-sm text-gray-800 font-medium">{order.customer}</td>
                <td className="px-3 py-3.5 text-sm text-gray-500">{order.category}</td>
                <td className="px-3 py-3.5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-3 py-3.5 text-sm text-gray-500">{order.items}</td>
                <td className="px-3 py-3.5 text-sm font-semibold text-gray-800">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
