export default function PricingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Join thousands of businesses already using MarketingAI to scale their marketing efforts.
        </p>
        <button
          className="bg-white text-blue-600 px-10 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl active:scale-95 animate-fade-in-up group"
          style={{animationDelay: '0.4s'}}
        >
          <span className="group-hover:mr-2 transition-all duration-300">Start Your Free Trial</span>
          <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <p className="mt-6 text-blue-100 text-sm animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}
