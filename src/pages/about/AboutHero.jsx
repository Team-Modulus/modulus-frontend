export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full animate-pulse-slow blur-sm"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full animate-bounce-slow blur-sm"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          We're Building the Future of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
            AI Marketing
          </span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Our mission is to democratize AI-powered marketing, making advanced automation and intelligent insights
          accessible to businesses of all sizes. We believe every company deserves the power of AI to grow and
          succeed.
        </p>
      </div>
    </section>
  )
}