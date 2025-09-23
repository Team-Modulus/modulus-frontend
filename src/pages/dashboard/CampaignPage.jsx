import { Target, BarChart3, DollarSign, Zap, Plus, Facebook, Search, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import CampaignsDashboard from './CampaignData';

export default function CampaignManagement() {
      const [isAccountConnected, setIsAccountConnected] = useState(false); // replace with your actual logic
    
    
    
      if (isAccountConnected) {
        return <CampaignsDashboard />;
      }
  const features = [
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Monitor ROAS, CTR, and conversion rates in real-time',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Budget Management',
      description: 'Control spend and optimize budget allocation',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Multi-Platform',
      description: 'Manage campaigns across all advertising channels',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  const platforms = [
    {
      icon: Search,
      name: 'Google Ads',
      color: 'text-blue-600'
    },
    {
      icon: Facebook,
      name: 'Facebook Ads',
      color: 'text-blue-700'
    },
    {
      icon: Instagram,
      name: 'Instagram Ads',
      color: 'text-pink-600'
    },
    {
      icon: Youtube,
      name: 'YouTube Ads',
      color: 'text-red-600'
    },
    {
      icon: Twitter,
      name: 'Twitter Ads',
      color: 'text-sky-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn Ads',
      color: 'text-blue-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaigns</h1>
          <p className="text-gray-600">Connect your advertising platforms to start managing campaigns</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 mb-12 text-center border border-blue-100">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Campaign Management! 🎯
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect your advertising platforms to manage campaigns, track performance, and 
            optimize your marketing spend across multiple channels.
          </p>
          
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          onClick={()=>setIsAccountConnected(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Connect Advertising Platforms
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        {/* Supported Platforms Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Supported Advertising Platforms
            </h3>
            <p className="text-gray-600">
              Connect any of these platforms to manage your campaigns
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 rounded-lg border-2 border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="mb-3">
                  <platform.icon className={`w-8 h-8 ${platform.color} group-hover:scale-110 transition-transform duration-200`} />
                </div>
                <span className="text-gray-700 font-medium text-center">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}