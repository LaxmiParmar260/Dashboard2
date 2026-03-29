import StatsCards from '../../components/StatsCards';
import RevenueInsights from '../../components/RevenueInsights';
import SalesOverview from '../../components/SalesOverview';
import RecentSales from '../../components/RecentSales';

export default function Home() {
  return (

     
      <div className="  overflow-hidden flex" >
        {/* <Sidebar /> */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* <Header /> */}
          <div className="flex-1 overflow-y-auto p-6 ">
            {/* Welcome Row */}
           <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, India!</h1>
                <p className="text-sm text-gray-400 mt-0.5">Monday, 24 December 2026</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">
                  This Month
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  Export
                </button>
              </div>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
              <div className="col-span-1 lg:col-span-8">
                <RevenueInsights />
              </div>
             <div className="col-span-1 lg:col-span-4">
                <SalesOverview />
              </div>
            </div>

            <div className="mt-4">
              <RecentSales />
            </div>
          </div>
        </div>
      </div>
    
  )
}