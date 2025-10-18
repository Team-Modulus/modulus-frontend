import { useState, useEffect } from 'react';
import { BarChart3, DollarSign, Eye, Zap, Plus } from 'lucide-react';
import MarketingDashboard from './MarketingPerformanceData';
import { useIntegrationStatus } from '../../hooks/useIntegrationStatus';

export default function MarketingPerformance() {
  const { connected, loading } = useIntegrationStatus();
  const [isAccountConnected, setIsAccountConnected] = useState(false);

  // ✅ Update state safely after render
  useEffect(() => {
    if (connected) {
      setIsAccountConnected(true);
    }
  }, [connected]);

  if (loading) return <div>Checking connections...</div>;

  if (isAccountConnected) {
    return <MarketingDashboard />;
  }

  const features = [
    {
      icon: DollarSign,
      title: 'ROI Tracking',
      description: 'Monitor return on ad spend across all campaigns',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Eye,
      title: 'Performance Insights',
      description: 'Get detailed analytics on clicks, impressions, and conversions',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Zap,
      title: 'Real-time Data',
      description: 'Access live performance metrics and automated reporting',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketing Performance</h1>
        <p className="text-gray-600">Connect your advertising platforms to track performance</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 mb-12 text-center border border-purple-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-4">
            <BarChart3 className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Marketing Performance! 📊
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect your advertising platforms to track ROI, monitor campaign performance, 
            and optimize your marketing spend across all channels.
          </p>
          <button
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            onClick={() => setIsAccountConnected(true)}
          >
            <Plus className="w-5 h-5 mr-2" />
            Connect Advertising Platforms
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bgColor} rounded-xl mb-6`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
