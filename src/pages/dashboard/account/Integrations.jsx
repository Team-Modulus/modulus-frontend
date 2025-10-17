import { useState, useEffect } from "react";
import {
  BarChart3,
  Target,
  Facebook,
  Mail,
  Search,
  ShoppingBag,
  CreditCard,
  Check,
  X,
} from "lucide-react";
import axios from "axios";
import API from "../../../constants/Api";

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState({
    googleAds: false,
    facebookAds: false,
    mailchimp: false,
    googleAnalytics: false,
    shopify: false,
    stripe: false,
  });
  const [loading, setLoading] = useState(true);
  console.log(integrations);
  

  // ✅ Check connection status from backend
  useEffect(() => {
    const checkStatus = async () => {
      setLoading(true);
  
      try {
        const res = await axios.get(API.Connect.status, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
  
        const platforms = res?.data?.platforms || {};
        setIntegrations((prev) => ({
          ...prev,
          googleAds: platforms.googleAds?.connected === true,
          facebookAds: platforms.facebookAds?.connected === true,
          // keep others as-is unless you add them to backend
          // mailchimp, googleAnalytics, shopify, stripe remain unchanged
        }));
      } catch (err) {
        console.error("Error checking integration status", err);
     
      } finally {
        setLoading(false);
      }
    };
  
    checkStatus();
  }, []);



  // ✅ Facebook Connect
  const handleConnectFacebook = async () => {
    const res = await fetch(API.Connect.fb, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = await res.json();
    window.location.href = data.url; // FB OAuth redirect
  };

  // ✅ Facebook Disconnect
  const handleDisconnectFacebook = async () => {
    try {
      await axios.post(
        API.Connect.fbDisconnect,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIntegrations((prev) => ({ ...prev, facebookAds: false }));
    } catch (err) {
      console.error("Error disconnecting FB:", err);
    }
  };

  // ✅ Google Connect
  const handleConnectGoogle = async () => {
    try {
      const res = await fetch(API.Connect.google, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      window.location.href = data.url; // Google OAuth redirect
    } catch (err) {
      console.error("Google connect error:", err);
    }
  };

  // ✅ Google Disconnect
  const handleDisconnectGoogle = async () => {
    try {
      await axios.post(
        API.Connect.googleDisconnect,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIntegrations((prev) => ({ ...prev, googleAds: false }));
    } catch (err) {
      console.error("Error disconnecting Google:", err);
    }
  };

  // ✅ Integration Categories
  const integrationCategories = [
    {
      title: "Marketing & Analytics",
      description: "Advertising, campaigns, and customer analytics",
      icon: BarChart3,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      integrations: [
        {
          key: "googleAds",
          name: "Google Ads",
          description: "Advertising performance and campaign data",
          icon: Target,
          iconColor: "text-red-500",
          connect: handleConnectGoogle,
          disconnect: handleDisconnectGoogle,
        },
        {
          key: "facebookAds",
          name: "Facebook Ads",
          description: "Social media advertising campaigns",
          icon: Facebook,
          iconColor: "text-blue-600",
          connect: handleConnectFacebook,
          disconnect: handleDisconnectFacebook,
        },
        {
          key: "mailchimp",
          name: "Mailchimp",
          description: "Email marketing and automation data",
          icon: Mail,
          iconColor: "text-yellow-500",
        },
        {
          key: "googleAnalytics",
          name: "Google Analytics",
          description: "Website traffic and user behavior",
          icon: Search,
          iconColor: "text-orange-500",
        },
      ],
    },
    {
      title: "Sales & E-commerce",
      description: "Sales platforms and order management",
      icon: ShoppingBag,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      integrations: [
        {
          key: "shopify",
          name: "Shopify",
          description: "E-commerce platform for sales and order data",
          icon: ShoppingBag,
          iconColor: "text-green-600",
        },
      ],
    },
    {
      title: "Finance & Payments",
      description: "Payment processing and financial data",
      icon: CreditCard,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      integrations: [
        {
          key: "stripe",
          name: "Stripe",
          description: "Payment processing and financial data",
          icon: CreditCard,
          iconColor: "text-blue-500",
        },
      ],
    },
  ];

  if (loading) return <div className="p-10">Checking integrations...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Integrations</h1>
        <p className="text-gray-600">
          Manage your data connections and integrations
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {integrationCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div
                className={`${category.bgColor} px-6 py-4 rounded-t-lg border-b border-gray-200`}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-lg mr-4">
                    <category.icon
                      className={`w-6 h-6 ${category.iconColor}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Integration Items */}
              <div className="divide-y divide-gray-200">
                {category.integrations.map((integration, integrationIndex) => (
                  <div
                    key={integrationIndex}
                    className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-50 rounded-lg mr-4">
                        <integration.icon
                          className={`w-5 h-5 ${integration.iconColor}`}
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">
                          {integration.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {integration.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          integrations[integration.key]
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {integrations[integration.key]
                          ? "Connected"
                          : "Disconnected"}
                      </span>

                      <button
                        onClick={() =>
                          integrations[integration.key]
                            ? integration.disconnect?.()
                            : integration.connect?.()
                        }
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          integrations[integration.key]
                            ? "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                            : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                        }`}
                      >
                        {integrations[integration.key] ? (
                          <>
                            <X className="w-4 h-4 mr-1" />
                            Disconnect
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Connect
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
