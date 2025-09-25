import { useState } from 'react';
import { BarChart3, Target, Facebook, Mail, Search, ShoppingBag, CreditCard, Check, X } from 'lucide-react';

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState({
    googleAds: false,
    facebookAds: false,
    mailchimp: false,
    googleAnalytics: false,
    shopify: false,
    stripe: false
  });

  const handleToggleIntegration = (key) => {
    setIntegrations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const integrationCategories = [
    {
      title: 'Marketing & Analytics',
      description: 'Advertising, campaigns, and customer analytics',
      icon: BarChart3,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      integrations: [
        {
          key: 'googleAds',
          name: 'Google Ads',
          description: 'Advertising performance and campaign data',
          icon: Target,
          iconColor: 'text-red-500'
        },
        {
          key: 'facebookAds',
          name: 'Facebook Ads',
          description: 'Social media advertising campaigns',
          icon: Facebook,
          iconColor: 'text-blue-600'
        },
        {
          key: 'mailchimp',
          name: 'Mailchimp',
          description: 'Email marketing and automation data',
          icon: Mail,
          iconColor: 'text-yellow-500'
        },
        {
          key: 'googleAnalytics',
          name: 'Google Analytics',
          description: 'Website traffic and user behavior',
          icon: Search,
          iconColor: 'text-orange-500'
        }
      ]
    },
    {
      title: 'Sales & E-commerce',
      description: 'Sales platforms and order management',
      icon: ShoppingBag,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      integrations: [
        {
          key: 'shopify',
          name: 'Shopify',
          description: 'E-commerce platform for sales and order data',
          icon: ShoppingBag,
          iconColor: 'text-green-600'
        }
      ]
    },
    {
      title: 'Finance & Payments',
      description: 'Payment processing and financial data',
      icon: CreditCard,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      integrations: [
        {
          key: 'stripe',
          name: 'Stripe',
          description: 'Payment processing and financial data',
          icon: CreditCard,
          iconColor: 'text-blue-500'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Integrations</h1>
          <p className="text-gray-600">Manage your data connections and integrations</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Category Header */}
              <div className={`${category.bgColor} px-6 py-4 rounded-t-lg border-b border-gray-200`}>
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-lg mr-4">
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Integration Items */}
              <div className="divide-y divide-gray-200">
                {category.integrations.map((integration, integrationIndex) => (
                  <div key={integrationIndex} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-50 rounded-lg mr-4">
                        <integration.icon className={`w-5 h-5 ${integration.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">{integration.name}</h4>
                        <p className="text-sm text-gray-600">{integration.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        integrations[integration.key] 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {integrations[integration.key] ? 'Connected' : 'Disconnected'}
                      </span>
                      
                      <button
                        onClick={() => handleToggleIntegration(integration.key)}
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          integrations[integration.key]
                            ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                            : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                        }`}
                      >
                        {integrations[integration.key] ? (
                          <>
                            <X className="w-4 h-4 mr-1" />
                            Disconnect
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Connect
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help with Integrations?</h3>
          <p className="text-gray-600 mb-4">
            Our integration guides will help you connect your platforms quickly and securely. 
            If you encounter any issues, our support team is here to assist you.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Documentation
            </button>
            <button className="px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}