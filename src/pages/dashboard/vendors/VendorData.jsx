import React, { useState } from 'react';
import { Plus, Search, Filter, Building2, Eye, ExternalLink } from 'lucide-react';

const VendorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const vendors = [
    {
      id: 1,
      name: 'TechSupply Co.',
      products: 45,
      rating: 4.8,
      onTime: 98,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Global Electronics',
      products: 23,
      rating: 4.2,
      onTime: 94,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Quick Ship Inc.',
      products: 67,
      rating: 4.6,
      onTime: 96,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Premium Parts',
      products: 12,
      rating: 3.9,
      onTime: 88,
      status: 'Under Review'
    },
    {
      id: 5,
      name: 'FastTrack Suppliers',
      products: 34,
      rating: 4.5,
      onTime: 97,
      status: 'Active'
    }
  ];

  const performanceData = [
    { month: 1, vendor1: 95, vendor2: 88, vendor3: 92 },
    { month: 2, vendor1: 97, vendor2: 90, vendor3: 94 },
    { month: 3, vendor1: 96, vendor2: 92, vendor3: 96 },
    { month: 4, vendor1: 98, vendor2: 89, vendor3: 93 },
    { month: 5, vendor1: 99, vendor2: 94, vendor3: 97 },
    { month: 6, vendor1: 98, vendor2: 96, vendor3: 98 }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      Active: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
      'Under Review': { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
      Inactive: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' }
    };
    
    const config = statusConfig[status] || statusConfig.Active;
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded border ${config.bg} ${config.text} ${config.border}`}>
        {status}
      </span>
    );
  };

  const getOnTimeColor = (percentage) => {
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 90) return 'text-blue-600';
    if (percentage >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleNewVendor = () => {
    console.log('Opening new vendor form...');
  };

  const handleViewVendor = (vendorName) => {
    console.log(`Viewing details for ${vendorName}...`);
  };

  const handleFilter = () => {
    console.log('Opening filter options...');
  };

  // Chart calculations
  const chartWidth = 600;
  const chartHeight = 120;
  const padding = 20;
  const maxValue = 100;
  const minValue = 50;

  const vendor1Points = performanceData.map((d, i) => {
    const x = padding + (i / (performanceData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.vendor1 - minValue) / (maxValue - minValue)) * (chartHeight - 2 * padding);
    return { x, y, value: d.vendor1, month: d.month };
  });

  const vendor2Points = performanceData.map((d, i) => {
    const x = padding + (i / (performanceData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.vendor2 - minValue) / (maxValue - minValue)) * (chartHeight - 2 * padding);
    return { x, y, value: d.vendor2, month: d.month };
  });

  const vendor3Points = performanceData.map((d, i) => {
    const x = padding + (i / (performanceData.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((d.vendor3 - minValue) / (maxValue - minValue)) * (chartHeight - 2 * padding);
    return { x, y, value: d.vendor3, month: d.month };
  });

  const vendor1PathData = vendor1Points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  const vendor2PathData = vendor2Points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  const vendor3PathData = vendor3Points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendors</h1>
          <p className="text-gray-600">Manage your supplier relationships</p>
        </div>
        <button
          onClick={handleNewVendor}
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Vendor</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search vendors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleFilter}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Filter
        </button>
      </div>

      {/* Vendor Performance */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Vendor Performance</h2>
          <p className="text-sm text-gray-600">Manage your supplier relationships</p>
        </div>

        <div className="space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                  <div className="text-xs text-gray-500">{vendor.products} products</div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{vendor.rating}/5</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                
                <div className="text-right">
                  <div className={`text-sm font-medium ${getOnTimeColor(vendor.onTime)}`}>
                    {vendor.onTime}%
                  </div>
                  <div className="text-xs text-gray-500">On-time</div>
                </div>

                <div className="flex items-center space-x-3">
                  {getStatusBadge(vendor.status)}
                  <button 
                    onClick={() => handleViewVendor(vendor.name)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleViewVendor(vendor.name)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Performance Trends */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Vendor Performance Trends</h2>
          <p className="text-sm text-gray-600">Delivery performance over time</p>
        </div>

        <div className="relative">
          <div className="flex">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-32 w-10 text-xs text-gray-500 pr-2">
              <span>100</span>
              <span>75</span>
              <span>50</span>
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
                {[0, 50, 100].map((percentage) => (
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

                {/* Vendor 1 line (Blue) */}
                <path
                  d={vendor1PathData}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />

                {/* Vendor 2 line (Green) */}
                <path
                  d={vendor2PathData}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />

                {/* Vendor 3 line (Purple) */}
                <path
                  d={vendor3PathData}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />

                {/* Data points for Vendor 1 */}
                {vendor1Points.map((point, i) => (
                  <circle
                    key={`v1-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-6 transition-all"
                    onMouseEnter={() => setHoveredPoint({ vendor: 'TechSupply', value: point.value, month: point.month })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Data points for Vendor 2 */}
                {vendor2Points.map((point, i) => (
                  <circle
                    key={`v2-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-6 transition-all"
                    onMouseEnter={() => setHoveredPoint({ vendor: 'Global Electronics', value: point.value, month: point.month })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Data points for Vendor 3 */}
                {vendor3Points.map((point, i) => (
                  <circle
                    key={`v3-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#8b5cf6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-6 transition-all"
                    onMouseEnter={() => setHoveredPoint({ vendor: 'Quick Ship', value: point.value, month: point.month })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Hover tooltip */}
                {hoveredPoint !== null && (
                  <g>
                    <rect
                      x={vendor1Points[hoveredPoint.month - 1]?.x - 40}
                      y={vendor1Points[hoveredPoint.month - 1]?.y - 45}
                      width="80"
                      height="35"
                      fill="#1f2937"
                      rx="4"
                    />
                    <text
                      x={vendor1Points[hoveredPoint.month - 1]?.x}
                      y={vendor1Points[hoveredPoint.month - 1]?.y - 30}
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                    >
                      {hoveredPoint.vendor}
                    </text>
                    <text
                      x={vendor1Points[hoveredPoint.month - 1]?.x}
                      y={vendor1Points[hoveredPoint.month - 1]?.y - 18}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                    >
                      {hoveredPoint.value}% on-time
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;