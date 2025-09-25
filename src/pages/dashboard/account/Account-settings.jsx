import { useState } from 'react';
import { Camera, Eye, EyeOff } from 'lucide-react';

export default function AccountSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [enable2FA, setEnable2FA] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@company.com',
    company: 'Your Company Inc.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your profile and security settings</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Information</h3>
              <p className="text-sm text-gray-600">Update your personal information</p>
            </div>

            {/* Profile Photo */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <Camera className="w-3 h-3 text-white" />
                  </button>
                </div>
                <div>
                  <button className="text-sm font-medium text-gray-900 hover:text-gray-700">
                    Change Photo
                  </button>
                  <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Save Changes
            </button>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">Manage your password and security settings</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Update Password
            </button>

            {/* Two-Factor Authentication */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-semibold text-gray-900">Two-Factor Authentication</h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enable2FA}
                    onChange={(e) => setEnable2FA(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm text-gray-700">Enable 2FA</span>
                </label>
              </div>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
              <p className="text-xs text-gray-500 mt-1">Currently disabled</p>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Notifications</h3>
            <p className="text-sm text-gray-600">Configure how you receive notifications</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}