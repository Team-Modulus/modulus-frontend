import { useState } from "react"

export default function PricingHero({ billingCycle, onBillingChange }) {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Simple, <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Transparent</span> Pricing
        </h1>
        <p className="text-xl text-gray-600 mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Choose the perfect plan for your business. Start with a 14-day free trial, no credit card required.
        </p>

        {/* Enhanced Billing Toggle */}
        <div className="flex items-center justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <span className={`mr-3 transition-all duration-300 ${billingCycle === "monthly" ? "text-gray-900 font-medium scale-105" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={onBillingChange}
            className="relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 group"
            style={{
              backgroundColor: billingCycle === "yearly" ? "#3B82F6" : "#E5E7EB"
            }}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-all duration-300 shadow-lg group-hover:shadow-xl ${
                billingCycle === "yearly" ? "translate-x-7" : "translate-x-1"
              }`}
            />
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
              billingCycle === "yearly" ? "opacity-20 bg-blue-400 animate-pulse" : "opacity-0"
            }`}></div>
          </button>
          <span className={`ml-3 transition-all duration-300 ${billingCycle === "yearly" ? "text-gray-900 font-medium scale-105" : "text-gray-500"}`}>
            Yearly
          </span>
          {billingCycle === "yearly" && (
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full animate-bounce-in transform transition-all duration-300">
              Save 20%
            </span>
          )}
        </div>
      </div>
    </section>
  )
}