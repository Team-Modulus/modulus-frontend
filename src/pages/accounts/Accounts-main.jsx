import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/Header';
import { mainContext } from '../../context/AuthContext';

const ConnectAccount = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState({});
  const { token, user, setUser } = useContext(mainContext); // Assuming user is available in context
  
  // Mapping between integration IDs and user.connectedChannels keys
  const channelMapping = {
    'shopify': 'shopify',
    'amazon-seller': 'amazonseller',
    'googleAds': 'googleAds',
    'meta-ads': 'metaads',
    'google-analytics': 'googleanalytics',
    'amazon-ads': 'amazonads',
    'flipkart-seller': 'flipkartseller',
    'nykaa': 'nykaa',
    'blinkit-b2b': 'blinkitb2b',
    'zepto': 'zepto'
  };

  // Check if integration is connected based on user.connectedChannels
  const isConnected = (integrationId) => {
    const channelKey = channelMapping[integrationId];
    return user?.connectedChannels?.[channelKey]?.connected || false;
  };

  // Get connection details
  const getConnectionDetails = (integrationId) => {
    const channelKey = channelMapping[integrationId];
    return user?.connectedChannels?.[channelKey] || { connected: false };
  };

  // Update user connection status locally and in backend
  const updateConnectionStatus = async (integrationId, connected, additionalData = {}) => {
    const channelKey = channelMapping[integrationId];
    
    // Update local user state
    const updatedUser = {
      ...user,
      connectedChannels: {
        ...user.connectedChannels,
        [channelKey]: {
          connected,
          connectedAt: connected ? new Date().toISOString() : null,
          ...additionalData
        }
      }
    };
    
    setUser(updatedUser);

    // Update backend
    try {
      await axios.patch(`http://localhost:5000/api/user/channels`, {
        [channelKey]: {
          connected,
          connectedAt: connected ? new Date().toISOString() : null,
          ...additionalData
        }
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (err) {
      console.error('Error updating connection status:', err);
      // Revert local state on error
      setUser(user);
    }
  };

  // Switch case API handler for different integration types
  const handleConnect = async (integrationId, integrationType) => {
    setLoading(prev => ({ ...prev, [integrationId]: true }));

    try {
      let endpoint, config;

      switch (integrationType) {
        case 'google':
          endpoint = "http://localhost:5000/api/google/connect";
          config = {
            headers: { Authorization: `Bearer ${token}` }
          };
          break;

        case 'meta':
          endpoint = "http://localhost:5000/api/facebook/connect";
          config = {
            headers: { Authorization: `Bearer ${token}` },
            data: { platform: 'facebook' }
          };
          break;

        case 'shopify':
          endpoint = "http://localhost:5000/api/shopify/connect";
          config = {
            headers: { Authorization: `Bearer ${token}` },
            data: { shop_domain: 'default' }
          };
          break;

        case 'amazon':
          endpoint = "http://localhost:5000/api/amazon/connect";
          config = {
            headers: { Authorization: `Bearer ${token}` },
            data: { marketplace: integrationId.includes('seller') ? 'seller' : 'ads' }
          };
          break;

        case 'analytics':
          endpoint = "http://localhost:5000/api/analytics/connect";
          config = {
            headers: { Authorization: `Bearer ${token}` }
          };
          break;

        default:
          throw new Error(`Unsupported integration type: ${integrationType}`);
      }

      const res = await axios.get(endpoint, config);
      const { url, directConnect } = res.data;
      
      if (url) {
        // OAuth flow - redirect to provider
        window.location.href = url;
      } else if (directConnect) {
        // Direct connection successful
        await updateConnectionStatus(integrationId, true, { 
          provider: integrationType,
          method: 'direct'
        });
      }

    } catch (err) {
      console.error(`Error connecting ${integrationType}:`, err);
      alert(`Connection failed for ${integrationType}`);
    } finally {
      setLoading(prev => ({ ...prev, [integrationId]: false }));
    }
  };

  const handleDisconnect = async (integrationId) => {
    try {
      const channelKey = channelMapping[integrationId];
      
      // Call disconnect API
      await axios.post(`http://localhost:5000/api/${channelKey}/disconnect`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Update connection status
      await updateConnectionStatus(integrationId, false);
      
    } catch (err) {
      console.error('Error disconnecting:', err);
      alert('Disconnection failed');
    }
  };

  const integrations = [
    { 
      id: 'shopify', 
      name: 'Shopify', 
      icon: '🛒', 
      color: 'bg-green-50 border-green-200', 
      iconBg: 'bg-green-100',
      type: 'shopify'
    },
    { 
      id: 'amazon-seller', 
      name: 'Amazon Seller', 
      icon: '📦', 
      color: 'bg-orange-50 border-orange-200', 
      iconBg: 'bg-orange-100',
      type: 'amazon'
    },
    { 
      id: 'googleAds', 
      name: 'Google Ads', 
      icon: '🎯', 
      color: 'bg-blue-50 border-blue-200', 
      iconBg: 'bg-blue-100',
      type: 'google'
    },
    { 
      id: 'meta-ads', 
      name: 'Meta Ads', 
      icon: '📘', 
      color: 'bg-blue-50 border-blue-200', 
      iconBg: 'bg-blue-100',
      type: 'meta'
    },
    { 
      id: 'google-analytics', 
      name: 'Analytics', 
      icon: '📈', 
      color: 'bg-purple-50 border-purple-200', 
      iconBg: 'bg-purple-100',
      type: 'analytics'
    },
    { 
      id: 'amazon-ads', 
      name: 'Amazon Ads', 
      icon: '📊', 
      color: 'bg-gray-50 border-gray-200', 
      iconBg: 'bg-gray-100',
      type: 'amazon'
    },
    { 
      id: 'flipkart-seller', 
      name: 'Flipkart', 
      icon: '🛒', 
      color: 'bg-indigo-50 border-indigo-200', 
      iconBg: 'bg-indigo-100',
      type: 'flipkart'
    },
    { 
      id: 'nykaa', 
      name: 'Nykaa', 
      icon: '💄', 
      color: 'bg-pink-50 border-pink-200', 
      iconBg: 'bg-pink-100',
      earlyAccess: true,
      type: 'nykaa'
    }
  ];

  const workspaces = [
    {
      id: 'daily-tracker',
      name: 'Daily Sales Tracker',
      description: 'Track daily performance across platforms',
      integrations: ['shopify', 'amazon-seller', 'google-ads'],
      category: 'Sales'
    },
    {
      id: 'consolidated-hub',
      name: 'Sales Hub',
      description: 'Unified business metrics view',
      integrations: ['shopify', 'amazon-seller', 'meta-ads'],
      category: 'Analytics'
    },
    {
      id: 'amazon-hub',
      name: 'Amazon Hub',
      description: 'Amazon performance tracking',
      integrations: ['amazon-seller', 'amazon-ads'],
      category: 'Marketplace'
    },
    {
      id: 'marketing-hub',
      name: 'Marketing Hub',
      description: 'Ad campaigns & performance',
      integrations: ['google-ads', 'meta-ads', 'google-analytics'],
      category: 'Marketing'
    }
  ];

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Count connected integrations
  const connectedCount = integrations.filter(integration => 
    isConnected(integration.id)
  ).length;

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Exo, sans-serif' }}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header />
          
          {/* Page Header */}
          <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                    <span className="mr-2 text-lg">←</span>
                    <span className="font-medium">Back</span>
                  </button>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <h1 className="text-2xl font-semibold text-gray-900">Connect Accounts</h1>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 font-medium">
                    {connectedCount} connected
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 text-sm">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                style={{ fontFamily: 'Exo, sans-serif' }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {/* Integrations Section */}
            <div className="max-w-7xl mx-auto px-6 mb-10">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Available Integrations</h2>
                <p className="text-sm text-gray-600">Connect your platforms to start tracking performance</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {filteredIntegrations.map((integration) => {
                  const connected = isConnected(integration.id);
                  const connectionDetails = getConnectionDetails(integration.id);
                  
                  return (
                    <div
                      key={integration.id}
                      className={`relative bg-white rounded-lg border-2 ${integration.color} p-3 hover:shadow-md transition-all duration-200 cursor-pointer group ${
                        connected ? 'ring-2 ring-green-200' : ''
                      }`}
                      onClick={() => !integration.earlyAccess && !connected && 
                               handleConnect(integration.id, integration.type)}
                    >
                      {/* Connection Status */}
                      <div className="absolute top-2 right-2">
                        {connected ? (
                          <div 
                            className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDisconnect(integration.id);
                            }}
                            title={`Connected ${connectionDetails.connectedAt ? 'on ' + new Date(connectionDetails.connectedAt).toLocaleDateString() : ''}`}
                          >
                            <span className="text-white text-xs group-hover:hidden">✓</span>
                            <span className="text-white text-xs hidden group-hover:block">×</span>
                          </div>
                        ) : integration.earlyAccess ? (
                          <div className="bg-purple-100 text-purple-700 text-xs px-1.5 py-0.5 rounded-full font-medium">
                            Soon
                          </div>
                        ) : loading[integration.id] ? (
                          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full hover:border-blue-500 transition-colors"></div>
                        )}
                      </div>

                      {/* Icon */}
                      <div className={`w-8 h-8 ${integration.iconBg} rounded-md flex items-center justify-center mb-2`}>
                        <span className="text-lg">{integration.icon}</span>
                      </div>
                      
                      {/* Name */}
                      <h3 className="font-medium text-gray-900 text-xs leading-tight">{integration.name}</h3>
                      
                      {/* Status */}
                      {connected && (
                        <p className="text-xs text-green-600 mt-1 font-medium">Connected</p>
                      )}
                      {integration.earlyAccess && !connected && (
                        <p className="text-xs text-purple-600 mt-1 font-medium">Early Access</p>
                      )}
                      {!connected && !integration.earlyAccess && (
                        <p className="text-xs text-gray-500 mt-1">Click to connect</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connected Channels Debug Info (Development only) */}
            {/* {process.env.NODE_ENV === 'development' && user?.connectedChannels && (
              <div className="max-w-7xl mx-auto px-6 mb-6">
                <details className="bg-gray-100 rounded-lg p-4">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700">
                    Debug: Connected Channels Data
                  </summary>
                  <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                    {JSON.stringify(user.connectedChannels, null, 2)}
                  </pre>
                </details>
              </div>
            )} */}

            {/* Workspaces Section */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Available Workspaces</h2>
                  <p className="text-sm text-gray-600">Pre-built dashboards for different use cases</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  View all →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {workspaces.map((workspace) => {
                  const connectedIntegrations = workspace.integrations.filter(intId => 
                    isConnected(intId)
                  );
                  const canActivate = connectedIntegrations.length > 0;
                  
                  return (
                    <div key={workspace.id} className={`bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow cursor-pointer ${
                      !canActivate ? 'opacity-60' : ''
                    }`}>
                      {/* Category Badge & Status */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                          {workspace.category}
                        </span>
                        <div className="flex -space-x-1">
                          {workspace.integrations.slice(0, 3).map((intId) => {
                            const integration = integrations.find(i => i.id === intId);
                            const connected = isConnected(intId);
                            return integration ? (
                              <div 
                                key={intId} 
                                className={`w-5 h-5 ${integration.iconBg} rounded border-2 border-white flex items-center justify-center text-xs relative ${
                                  connected ? 'ring-1 ring-green-400' : 'opacity-50'
                                }`}
                                title={`${integration.name} - ${connected ? 'Connected' : 'Not connected'}`}
                              >
                                {integration.icon}
                                {connected && (
                                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                                )}
                              </div>
                            ) : null;
                          })}
                          {workspace.integrations.length > 3 && (
                            <div className="w-5 h-5 bg-gray-100 rounded border-2 border-white flex items-center justify-center text-xs text-gray-500">
                              +{workspace.integrations.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">{workspace.name}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">{workspace.description}</p>
                      
                      {/* Requirements */}
                      {!canActivate && (
                        <p className="text-xs text-amber-600 mb-2">
                          Connect required integrations to activate
                        </p>
                      )}
                      
                      {/* Action */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <button 
                          className={`font-medium text-xs ${
                            canActivate 
                              ? 'text-blue-600 hover:text-blue-800' 
                              : 'text-gray-400 cursor-not-allowed'
                          }`}
                          disabled={!canActivate}
                        >
                          {canActivate ? 'Set up workspace →' : 'Setup blocked'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectAccount;