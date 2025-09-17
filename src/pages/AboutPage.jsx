"use client"

import { useContext } from "react"
import { mainContext } from "../context/AuthContext"



const AboutPage = () => {
  const { user } = useContext(mainContext)
 const login = user
  const handleStartTrial = async () => {
    await login("demo@example.com", "password")
  }

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Marketing at TechCorp with 15+ years in AI and marketing automation. Led teams that generated $500M+ in revenue.",
      image: "/diverse-user-avatars.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google AI researcher with PhD in Machine Learning. Built recommendation systems used by millions of users worldwide.",
      image: "/diverse-user-avatars.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Watson",
      role: "VP of Product",
      bio: "Product leader from Meta with expertise in AI-powered consumer products. Shipped features used by 2B+ people globally.",
      image: "/diverse-user-avatars.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Former Principal Engineer at Amazon, specializing in scalable AI systems. Built infrastructure handling 100M+ daily requests.",
      image: "/diverse-user-avatars.png",
      linkedin: "#",
      twitter: "#",
    },
  ]

  const values = [
    {
      icon: "🎯",
      title: "Customer-First",
      description: "Every decision we make starts with how it benefits our customers and their marketing success.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI to create breakthrough marketing solutions.",
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "We believe in honest communication, clear pricing, and transparent AI decision-making.",
    },
    {
      icon: "🌱",
      title: "Growth Mindset",
      description: "We're constantly learning, improving, and helping our customers achieve exponential growth.",
    },
  ]

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Started with a vision to democratize AI-powered marketing for businesses of all sizes.",
    },
    {
      year: "2022",
      title: "First AI Model",
      description: "Launched our proprietary AI ad creation engine, generating 1M+ ads in the first month.",
    },
    {
      year: "2023",
      title: "Series A Funding",
      description: "Raised $25M to accelerate product development and expand our AI capabilities.",
    },
    {
      year: "2024",
      title: "50K+ Customers",
      description: "Reached 50,000 active customers generating $2B+ in marketing ROI through our platform.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            We're Building the Future of <span className="gradient-text">AI Marketing</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our mission is to democratize AI-powered marketing, making advanced automation and intelligent insights
            accessible to businesses of all sizes. We believe every company deserves the power of AI to grow and
            succeed.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started MarketingAI because we saw too many businesses struggling with complex, expensive marketing
                tools that promised AI but delivered complexity. We knew there had to be a better way.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to serve over 50,000 businesses worldwide, helping them create better campaigns,
                reach the right audiences, and achieve measurable growth through the power of artificial intelligence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600">Active Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$2B+</div>
                  <div className="text-gray-600">Customer ROI Generated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Team+Working+on+AI"
                alt="Our team working on AI"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg">
                <div className="text-sm font-medium">AI-Powered Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience in AI, marketing, and product development from leading tech
              companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small team with a big vision to a platform trusted by thousands of businesses worldwide.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="card">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-10">
            Ready to transform your marketing with AI? Join thousands of businesses already growing with MarketingAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default AboutPage
