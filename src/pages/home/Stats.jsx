const stats = [
  { number: "10M+", label: "Ads Created" },
  { number: "500%", label: "Average ROI Increase" },
  { number: "50K+", label: "Happy Customers" },
  { number: "99.9%", label: "Uptime" },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-xl text-blue-100">Numbers that speak for themselves</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}