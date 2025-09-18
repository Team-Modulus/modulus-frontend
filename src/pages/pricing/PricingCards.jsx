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
    gradient: "from-gray-50 to-gray-100"
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
    gradient: "from-blue-50 to-purple-50"
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
    gradient: "from-purple-50 to-indigo-50"
  },
]

export default function PricingCards({ billingCycle }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl transition-all duration-500 cursor-pointer group ${
                plan.popular 
                  ? "border-2 border-blue-500 shadow-2xl scale-105 hover:scale-110 z-10" 
                  : "border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-blue-300"
              }`}
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50 rounded-3xl transition-opacity duration-300 group-hover:opacity-70`}></div>
              
              {/* Glowing border effect for popular plan */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-75 blur-sm animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              
              <div className="relative bg-white rounded-3xl p-8 h-full">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce-in">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6 relative">
                    <span className="text-5xl font-bold text-gray-900 transition-all duration-300 group-hover:scale-110 inline-block">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === "monthly" ? "month" : "month, billed yearly"}
                    </span>
                    {billingCycle === "yearly" && (
                      <div className="text-sm text-green-600 font-medium mt-1 animate-fade-in">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-100 text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 border-2 border-transparent hover:border-blue-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/item">
                          <div className="relative">
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover/item:opacity-30 transition-opacity duration-300 animate-ping"></div>
                          </div>
                          <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        Limitations:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start group/limitation">
                            <svg
                              className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0 transition-colors duration-300 group-hover/limitation:text-amber-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-600 group-hover/limitation:text-gray-700 transition-colors duration-200">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}