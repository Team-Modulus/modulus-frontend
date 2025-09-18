import { useState, useEffect, useRef } from "react"

const StatCounter = ({ target, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function MissionSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We started MarketingAI because we saw too many businesses struggling with complex, expensive marketing
              tools that promised AI but delivered complexity. We knew there had to be a better way.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we're proud to serve over 50,000 businesses worldwide, helping them create better campaigns,
              reach the right audiences, and achieve measurable growth through the power of artificial intelligence.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <StatCounter target={50} label="Active Customers" suffix="K+" />
              <StatCounter target={2} label="Customer ROI Generated" prefix="$" suffix="B+" />
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-75 animate-pulse"></div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Team+Working+on+AI"
                alt="Our team working on AI"
                className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce-in">
                <div className="text-sm font-medium">AI-Powered Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}