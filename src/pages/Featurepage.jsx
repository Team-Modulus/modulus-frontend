"use client"

import { useContext, useState } from "react"
import { mainContext } from "../context/AuthContext"

const FeaturesPage = () => {
  const { user } = useContext(mainContext)
 const login = user

  const handleStartTrial = async () => {
    await login("demo@example.com", "password")
  }

  const mainFeatures = [
    {
      id: "ai-ad-creation",
      icon: "🤖",
      title: "AI Ad Creation",
      subtitle: "Generate high-converting ads in seconds",
      description:
        "Our advanced AI analyzes your brand, audience, and industry trends to create compelling ad copy and visuals that drive results.",
      benefits: [
        "Generate unlimited ad variations",
        "Multi-platform optimization (Facebook, Google, LinkedIn)",
        "Brand voice consistency across all content",
        "A/B testing recommendations",
        "Real-time performance predictions",
      ],
      image: "/placeholder.svg?height=400&width=600&text=AI+Ad+Creation+Dashboard",
    },
    {
      id: "smart-analytics",
      icon: "📊",
      title: "Smart Analytics",
      subtitle: "AI-powered insights that drive decisions",
      description:
        "Get deeper insights into your marketing performance with predictive analytics and automated reporting.",
      benefits: [
        "Predictive performance modeling",
        "Automated anomaly detection",
        "Custom dashboard creation",
        "Cross-channel attribution",
        "ROI forecasting and optimization",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Smart+Analytics+Dashboard",
    },
    {
      id: "lead-management",
      icon: "🎯",
      title: "Lead Management",
      subtitle: "Intelligent lead scoring and nurturing",
      description:
        "Automatically score, segment, and nurture leads with AI-powered workflows that increase conversion rates.",
      benefits: [
        "AI-powered lead scoring",
        "Automated lead nurturing sequences",
        "Behavioral trigger campaigns",
        "CRM integration and sync",
        "Lead quality predictions",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Lead+Management+System",
    },
    {
      id: "campaign-optimization",
      icon: "⚡",
      title: "Campaign Optimization",
      subtitle: "Real-time performance enhancement",
      description:
        "Campaigns that optimize themselves in real-time, adjusting bids, targeting, and creative elements for maximum ROI.",
      benefits: [
        "Real-time bid optimization",
        "Audience expansion recommendations",
        "Creative rotation and testing",
        "Budget allocation optimization",
        "Performance alerts and insights",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Campaign+Optimization+Tools",
    },
    {
      id: "performance-tracking",
      icon: "📈",
      title: "Performance Tracking",
      subtitle: "Comprehensive campaign monitoring",
      description:
        "Track every metric that matters with advanced attribution modeling and cross-platform performance analysis.",
      benefits: [
        "Multi-touch attribution modeling",
        "Cross-platform performance tracking",
        "Custom KPI dashboards",
        "Automated reporting schedules",
        "Competitive benchmarking",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Performance+Tracking+Analytics",
    },
    {
      id: "crm-integration",
      icon: "🔗",
      title: "CRM Integration",
      subtitle: "Seamless data synchronization",
      description:
        "Connect with your existing tools and platforms for a unified marketing ecosystem that works together.",
      benefits: [
        "Native CRM integrations (Salesforce, HubSpot, Pipedrive)",
        "Real-time data synchronization",
        "Custom API connections",
        "Webhook automation",
        "Data mapping and transformation",
      ],
      image: "/placeholder.svg?height=400&width=600&text=CRM+Integration+Hub",
    },
  ]

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
    },
  ]

  return (
    <div className="min-h-screen bg-white">
  

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="gradient-text">AI Features</span>
            <br />
            Built for Modern Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Discover how our comprehensive suite of AI-powered tools can transform your marketing strategy and drive
            unprecedented growth.
          </p>
          <button onClick={handleStartTrial} className="btn-primary text-lg px-8 py-4">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{feature.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                      <p className="text-lg text-blue-600 font-medium">{feature.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  <div className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    {expandedFeature === feature.id ? "Show Less" : "Learn More"}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${expandedFeature === feature.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-auto rounded-xl shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      AI Powered
                    </div>
                  </div>
                </div>

                {expandedFeature === feature.id && (
                  <div className="lg:col-span-2 mt-8 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How {feature.title} Works</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-blue-600 font-bold">1</span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Data Analysis</h4>
                        <p className="text-sm text-gray-600">AI analyzes your historical data and market trends</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-purple-600 font-bold">2</span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Smart Optimization</h4>
                        <p className="text-sm text-gray-600">Algorithms optimize for your specific goals</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-green-600 font-bold">3</span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">Continuous Learning</h4>
                        <p className="text-sm text-gray-600">System learns and improves performance over time</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core features, MarketingAI includes a comprehensive suite of tools and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Start your free trial today and see how AI can transform your marketing results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default FeaturesPage
