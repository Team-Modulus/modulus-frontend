const features = [
  {
    icon: "🤖",
    title: "AI-Powered Ad Creation",
    description: "Generate high-converting ads in seconds with our advanced AI that understands your brand and audience.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description: "Get actionable insights with AI-driven analytics that predict performance and optimize campaigns automatically.",
  },
  {
    icon: "🎯",
    title: "Intelligent Targeting",
    description: "Reach the right audience with precision targeting powered by machine learning algorithms.",
  },
  {
    icon: "⚡",
    title: "Real-time Optimization",
    description: "Campaigns self-optimize in real-time, maximizing ROI while you focus on strategy.",
  },
]

export default function ValueProposition() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">MarketingAI</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with proven marketing strategies to deliver
            exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
