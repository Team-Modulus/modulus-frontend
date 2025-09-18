const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Marketing at TechCorp with 15+ years in AI and marketing automation. Led teams that generated $500M+ in revenue.",
    image: "/diverse-user-avatars.png",
    linkedin: "#",
    twitter: "#",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher with PhD in Machine Learning. Built recommendation systems used by millions of users worldwide.",
    image: "/diverse-user-avatars.png",
    linkedin: "#",
    twitter: "#",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    name: "Emily Watson",
    role: "VP of Product",
    bio: "Product leader from Meta with expertise in AI-powered consumer products. Shipped features used by 2B+ people globally.",
    image: "/diverse-user-avatars.png",
    linkedin: "#",
    twitter: "#",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Former Principal Engineer at Amazon, specializing in scalable AI systems. Built infrastructure handling 100M+ daily requests.",
    image: "/diverse-user-avatars.png",
    linkedin: "#",
    twitter: "#",
    gradient: "from-orange-400 to-red-400"
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Our team combines decades of experience in AI, marketing, and product development from leading tech
            companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 text-center">
                <div className="relative mb-6">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-125"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a 
                    href={member.twitter} 
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}