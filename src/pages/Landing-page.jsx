"use client"

import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { mainContext } from "../context/AuthContext"


const LandingPage = () => {
  const { user} = useContext(mainContext)
  const login = user
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleStartTrial = async () => {
    await login("demo@example.com", "password")
  }

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Ad Creation",
      description:
        "Generate high-converting ads in seconds with our advanced AI that understands your brand and audience.",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description:
        "Get actionable insights with AI-driven analytics that predict performance and optimize campaigns automatically.",
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content: "MarketingAI increased our conversion rates by 340% in just 3 months. The AI insights are incredible.",
      avatar: "/diverse-user-avatars.png",
    },
    {
      name: "Marcus Rodriguez",
      role: "Growth Manager",
      company: "StartupX",
      content: "We went from spending 20 hours a week on ads to just 2 hours. The ROI improvement is phenomenal.",
      avatar: "/diverse-user-avatars.png",
    },
    {
      name: "Emily Watson",
      role: "CMO",
      company: "E-commerce Plus",
      content: "The AI ad creation feature alone saved us $50k in agency fees while delivering better results.",
      avatar: "/diverse-user-avatars.png",
    },
  ]

  const companyLogos = ["TechFlow", "StartupX", "E-commerce Plus", "Digital Dynamics", "Growth Labs", "Marketing Pro"]

  const stats = [
    { number: "10M+", label: "Ads Created" },
    { number: "500%", label: "Average ROI Increase" },
    { number: "50K+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="gradient-text">AI-Powered</span>
                <br />
                Marketing That
                <br />
                Actually Works
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your marketing with intelligent automation. Create high-converting campaigns, optimize
                performance in real-time, and scale your business with the power of AI.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={handleStartTrial} className="btn-primary text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                ✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  AI Powered
                </div>
                <img
                  src="/placeholder-8md1p.png"
                  alt="AI Marketing Dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium animate-pulse-ai">
                +340% ROI
              </div>
              <div className="absolute -bottom-4 -right-8 bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium animate-pulse-ai">
                AI Optimizing...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 h-12 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-blue-100">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of businesses already using AI to scale their marketing efforts and drive unprecedented
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleStartTrial} className="btn-primary text-lg px-8 py-4">
              Start Your Free Trial
            </button>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Talk to Sales
            </Link>
          </div>
          <p className="mt-6 text-gray-400 text-sm">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Product Demo</h3>
              <button onClick={() => setIsVideoPlaying(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">Demo video would play here</p>
                  <p className="text-sm text-gray-500 mt-2">See how MarketingAI transforms your marketing workflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default LandingPage
