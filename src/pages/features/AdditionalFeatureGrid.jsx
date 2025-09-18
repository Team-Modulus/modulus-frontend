const additionalFeatures = [
  {
    category: "AI & Automation",
    features: [
      "Natural Language Processing for content analysis",
      "Predictive audience modeling",
      "Automated campaign scheduling",
      "Smart budget allocation",
      "Dynamic creative optimization",
    ],
    icon: "🤖",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    category: "Analytics & Reporting",
    features: [
      "Custom dashboard builder",
      "White-label reporting",
      "Data export and API access",
      "Advanced segmentation",
      "Cohort analysis",
    ],
    icon: "📊",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    category: "Integrations & APIs",
    features: [
      "50+ native integrations",
      "RESTful API access",
      "Webhook support",
      "Single sign-on (SSO)",
      "Custom field mapping",
    ],
    icon: "🔗",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    category: "Security & Compliance",
    features: [
      "SOC 2 Type II certified",
      "GDPR compliant",
      "256-bit SSL encryption",
      "Role-based access control",
      "Audit logs and monitoring",
    ],
    icon: "🛡️",
    gradient: "from-orange-400 to-red-400"
  },
]

export default function AdditionalFeaturesGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Beyond our core features, MarketingAI includes a comprehensive suite of tools and capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-2 animate-fade-in-up border border-gray-100 hover:border-blue-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <div className="relative">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-blue-700"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover/item:opacity-30 transition-opacity duration-300 animate-ping"></div>
                      </div>
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
