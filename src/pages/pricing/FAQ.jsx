import { useState } from "react"

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: "What happens during the free trial?",
    answer: "You get full access to Pro features for 14 days, no credit card required. You can create unlimited campaigns and generate up to 10,000 AI ads during the trial.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund within the first 30 days.",
  },
  {
    question: "Are there any setup fees?",
    answer: "No, there are no setup fees or hidden costs. The price you see is what you pay, and it includes all features listed in your chosen plan.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, we work with enterprise clients to create custom solutions that meet their specific needs, including custom integrations, dedicated infrastructure, and specialized support.",
  },
]

export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-all duration-300 group"
              >
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="relative">
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-all duration-300 group-hover:text-blue-500 ${
                      expandedFaq === index ? "rotate-180 scale-110" : "group-hover:scale-110"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Animated circle background */}
                  <div className={`absolute inset-0 bg-blue-100 rounded-full transition-all duration-300 ${
                    expandedFaq === index ? "scale-150 opacity-30" : "scale-0 opacity-0"
                  }`}></div>
                </div>
              </button>
              
              {/* Animated answer section */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-6 pb-5">
                  <div className="w-full h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed animate-fade-in">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}