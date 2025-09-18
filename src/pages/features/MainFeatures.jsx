import { useState } from "react"

const mainFeatures = [
  {
    id: "ai-ad-creation",
    icon: "🤖",
    title: "AI Ad Creation",
    subtitle: "Generate high-converting ads in seconds",
    description: "Our advanced AI analyzes your brand, audience, and industry trends to create compelling ad copy and visuals that drive results.",
    benefits: [
      "Generate unlimited ad variations",
      "Multi-platform optimization (Facebook, Google, LinkedIn)",
      "Brand voice consistency across all content",
      "A/B testing recommendations",
      "Real-time performance predictions",
    ],
    detailedFeatures: [
      {
        title: "Smart Creative Generation",
        description: "AI creates multiple ad variations optimized for different audiences and platforms",
        techSpecs: ["Natural Language Processing", "Computer Vision", "Brand Analysis Engine"]
      },
      {
        title: "Performance Prediction",
        description: "Predict ad performance before launch using historical data and market trends",
        techSpecs: ["Machine Learning Models", "Predictive Analytics", "Market Intelligence"]
      },
      {
        title: "Dynamic Optimization",
        description: "Automatically adjust creative elements based on real-time performance data",
        techSpecs: ["Real-time Processing", "A/B Testing Framework", "Performance Monitoring"]
      }
    ],
    image: "/placeholder.svg?height=400&width=600&text=AI+Ad+Creation+Dashboard",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    id: "smart-analytics",
    icon: "📊",
    title: "Smart Analytics",
    subtitle: "AI-powered insights that drive decisions",
    description: "Get deeper insights into your marketing performance with predictive analytics and automated reporting.",
    benefits: [
      "Predictive performance modeling",
      "Automated anomaly detection",
      "Custom dashboard creation",
      "Cross-channel attribution",
      "ROI forecasting and optimization",
    ],
    detailedFeatures: [
      {
        title: "Advanced Attribution Modeling",
        description: "Multi-touch attribution across all marketing channels and touchpoints",
        techSpecs: ["Attribution Algorithms", "Cross-channel Tracking", "Journey Mapping"]
      },
      {
        title: "Predictive Insights",
        description: "Forecast future performance and identify optimization opportunities",
        techSpecs: ["Time Series Analysis", "Trend Detection", "Forecasting Models"]
      },
      {
        title: "Anomaly Detection",
        description: "Automatically detect unusual patterns and performance deviations",
        techSpecs: ["Statistical Analysis", "Pattern Recognition", "Alert Systems"]
      }
    ],
    image: "/placeholder.svg?height=400&width=600&text=Smart+Analytics+Dashboard",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: "lead-management",
    icon: "🎯",
    title: "Lead Management",
    subtitle: "Intelligent lead scoring and nurturing",
    description: "Automatically score, segment, and nurture leads with AI-powered workflows that increase conversion rates.",
    benefits: [
      "AI-powered lead scoring",
      "Automated lead nurturing sequences",
      "Behavioral trigger campaigns",
      "CRM integration and sync",
      "Lead quality predictions",
    ],
    detailedFeatures: [
      {
        title: "Dynamic Lead Scoring",
        description: "AI-powered scoring that adapts based on behavior, engagement, and conversion patterns",
        techSpecs: ["Behavioral Analytics", "Predictive Scoring", "Dynamic Weighting"]
      },
      {
        title: "Intelligent Segmentation",
        description: "Automatically segment leads based on multiple data points and behaviors",
        techSpecs: ["Clustering Algorithms", "Demographic Analysis", "Behavioral Patterns"]
      },
      {
        title: "Automated Nurturing",
        description: "Personalized nurturing sequences that adapt to individual lead preferences",
        techSpecs: ["Personalization Engine", "Trigger-based Workflows", "Content Optimization"]
      }
    ],
    image: "/placeholder.svg?height=400&width=600&text=Lead+Management+System",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    id: "campaign-optimization",
    icon: "⚡",
    title: "Campaign Optimization",
    subtitle: "Real-time performance enhancement",
    description: "Campaigns that optimize themselves in real-time, adjusting bids, targeting, and creative elements for maximum ROI.",
    benefits: [
      "Real-time bid optimization",
      "Audience expansion recommendations",
      "Creative rotation and testing",
      "Budget allocation optimization",
      "Performance alerts and insights",
    ],
    detailedFeatures: [
      {
        title: "Automated Bid Management",
        description: "AI-driven bidding strategies that maximize ROI across all campaigns",
        techSpecs: ["Bid Optimization Algorithms", "Real-time Adjustments", "Performance Monitoring"]
      },
      {
        title: "Smart Budget Allocation",
        description: "Dynamically allocate budget to top-performing campaigns and audiences",
        techSpecs: ["Performance Analysis", "Budget Optimization", "Resource Management"]
      },
      {
        title: "Audience Intelligence",
        description: "Discover and target high-value audience segments automatically",
        techSpecs: ["Lookalike Modeling", "Audience Expansion", "Behavioral Targeting"]
      }
    ],
    image: "/placeholder.svg?height=400&width=600&text=Campaign+Optimization+Tools",
    gradient: "from-orange-400 to-red-400"
  },
  {
    id: "performance-tracking",
    icon: "📈",
    title: "Performance Tracking",
    subtitle: "Comprehensive campaign monitoring",
    description: "Track every metric that matters with advanced attribution modeling and cross-platform performance analysis.",
    benefits: [
      "Multi-touch attribution modeling",
      "Cross-platform performance tracking",
      "Custom KPI dashboards",
      "Automated reporting schedules",
      "Competitive benchmarking",
    ],
    detailedFeatures: [
      {
        title: "Unified Tracking System",
        description: "Track performance across all channels and touchpoints in one dashboard",
        techSpecs: ["Cross-platform Integration", "Unified Data Model", "Real-time Sync"]
      },
      {
        title: "Advanced Reporting",
        description: "Generate custom reports with advanced filtering and data visualization",
        techSpecs: ["Report Builder", "Data Visualization", "Export Capabilities"]
      },
      {
        title: "Competitive Analysis",
        description: "Monitor competitor performance and identify market opportunities",
        techSpecs: ["Market Intelligence", "Competitor Tracking", "Benchmark Analysis"]
      }
    ],
    image: "/placeholder.svg?height=400&width=600&text=Performance+Tracking+Analytics",
    gradient: "from-indigo-400 to-purple-400"
  },
  {
    id: "crm-integration",
    icon: "🔗",
    title: "CRM Integration",
    subtitle: "Seamless data synchronization",
    description: "Connect with your existing tools and platforms for a unified marketing ecosystem that works together.",
    benefits: [
      "Native CRM integrations (Salesforce, HubSpot, Pipedrive)",
      "Real-time data synchronization",
      "Custom API connections",
      "Webhook automation",
      "Data mapping and transformation",
    ],
    detailedFeatures: [
      {
        title: "Universal Data Sync",
        description: "Seamlessly sync data between all your marketing and sales tools",
        techSpecs: ["API Integration", "Real-time Sync", "Data Transformation"]
      },
      {
        title: "Custom Integrations",
        description: "Build custom integrations with our flexible API and webhook system",
        techSpecs: ["RESTful APIs", "Webhook Support", "Custom Connectors"]
      },
      {
        title: "Data Management",
        description: "Centralized data management with mapping, validation, and cleanup tools",
        techSpecs: ["Data Validation", "Field Mapping", "Quality Control"]
      }
    ],
    image: "/placeholder.svg?height=400&width=600&text=CRM+Integration+Hub",
    gradient: "from-teal-400 to-cyan-400"
  },
]

