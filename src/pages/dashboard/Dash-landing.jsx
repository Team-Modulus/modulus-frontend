import { BarChart3, Users, ShoppingCart, Package, DollarSign, ShoppingBag, Target, Share2, CreditCard } from 'lucide-react';

export default function Dash() {
  const businessCategories = [
    {
      icon: BarChart3,
      title: 'Marketing',
      description: 'Campaign analytics & performance',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Customers',
      description: 'Customer insights & behavior',
      color: 'text-green-600'
    },
    {
      icon: ShoppingCart,
      title: 'Sales',
      description: 'Orders, leads & sales calls',
      color: 'text-purple-600'
    },
    {
      icon: Package,
      title: 'Logistics',
      description: 'Inventory & vendor management',
      color: 'text-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Finances',
      description: 'Revenue, profit & forecasting',
      color: 'text-emerald-600'
    }
  ];

  const connectors = [
    {
      icon: ShoppingBag,
      name: 'Shopify',
      description: 'E-commerce platform data',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Target,
      name: 'Google Ads',
      description: 'Advertising performance',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Share2,
      name: 'Facebook Ads',
      description: 'Social media campaigns',
      color: 'bg-indigo-100 text-indigo-700'
    },
    {
      icon: CreditCard,
      name: 'Stripe',
      description: 'Payment processing',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Modulus.ai! 🎉
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect your first integration to start seeing powerful insights about your business.
          </p>
        </div>

        {/* Business Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {businessCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-lg bg-gray-50 mb-4 ${category.color}`}>
                  <category.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Connectors Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Popular Connectors to Get Started
            </h2>
            <p className="text-gray-600 text-lg">
              Connect these popular platforms to unlock powerful business insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectors.map((connector, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-xl mb-4 ${connector.color} group-hover:scale-110 transition-transform duration-200`}>
                    <connector.icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {connector.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {connector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Start Your First Integration
          </button>
        </div>
      </div>
    </div>
  );
}