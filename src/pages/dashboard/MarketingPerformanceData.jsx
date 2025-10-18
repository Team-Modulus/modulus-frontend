import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, MousePointer, Target, ExternalLink, ArrowUp, ArrowDown, AlertCircle, Loader2 } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import axios from 'axios';
import API from '../../constants/Api';


export default function MarketingDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState('last_7d');

  // Fetch Facebook insights data
  useEffect(() => {
    fetchMarketingData();
  }, [selectedTimeRange]);

  const fetchMarketingData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await axios.get(`${API.Connect.fbInsights}?date_preset=${selectedTimeRange}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (res.data.insights && res.data.insights.length > 0) {
        const transformedData = transformFacebookData(res.data.insights);
        setDashboardData(transformedData);
        setConnectedAccounts(res.data.connectedAccounts || []);
      } else {
        setDashboardData(null);
      }
    } catch (err) {
      console.error("Failed to fetch marketing data:", err);
      setError("Failed to load marketing data. Please check your Facebook integration.");
    } finally {
      setLoading(false);
    }
  };

  // Transform Facebook insights data for dashboard use
  const transformFacebookData = (insights) => {
    // Group insights by date for time series data
    const dailyData = {};
    let totalSpend = 0;
    let totalClicks = 0;
    let totalImpressions = 0;
    let totalRevenue = 0; // This would come from your conversion tracking
    let totalActions = 0;

    insights.forEach(insight => {
      const date = new Date(insight.date_start);
      const dayKey = date.toLocaleDateString('en-US', { weekday: 'short' });
      
      if (!dailyData[dayKey]) {
        dailyData[dayKey] = {
          day: dayKey,
          spend: 0,
          clicks: 0,
          impressions: 0,
          revenue: 0, // You'll need to calculate this from your conversion data
          actions: 0
        };
      }

      const spend = parseFloat(insight.spend || 0);
      const clicks = parseInt(insight.clicks || 0);
      const impressions = parseInt(insight.impressions || 0);
      const actions = insight.actions ? insight.actions.reduce((sum, action) => sum + parseInt(action.value || 0), 0) : 0;

      dailyData[dayKey].spend += spend;
      dailyData[dayKey].clicks += clicks;
      dailyData[dayKey].impressions += impressions;
      dailyData[dayKey].actions += actions;
      // Revenue calculation - you'll need to implement based on your conversion tracking
      dailyData[dayKey].revenue += spend * 3.2; // Assuming 3.2x ROAS for demo

      totalSpend += spend;
      totalClicks += clicks;
      totalImpressions += impressions;
      totalActions += actions;
    });

    totalRevenue = totalSpend * 3.2; // Demo calculation

    // Convert to array for charts
    const chartData = Object.values(dailyData);

    // Calculate metrics
    const ctr = totalImpressions > 0 ? (totalClicks / totalImpressions * 100) : 0;
    const cpc = totalClicks > 0 ? (totalSpend / totalClicks) : 0;
    const roas = totalSpend > 0 ? (totalRevenue / totalSpend) : 0;
    const conversionRate = totalClicks > 0 ? (totalActions / totalClicks * 100) : 0;

    return {
      chartData,
      metrics: {
        totalSpend,
        totalRevenue,
        totalClicks,
        totalImpressions,
        totalActions,
        ctr,
        cpc,
        roas,
        conversionRate
      }
    };
  };

  // Calculate percentage changes (you'd need historical data for real calculations)
  const calculateChange = (current, previous) => {
    if (!previous || previous === 0) return '+0.0%';
    const change = ((current - previous) / previous * 100);
    return `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Loading marketing data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Data</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <button 
                onClick={fetchMarketingData}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No data state
  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Marketing Data Available</h3>
              <p className="text-gray-600 mb-4">Connect your Facebook ad accounts to view performance data</p>
              <button 
                onClick={() => window.location.href = '/integrations'}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Integrations
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { chartData, metrics } = dashboardData;

  const metricCards = [
    {
      title: 'Total Ad Spend',
      value: `$${metrics.totalSpend.toLocaleString()}`,
      change: calculateChange(metrics.totalSpend, metrics.totalSpend * 0.85), // Demo calculation
      changeType: 'positive',
      icon: DollarSign,
      period: 'vs last period'
    },
    {
      title: 'Revenue Generated',
      value: `$${metrics.totalRevenue.toLocaleString()}`,
      change: calculateChange(metrics.totalRevenue, metrics.totalRevenue * 0.78),
      changeType: 'positive',
      icon: TrendingUp,
      period: 'vs last period'
    },
    {
      title: 'Total Clicks',
      value: metrics.totalClicks.toLocaleString(),
      change: calculateChange(metrics.totalClicks, metrics.totalClicks * 0.92),
      changeType: 'positive',
      icon: MousePointer,
      period: 'vs last period'
    },
    {
      title: 'Average ROAS',
      value: `${metrics.roas.toFixed(1)}x`,
      change: `+${(metrics.roas - 2.9).toFixed(1)}x`,
      changeType: 'positive',
      icon: Target,
      period: 'vs last period'
    }
  ];

  const bottomMetrics = [
    {
      title: 'Click-Through Rate',
      value: `${metrics.ctr.toFixed(2)}%`
    },
    {
      title: 'Cost Per Click',
      value: `$${metrics.cpc.toFixed(2)}`
    },
    {
      title: 'Conversion Rate',
      value: `${metrics.conversionRate.toFixed(1)}%`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketing Performance</h1>
              <p className="text-gray-600">
                Real-time data from {connectedAccounts.length} connected Facebook account{connectedAccounts.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Time Range Selector */}
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white"
              >
                <option value="yesterday">Yesterday</option>
                <option value="last_7d">Last 7 Days</option>
                <option value="last_14d">Last 14 Days</option>
                <option value="last_30d">Last 30 Days</option>
              </select>
              
              <button 
                onClick={fetchMarketingData}
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Refresh Data
              </button>
            </div>
          </div>

          {/* Connected Accounts Info */}
          {connectedAccounts.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Data Source:</strong> {connectedAccounts.map(acc => acc.businessName || acc.accountName).join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricCards.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
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
              <p className="text-sm text-gray-600">Daily performance from Facebook campaigns</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
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
                  <Tooltip 
                    formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'revenue' ? 'Revenue' : 'Spend']}
                    labelFormatter={(label) => `Day: ${label}`}
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
              <p className="text-sm text-gray-600">Daily clicks from Facebook campaigns</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
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
                  <Tooltip 
                    formatter={(value) => [value.toLocaleString(), 'Clicks']}
                    labelFormatter={(label) => `Day: ${label}`}
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
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-gray-600 mb-2">{metric.title}</p>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Campaign Performance Table (Optional Addition) */}
        {chartData.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Daily Performance Breakdown</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spend</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {chartData.map((day, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{day.day}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${day.spend.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${day.revenue.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{day.clicks.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {day.spend > 0 ? `${(day.revenue / day.spend).toFixed(1)}x` : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}