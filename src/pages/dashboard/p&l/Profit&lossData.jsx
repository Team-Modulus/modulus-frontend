import React, { useState } from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const ProfitLossPage = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredMargin, setHoveredMargin] = useState(null);

  const monthlyData = [
    { month: 'Jan', revenue: 45000, expenses: 33000, profit: 12000 },
    { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000 },
    { month: 'Mar', revenue: 47000, expenses: 33000, profit: 14000 },
    { month: 'Apr', revenue: 61000, expenses: 37000, profit: 24000 },
    { month: 'May', revenue: 55000, expenses: 36000, profit: 19000 },
    { month: 'Jun', revenue: 67000, expenses: 41000, profit: 26000 }
  ];

  const currentMonthPL = {
    totalRevenue: 67000,
    productSales: 58000,
    serviceRevenue: 9000,
    totalExpenses: 41000,
    costOfGoodsSold: 18000,
    marketing: 15000,
    operations: 8000,
    netProfit: 26000
  };

  const profitMarginData = [
    { month: 'Jan', margin: 26.7 },
    { month: 'Feb', margin: 32.7 },
    { month: 'Mar', margin: 29.8 },
    { month: 'Apr', margin: 39.3 },
    { month: 'May', margin: 34.5 },
    { month: 'Jun', margin: 38.8 }
  ];

  const maxValue = 80000;

  // Chart calculations for profit margin trend
  const chartWidth = 300;
  const chartHeight = 120;
  const padding = 20;
  const maxMargin = 40;
  const minMargin = 0;

  const marginPoints = profitMarginData.map((d, i) => {
    const x = padding + (i / (profitMarginData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.margin - minMargin) / (maxMargin - minMargin)) * (chartHeight - 2 * padding);
    return { x, y, margin: d.margin, month: d.month };
  });

  const marginPathData = marginPoints.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');

  return (
    <div className="max-w-7xl mx-auto  bg-gray-50 min-h-screen">

         <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profit & Loss</h1>
          <p className="text-gray-600">Track your business revenue and growth</p>
        </div>
      
      </div>

      {/* P&L Statement Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Profit & Loss Statement</h2>
          <p className="text-sm text-gray-600">Revenue, expenses, and profit over time</p>
        </div>

        {/* Triple Bar Chart */}
        <div className="relative">
          <div className="flex">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-80 w-12 text-xs text-gray-500 pr-2">
              <span>80000</span>
              <span>60000</span>
              <span>40000</span>
              <span>20000</span>
              <span>0</span>
            </div>

            {/* Chart area */}
            <div className="flex-1 relative h-80">
              {/* Grid lines */}
              <div className="absolute inset-0">
                {[0, 25, 50, 75, 100].map((percentage) => (
                  <div
                    key={percentage}
                    className="absolute w-full border-t border-gray-100"
                    style={{ bottom: `${percentage}%` }}
                  />
                ))}
              </div>

              {/* Bars container */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6">
                {monthlyData.map((item, index) => (
                  <div key={index} className="flex items-end space-x-1" style={{ width: '14%' }}>
                    {/* Revenue bar */}
                    <div className="w-1/3 relative group">
                      <div
                        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 cursor-pointer relative w-full"
                        style={{
                          height: `${(item.revenue / maxValue) * 320}px`
                        }}
                        onMouseEnter={() => setHoveredBar({ type: 'revenue', month: item.month, value: item.revenue })}
                        onMouseLeave={() => setHoveredBar(null)}
                      />
                    </div>

                    {/* Expenses bar */}
                    <div className="w-1/3 relative group">
                      <div
                        className="bg-red-400 hover:bg-red-500 transition-colors duration-200 cursor-pointer relative w-full"
                        style={{
                          height: `${(item.expenses / maxValue) * 320}px`
                        }}
                        onMouseEnter={() => setHoveredBar({ type: 'expenses', month: item.month, value: item.expenses })}
                        onMouseLeave={() => setHoveredBar(null)}
                      />
                    </div>

                    {/* Profit bar */}
                    <div className="w-1/3 relative group">
                      <div
                        className="bg-green-500 hover:bg-green-600 transition-colors duration-200 cursor-pointer relative w-full"
                        style={{
                          height: `${(item.profit / maxValue) * 320}px`
                        }}
                        onMouseEnter={() => setHoveredBar({ type: 'profit', month: item.month, value: item.profit })}
                        onMouseLeave={() => setHoveredBar(null)}
                      />
                    </div>

                    {/* Hover tooltip */}
                    {hoveredBar && hoveredBar.month === item.month && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded whitespace-nowrap z-20">
                        ${hoveredBar.value.toLocaleString()} {hoveredBar.type}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-6">
                {monthlyData.map((item, index) => (
                  <div key={index} className="text-xs text-gray-600 text-center" style={{ width: '14%' }}>
                    {item.month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Month P&L */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Current Month P&L</h2>
            <p className="text-sm text-gray-600">June 2024 breakdown</p>
          </div>

          <div className="space-y-4">
            {/* Total Revenue */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div className="font-semibold text-gray-900">Total Revenue</div>
              <div className="font-semibold text-green-600">${currentMonthPL.totalRevenue.toLocaleString()}</div>
            </div>
            
            {/* Revenue Breakdown */}
            <div className="pl-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Product Sales</span>
                <span className="text-gray-900">${currentMonthPL.productSales.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Service Revenue</span>
                <span className="text-gray-900">${currentMonthPL.serviceRevenue.toLocaleString()}</span>
              </div>
            </div>

            {/* Total Expenses */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100 mt-6">
              <div className="font-semibold text-gray-900">Total Expenses</div>
              <div className="font-semibold text-red-600">${currentMonthPL.totalExpenses.toLocaleString()}</div>
            </div>

            {/* Expenses Breakdown */}
            <div className="pl-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Cost of Goods Sold</span>
                <span className="text-gray-900">${currentMonthPL.costOfGoodsSold.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Marketing</span>
                <span className="text-gray-900">${currentMonthPL.marketing.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Operations</span>
                <span className="text-gray-900">${currentMonthPL.operations.toLocaleString()}</span>
              </div>
            </div>

            {/* Net Profit */}
            <div className="flex items-center justify-between py-3 border-t-2 border-gray-200 mt-6">
              <div className="font-bold text-gray-900">Net Profit</div>
              <div className="font-bold text-blue-600">${currentMonthPL.netProfit.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Profit Margin Trend */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Profit Margin Trend</h2>
            <p className="text-sm text-gray-600">Monthly profit margins</p>
          </div>

          <div className="relative">
            <div className="flex">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between h-32 w-8 text-xs text-gray-500 pr-2">
                <span>40</span>
                <span>30</span>
                <span>20</span>
                <span>10</span>
                <span>0</span>
              </div>

              {/* Chart area */}
              <div className="flex-1 relative">
                <svg 
                  width="100%" 
                  height="120" 
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="overflow-visible"
                >
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((percentage) => (
                    <line
                      key={percentage}
                      x1={padding}
                      y1={chartHeight - padding - (percentage / 100) * (chartHeight - 2 * padding)}
                      x2={chartWidth - padding}
                      y2={chartHeight - padding - (percentage / 100) * (chartHeight - 2 * padding)}
                      stroke="#f3f4f6"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Profit margin line */}
                  <path
                    d={marginPathData}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    className="drop-shadow-sm"
                  />

                  {/* Data points */}
                  {marginPoints.map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#10b981"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer hover:r-6 transition-all"
                      onMouseEnter={() => setHoveredMargin(i)}
                      onMouseLeave={() => setHoveredMargin(null)}
                    />
                  ))}

                  {/* Hover tooltip */}
                  {hoveredMargin !== null && (
                    <g>
                      <rect
                        x={marginPoints[hoveredMargin].x - 25}
                        y={marginPoints[hoveredMargin].y - 35}
                        width="50"
                        height="25"
                        fill="#1f2937"
                        rx="4"
                      />
                      <text
                        x={marginPoints[hoveredMargin].x}
                        y={marginPoints[hoveredMargin].y - 18}
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                      >
                        {marginPoints[hoveredMargin].margin.toFixed(1)}%
                      </text>
                    </g>
                  )}
                </svg>

                {/* X-axis labels */}
                <div className="flex justify-between mt-4 px-5">
                  {profitMarginData.map((item, index) => (
                    <div key={index} className="text-xs text-gray-600">
                      {item.month}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossPage;