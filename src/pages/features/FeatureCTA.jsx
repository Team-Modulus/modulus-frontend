export default function FeaturesCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-300 rounded-full animate-pulse-slow blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-cyan-300 rounded-full animate-bounce-slow blur-sm"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in-up">
          Ready to Experience These Features?
        </h2>
        <p className="text-xl text-blue-100 mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Start your free trial today and see how AI can transform your marketing results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 group">
            <span className="group-hover:mr-2 transition-all duration-300">Start Free Trial</span>
            <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 group">
            <span className="group-hover:mr-2 transition-all duration-300">Schedule Demo</span>
            <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}