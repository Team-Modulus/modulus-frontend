import React, { useState } from 'react';
import { Plus, Package, AlertTriangle, DollarSign, RotateCcw, TrendingUp, TrendingDown } from 'lucide-react';

const InventoryPage = () => {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  const metrics = [
    {
      title: 'Total Products',
      value: '2,847',
      change: '+45 this month',
      positive: true,
      icon: Package
    },
    {
      title: 'Low Stock Items',
      value: '23',
      change: '+5 vs last week',
      positive: false,
      icon: AlertTriangle,
      warning: true
    },
    {
      title: 'Inventory Value',
      value: '$125,400',
      change: '+8.2% vs last month',
      positive: true,
      icon: DollarSign
    },
    {
      title: 'Turnover Rate',
      value: '6.2x',
      change: '+0.5x per year',
      positive: true,
      icon: RotateCcw
    }
  ];

  const inventoryData = [
    { month: 'Jan', stock: 2400, sales: 1700 },
    { month: 'Feb', stock: 2100, sales: 1900 },
    { month: 'Mar', stock: 2800, sales: 1800 },
    { month: 'Apr', stock: 2500, sales: 2100 },
    { month: 'May', stock: 3000, sales: 2000 },
    { month: 'Jun', stock: 3200, sales: 2300 }
  ];

  const lowStockItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      sku: 'WH-001',
      current: 5,
      minimum: 20,
      status: 'Critical',
      icon: '🎧'
    },
    {
      id: 2,
      name: 'Smartphone Case',
      sku: 'SC-002',
      current: 12,
      minimum: 25,
      status: 'Low',
      icon: '📱'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      Critical: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' },
      Low: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' }
    };
    
    const config = statusConfig[status] || statusConfig.Low;
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded border ${config.bg} ${config.text} ${config.border}`}>
        {status}
      </span>
    );
  };

  const handleAddProduct = () => {
    console.log('Opening add product form...');
  };

  const maxValue = 3200;

  return (
    <div className="max-w-7xl mx-auto  bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory</h1>
          <p className="text-gray-600">Manage your product inventory and stock levels</p>
        </div>
        <button
          onClick={handleAddProduct}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
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
                <Icon className={`w-4 h-4 ${metric.warning ? 'text-yellow-500' : 'text-gray-400'}`} />
              </div>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
                <div className={`flex items-center text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.positive ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inventory Overview Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Inventory Overview</h2>
          <p className="text-sm text-gray-600">Stock levels and sales trends</p>
          
          {/* Legend */}
          <div className="flex items-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600">Stock Levels</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-600">Sales Volume</span>
            </div>
          </div>
        </div>

        {/* Vertical Bar Chart */}
        <div className="relative">
          <div className="flex">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-80 w-10 text-xs text-gray-500 pr-2">
              <span>3200</span>
              <span>2400</span>
              <span>1600</span>
              <span>800</span>
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
                {inventoryData.map((item, index) => (
                  <div key={index} className="flex items-end space-x-1" style={{ width: '14%' }}>
                    {/* Stock bar */}
                    <div className="w-1/2 relative group">
                      <div
                        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 cursor-pointer relative w-full"
                        style={{
                          height: `${(item.stock / maxValue) * 320}px`
                        }}
                        onMouseEnter={() => setHoveredMonth({ type: 'stock', month: item.month, value: item.stock })}
                        onMouseLeave={() => setHoveredMonth(null)}
                      />
                    </div>

                    {/* Sales bar */}
                    <div className="w-1/2 relative group">
                      <div
                        className="bg-green-500 hover:bg-green-600 transition-colors duration-200 cursor-pointer relative w-full"
                        style={{
                          height: `${(item.sales / maxValue) * 320}px`
                        }}
                        onMouseEnter={() => setHoveredMonth({ type: 'sales', month: item.month, value: item.sales })}
                        onMouseLeave={() => setHoveredMonth(null)}
                      />
                    </div>

                    {/* Hover tooltip */}
                    {hoveredMonth && hoveredMonth.month === item.month && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded whitespace-nowrap z-20">
                        {hoveredMonth.value.toLocaleString()} {hoveredMonth.type}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-6">
                {inventoryData.map((item, index) => (
                  <div key={index} className="text-xs text-gray-600 text-center" style={{ width: '14%' }}>
                    {item.month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Low Stock Alert */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Low Stock Alert</h2>
          <p className="text-sm text-gray-600">Items that need restocking</p>
        </div>

        <div className="space-y-4">
          {lowStockItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg text-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500">SKU: {item.sku}</div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{item.current}</div>
                  <div className="text-xs text-gray-500">Current</div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{item.minimum}</div>
                  <div className="text-xs text-gray-500">Minimum</div>
                </div>

                <div className="flex items-center">
                  {getStatusBadge(item.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;