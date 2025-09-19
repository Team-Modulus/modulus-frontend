"use client"

import { useState } from "react"

const LeadsCRM = () => {
  const [selectedTab, setSelectedTab] = useState("leads")
  const [selectedLead, setSelectedLead] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.com",
      company: "TechCorp Inc",
      phone: "+1 (555) 123-4567",
      source: "Google Ads",
      campaign: "Summer Sale 2024",
      score: 95,
      status: "hot",
      value: "$12,500",
      lastActivity: "2 hours ago",
      notes: "Interested in enterprise plan, requested demo",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@startupx.io",
      company: "StartupX",
      phone: "+1 (555) 987-6543",
      source: "LinkedIn Ads",
      campaign: "Product Launch",
      score: 78,
      status: "warm",
      value: "$8,200",
      lastActivity: "1 day ago",
      notes: "Downloaded whitepaper, opened pricing page",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@growthlab.com",
      company: "Growth Lab",
      phone: "+1 (555) 456-7890",
      source: "Facebook Ads",
      campaign: "Holiday Promotion",
      score: 62,
      status: "cold",
      value: "$4,800",
      lastActivity: "3 days ago",
      notes: "Signed up for newsletter, no further engagement",
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@digitalco.com",
      company: "Digital Co",
      phone: "+1 (555) 321-0987",
      source: "Google Ads",
      campaign: "Brand Awareness",
      score: 88,
      status: "hot",
      value: "$15,600",
      lastActivity: "4 hours ago",
      notes: "Scheduled demo for next week, high intent",
    },
  ]

  const pipelineStages = [
    { name: "New Leads", count: 24, value: "$156K" },
    { name: "Qualified", count: 18, value: "$124K" },
    { name: "Proposal", count: 12, value: "$89K" },
    { name: "Negotiation", count: 8, value: "$67K" },
    { name: "Closed Won", count: 5, value: "$45K" },
  ]

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600 bg-green-100"
    if (score >= 60) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "hot":
        return "bg-red-100 text-red-800"
      case "warm":
        return "bg-yellow-100 text-yellow-800"
      case "cold":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredLeads = filterStatus === "all" ? leads : leads.filter((lead) => lead.status === filterStatus)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead & CRM Management</h1>
          <p className="text-gray-600">Manage leads and track your sales pipeline</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Import Leads
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Lead
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setSelectedTab("leads")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === "leads"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Lead List
          </button>
          <button
            onClick={() => setSelectedTab("pipeline")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === "pipeline"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pipeline
          </button>
          <button
            onClick={() => setSelectedTab("contacts")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === "contacts"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Contacts
          </button>
        </nav>
      </div>

      {selectedTab === "leads" && (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Lead List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Leads</h2>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Leads</option>
                    <option value="hot">Hot Leads</option>
                    <option value="warm">Warm Leads</option>
                    <option value="cold">Cold Leads</option>
                  </select>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-6 cursor-pointer hover:bg-gray-50 ${
                      selectedLead?.id === lead.id ? "bg-blue-50 border-l-4 border-blue-500" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-medium text-gray-900">{lead.name}</h3>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}
                          >
                            {lead.status}
                          </span>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getScoreColor(lead.score)}`}
                          >
                            {lead.score}/100
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {lead.company} • {lead.email}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {lead.source} • {lead.campaign} • {lead.lastActivity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">{lead.value}</p>
                        <p className="text-sm text-gray-500">Potential Value</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lead Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Lead Details</h2>
            </div>
            {selectedLead ? (
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{selectedLead.name}</h3>
                  <p className="text-sm text-gray-600">{selectedLead.company}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-sm text-gray-900">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-sm text-gray-900">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Source</label>
                    <p className="text-sm text-gray-900">{selectedLead.source}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Campaign</label>
                    <p className="text-sm text-gray-900">{selectedLead.campaign}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Lead Score</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${selectedLead.score}%` }}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{selectedLead.score}/100</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Notes</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedLead.notes}</p>
                </div>

                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Send Email
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Schedule Call
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Add Note
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>Select a lead to view details</p>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedTab === "pipeline" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Sales Pipeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pipelineStages.map((stage, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">{stage.name}</h3>
                <p className="text-2xl font-bold text-blue-600">{stage.count}</p>
                <p className="text-sm text-gray-600">{stage.value}</p>
                <div className="mt-4 space-y-2">
                  {/* Placeholder for draggable lead cards */}
                  <div className="bg-white p-2 rounded border text-xs">
                    <p className="font-medium">Sample Lead</p>
                    <p className="text-gray-500">$5,000</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === "contacts" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Contact Management</h2>
          <div className="text-center text-gray-500 py-12">
            <p>Contact management features coming soon</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LeadsCRM
