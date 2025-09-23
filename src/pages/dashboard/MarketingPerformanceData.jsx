import { DollarSign, TrendingUp, MousePointer, Target, ExternalLink, ArrowUp, ArrowDown } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function MarketingDashboard() {
  // Sample data for charts
  const revenueData = [
    { day: 'Mon', revenue: 3500, spend: 1200 },
    { day: 'Tue', revenue: 3800, spend: 1300 },
    { day: 'Wed', revenue: 3200, spend: 1250 },
    { day: 'Thu', revenue: 4200, spend: 1400 },
    { day: 'Fri', revenue: 5200, spend: 1600 },
    { day: 'Sat', revenue: 5800, spend: 1550 },
    { day: 'Sun', revenue: 4800, spend: 1450 }
  ];

  const clickData = [
    { day: 'Mon', clicks: 450 },
    { day: 'Tue', clicks: 520 },
    { day: 'Wed', clicks: 480 },
    { day: 'Thu', clicks: 580 },
    { day: 'Fri', clicks: 640 },
    { day: 'Sat', clicks: 720 },
    { day: 'Sun', clicks: 650 }
  ];

  const metrics = [
    {
      title: 'Total Ad Spend',
      value: '$8,950',
      change: '+15.3%',
      changeType: 'positive',
      icon: DollarSign,
      period: 'vs last week'
    },
    {
      title: 'Revenue Generated',
      value: '$26,850',
      change: '+22.1%',
      changeType: 'positive',
      icon: TrendingUp,
      period: 'vs last week'
    },
    {
      title: 'Total Clicks',
      value: '4,250',
      change: '+8.7%',
      changeType: 'positive',
      icon: MousePointer,
      period: 'vs last week'
    },
    {
      title: 'Average ROAS',
      value: '3.2x',
      change: '+0.3x',
      changeType: 'positive',
      icon: Target,
      period: 'vs last week'
    }
  ];

  const bottomMetrics = [
    {
      title: 'Click-Through Rate',
      value: '2.8%'
    },
    {
      title: 'Cost Per Click',
      value: '$2.15'
    },
    {
      title: 'Conversion Rate',
      value: '4.2%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketing Performance</h1>
            <p className="text-gray-600">Track your advertising spend and ROI</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            <ExternalLink className="w-4 h-4 mr-2" />
            Create Campaign
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
                  <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-green-600 font-medium">{metric.change}</span>
                  <span className="text-gray-500 ml-1">{metric.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue vs Spend Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Revenue vs Spend</h3>
              <p className="text-sm text-gray-600">Daily performance over the last week</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stackId="1"
                    stroke="#10B981" 
                    fill="#10B981" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="spend" 
                    stackId="1"
                    stroke="#6B7280" 
                    fill="#6B7280" 
                    fillOpacity={0.4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Click Performance Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Click Performance</h3>
              <p className="text-sm text-gray-600">Clicks and impressions over time</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={clickData}>
                  <XAxis 
                    dataKey="day" 
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
                    dataKey="clicks" 
                    fill="#3B82F6" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-2">{metric.title}</p>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}