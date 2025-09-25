import React, { useState } from 'react';
import { Download, DollarSign, TrendingUp, Calendar, Target } from 'lucide-react';

const RevenuePage = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const metrics = [
    {
      title: 'Monthly Revenue',
      value: '$67,000',
      change: '+18.7% vs last month',
      positive: true,
      icon: DollarSign
    },
    {
      title: 'YTD Revenue',
      value: '$330,000',
      change: '+15.2% vs last year',
      positive: true,
      icon: TrendingUp
    },
    {
      title: 'Average Monthly',
      value: '$55,000',
      change: '+12.4% 6 month average',
      positive: true,
      icon: Calendar
    },
    {
      title: 'Growth Rate',
      value: '12.4%',
      change: '+2.1% month over month',
      positive: true,
      icon: Target
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 }
  ];

  const summaryCards = [
    {
      title: 'Q2 Performance',
      value: '$183,000',
      subtitle: 'Apr-Jun revenue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      valueColor: 'text-blue-600'
    },
    {
      title: 'Best Month',
      value: 'June',
      subtitle: '$67,000 revenue',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900',
      valueColor: 'text-green-600'
    },
    {
      title: 'Projected Annual',
      value: '$720,000',
      subtitle: 'based on current trend',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900',
      valueColor: 'text-purple-600'
    }
  ];

  const handleExportReport = () => {
    console.log('Exporting revenue report...');
  };

  // Chart calculations
  const chartWidth = 700;
  const chartHeight = 200;
  const padding = 40;
  const maxRevenue = 80000;
  const minRevenue = 0;

  const points = revenueData.map((d, i) => {
    const x = padding + (i / (revenueData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.revenue - minRevenue) / (maxRevenue - minRevenue)) * (chartHeight - 2 * padding);
    return { x, y, revenue: d.revenue, month: d.month };
  });

  // Create path for the line
  const linePath = points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');

  // Create path for the filled area
  const areaPath = `M ${points[0].x} ${chartHeight - padding} L ${points.map(p => `${p.x} ${p.y}`).join(' L ')} L ${points[points.length - 1].x} ${chartHeight - padding} Z`;

  return (
    <div className="max-w-7xl mx-auto  bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue</h1>
          <p className="text-gray-600">Track your business revenue and growth</p>
        </div>
        <button
          onClick={handleExportReport}
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
                <Icon className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
                <div className={`flex items-center text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Trend Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Revenue Trend</h2>
          <p className="text-sm text-gray-600">Monthly revenue performance</p>
        </div>

        <div className="relative">
          <div className="flex">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-48 w-12 text-xs text-gray-500 pr-2">
              <span>80000</span>
              <span>60000</span>
              <span>40000</span>
              <span>20000</span>
              <span>0</span>
            </div>

            {/* Chart area */}
            <div className="flex-1 relative">
              <svg 
                width="100%" 
                height="200" 
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

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Filled area */}
                <path
                  d={areaPath}
                  fill="url(#revenueGradient)"
                  stroke="none"
                />

                {/* Revenue line */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  className="drop-shadow-sm"
                />

                {/* Data points */}
                {points.map((point, i) => (
                  <circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className="cursor-pointer hover:r-7 transition-all"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Hover tooltip */}
                {hoveredPoint !== null && (
                  <g>
                    <rect
                      x={points[hoveredPoint].x - 35}
                      y={points[hoveredPoint].y - 45}
                      width="70"
                      height="30"
                      fill="#1f2937"
                      rx="4"
                    />
                    <text
                      x={points[hoveredPoint].x}
                      y={points[hoveredPoint].y - 32}
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                    >
                      {points[hoveredPoint].month}
                    </text>
                    <text
                      x={points[hoveredPoint].x}
                      y={points[hoveredPoint].y - 20}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="600"
                    >
                      ${(points[hoveredPoint].revenue / 1000).toFixed(0)}K
                    </text>
                  </g>
                )}
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between mt-4 px-10">
                {revenueData.map((item, index) => (
                  <div key={index} className="text-xs text-gray-600">
                    {item.month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className={`${card.bgColor} rounded-lg border border-gray-200 p-6`}>
            <div className="text-center">
              <h3 className={`text-sm font-medium ${card.textColor} mb-3`}>{card.title}</h3>
              <div className={`text-2xl font-bold ${card.valueColor} mb-2`}>{card.value}</div>
              <p className={`text-xs ${card.textColor} opacity-75`}>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenuePage;