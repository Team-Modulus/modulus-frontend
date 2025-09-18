const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "AI Ad Creation", starter: "10K/month", pro: "50K/month", enterprise: "Unlimited" },
      { name: "Campaigns", starter: "Up to 5", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Team Members", starter: "2", pro: "10", enterprise: "Unlimited" },
      { name: "Integrations", starter: "5 Standard", pro: "50+ All", enterprise: "Custom" },
    ],
  },
  {
    category: "Analytics & Reporting",
    features: [
      { name: "Dashboard", starter: "Basic", pro: "Advanced", enterprise: "Enterprise Suite" },
      { name: "Custom Reports", starter: false, pro: true, enterprise: true },
      { name: "White-label Reports", starter: false, pro: true, enterprise: true },
      { name: "API Access", starter: false, pro: "Standard", enterprise: "Full" },
    ],
  },
  {
    category: "Support & Services",
    features: [
      { name: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated Manager" },
      { name: "Onboarding", starter: "Self-service", pro: "Guided", enterprise: "Custom" },
      { name: "SLA", starter: false, pro: false, enterprise: "99.9%" },
      { name: "Training", starter: "Documentation", pro: "Video + Docs", enterprise: "Custom Training" },
    ],
  },
]

const FeatureCell = ({ value, isHeader = false }) => {
  if (isHeader) {
    return <div className="font-medium text-gray-900">{value}</div>
  }

  if (typeof value === "boolean") {
    return (
      <div className="flex justify-center">
        {value ? (
          <div className="relative group">
            <svg className="w-6 h-6 text-green-500 transition-all duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-ping"></div>
          </div>
        ) : (
          <svg className="w-6 h-6 text-gray-300 hover:text-gray-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    )
  }

  return (
    <div className="text-center">
      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300">
        {value}
      </span>
    </div>
  )
}
export default function ComparisonTable() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
          <p className="text-xl text-gray-600">See exactly what's included in each plan</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-6 border-b border-gray-200">
            <div className="grid grid-cols-4 gap-4">
              <div></div>
              <div className="text-center font-bold text-gray-900">Starter</div>
              <div className="text-center font-bold text-blue-600">Pro</div>
              <div className="text-center font-bold text-purple-600">Enterprise</div>
            </div>
          </div>

          {comparisonFeatures.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                  {category.category}
                </h3>
              </div>
              {category.features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <FeatureCell value={feature.name} isHeader />
                  <FeatureCell value={feature.starter} />
                  <FeatureCell value={feature.pro} />
                  <FeatureCell value={feature.enterprise} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}