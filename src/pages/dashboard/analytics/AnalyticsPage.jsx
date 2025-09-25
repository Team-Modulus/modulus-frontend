import { Users, BarChart3, TrendingUp, Heart, Plus } from 'lucide-react';
import CustomerAnalyticsDashboard from './AnalyticsData';
import { useState } from 'react';

export default function CustomerAnalyticsWelcome() {
      const [isAccountConnected, setIsAccountConnected] = useState(false); // replace with your actual logic
        
        
        
          if (isAccountConnected) {
            return <CustomerAnalyticsDashboard />;
          }
  const features = [
    {
      icon: BarChart3,
      title: 'Segmentation Analysis',
      description: 'Identify different customer groups and their behaviors',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Lifetime Value',
      description: 'Track customer value and predict future revenue',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Heart,
      title: 'Retention Analysis',
      description: 'Understand customer loyalty and repeat purchase patterns',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Analytics</h1>
          <p className="text-gray-600">Connect your platforms to unlock customer insights</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-12 mb-12 text-center border border-green-100">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Customer Analytics! 👥
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect your e-commerce platform to understand your customers better, analyze 
            behavior patterns, and identify your most valuable segments.
          </p>
          
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          onClick={()=>setIsAccountConnected(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Connect Your Store
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

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to understand your customers better?
            </h3>
            <p className="text-gray-600 mb-6">
              Connect your e-commerce platform to start gaining valuable customer insights today.
            </p>
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}