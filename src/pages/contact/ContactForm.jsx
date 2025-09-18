import { useState } from "react"

const contactInfo = [
  {
    icon: "📧",
    title: "Email Us",
    details: ["hello@marketingai.com", "support@marketingai.com"],
    description: "Get in touch via email for any inquiries",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: "📞",
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Speak directly with our team",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: "💬",
    title: "Live Chat",
    details: ["Available 24/7", "Average response: 2 minutes"],
    description: "Chat with our support team instantly",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    icon: "📍",
    title: "Visit Us",
    details: ["123 Innovation Drive", "San Francisco, CA 94105"],
    description: "Our headquarters in downtown SF",
    gradient: "from-orange-400 to-red-400"
  },
]

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })
    }, 3000)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>

            {isSubmitted ? (
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-green-200 animate-bounce-in">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                      } ${focusedField === 'name' ? 'transform scale-105' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                      } ${focusedField === 'email' ? 'transform scale-105' : ''}`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 ${
                        focusedField === 'company' ? 'transform scale-105' : ''
                      }`}
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 ${
                        focusedField === 'phone' ? 'transform scale-105' : ''
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('inquiryType')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 ${
                      focusedField === 'inquiryType' ? 'transform scale-105' : ''
                    }`}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>

                <div className="relative group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                    } ${focusedField === 'subject' ? 'transform scale-105' : ''}`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.subject}</p>
                  )}
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-xl resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                    } ${focusedField === 'message' ? 'transform scale-105' : ''}`}
                    placeholder="Tell us more about your needs..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="group-hover:mr-2 transition-all duration-300">Send Message</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative">
                    <span className="text-3xl mr-4 mt-1 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                      {info.icon}
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300`}></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-blue-600 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Chat Widget */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Support team is online</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need immediate help?</h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team for instant assistance with your questions.
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 group">
                <span className="group-hover:mr-2 transition-all duration-300">Start Live Chat</span>
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}