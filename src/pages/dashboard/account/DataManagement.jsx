import React, { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const DataManagementPage = () => {
  const [analyticsRetention, setAnalyticsRetention] = useState('2 Years');
  const [customerRetention, setCustomerRetention] = useState('5 Years');

  const exportOptions = [
    { label: 'Export Dashboard Data', id: 'dashboard' },
    { label: 'Export Customer Data', id: 'customer' },
    { label: 'Export Financial Reports', id: 'financial' },
    { label: 'Export All Data', id: 'all' }
  ];

  const handleExport = (type) => {
    console.log(`Exporting ${type} data...`);
    // Export logic would go here
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to permanently delete your account? This action cannot be undone.')) {
      console.log('Deleting account...');
      // Delete account logic would go here
    }
  };

  return (
    <div className="max-w-6xl mx-auto   min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Data Management</h1>
        <p className="text-gray-600">Export data and manage privacy settings</p>
      </div>

      {/* Data Export Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Data Export</h2>
          <p className="text-sm text-gray-600">Download your data</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exportOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleExport(option.id)}
              className="flex items-center justify-center gap-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Download className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Data Retention Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Data Retention</h2>
          <p className="text-sm text-gray-600">Control how long data is stored</p>
        </div>

        <div className="space-y-4">
          {/* Analytics Data */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">Analytics Data</h3>
              <p className="text-xs text-gray-600">Dashboard and reporting data</p>
            </div>
            <div className="relative">
              <select
                value={analyticsRetention}
                onChange={(e) => setAnalyticsRetention(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>
                <option>5 Years</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Customer Data */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">Customer Data</h3>
              <p className="text-xs text-gray-600">Personal and behavioral data</p>
            </div>
            <div className="relative">
              <select
                value={customerRetention}
                onChange={(e) => setCustomerRetention(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>2 Years</option>
                <option>3 Years</option>
                <option>5 Years</option>
                <option>7 Years</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone Section */}
      <div className="bg-white rounded-lg border border-red-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-red-900 mb-1">Danger Zone</h2>
          <p className="text-sm text-red-600">Irreversible actions</p>
        </div>

        <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-red-900">Delete Account</h3>
            <p className="text-xs text-red-700">Permanently delete your account and all data</p>
          </div>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataManagementPage;