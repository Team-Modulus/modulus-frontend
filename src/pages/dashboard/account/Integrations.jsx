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
  XCircle,
  CheckCircle,
  AlertCircle,
  Hash,
  Building2,
  FacebookIcon,
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
  const [fbAccounts, setFbAccounts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [fbLoading, setFbLoading] = useState(false);
  const [showFbPopup, setShowFbPopup] = useState(false);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [connectedCount, setConnectedCount] = useState(0); // Track number of connected accounts
  
  // Shopify state
  const [shopifyShops, setShopifyShops] = useState([]);
  const [shopifyLoading, setShopifyLoading] = useState(false);
  const [showShopifyPopup, setShowShopifyPopup] = useState(false);
  const [selectedShopifyShops, setSelectedShopifyShops] = useState([]);
  const [shopifyConnectedCount, setShopifyConnectedCount] = useState(0);
  
  console.log(integrations);

  // ✅ Enhanced: Check connection status and auto-fetch FB ads
  useEffect(() => {
    const checkStatus = async () => {
      setLoading(true);
  
      try {
        const res = await axios.get(API.Connect.status, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
  
        const platforms = res?.data?.platforms || {};
        const fbConnected = platforms.facebookAds?.connected === true;
        const googleConnected = platforms.googleAds?.connected === true;
        const shopifyConnected = platforms.shopify?.connected === true;
        
        setIntegrations((prev) => ({
          ...prev,
          googleAds: googleConnected,
          facebookAds: fbConnected,
          shopify: shopifyConnected,
          // keep others as-is unless you add them to backend
          // mailchimp, googleAnalytics, stripe remain unchanged
        }));

        // ✅ AUTO-FETCH: If Facebook is connected, fetch ad accounts
        if (fbConnected) {
          await fetchFacebookAds();
        }
        
        // ✅ AUTO-FETCH: If Shopify is connected, fetch shops
        if (shopifyConnected) {
          await fetchShopifyShops();
        }
        
      } catch (err) {
        console.error("Error checking integration status", err);
      } finally {
        setLoading(false);
      }
    };
  
    checkStatus();
  }, []); // Empty dependency array to run only on mount

  // ✅ Facebook Ads Fetcher with enhanced error handling
  const fetchFacebookAds = async () => {
    setFbLoading(true);
    try {
      const res = await axios.get(API.Connect.fbAds, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (res.data?.accounts) {
        setFbAccounts(res.data.accounts);
        console.log("Facebook Ad Accounts:", res.data.accounts);
        
        // ✅ Load currently connected accounts (multiple selection)
        const connectedAccounts = res.data.accounts.filter(acc => acc.connected || acc.isSelected);
        setSelectedAccounts(connectedAccounts.map(acc => acc.accountId));
        setConnectedCount(connectedAccounts.length);
      } else {
        console.log("No Facebook ad accounts found");
      }
    } catch (err) {
      console.error("Failed to fetch Facebook ad accounts", err);
      // Optional: Show user-friendly error message
    } finally {
      setFbLoading(false);
    }
  };

  // ✅ Shopify Shops Fetcher with enhanced error handling
  const fetchShopifyShops = async () => {
    setShopifyLoading(true);
    try {
      const res = await axios.get(API.Connect.shopifyShops, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      // Always set shops array (even if empty)
      const shops = res.data?.shops || [];
      setShopifyShops(shops);
      console.log("Shopify Shops:", shops);
      
      if (shops.length === 0) {
        console.log("No Shopify shops found");
        // Show warning if there's a message
        if (res.data?.message) {
          console.warn("Shopify shops message:", res.data.message);
        }
        if (res.data?.error) {
          console.error("Shopify shops error:", res.data.error);
        }
      } else {
        // ✅ Load currently connected shops (multiple selection)
        const connectedShops = shops.filter(shop => shop.connected || shop.isSelected);
        setSelectedShopifyShops(connectedShops.map(shop => shop.shopId || shop.shopDomain));
        setShopifyConnectedCount(connectedShops.length);
      }
    } catch (err) {
      console.error("Failed to fetch Shopify shops", err);
      // Set empty array on error
      setShopifyShops([]);
      setSelectedShopifyShops([]);
      setShopifyConnectedCount(0);
      
      // Show user-friendly error message
      if (err.response?.data?.error) {
        console.error("Error details:", err.response.data.error);
      }
    } finally {
      setShopifyLoading(false);
    }
  };

  // ✅ Handle Facebook Ads section click
  const handleFacebookAdsClick = async () => {
    setShowFbPopup(true);
    if (integrations.facebookAds && fbAccounts.length === 0) {
      await fetchFacebookAds();
    }
  };

  // ✅ Handle Shopify section click
  const handleShopifyClick = async () => {
    setShowShopifyPopup(true);
    if (integrations.shopify && shopifyShops.length === 0) {
      await fetchShopifyShops();
    }
  };

  // ✅ Toggle account selection (multiple selection support)
  const toggleAccountSelection = async (accountId) => {
    try {
      const res = await axios.post(
        API.Connect.fbConnectAccount,
        { accountId },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      const { message, account, connectedCount: newConnectedCount } = res.data;
      
      // Update state based on backend response
      if (account.connected) {
        // Account was connected - add to selected
        setSelectedAccounts(prev => [...prev.filter(id => id !== accountId), accountId]);
      } else {
        // Account was disconnected - remove from selected
        setSelectedAccounts(prev => prev.filter(id => id !== accountId));
      }
      
      // Update connected count
      setConnectedCount(newConnectedCount || 0);
      
      alert(message);
    } catch (err) {
      console.error("Failed to toggle account selection", err);
      alert("Failed to update account selection");
    }
  };

  // ✅ Facebook Connect - Enhanced with auto-fetch
  const handleConnectFacebook = async () => {
    const res = await fetch(API.Connect.fb, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = await res.json();
    window.location.href = data.url; // FB OAuth redirect
  };

  // ✅ Select specific account (multiple selection)
  const selectAccount = async (accountId) => {
    try {
      const res = await axios.post(
        API.Connect.fbConnectAccount,
        { accountId },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      const { message, account, connectedCount: newConnectedCount } = res.data;
      
      // Update state - add to selections if connected
      if (account.connected) {
        setSelectedAccounts(prev => [...prev.filter(id => id !== accountId), accountId]);
        setConnectedCount(newConnectedCount || 0);
      }
      
      alert(message);
    } catch (err) {
      console.error("Failed to connect account", err);
      alert("Failed to connect account");
    }
  };

  // ✅ Bulk select all accounts
  const selectAllAccounts = async () => {
    try {
      const unselectedAccounts = fbAccounts.filter(
        account => !selectedAccounts.includes(account.accountId)
      );
      
      let successCount = 0;
      for (const account of unselectedAccounts) {
        try {
          const res = await axios.post(
            API.Connect.fbConnectAccount,
            { accountId: account.accountId },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
          );
          if (res.data.account.connected) {
            successCount++;
          }
        } catch (err) {
          console.error(`Failed to connect account ${account.accountId}:`, err);
        }
      }
      
      // Refresh the accounts list
      await fetchFacebookAds();
      
      alert(`Connected ${successCount} account(s)`);
    } catch (err) {
      console.error("Failed to select all accounts", err);
      alert("Failed to select all accounts");
    }
  };

  // ✅ Deselect all accounts
  const deselectAllAccounts = async () => {
    try {
      let successCount = 0;
      for (const accountId of selectedAccounts) {
        try {
          const res = await axios.post(
            API.Connect.fbConnectAccount,
            { accountId },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
          );
          if (!res.data.account.connected) {
            successCount++;
          }
        } catch (err) {
          console.error(`Failed to disconnect account ${accountId}:`, err);
        }
      }
      
      // Update state
      setSelectedAccounts([]);
      setConnectedCount(0);
      
      alert(`Disconnected ${successCount} account(s)`);
    } catch (err) {
      console.error("Failed to deselect all accounts", err);
      alert("Failed to deselect all accounts");
    }
  };

  // ✅ Facebook Disconnect - Enhanced with state cleanup
  const handleDisconnectFacebook = async () => {
    try {
      await axios.post(
        API.Connect.fbDisconnect,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIntegrations((prev) => ({ ...prev, facebookAds: false }));
      // ✅ Clean up FB accounts when disconnecting
      setFbAccounts([]);
      setSelectedAccounts([]);
      setConnectedCount(0);
      setShowPopup(false);
      setShowFbPopup(false);
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

  // ✅ Toggle Shopify shop selection (multiple selection support)
  const toggleShopifyShopSelection = async (shopId) => {
    try {
      const res = await axios.post(
        API.Connect.shopifyConnectShop,
        { shopId },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      const { message, shop, connectedCount: newConnectedCount } = res.data;
      
      // Update state based on backend response
      if (shop.connected) {
        // Shop was connected - add to selected
        setSelectedShopifyShops(prev => [...prev.filter(id => id !== shopId), shopId]);
      } else {
        // Shop was disconnected - remove from selected
        setSelectedShopifyShops(prev => prev.filter(id => id !== shopId));
      }
      
      // Update connected count
      setShopifyConnectedCount(newConnectedCount || 0);
      
      alert(message);
    } catch (err) {
      console.error("Failed to toggle shop selection", err);
      alert("Failed to update shop selection");
    }
  };

  // ✅ Shopify Connect
  const handleConnectShopify = async () => {
    try {
      // Prompt user for shop domain
      const shopDomain = prompt("Enter your Shopify shop domain:\n(e.g., mystore.myshopify.com or just mystore)");
      
      if (!shopDomain || !shopDomain.trim()) {
        alert("Shop domain is required to connect Shopify");
        return;
      }

      const res = await fetch(`${API.Connect.shopify}?shopDomain=${encodeURIComponent(shopDomain.trim())}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || errorData.error || "Failed to connect Shopify");
        return;
      }
      
      const data = await res.json();
      window.location.href = data.url; // Shopify OAuth redirect
    } catch (err) {
      console.error("Shopify connect error:", err);
      alert("Failed to connect Shopify. Please try again.");
    }
  };

  // ✅ Shopify Disconnect - Enhanced with state cleanup
  const handleDisconnectShopify = async () => {
    try {
      await axios.post(
        API.Connect.shopifyDisconnect,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIntegrations((prev) => ({ ...prev, shopify: false }));
      // ✅ Clean up Shopify shops when disconnecting
      setShopifyShops([]);
      setSelectedShopifyShops([]);
      setShopifyConnectedCount(0);
      setShowShopifyPopup(false);
    } catch (err) {
      console.error("Error disconnecting Shopify:", err);
    }
  };

  // ✅ Bulk select all Shopify shops
  const selectAllShopifyShops = async () => {
    try {
      const unselectedShops = shopifyShops.filter(
        shop => !selectedShopifyShops.includes(shop.shopId || shop.shopDomain)
      );
      
      let successCount = 0;
      for (const shop of unselectedShops) {
        try {
          const res = await axios.post(
            API.Connect.shopifyConnectShop,
            { shopId: shop.shopId || shop.shopDomain },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
          );
          if (res.data.shop.connected) {
            successCount++;
          }
        } catch (err) {
          console.error(`Failed to connect shop ${shop.shopId || shop.shopDomain}:`, err);
        }
      }
      
      // Refresh the shops list
      await fetchShopifyShops();
      
      alert(`Connected ${successCount} shop(s)`);
    } catch (err) {
      console.error("Failed to select all shops", err);
      alert("Failed to select all shops");
    }
  };

  // ✅ Deselect all Shopify shops
  const deselectAllShopifyShops = async () => {
    try {
      let successCount = 0;
      for (const shopId of selectedShopifyShops) {
        try {
          const res = await axios.post(
            API.Connect.shopifyConnectShop,
            { shopId },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
          );
          if (!res.data.shop.connected) {
            successCount++;
          }
        } catch (err) {
          console.error(`Failed to disconnect shop ${shopId}:`, err);
        }
      }
      
      // Update state
      setSelectedShopifyShops([]);
      setShopifyConnectedCount(0);
      
      alert(`Disconnected ${successCount} shop(s)`);
    } catch (err) {
      console.error("Failed to deselect all shops", err);
      alert("Failed to deselect all shops");
    }
  };

  // ✅ Helper function to check if Shopify has connected shops (multiple selection)
  const hasShopifyShopsConnected = () => {
    return integrations.shopify && shopifyConnectedCount > 0;
  };

  // ✅ Helper function to check if Facebook has connected accounts (multiple selection)
  const hasFacebookAccountsConnected = () => {
    return integrations.facebookAds && connectedCount > 0;
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
          onClick: handleFacebookAdsClick, // ✅ Special click handler
          isClickable: true,
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
          onClick: handleShopifyClick, // ✅ Special click handler
          isClickable: true,
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
                    className={`px-6 py-4 flex items-center justify-between transition-colors ${
                      integration.isClickable 
                        ? "hover:bg-gray-50 cursor-pointer" 
                        : "hover:bg-gray-50"
                    }`}
                    onClick={integration.isClickable ? integration.onClick : undefined}
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
                      {/* ✅ Enhanced status indicator with connected count for Facebook and Shopify */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          integration.key === "facebookAds"
                            ? hasFacebookAccountsConnected()
                              ? "bg-green-100 text-green-800"
                              : integrations.facebookAds
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                            : integration.key === "shopify"
                            ? hasShopifyShopsConnected()
                              ? "bg-green-100 text-green-800"
                              : integrations.shopify
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                            : integrations[integration.key]
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {integration.key === "facebookAds"
                          ? hasFacebookAccountsConnected()
                            ? `${connectedCount} Connected`
                            : integrations.facebookAds
                            ? "Setup Required"
                            : "Disconnected"
                          : integration.key === "shopify"
                          ? hasShopifyShopsConnected()
                            ? `${shopifyConnectedCount} Connected`
                            : integrations.shopify
                            ? "Setup Required"
                            : "Disconnected"
                          : integrations[integration.key]
                          ? "Connected"
                          : "Disconnected"}
                      </span>

                      {/* ✅ Show loading for Facebook when fetching ads */}
                      {integration.key === "facebookAds" && fbLoading && (
                        <span className="text-xs text-blue-600">
                          Loading ads...
                        </span>
                      )}

                      {/* ✅ Show loading for Shopify when fetching shops */}
                      {integration.key === "shopify" && shopifyLoading && (
                        <span className="text-xs text-blue-600">
                          Loading shops...
                        </span>
                      )}

                      {/* ✅ Show action buttons only for non-clickable integrations */}
                      {!integration.isClickable && (
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
                      )}

                      {/* ✅ Show "Manage" button only when Facebook accounts are connected */}
                      {integration.isClickable && integration.key === "facebookAds" && (
                        <>
                          {hasFacebookAccountsConnected() ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                integration.onClick();
                              }}
                              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                            >
                              Manage
                            </button>
                          ) : integrations.facebookAds ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                integration.onClick();
                              }}
                              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200"
                            >
                              Setup
                            </button>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleConnectFacebook();
                              }}
                              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Connect
                            </button>
                          )}
                        </>
                      )}

                      {/* ✅ Show "Manage" button only when Shopify shops are connected */}
                      {integration.isClickable && integration.key === "shopify" && (
                        <>
                          {hasShopifyShopsConnected() ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                integration.onClick();
                              }}
                              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                            >
                              Manage
                            </button>
                          ) : integrations.shopify ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                integration.onClick();
                              }}
                              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200"
                            >
                              Setup
                            </button>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleConnectShopify();
                              }}
                              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Connect
                            </button>
                          )}
                        </>
                      )}

                      {/* ✅ Show "Manage" button for other clickable integrations */}
                      {integration.isClickable && integration.key !== "facebookAds" && integration.key !== "shopify" && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            integration.onClick();
                          }}
                          className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                        >
                          Manage
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Comprehensive Facebook Management Popup */}
     {showFbPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Facebook Ads</h2>
                    <p className="text-blue-100">Manage your ad accounts</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowFbPopup(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Enhanced Connection Status */}
              <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      integrations.facebookAds 
                        ? "bg-green-100 text-green-600" 
                        : "bg-red-100 text-red-600"
                    }`}>
                      {integrations.facebookAds ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <AlertCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Connection Status</h3>
                      <p className="text-gray-600">
                        {integrations.facebookAds 
                          ? "Successfully connected to Facebook Business" 
                          : "Connect to access your Facebook ad accounts"}
                      </p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    integrations.facebookAds
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}>
                    {integrations.facebookAds ? "Connected" : "Disconnected"}
                  </div>
                </div>
              </div>

              {/* Enhanced Connect/Disconnect Actions */}
              {!integrations.facebookAds ? (
                <div className="text-center py-8">
                  <button
                    onClick={handleConnectFacebook}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg font-semibold text-lg"
                  >
                    <FacebookIcon className="w-6 h-6 mr-3" />
                    Connect Facebook Ads
                  </button>
                  <p className="text-gray-500 mt-4 max-w-md mx-auto">
                    Connect your Facebook Business account to access ad campaigns, performance data, and manage your advertising efforts
                  </p>
                </div>
              ) : (
                <>
                  {/* Enhanced Ad Accounts Section */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Business Accounts</h3>
                          <p className="text-gray-600">Select accounts to sync data from</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {fbAccounts.length} Available
                        </span>
                        
                        {/* Connected Count Display */}
                        {connectedCount > 0 && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {connectedCount} Connected
                          </span>
                        )}
                        
                        {/* Bulk Action Buttons */}
                        {fbAccounts.length > 0 && (
                          <div className="flex space-x-2">
                            {selectedAccounts.length < fbAccounts.length && (
                              <button
                                onClick={selectAllAccounts}
                                className="px-3 py-1 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 rounded-md text-sm font-medium transition-colors"
                              >
                                Connect All
                              </button>
                            )}
                            {selectedAccounts.length > 0 && (
                              <button
                                onClick={deselectAllAccounts}
                                className="px-3 py-1 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-md text-sm font-medium transition-colors"
                              >
                                Disconnect All
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {fbAccounts.length > 0 ? (
                      <div className="grid gap-4">
                        {fbAccounts.map((account) => {
                          const isConnected = selectedAccounts.includes(account.accountId);
                          
                          return (
                            <div
                              key={account.accountId}
                              className={`p-5 border-2 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg ${
                                isConnected
                                  ? "border-blue-500 bg-blue-50 shadow-md"
                                  : "border-gray-200 hover:border-gray-300 bg-white"
                              }`}
                              onClick={() => toggleAccountSelection(account.accountId)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  {/* Business name prominent */}
                                  <div className="flex items-center space-x-3 mb-2">
                                    <h4 className="text-lg font-bold text-gray-900">
                                      {account.businessName}
                                    </h4>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      isConnected 
                                        ? "bg-green-100 text-green-800" 
                                        : "bg-gray-100 text-gray-800"
                                    }`}>
                                      {isConnected ? "Connected" : "Available"}
                                    </span>
                                  </div>
                                  
                                  {/* Account details secondary */}
                                  <p className="text-gray-700 font-medium mb-1">
                                    {account.accountName}
                                  </p>
                                  
                                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                      <Hash className="w-4 h-4" />
                                      <span>ID: {account.accountId}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Single Toggle Switch */}
                                <div className="ml-4">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleAccountSelection(account.accountId);
                                    }}
                                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                      isConnected
                                        ? "bg-blue-600 shadow-lg"
                                        : "bg-gray-300"
                                    }`}
                                  >
                                    <span
                                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 shadow-md ${
                                        isConnected
                                          ? "translate-x-6"
                                          : "translate-x-1"
                                      }`}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        {fbLoading ? (
                          <div className="space-y-3">
                            <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent mx-auto"></div>
                            <p>Loading ad accounts...</p>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <AlertCircle className="w-12 h-12 mx-auto text-gray-400" />
                            <p>No ad accounts found</p>
                            <p className="text-sm">Make sure you have access to Facebook ad accounts</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Enhanced Connected Accounts Summary */}
                  {connectedCount > 0 && (
                    <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-900">
                            {connectedCount} Account{connectedCount > 1 ? 's' : ''} Connected
                          </h4>
                          <p className="text-blue-700">
                            Data will be automatically synced from your selected business accounts
                          </p>
                          {/* Show connected account names */}
                          {fbAccounts.length > 0 && (
                            <div className="mt-2">
                              <p className="text-blue-600 text-sm font-medium">Connected:</p>
                              <div className="mt-1 space-y-1">
                                {fbAccounts
                                  .filter(acc => selectedAccounts.includes(acc.accountId))
                                  .map(acc => (
                                    <div key={acc.accountId} className="text-blue-600 text-sm">
                                      • {acc.businessName} - {acc.accountName}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{connectedCount}</div>
                          <div className="text-blue-500 text-xs">of {fbAccounts.length}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Disconnect Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      onClick={handleDisconnectFacebook}
                      className="w-full flex items-center justify-center px-4 py-3 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-colors border border-red-200 font-medium"
                    >
                      <XCircle className="w-5 h-5 mr-2" />
                      Disconnect Facebook Integration
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ✅ Comprehensive Shopify Management Popup */}
      {showShopifyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Shopify</h2>
                    <p className="text-green-100">Manage your shops</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowShopifyPopup(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Enhanced Connection Status */}
              <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      integrations.shopify 
                        ? "bg-green-100 text-green-600" 
                        : "bg-red-100 text-red-600"
                    }`}>
                      {integrations.shopify ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <AlertCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Connection Status</h3>
                      <p className="text-gray-600">
                        {integrations.shopify 
                          ? "Successfully connected to Shopify" 
                          : "Connect to access your Shopify shops"}
                      </p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    integrations.shopify
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}>
                    {integrations.shopify ? "Connected" : "Disconnected"}
                  </div>
                </div>
              </div>

              {/* Enhanced Connect/Disconnect Actions */}
              {!integrations.shopify ? (
                <div className="text-center py-8">
                  <button
                    onClick={handleConnectShopify}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg font-semibold text-lg"
                  >
                    <ShoppingBag className="w-6 h-6 mr-3" />
                    Connect Shopify
                  </button>
                  <p className="text-gray-500 mt-4 max-w-md mx-auto">
                    Connect your Shopify account to access orders, products, and manage your e-commerce data
                  </p>
                </div>
              ) : (
                <>
                  {/* Enhanced Shops Section */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Building2 className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Shops</h3>
                          <p className="text-gray-600">Select shops to sync data from</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {shopifyShops.length} Available
                        </span>
                        
                        {/* Connected Count Display */}
                        {shopifyConnectedCount > 0 && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {shopifyConnectedCount} Connected
                          </span>
                        )}
                        
                        {/* Bulk Action Buttons */}
                        {shopifyShops.length > 0 && (
                          <div className="flex space-x-2">
                            {selectedShopifyShops.length < shopifyShops.length && (
                              <button
                                onClick={selectAllShopifyShops}
                                className="px-3 py-1 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 rounded-md text-sm font-medium transition-colors"
                              >
                                Connect All
                              </button>
                            )}
                            {selectedShopifyShops.length > 0 && (
                              <button
                                onClick={deselectAllShopifyShops}
                                className="px-3 py-1 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-md text-sm font-medium transition-colors"
                              >
                                Disconnect All
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {shopifyShops.length > 0 ? (
                      <div className="grid gap-4">
                        {shopifyShops.map((shop) => {
                          const shopId = shop.shopId || shop.shopDomain;
                          const isConnected = selectedShopifyShops.includes(shopId);
                          
                          return (
                            <div
                              key={shopId}
                              className={`p-5 border-2 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg ${
                                isConnected
                                  ? "border-green-500 bg-green-50 shadow-md"
                                  : "border-gray-200 hover:border-gray-300 bg-white"
                              }`}
                              onClick={() => toggleShopifyShopSelection(shopId)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  {/* Shop name prominent */}
                                  <div className="flex items-center space-x-3 mb-2">
                                    <h4 className="text-lg font-bold text-gray-900">
                                      {shop.shopName || shop.shopDomain || shop.name}
                                    </h4>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      isConnected 
                                        ? "bg-green-100 text-green-800" 
                                        : "bg-gray-100 text-gray-800"
                                    }`}>
                                      {isConnected ? "Connected" : "Available"}
                                    </span>
                                  </div>
                                  
                                  {/* Shop details secondary */}
                                  {shop.shopDomain && (
                                    <p className="text-gray-700 font-medium mb-1">
                                      {shop.shopDomain}
                                    </p>
                                  )}
                                  
                                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                      <Hash className="w-4 h-4" />
                                      <span>ID: {shopId}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Single Toggle Switch */}
                                <div className="ml-4">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleShopifyShopSelection(shopId);
                                    }}
                                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                                      isConnected
                                        ? "bg-green-600 shadow-lg"
                                        : "bg-gray-300"
                                    }`}
                                  >
                                    <span
                                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 shadow-md ${
                                        isConnected
                                          ? "translate-x-6"
                                          : "translate-x-1"
                                      }`}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        {shopifyLoading ? (
                          <div className="space-y-3">
                            <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-600 border-t-transparent mx-auto"></div>
                            <p>Loading shops...</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <AlertCircle className="w-12 h-12 mx-auto text-gray-400" />
                            <div>
                              <p className="font-medium text-gray-700 mb-2">No shops found</p>
                              <p className="text-sm text-gray-500 mb-4">
                                This might happen if:
                              </p>
                              <ul className="text-sm text-gray-500 text-left max-w-md mx-auto space-y-1">
                                <li>• The shop wasn't properly connected during OAuth</li>
                                <li>• The access token has expired</li>
                                <li>• There was an error fetching shop data</li>
                              </ul>
                            </div>
                            <button
                              onClick={async () => {
                                await fetchShopifyShops();
                              }}
                              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                            >
                              Retry Fetching Shops
                            </button>
                            <p className="text-xs text-gray-400 mt-4">
                              If the issue persists, try disconnecting and reconnecting your Shopify account
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Enhanced Connected Shops Summary */}
                  {shopifyConnectedCount > 0 && (
                    <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-green-900">
                            {shopifyConnectedCount} Shop{shopifyConnectedCount > 1 ? 's' : ''} Connected
                          </h4>
                          <p className="text-green-700">
                            Data will be automatically synced from your selected shops
                          </p>
                          {/* Show connected shop names */}
                          {shopifyShops.length > 0 && (
                            <div className="mt-2">
                              <p className="text-green-600 text-sm font-medium">Connected:</p>
                              <div className="mt-1 space-y-1">
                                {shopifyShops
                                  .filter(shop => selectedShopifyShops.includes(shop.shopId || shop.shopDomain))
                                  .map(shop => (
                                    <div key={shop.shopId || shop.shopDomain} className="text-green-600 text-sm">
                                      • {shop.shopName || shop.shopDomain || shop.name}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{shopifyConnectedCount}</div>
                          <div className="text-green-500 text-xs">of {shopifyShops.length}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Disconnect Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      onClick={handleDisconnectShopify}
                      className="w-full flex items-center justify-center px-4 py-3 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-colors border border-red-200 font-medium"
                    >
                      <XCircle className="w-5 h-5 mr-2" />
                      Disconnect Shopify Integration
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}