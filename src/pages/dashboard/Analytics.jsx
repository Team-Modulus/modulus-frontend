"use client"

import { useState } from "react"

const Analytics = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d")
  const [selectedMetric, setSelectedMetric] = useState("impressions")

  const overviewMetrics = [
    {
      title: "Total Impressions",
      value: "12.4M",
      change: "+23%",
      changeType: "positive",
      icon: "👁️",
    },
    {
      title: "Total Clicks",
      value: "456K",
      change: "+18%",
      changeType: "positive",
      icon: "👆",
    },
    {
      title: "Conversions",
      value: "18.2K",
      change: "+31%",
      changeType: "positive",
      icon: "🎯",
    },
    {
      title: "Revenue",
      value: "$284K",
      change: "+42%",
      changeType: "positive",
      icon: "💰",
    },
  ]

  const channelPerformance = [
    {
      channel: "Google Ads",
      impressions: "4.2M",
      clicks: "168K",
      conversions: "7.2K",
      spend: "$45K",
      roas: "4.2x",
      ctr: "4.0%",
      color: "bg-blue-500",
    },
    {
      channel: "Facebook Ads",
      impressions: "3.8M",
      clicks: "152K",
      conversions: "6.1K",
      spend: "$38K",
      roas: "3.8x",
      ctr: "4.0%",
      color: "bg-indigo-500",
    },
    {
      channel: "LinkedIn Ads",
      impressions: "2.1M",
      clicks: "84K",
      conversions: "3.2K",
      spend: "$28K",
      roas: "5.1x",
      ctr: "4.0%",
      color: "bg-blue-700",
    },
    {
      channel: "Twitter Ads",
      impressions: "1.8M",
      clicks: "36K",
      conversions: "1.2K",
      spend: "$15K",
      roas: "2.8x",
      ctr: "2.0%",
      color: "bg-sky-500",
    },
    {
      channel: "TikTok Ads",
      impressions: "500K",
      clicks: "16K",
      conversions: "520",
      spend: "$8K",
      roas: "3.2x",
      ctr: "3.2%",
      color: "bg-pink-500",
    },
  ]

  const audienceInsights = [
    { segment: "Age 25-34", percentage: 35, color: "bg-blue-500" },
    { segment: "Age 35-44", percentage: 28, color: "bg-purple-500" },
    { segment: "Age 18-24", percentage: 20, color: "bg-green-500" },
    { segment: "Age 45-54", percentage: 12, color: "bg-yellow-500" },
    { segment: "Age 55+", percentage: 5, color: "bg-red-500" },
  ]

  const topPerformingAds = [
    {
      id: 1,
      title: "Summer Sale - 50% Off Everything",
      campaign: "Summer Sale 2024",
      impressions: "245K",
      clicks: "12.3K",
      conversions: "456",
      ctr: "5.02%",
      cvr: "3.71%",
      spend: "$3,200",
    },
    {
      id: 2,
      title: "AI Marketing Tools - Free Trial",
      campaign: "Product Launch - AI Tools",
      impressions: "156K",
      clicks: "8.2K",
      conversions: "298",
      ctr: "5.26%",
      cvr: "3.63%",
      spend: "$2,100",
    },
    {
      id: 3,
      title: "Holiday Special - Limited Time",
      campaign: "Holiday Promotion",
      impressions: "380K",
      clicks: "18.9K",
      conversions: "723",
      ctr: "4.97%",
      cvr: "3.83%",
      spend: "$6,400",
    },
  ]

  const conversionFunnel = [
    { stage: "Impressions", value: 12400000, percentage: 100 },
    { stage: "Clicks", value: 456000, percentage: 3.7 },
    { stage: "Landing Page Views", value: 398000, percentage: 87.3 },
    { stage: "Sign-ups", value: 45600, percentage: 11.5 },
    { stage: "Conversions", value: 18200, percentage: 39.9 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into your marketing performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-medium ${
                      metric.changeType === "positive" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {metric.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last period</span>
                </div>
              </div>
              <div className="text-3xl">{metric.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Performance Over Time</h2>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="impressions">Impressions</option>
            <option value="clicks">Clicks</option>
            <option value="conversions">Conversions</option>
            <option value="revenue">Revenue</option>
          </select>
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <p className="text-gray-600">
              Interactive chart showing {selectedMetric} over {selectedTimeRange}
            </p>
            <p className="text-sm text-gray-500 mt-2">Chart visualization would be rendered here</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Channel Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Channel Performance</h2>
          <div className="space-y-4">
            {channelPerformance.map((channel, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${channel.color} mr-3`}></div>
                    <span className="font-medium text-gray-900">{channel.channel}</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">{channel.roas}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Impressions</p>
                    <p className="font-medium text-gray-900">{channel.impressions}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Clicks</p>
                    <p className="font-medium text-gray-900">{channel.clicks}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Conversions</p>
                    <p className="font-medium text-gray-900">{channel.conversions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Audience Demographics</h2>
          <div className="space-y-4">
            {audienceInsights.map((segment, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-sm text-gray-600">{segment.segment}</div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${segment.color}`}
                      style={{ width: `${segment.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-sm font-medium text-gray-900 text-right">{segment.percentage}%</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-md font-semibold text-gray-900 mb-4">Geographic Distribution</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">United States</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Canada</span>
                <span className="font-medium">18%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">United Kingdom</span>
                <span className="font-medium">12%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Australia</span>
                <span className="font-medium">8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Germany</span>
                <span className="font-medium">7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Other</span>
                <span className="font-medium">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Conversion Funnel</h2>
        <div className="space-y-4">
          {conversionFunnel.map((stage, index) => (
            <div key={index} className="flex items-center">
              <div className="w-32 text-sm font-medium text-gray-900">{stage.stage}</div>
              <div className="flex-1 mx-4">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-8 relative">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      style={{ width: `${Math.max(stage.percentage, 10)}%` }}
                    >
                      {stage.percentage}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-24 text-sm font-medium text-gray-900 text-right">{stage.value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performing Ads */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Top Performing Ads</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ad Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impressions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CVR</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Spend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topPerformingAds.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{ad.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{ad.campaign}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{ad.impressions}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-green-600">{ad.ctr}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-blue-600">{ad.cvr}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{ad.spend}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics
