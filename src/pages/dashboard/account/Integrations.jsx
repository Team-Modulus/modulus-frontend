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
        
        setIntegrations((prev) => ({
          ...prev,
          googleAds: googleConnected,
          facebookAds: fbConnected,
          // keep others as-is unless you add them to backend
          // mailchimp, googleAnalytics, shopify, stripe remain unchanged
        }));

        // ✅ AUTO-FETCH: If Facebook is connected, fetch ad accounts
        if (fbConnected) {
          await fetchFacebookAds();
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

  // ✅ Handle Facebook Ads section click
  const handleFacebookAdsClick = async () => {
    setShowFbPopup(true);
    if (integrations.facebookAds && fbAccounts.length === 0) {
      await fetchFacebookAds();
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
                      {/* ✅ Enhanced status indicator with connected count for Facebook */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          integration.key === "facebookAds"
                            ? hasFacebookAccountsConnected()
                              ? "bg-green-100 text-green-800"
                              : integrations.facebookAds
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

                      {/* ✅ Show "Manage" button for other clickable integrations */}
                      {integration.isClickable && integration.key !== "facebookAds" && (
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

    </div>
  );
}