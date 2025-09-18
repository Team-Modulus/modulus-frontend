import { useState, useEffect, useRef } from "react"

const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Started with a vision to democratize AI-powered marketing for businesses of all sizes.",
    icon: "🚀",
    color: "blue"
  },
  {
    year: "2022",
    title: "First AI Model",
    description: "Launched our proprietary AI ad creation engine, generating 1M+ ads in the first month.",
    icon: "🤖",
    color: "purple"
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised $25M to accelerate product development and expand our AI capabilities.",
    icon: "💰",
    color: "green"
  },
  {
    year: "2024",
    title: "50K+ Customers",
    description: "Reached 50,000 active customers generating $2B+ in marketing ROI through our platform.",
    icon: "🎯",
    color: "orange"
  },
]

const TimelineMilestone = ({ milestone, index, isVisible }) => {
  return (
    <div 
      className={`flex items-center transition-all duration-700 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{transitionDelay: `${index * 0.2}s`}}
    >
      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-gray-100">
          <div className="flex items-center mb-4" style={{justifyContent: index % 2 === 0 ? "flex-end" : "flex-start"}}>
            <span className="text-3xl mr-3 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
              {milestone.icon}
            </span>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {milestone.year}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {milestone.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className={`w-6 h-6 bg-gradient-to-r from-${milestone.color}-400 to-${milestone.color}-600 rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-125`}>
          <div className={`absolute inset-0 bg-${milestone.color}-400 rounded-full animate-ping opacity-75`}></div>
        </div>
      </div>
      
      <div className="w-1/2"></div>
    </div>
  )
}

export default function CompanyStory() {
  const [visibleMilestones, setVisibleMilestones] = useState([])
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleMilestones(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const milestoneElements = ref.current?.querySelectorAll('[data-index]')
    milestoneElements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            From a small team with a big vision to a platform trusted by thousands of businesses worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-30"></div>
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} data-index={index}>
                <TimelineMilestone 
                  milestone={milestone} 
                  index={index} 
                  isVisible={visibleMilestones.includes(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}