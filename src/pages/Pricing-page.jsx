"use client"

import { useContext, useState } from "react"
import { mainContext } from "../context/AuthContext"

const PricingPage = () => {
   const { user } = useContext(mainContext)
  const login = user
  const [billingCycle, setBillingCycle] = useState("monthly")

  const handleStartTrial = async (plan) => {
    await login("demo@example.com", "password")
  }

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "Up to 5 campaigns",
        "10,000 AI-generated ads per month",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations (5)",
        "Lead scoring (basic)",
        "Campaign optimization",
        "Mobile app access",
      ],
      limitations: ["Limited to 2 team members", "Basic reporting only", "Standard support response time"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses and marketing teams",
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        "Unlimited campaigns",
        "50,000 AI-generated ads per month",
        "Advanced analytics & reporting",
        "Priority support",
        "All integrations (50+)",
        "Advanced lead scoring",
        "A/B testing automation",
        "Custom dashboards",
        "API access",
        "White-label reporting",
        "Advanced audience targeting",
        "Conversion tracking",
      ],
      limitations: ["Up to 10 team members"],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 499,
      yearlyPrice: 399,
      features: [
        "Unlimited everything",
        "Unlimited AI-generated content",
        "Enterprise analytics suite",
        "Dedicated account manager",
        "Custom integrations",
        "AI model customization",
        "Advanced security features",
        "SSO & SAML support",
        "Custom onboarding",
        "SLA guarantees",
        "Advanced user permissions",
        "Data export & backup",
        "Compliance reporting",
        "Custom AI training",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const comparisonFeatures = [
    {
      category: "Core Features",
      features: [
        {
          name: "AI Ad Creation",
          starter: "10K/month",
          pro: "50K/month",
          enterprise: "Unlimited",
        },
        {
          name: "Campaigns",
          starter: "Up to 5",
          pro: "Unlimited",
          enterprise: "Unlimited",
        },
        {
          name: "Team Members",
          starter: "2",
          pro: "10",
          enterprise: "Unlimited",
        },
        {
          name: "Integrations",
          starter: "5 Standard",
          pro: "50+ All",
          enterprise: "Custom",
        },
      ],
    },
    {
      category: "Analytics & Reporting",
      features: [
        {
          name: "Dashboard",
          starter: "Basic",
          pro: "Advanced",
          enterprise: "Enterprise Suite",
        },
        {
          name: "Custom Reports",
          starter: false,
          pro: true,
          enterprise: true,
        },
        {
          name: "White-label Reports",
          starter: false,
          pro: true,
          enterprise: true,
        },
        {
          name: "API Access",
          starter: false,
          pro: "Standard",
          enterprise: "Full",
        },
      ],
    },
    {
      category: "Support & Services",
      features: [
        {
          name: "Support",
          starter: "Email",
          pro: "Priority",
          enterprise: "Dedicated Manager",
        },
        {
          name: "Onboarding",
          starter: "Self-service",
          pro: "Guided",
          enterprise: "Custom",
        },
        {
          name: "SLA",
          starter: false,
          pro: false,
          enterprise: "99.9%",
        },
        {
          name: "Training",
          starter: "Documentation",
          pro: "Video + Docs",
          enterprise: "Custom Training",
        },
      ],
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "What happens during the free trial?",
      answer:
        "You get full access to Pro features for 14 days, no credit card required. You can create unlimited campaigns and generate up to 10,000 AI ads during the trial.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund within the first 30 days.",
    },
    {
      question: "Are there any setup fees?",
      answer:
        "No, there are no setup fees or hidden costs. The price you see is what you pay, and it includes all features listed in your chosen plan.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes, we work with enterprise clients to create custom solutions that meet their specific needs, including custom integrations, dedicated infrastructure, and specialized support.",
    },
  ]

  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white">
  

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Choose the perfect plan for your business. Start with a 14-day free trial, no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingCycle === "monthly" ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === "yearly" ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border-2 p-8 ${
                  plan.popular ? "border-blue-500 shadow-xl scale-105" : "border-gray-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === "monthly" ? "month" : "month, billed yearly"}
                    </span>
                  </div>

                  <button
                    onClick={() => handleStartTrial(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
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

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-600">See exactly what's included in each plan</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {comparisonFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-100">
                    <div className="font-medium text-gray-900">{feature.name}</div>
                    <div className="text-center">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.starter}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.pro}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.enterprise}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of businesses already using MarketingAI to scale their marketing efforts.
          </p>
          <button
            onClick={() => handleStartTrial("Pro")}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Start Your Free Trial
          </button>
          <p className="mt-4 text-blue-100 text-sm">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

    </div>
  )
}

export default PricingPage
