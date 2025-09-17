"use client"

const AboutCompanyPage = () => {
  const companyStats = [
    { number: "50,000+", label: "Active Customers", description: "Businesses trust our platform" },
    { number: "10M+", label: "AI Ads Created", description: "Generated through our platform" },
    { number: "$2B+", label: "Customer ROI", description: "Generated for our clients" },
    { number: "99.9%", label: "Uptime", description: "Reliable platform performance" },
    { number: "150+", label: "Team Members", description: "AI and marketing experts" },
    { number: "25+", label: "Countries", description: "Global customer presence" },
  ]

  const timeline = [
    {
      year: "2021",
      quarter: "Q1",
      event: "Company Founded",
      description: "MarketingAI founded by Sarah Chen and Marcus Rodriguez in San Francisco",
    },
    {
      year: "2021",
      quarter: "Q3",
      event: "First Product Launch",
      description: "Beta version of AI ad creation platform launched with 100 early customers",
    },
    {
      year: "2022",
      quarter: "Q1",
      event: "Seed Funding",
      description: "Raised $5M seed round led by Accel Partners",
    },
    {
      year: "2022",
      quarter: "Q4",
      event: "1,000 Customers",
      description: "Reached first major milestone of 1,000 active customers",
    },
    {
      year: "2023",
      quarter: "Q2",
      event: "Series A",
      description: "Closed $25M Series A led by Sequoia Capital",
    },
    {
      year: "2023",
      quarter: "Q4",
      event: "10,000 Customers",
      description: "Expanded to 10,000 customers across 15 countries",
    },
    {
      year: "2024",
      quarter: "Q2",
      event: "50,000 Customers",
      description: "Reached 50,000 active customers and $2B in customer ROI",
    },
    {
      year: "2024",
      quarter: "Q4",
      event: "Global Expansion",
      description: "Opened offices in London and Singapore, serving 25+ countries",
    },
  ]

  const investors = [
    { name: "Sequoia Capital", type: "Lead Investor", round: "Series A" },
    { name: "Accel Partners", type: "Lead Investor", round: "Seed" },
    { name: "Y Combinator", type: "Accelerator", round: "Pre-Seed" },
    { name: "Andreessen Horowitz", type: "Investor", round: "Series A" },
    { name: "GV (Google Ventures)", type: "Investor", round: "Series A" },
    { name: "Founders Fund", type: "Investor", round: "Seed" },
  ]

  const pressHighlights = [
    {
      publication: "TechCrunch",
      headline: "MarketingAI raises $25M to democratize AI-powered marketing",
      date: "June 2023",
      excerpt: "The startup has seen 10x growth in the past year as businesses embrace AI marketing tools.",
    },
    {
      publication: "Forbes",
      headline: "The Future of Marketing: How AI is Transforming Customer Acquisition",
      date: "September 2023",
      excerpt: "MarketingAI is leading the charge in making sophisticated AI accessible to businesses of all sizes.",
    },
    {
      publication: "Wall Street Journal",
      headline: "Small Businesses Turn to AI for Marketing Edge",
      date: "January 2024",
      excerpt: "Platforms like MarketingAI are leveling the playing field for small and medium businesses.",
    },
    {
      publication: "Wired",
      headline: "The AI Marketing Revolution is Here",
      date: "March 2024",
      excerpt: "How companies like MarketingAI are using machine learning to create better, more effective campaigns.",
    },
  ]

  const awards = [
    {
      award: "Best AI Marketing Platform",
      organization: "MarTech Awards",
      year: "2024",
    },
    {
      award: "Startup of the Year",
      organization: "TechCrunch Disrupt",
      year: "2023",
    },
    {
      award: "Innovation in AI",
      organization: "AI Excellence Awards",
      year: "2023",
    },
    {
      award: "Best B2B SaaS Product",
      organization: "SaaS Awards",
      year: "2024",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Company <span className="gradient-text">Overview</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn about MarketingAI's journey, growth, and the impact we're making in the world of AI-powered marketing
            automation.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our growth and impact in the AI marketing space</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Company Timeline</h2>
            <p className="text-xl text-gray-600">Key milestones in our journey to transform marketing with AI</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-lg font-bold text-blue-600">{item.year}</div>
                  <div className="text-sm text-gray-500">{item.quarter}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8"></div>
                <div className="flex-1">
                  <div className="card">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors & Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Investors & Partners</h2>
            <p className="text-xl text-gray-600">Backed by leading venture capital firms and strategic partners</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investors.map((investor, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">{investor.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{investor.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{investor.type}</p>
                <p className="text-sm text-gray-600">{investor.round}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Press Coverage</h2>
            <p className="text-xl text-gray-600">What leading publications are saying about MarketingAI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressHighlights.map((article, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-bold text-sm">{article.publication.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{article.publication}</div>
                    <div className="text-sm text-gray-500">{article.date}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.headline}</h3>
                <p className="text-gray-600 leading-relaxed">"{article.excerpt}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Industry recognition for our innovation and impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.award}</h3>
                <p className="text-blue-600 font-medium mb-1">{award.organization}</p>
                <p className="text-sm text-gray-600">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Get in touch with our team to learn more about MarketingAI and how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutCompanyPage
