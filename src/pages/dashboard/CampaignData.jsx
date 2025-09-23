import { Facebook, Instagram, Youtube } from "lucide-react";

export default function CampaignsDashboard() {
  const campaigns = [
    {
      name: "Summer Sale Campaign",
      platform: "Google Ads",
      spend: "$2,450",
      revenue: "$7,350",
      roas: "3.0x",
      clicks: 850,
      status: "Active",
      icon: () => (
        <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
          G
        </span>
      ),
    },
    {
      name: "Facebook Retargeting",
      platform: "Facebook Ads",
      spend: "$1,200",
      revenue: "$4,800",
      roas: "4.0x",
      clicks: 320,
      status: "Active",
      icon: Facebook,
    },
    {
      name: "Instagram Stories",
      platform: "Instagram Ads",
      spend: "$800",
      revenue: "$2,400",
      roas: "3.0x",
      clicks: 280,
      status: "Paused",
      icon: Instagram,
    },
    {
      name: "YouTube Video Ads",
      platform: "YouTube",
      spend: "$1,500",
      revenue: "$5,250",
      roas: "3.5x",
      clicks: 420,
      status: "Active",
      icon: Youtube,
    },
  ];

  const highlights = [
    {
      title: "Best Performing",
      value: "Facebook Retargeting",
      subtitle: "4.0x ROAS",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Highest Revenue",
      value: "Summer Sale Campaign",
      subtitle: "$7,350 generated",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      title: "Needs Attention",
      value: "Instagram Stories",
      subtitle: "Currently paused",
      color: "bg-red-50 text-red-700 border-red-200",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaigns</h1>
          <p className="text-gray-600">
            Manage your marketing campaigns across platforms
          </p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
          + Create Campaign
        </button>
      </div>

      {/* Campaigns List */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Active Campaigns
          </h2>
          <p className="text-sm text-gray-600">
            Manage your marketing campaigns
          </p>
        </div>
        <div>
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 last:border-none hover:bg-gray-50 transition"
            >
              {/* Left Section */}
              <div className="flex items-center gap-3">
                {typeof campaign.icon === "function" ? (
                  campaign.icon()
                ) : (
                  <campaign.icon className="w-5 h-5 text-gray-700" />
                )}
                <div>
                  <p className="font-medium text-gray-900">{campaign.name}</p>
                  <p className="text-xs text-gray-500">{campaign.platform}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="font-medium text-gray-900">{campaign.spend}</p>
                  <p className="text-xs text-gray-500">Spend</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{campaign.revenue}</p>
                  <p className="text-xs text-gray-500">Revenue</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{campaign.roas}</p>
                  <p className="text-xs text-gray-500">ROAS</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{campaign.clicks}</p>
                  <p className="text-xs text-gray-500">Clicks</p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    campaign.status === "Active"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
                >
                  {campaign.status}
                </span>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100">
                  ⏯
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border shadow-sm ${item.color}`}
          >
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-lg font-semibold mt-1">{item.value}</p>
            <p className="text-xs mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
