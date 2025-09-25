import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, TrendingDown, DollarSign, Users, Eye } from 'lucide-react';

const OrdersPage = () => {
  const [hoveredDay, setHoveredDay] = useState(null);

  const metrics = [
    {
      title: 'Total Orders',
      value: '1,247',
      change: '+12.3% vs last month',
      positive: true,
      icon: ShoppingCart
    },
    {
      title: 'Revenue',
      value: '$87,650',
      change: '+18.7% vs last month',
      positive: true,
      icon: DollarSign
    },
    {
      title: 'Average Order Value',
      value: '$68.30',
      change: '+5.2% vs last month',
      positive: true,
      icon: TrendingUp
    },
    {
      title: 'Conversion Rate',
      value: '3.8%',
      change: '+0.5% vs last month',
      positive: true,
      icon: Users
    }
  ];

  const weeklyOrders = [
    { day: 'Mon', orders: 45, revenue: 3150 },
    { day: 'Tue', orders: 52, revenue: 3640 },
    { day: 'Wed', orders: 48, revenue: 3360 },
    { day: 'Thu', orders: 62, revenue: 4340 },
    { day: 'Fri', orders: 58, revenue: 4060 },
    { day: 'Sat', orders: 68, revenue: 4760 },
    { day: 'Sun', orders: 43, revenue: 3010 }
  ];

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'Sarah Johnson',
      amount: 89.99,
      items: 2,
      status: 'Completed'
    },
    {
      id: '#ORD-002',
      customer: 'Mike Chen',
      amount: 156.50,
      items: 3,
      status: 'Processing'
    },
    {
      id: '#ORD-003',
      customer: 'Emily Davis',
      amount: 234.75,
      items: 5,
      status: 'Completed'
    },
    {
      id: '#ORD-004',
      customer: 'David Wilson',
      amount: 78.20,
      items: 1,
      status: 'Processing'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      Processing: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
      Completed: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
      Cancelled: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' }
    };
    
    const config = statusConfig[status] || statusConfig.Processing;
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.bg} ${config.text} ${config.border}`}>
        {status}
      </span>
    );
  };

  const maxOrders = Math.max(...weeklyOrders.map(d => d.orders));

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Orders</h1>
        <p className="text-gray-600">Track and manage customer orders</p>
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

      {/* Orders Overview Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Orders Overview</h2>
          <p className="text-sm text-gray-600">Daily orders and revenue trends</p>
        </div>

        {/* Vertical Bar Chart */}
        <div className="relative">
          <div className="flex">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-64 w-8 text-xs text-gray-500 pr-2">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart area */}
            <div className="flex-1 relative h-64">
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
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4">
                {weeklyOrders.map((item, index) => (
                  <div key={index} className="flex flex-col items-center" style={{ width: '12%' }}>
                    {/* Bar */}
                    <div className="w-full relative group mb-3">
                      <div
                        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 cursor-pointer relative w-full"
                        style={{
                          height: `${(item.orders / 80) * 256}px`
                        }}
                        onMouseEnter={() => setHoveredDay(index)}
                        onMouseLeave={() => setHoveredDay(null)}
                      >
                        {/* Hover tooltip */}
                        {hoveredDay === index && (
                          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded whitespace-nowrap z-20">
                            <div>{item.orders} orders</div>
                            <div>${item.revenue.toLocaleString()} revenue</div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-4">
                {weeklyOrders.map((item, index) => (
                  <div key={index} className="text-xs text-gray-600 text-center" style={{ width: '12%' }}>
                    {item.day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Recent Orders</h2>
          <p className="text-sm text-gray-600">Latest customer orders</p>
        </div>

        <div className="space-y-4">
          {recentOrders.map((order, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <ShoppingCart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{order.id}</div>
                  <div className="text-xs text-gray-500">{order.customer}</div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">${order.amount}</div>
                  <div className="text-xs text-gray-500">Amount</div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{order.items}</div>
                  <div className="text-xs text-gray-500">Items</div>
                </div>

                <div className="flex items-center space-x-3">
                  {getStatusBadge(order.status)}
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;