import { useState } from "react"

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "You can start using MarketingAI immediately with our 14-day free trial. No credit card required.",
    icon: "🚀"
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes, we offer custom integrations for Enterprise customers. Contact our sales team to discuss your needs.",
    icon: "🔗"
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for all plans, priority support for Pro customers, and dedicated account managers for Enterprise clients.",
    icon: "🛠️"
  },
  {
    question: "Can I schedule a demo?",
    answer: "Use the contact form to request a demo, and our team will schedule a personalized walkthrough.",
    icon: "📅"
  },
]

export default function ContactFAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {faq.icon}
                  </span>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </span>
                </div>
                
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
                  <div className={`absolute inset-0 bg-blue-100 rounded-full transition-all duration-300 ${
                    expandedFaq === index ? "scale-150 opacity-30" : "scale-0 opacity-0"
                  }`}></div>
                </div>
              </button>
              
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
