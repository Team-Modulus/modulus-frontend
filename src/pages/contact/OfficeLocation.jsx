const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@marketingai.com",
    isHQ: true,
    gradient: "from-blue-400 to-cyan-400",
    timezone: "PST"
  },
  {
    city: "London",
    address: "45 Tech Square, London EC2A 4DN, UK",
    phone: "+44 20 7123 4567",
    email: "london@marketingai.com",
    isHQ: false,
    gradient: "from-purple-400 to-pink-400",
    timezone: "GMT"
  },
  {
    city: "Singapore",
    address: "88 Marina Bay, Singapore 018956",
    phone: "+65 6123 4567",
    email: "singapore@marketingai.com",
    isHQ: false,
    gradient: "from-green-400 to-emerald-400",
    timezone: "SGT"
  },
]

export default function OfficeLocations() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Offices
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Visit us at one of our global locations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 animate-fade-in-up border border-gray-100 hover:border-blue-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${office.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {office.city}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {office.isHQ && (
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full animate-pulse">
                        HQ
                      </span>
                    )}
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {office.timezone}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start group/item">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 mr-3 transition-all duration-300 group-hover/item:text-blue-500 group-hover/item:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                      {office.address}
                    </span>
                  </div>
                  
                  <div className="flex items-center group/item cursor-pointer">
                    <svg className="w-5 h-5 text-gray-400 mr-3 transition-all duration-300 group-hover/item:text-green-500 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-blue-600 font-medium group-hover/item:text-blue-700 transition-colors duration-300">
                      {office.phone}
                    </span>
                  </div>
                  
                  <div className="flex items-center group/item cursor-pointer">
                    <svg className="w-5 h-5 text-gray-400 mr-3 transition-all duration-300 group-hover/item:text-blue-500 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-blue-600 font-medium group-hover/item:text-blue-700 transition-colors duration-300">
                      {office.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}