"use client"

import { useState } from "react"

const AICreation = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content:
        "Hi! I'm your AI marketing assistant. I can help you create high-converting ads. What type of campaign would you like to create today?",
      timestamp: new Date(Date.now() - 300000),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [adPreview, setAdPreview] = useState(null)

  const templates = [
    {
      id: 1,
      name: "Product Launch",
      description: "Perfect for introducing new products",
      category: "E-commerce",
      preview: "🚀 Introducing our revolutionary new product...",
    },
    {
      id: 2,
      name: "Seasonal Sale",
      description: "Drive sales during peak seasons",
      category: "Retail",
      preview: "🎉 Limited time offer - Save up to 50%...",
    },
    {
      id: 3,
      name: "Lead Generation",
      description: "Capture high-quality leads",
      category: "B2B",
      preview: "📈 Transform your business with our solution...",
    },
    {
      id: 4,
      name: "Brand Awareness",
      description: "Build recognition and trust",
      category: "Branding",
      preview: "✨ Discover what makes us different...",
    },
    {
      id: 5,
      name: "Event Promotion",
      description: "Drive attendance to events",
      category: "Events",
      preview: "🎪 Join us for an unforgettable experience...",
    },
    {
      id: 6,
      name: "App Download",
      description: "Increase mobile app installs",
      category: "Mobile",
      preview: "📱 Download now and get started in minutes...",
    },
  ]

  const recentAds = [
    {
      id: 1,
      title: "Summer Sale - 50% Off Everything",
      campaign: "Summer Sale 2024",
      status: "active",
      performance: "High",
      created: "2 hours ago",
    },
    {
      id: 2,
      title: "AI Marketing Tools - Free Trial",
      campaign: "Product Launch",
      status: "active",
      performance: "Excellent",
      created: "1 day ago",
    },
    {
      id: 3,
      title: "Holiday Special - Limited Time",
      campaign: "Holiday Promotion",
      status: "paused",
      performance: "Medium",
      created: "3 days ago",
    },
  ]

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsGenerating(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        type: "assistant",
        content:
          "Great! I'll help you create that ad. Based on your requirements, I recommend focusing on the key benefits and including a strong call-to-action. Let me generate some options for you.",
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiResponse])
      setIsGenerating(false)

      // Generate ad preview
      setTimeout(() => {
        setAdPreview({
          headline: "Transform Your Marketing with AI",
          description:
            "Discover how our AI-powered platform can increase your ROI by 340%. Join thousands of successful businesses already using our tools.",
          cta: "Start Free Trial",
          image: "/placeholder.svg?height=300&width=400&text=AI+Marketing+Ad",
        })
      }, 1000)
    }, 2000)
  }

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template)
    const templateMessage = {
      id: chatMessages.length + 1,
      type: "user",
      content: `I'd like to use the ${template.name} template for my campaign.`,
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, templateMessage])

    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        type: "assistant",
        content: `Perfect choice! The ${template.name} template is great for ${template.category.toLowerCase()} campaigns. Let me customize it for your brand. What's your main product or service?`,
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Ad Creation</h1>
          <p className="text-gray-600">Create high-converting ads with AI assistance</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            View History
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            New Campaign
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Assistant Chat */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-96 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Marketing Assistant</h3>
                  <div className="flex items-center text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Online
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              {isGenerating && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="animate-pulse-ai">🤖</div>
                      <span className="text-sm text-gray-600">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Describe your campaign goals..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isGenerating}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Preview */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Live Preview</h3>
            {adPreview ? (
              <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                <img
                  src={adPreview.image || "/placeholder.svg"}
                  alt="Ad preview"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="font-semibold text-gray-900">{adPreview.headline}</h4>
                <p className="text-sm text-gray-600">{adPreview.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                  {adPreview.cta}
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-500">Ad preview will appear here</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">A/B Test Setup</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Create A/B test variants</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Test different headlines</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Test different images</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Test different CTAs</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Gallery */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Template Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleTemplateSelect(template)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                selectedTemplate?.id === template.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900">{template.name}</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{template.category}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              <div className="bg-gray-50 rounded p-2 text-xs text-gray-700">{template.preview}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Ads */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recently Created Ads</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentAds.map((ad) => (
            <div key={ad.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{ad.title}</h3>
                  <p className="text-sm text-gray-600">{ad.campaign}</p>
                  <p className="text-xs text-gray-500 mt-1">Created {ad.created}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      ad.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {ad.status}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      ad.performance === "Excellent"
                        ? "bg-green-100 text-green-800"
                        : ad.performance === "High"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {ad.performance}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AICreation
