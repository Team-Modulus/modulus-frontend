import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const ForecastingPage = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Historical data (Jan-Jun)
  const historicalData = [
    { month: 'Jan', value: 45000, isHistorical: true },
    { month: 'Feb', value: 52000, isHistorical: true },
    { month: 'Mar', value: 47000, isHistorical: true, anomaly: true },
    { month: 'Apr', value: 61000, isHistorical: true },
    { month: 'May', value: 55000, isHistorical: true },
    { month: 'Jun', value: 67000, isHistorical: true }
  ];

  // Forecast data (Jul-Dec)
  const forecastData = [
    { month: 'Jul', value: 70000, isHistorical: false },
    { month: 'Aug', value: 73000, isHistorical: false },
    { month: 'Sep', value: 76000, isHistorical: false },
    { month: 'Oct', value: 79000, isHistorical: false },
    { month: 'Nov', value: 82000, isHistorical: false },
    { month: 'Dec', value: 85000, isHistorical: false }
  ];

  const allData = [...historicalData, ...forecastData];

  const summaryCards = [
    {
      title: 'Q3 Forecast',
      value: '$217,000',
      subtitle: 'Jul-Sep projection',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      valueColor: 'text-blue-600'
    },
    {
      title: 'Annual Projection',
      value: '$912,000',
      subtitle: 'Full year estimate',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900',
      valueColor: 'text-green-600'
    },
    {
      title: 'Confidence Level',
      value: '87%',
      subtitle: 'forecast accuracy',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900',
      valueColor: 'text-purple-600'
    }
  ];

  const assumptions = [
    {
      title: 'Revenue Growth',
      description: 'Monthly growth rate: 8-12%',
      details: 'Based on seasonal trends and marketing spend'
    },
    {
      title: 'Market Conditions',
      description: 'Industry growth: 15% annually',
      details: 'Competitive landscape stable'
    },
    {
      title: 'Customer Acquisition',
      description: 'New customers: 150-200/month',
      details: 'Customer LTV: $285'
    },
    {
      title: 'Operational Efficiency',
      description: 'Cost optimization: 2-3% reduction',
      details: 'Automation improvements planned'
    }
  ];

  // Chart calculations
  const chartWidth = 700;
  const chartHeight = 200;
  const padding = 40;
  const maxValue = 100000;
  const minValue = 0;

  const points = allData.map((d, i) => {
    const x = padding + (i / (allData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.value - minValue) / (maxValue - minValue)) * (chartHeight - 2 * padding);
    return { x, y, value: d.value, month: d.month, isHistorical: d.isHistorical, anomaly: d.anomaly };
  });

  // Split points for different line styles
  const historicalPoints = points.slice(0, 6);
  const forecastPoints = points.slice(5); // Include June as starting point for forecast line

  const historicalPath = historicalPoints.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  const forecastPath = forecastPoints.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Forecasting</h1>
        <p className="text-gray-600">Financial projections and business planning</p>
      </div>

      {/* Revenue Forecast Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Revenue Forecast</h2>
          <p className="text-sm text-gray-600">6-month revenue projection</p>
        </div>

        <div className="relative">
          <div className="flex">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-48 w-12 text-xs text-gray-500 pr-2">
              <span>100000</span>
              <span>75000</span>
              <span>50000</span>
              <span>25000</span>
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

                {/* Historical line (solid blue) */}
                <path
                  d={historicalPath}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  className="drop-shadow-sm"
                />

                {/* Forecast line (dotted orange) */}
                <path
                  d={forecastPath}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  className="drop-shadow-sm"
                />

                {/* Historical data points */}
                {historicalPoints.map((point, i) => (
                  <circle
                    key={`hist-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className="cursor-pointer hover:r-7 transition-all"
                    onMouseEnter={() => setHoveredPoint({ ...point, index: i })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Forecast data points */}
                {forecastPoints.slice(1).map((point, i) => ( // Skip first point to avoid duplicate
                  <circle
                    key={`forecast-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#f59e0b"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className="cursor-pointer hover:r-7 transition-all"
                    onMouseEnter={() => setHoveredPoint({ ...point, index: i + 6 })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Anomaly point (March) */}
                <circle
                  cx={points[2].x}
                  cy={points[2].y + 30}
                  r="4"
                  fill="#ef4444"
                  className="cursor-pointer"
                />

                {/* Hover tooltip */}
                {hoveredPoint !== null && (
                  <g>
                    <rect
                      x={hoveredPoint.x - 35}
                      y={hoveredPoint.y - 45}
                      width="70"
                      height="30"
                      fill="#1f2937"
                      rx="4"
                    />
                    <text
                      x={hoveredPoint.x}
                      y={hoveredPoint.y - 32}
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                    >
                      {hoveredPoint.month}
                    </text>
                    <text
                      x={hoveredPoint.x}
                      y={hoveredPoint.y - 20}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="600"
                    >
                      ${(hoveredPoint.value / 1000).toFixed(0)}K
                    </text>
                  </g>
                )}
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between mt-4 px-10">
                {allData.map((item, index) => (
                  <div key={index} className="text-xs text-gray-600">
                    {item.month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      {/* Key Financial Assumptions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Key Financial Assumptions</h2>
          <p className="text-sm text-gray-600">Factors driving the forecast</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assumptions.map((assumption, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{assumption.title}</h3>
              <p className="text-sm text-gray-700 mb-1">{assumption.description}</p>
              <p className="text-xs text-gray-500">{assumption.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastingPage;