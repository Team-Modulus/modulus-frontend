import { Users, UserPlus, DollarSign, RefreshCw, Download, ArrowUp, ArrowDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function CustomerAnalyticsDashboard() {
  // Sample data for customer acquisition chart
  const acquisitionData = [
    { month: 'Jan', new: 120, returning: 180 },
    { month: 'Feb', new: 135, returning: 190 },
    { month: 'Mar', new: 140, returning: 170 },
    { month: 'Apr', new: 160, remaining: 210 },
    { month: 'May', new: 150, returning: 180 },
    { month: 'Jun', new: 175, returning: 225 }
  ];

  // Customer segments data
  const segmentData = [
    { name: 'New Customers', value: 35, color: '#3B82F6' },
    { name: 'Returning', value: 45, color: '#10B981' },
    { name: 'VIP', value: 20, color: '#F59E0B' }
  ];

  // Top customers data
  const topCustomers = [
    {
      name: 'Sarah Johnson',
      avatar: '🧑‍💼',
      orders: 24,
      value: '$2,450',
      status: 'VIP'
    },
    {
      name: 'Michael Chen',
      avatar: '👨‍💻',
      orders: 18,
      value: '$1,890',
      status: 'Regular'
    },
    {
      name: 'Emma Davis',
      avatar: '👩‍🎨',
      orders: 22,
      value: '$2,120',
      status: 'VIP'
    },
    {
      name: 'James Wilson',
      avatar: '👨‍🏫',
      orders: 15,
      value: '$1,560',
      status: 'Regular'
    }
  ];

  const metrics = [
    {
      title: 'Total Customers',
      value: '2,847',
      change: '+12.3%',
      changeType: 'positive',
      icon: Users,
      period: 'vs last month'
    },
    {
      title: 'New Customers',
      value: '175',
      change: '+8.1%',
      changeType: 'positive',
      icon: UserPlus,
      period: 'this month'
    },
    {
      title: 'Customer Lifetime Value',
      value: '$289',
      change: '+15.2%',
      changeType: 'positive',
      icon: DollarSign,
      period: 'vs last month'
    },
    {
      title: 'Retention Rate',
      value: '68.5%',
      change: '-2.1%',
      changeType: 'negative',
      icon: RefreshCw,
      period: 'vs last month'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Analytics</h1>
            <p className="text-gray-600">Understand your customers and analyze segments</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            <Download className="w-4 h-4 mr-2" />
            Export Customer Data
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <metric.icon className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <div className="flex items-center text-sm">
                  {metric.changeType === 'positive' ? (
                    <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="w-3 h-3 text-red-500 mr-1" />
                  )}
                  <span className={metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>{metric.change}</span>
                  <span className="text-gray-500 ml-1">{metric.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Customer Acquisition Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Customer Acquisition</h3>
              <p className="text-sm text-gray-600">New vs returning customers</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={acquisitionData}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Bar 
                    dataKey="new" 
                    stackId="a"
                    fill="#3B82F6" 
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar 
                    dataKey="returning" 
                    stackId="a"
                    fill="#10B981" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer Segments Pie Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Customer Segments</h3>
              <p className="text-sm text-gray-600">Customer distribution by type</p>
            </div>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={segmentData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {segmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Top Customers Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Top Customers</h3>
            <p className="text-sm text-gray-600">Your most valuable customers</p>
          </div>
          
          <div className="space-y-4">
            {topCustomers.map((customer, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 text-lg">
                    {customer.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{customer.name}</p>
                    <p className="text-sm text-gray-500">{customer.orders} orders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold text-gray-900">{customer.value}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    customer.status === 'VIP' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}