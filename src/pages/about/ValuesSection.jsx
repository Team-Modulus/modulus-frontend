const values = [
  {
    icon: "🎯",
    title: "Customer-First",
    description: "Every decision we make starts with how it benefits our customers and their marketing success.",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We push the boundaries of what's possible with AI to create breakthrough marketing solutions.",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: "🤝",
    title: "Transparency",
    description: "We believe in honest communication, clear pricing, and transparent AI decision-making.",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    icon: "🌱",
    title: "Growth Mindset",
    description: "We're constantly learning, improving, and helping our customers achieve exponential growth.",
    gradient: "from-orange-400 to-red-400"
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            These principles guide everything we do, from product development to customer support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group transform hover:-translate-y-2 animate-fade-in-up border border-gray-100 hover:border-blue-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="relative mb-6">
                  <span className="text-5xl transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block">
                    {value.icon}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300`}></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}