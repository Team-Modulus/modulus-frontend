const companyLogos = ["TechFlow", "StartupX", "E-commerce Plus", "Digital Dynamics", "Growth Labs", "Marketing Pro"]

export default function CompanyLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {companyLogos.map((logo, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 h-12 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">{logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}