export default function MainFeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState(null)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-fade-in-left`}>
                <div className="flex items-center mb-6 group">
                  <span className="text-5xl mr-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-blue-600 font-medium">{feature.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>

                <div className="space-y-4 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start group/benefit">
                      <div className="relative">
                        <svg
                          className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0 transition-all duration-300 group-hover/benefit:scale-125 group-hover/benefit:text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover/benefit:opacity-30 transition-opacity duration-300 animate-ping"></div>
                      </div>
                      <span className="text-gray-700 group-hover/benefit:text-gray-900 transition-colors duration-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 hover:from-blue-100 hover:to-purple-100 font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  {expandedFeature === feature.id ? "Show Less" : "Learn More"}
                  <svg
                    className={`w-5 h-5 ml-2 transition-all duration-300 group-hover:scale-110 ${
                      expandedFeature === feature.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} animate-fade-in-right`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r opacity-75 rounded-2xl blur transition-opacity duration-300 group-hover:opacity-100 animate-pulse"
                       style={{background: `linear-gradient(45deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`}}>
                  </div>
                  <div className="relative">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg animate-bounce-in">
                      AI Powered
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedFeature === feature.id && (
                <div className="lg:col-span-2 mt-12 space-y-8 animate-fade-in">
                  {/* How it Works Section */}
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-100 shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                      How {feature.title} Works
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        { step: "1", title: "Data Analysis", desc: "AI analyzes your historical data and market trends", color: "blue" },
                        { step: "2", title: "Smart Optimization", desc: "Algorithms optimize for your specific goals", color: "purple" },
                        { step: "3", title: "Continuous Learning", desc: "System learns and improves performance over time", color: "green" }
                      ].map((step, stepIndex) => (
                        <div key={stepIndex} className="text-center group">
                          <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                            <span className={`text-${step.color}-600 font-bold text-xl`}>{step.step}</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Features Section */}
                  <div className="p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8">Advanced Capabilities</h3>
                    <div className="space-y-8">
                      {feature.detailedFeatures?.map((detailFeature, detailIndex) => (
                        <div key={detailIndex} className="border-l-4 border-blue-500 pl-8 hover:border-purple-500 transition-colors duration-300 group">
                          <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {detailFeature.title}
                          </h4>
                          <p className="text-gray-600 mb-4 leading-relaxed">{detailFeature.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {detailFeature.techSpecs.map((spec, specIndex) => (
                              <span 
                                key={specIndex} 
                                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl border border-purple-100">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 text-lg flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                          Performance
                        </h4>
                        <ul className="text-gray-600 space-y-2 ml-6">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            Real-time processing (&lt;100ms response)
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            99.9% uptime guarantee
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            Scalable to millions of data points
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 text-lg flex items-center">
                          <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                          Integration
                        </h4>
                        <ul className="text-gray-600 space-y-2 ml-6">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            RESTful API endpoints
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            Webhook support
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            SDK for major platforms
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}