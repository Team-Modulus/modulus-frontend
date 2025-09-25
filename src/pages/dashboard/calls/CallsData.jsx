import React, { useState } from 'react';
import { Phone, TrendingUp, ExternalLink, Clock } from 'lucide-react';

const SalesCallsPage = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const metrics = [
    {
      title: 'Calls This Week',
      value: '47',
      change: '+8 vs last week',
      positive: true,
      icon: Phone
    },
    {
      title: 'Average Call Duration',
      value: '14:32',
      change: '+2:15 vs last week',
      positive: true,
      icon: Clock
    },
    {
      title: 'Call Conversion Rate',
      value: '28.5%',
      change: '+4.2% vs last week',
      positive: true,
      icon: TrendingUp
    }
  ];

  const recentCalls = [
    {
      id: 1,
      name: 'Sarah Johnson',
      timeAgo: '2 hours ago',
      duration: '15:30',
      outcome: 'Sale Closed',
      value: 1200,
      outcomeColor: 'text-green-600'
    },
    {
      id: 2,
      name: 'Mike Chen',
      timeAgo: '4 hours ago',
      duration: '8:45',
      outcome: 'Follow-up Scheduled',
      value: null,
      outcomeColor: 'text-blue-600'
    },
    {
      id: 3,
      name: 'Emma Davis',
      timeAgo: '6 hours ago',
      duration: '22:15',
      outcome: 'Demo Scheduled',
      value: 3500,
      outcomeColor: 'text-purple-600'
    },
    {
      id: 4,
      name: 'John Smith',
      timeAgo: '1 day ago',
      duration: '12:00',
      outcome: 'Not Interested',
      value: null,
      outcomeColor: 'text-gray-600'
    }
  ];

  const callPerformanceData = [
    { day: 'Mon', calls: 8, conversions: 2 },
    { day: 'Tue', calls: 12, conversions: 3 },
    { day: 'Wed', calls: 6, conversions: 1 },
    { day: 'Thu', calls: 16, conversions: 5 },
    { day: 'Fri', calls: 10, conversions: 3 }
  ];

  const handleViewCall = (name) => {
    console.log(`Viewing call details for ${name}...`);
  };

  // Calculate SVG path for the line chart
  const chartWidth = 600;
  const chartHeight = 120;
  const padding = 20;
  const maxValue = 16; // Fixed max for consistent scaling
  const minValue = 0;

  const callsPoints = callPerformanceData.map((d, i) => {
    const x = padding + (i / (callPerformanceData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.calls - minValue) / (maxValue - minValue)) * (chartHeight - 2 * padding);
    return { x, y, value: d.calls, day: d.day };
  });

  const conversionsPoints = callPerformanceData.map((d, i) => {
    const x = padding + (i / (callPerformanceData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.conversions - minValue) / (maxValue - minValue)) * (chartHeight - 2 * padding);
    return { x, y, value: d.conversions, day: d.day };
  });

  const callsPathData = callsPoints.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  const conversionsPathData = conversionsPoints.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');

  return (
    <div className="max-w-7xl mx-auto  bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Calls</h1>
        <p className="text-gray-600">Track your sales calls and conversations</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      {/* Recent Calls */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Recent Calls</h2>
          <p className="text-sm text-gray-600">Latest sales call activity</p>
        </div>

        <div className="space-y-4">
          {recentCalls.map((call) => (
            <div key={call.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{call.name}</div>
                  <div className="text-xs text-gray-500">{call.timeAgo}</div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{call.duration}</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                
                <div className="text-right">
                  <div className={`text-sm font-medium ${call.outcomeColor}`}>
                    {call.outcome}
                  </div>
                  <div className="text-xs text-gray-500">Outcome</div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {call.value ? `$${call.value.toLocaleString()}` : '-'}
                  </div>
                  <div className="text-xs text-gray-500">Value</div>
                </div>

                <button 
                  onClick={() => handleViewCall(call.name)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call Performance Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Call Performance</h2>
          <p className="text-sm text-gray-600">Daily call activity</p>
          
          {/* Legend */}
          <div className="flex items-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Calls Made</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Conversions</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Y-axis labels */}
          <div className="flex">
            <div className="flex flex-col justify-between h-32 w-8 text-xs text-gray-500 pr-2">
              <span>16</span>
              <span>12</span>
              <span>8</span>
              <span>4</span>
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

                {/* Calls line path */}
                <path
                  d={callsPathData}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />

                {/* Conversions line path */}
                <path
                  d={conversionsPathData}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />

                {/* Calls data points */}
                {callsPoints.map((point, i) => (
                  <circle
                    key={`calls-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-6 transition-all"
                    onMouseEnter={() => setHoveredPoint({ type: 'calls', index: i, data: point })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Conversions data points */}
                {conversionsPoints.map((point, i) => (
                  <circle
                    key={`conversions-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-6 transition-all"
                    onMouseEnter={() => setHoveredPoint({ type: 'conversions', index: i, data: point })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Hover tooltip */}
                {hoveredPoint !== null && (
                  <g>
                    <rect
                      x={hoveredPoint.data.x - 30}
                      y={hoveredPoint.data.y - 35}
                      width="60"
                      height="25"
                      fill="#1f2937"
                      rx="4"
                    />
                    <text
                      x={hoveredPoint.data.x}
                      y={hoveredPoint.data.y - 18}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      {hoveredPoint.data.value} {hoveredPoint.type}
                    </text>
                  </g>
                )}
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between mt-4 px-5">
                {callPerformanceData.map((item, index) => (
                  <div key={index} className="text-xs text-gray-600">
                    {item.day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chart Summary */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-gray-900">
                {callPerformanceData.reduce((sum, d) => sum + d.calls, 0)}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Total Calls</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-blue-600">
                {Math.max(...callPerformanceData.map(d => d.calls))}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Peak Day</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-green-600">
                {callPerformanceData.reduce((sum, d) => sum + d.conversions, 0)}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Total Conversions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCallsPage;