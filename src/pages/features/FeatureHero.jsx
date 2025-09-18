export default function FeaturesHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full animate-bounce-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">AI Features</span>
          <br />
          Built for Modern Marketing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Discover how our comprehensive suite of AI-powered tools can transform your marketing strategy and drive
          unprecedented growth.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 animate-fade-in-up group" style={{animationDelay: '0.6s'}}>
          <span className="group-hover:mr-2 transition-all duration-300">Start Free Trial</span>
          <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  )
}