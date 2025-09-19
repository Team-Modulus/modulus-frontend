"use client"

import { useState } from "react"

const Performance = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d")
  const [selectedCampaign, setSelectedCampaign] = useState("all")

  const kpiMetrics = [
    {
      title: "Total Revenue",
      value: "$284,592",
      change: "+42%",
      changeType: "positive",
      target: "$250,000",
      progress: 113.8,
    },
    {
      title: "ROAS",
      value: "4.2x",
      change: "+0.8x",
      changeType: "positive",
      target: "3.5x",
      progress: 120,
    },
    {
      title: "Cost Per Acquisition",
      value: "$24.50",
      change: "-$3.20",
      changeType: "positive",
      target: "$30.00",
      progress: 122.4,
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "+0.4%",
      changeType: "positive",
      target: "3.5%",
      progress: 108.6,
    },
  ]

  const campaignComparison = [
    {
      name: "Summer Sale 2024",
      impressions: 245000,
      clicks: 12300,
      conversions: 456,
      spend: 3200,
      revenue: 18240,
      roas: 5.7,
      ctr: 5.02,
      cvr: 3.71,
    },
    {
      name: "Holiday Promotion",
      impressions: 380000,
      clicks: 18900,
      conversions: 723,
      spend: 6400,
      revenue: 24320,
      roas: 3.8,
      ctr: 4.97,
      cvr: 3.83,
    },
    {
      name: "Product Launch - AI Tools",
      impressions: 156000,
      clicks: 8200,
      conversions: 298,
      spend: 2100,
      revenue: 10710,
      roas: 5.1,
      ctr: 5.26,
      cvr: 3.63,
    },
    {
      name: "Brand Awareness Q4",
      impressions: 890000,
      clicks: 35600,
      conversions: 1245,
      spend: 4800,
      revenue: 29760,
      roas: 6.2,
      ctr: 4.0,
      cvr: 3.5,
    },
  ]

  const performanceAlerts = [
    {
      id: 1,
      type: "success",
      title: "Campaign Exceeding Target",
      message: "Summer Sale 2024 is performing 25% above target ROAS",
      campaign: "Summer Sale 2024",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "warning",
      title: "Budget Alert",
      message: "Holiday Promotion has reached 80% of monthly budget",
      campaign: "Holiday Promotion",
      time: "4 hours ago",
    },
    {
      id: 3,
      type: "info",
      title: "Optimization Opportunity",
      message: "AI suggests increasing bid for high-performing keywords",
      campaign: "Product Launch - AI Tools",
      time: "1 day ago",
    },
  ]

  const getAlertIcon = (type) => {
    switch (type) {
      case "success":
        return (
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )
      case "warning":
        return (
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        )
      default:
        return (
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Dashboard</h1>
          <p className="text-gray-600">Track KPIs and campaign performance metrics</p>
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
          <select
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Campaigns</option>
            <option value="summer-sale">Summer Sale 2024</option>
            <option value="holiday">Holiday Promotion</option>
            <option value="product-launch">Product Launch</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
              <div
                className={`text-xs px-2 py-1 rounded-full ${
                  metric.progress >= 100 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {metric.progress.toFixed(1)}%
              </div>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <div className="flex items-center mt-1">
                <span
                  className={`text-sm font-medium ${
                    metric.changeType === "positive" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs target</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Target: {metric.target}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${metric.progress >= 100 ? "bg-green-500" : "bg-blue-500"}`}
                  style={{ width: `${Math.min(metric.progress, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ROI Calculator */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">ROI Calculator</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Investment</label>
            <input
              type="text"
              defaultValue="$45,000"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Revenue</label>
            <input
              type="text"
              defaultValue="$284,592"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ROI</label>
            <div className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-2xl font-bold text-green-600">
              532%
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Campaign Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Campaign Performance Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ROAS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CTR
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CVR
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campaignComparison.map((campaign, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                      <div className="text-sm text-gray-500">
                        ${campaign.spend.toLocaleString()} spent • ${campaign.revenue.toLocaleString()} revenue
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-green-600">{campaign.roas}x</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{campaign.ctr}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{campaign.cvr}%</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Performance Alerts</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {performanceAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                    <p className="text-sm text-gray-600">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {alert.campaign} • {alert.time}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Performance Trends</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg">Revenue</button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">ROAS</button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Conversions</button>
          </div>
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <p className="text-gray-600">Performance trend chart for {selectedTimeRange}</p>
            <p className="text-sm text-gray-500 mt-2">Interactive chart would be rendered here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance
