import { useState } from 'react';
import { BarChart3, Eye, EyeOff, ChevronDown, ArrowLeft, Check } from 'lucide-react';

export default function SignUpFlow() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [subscribeToUpdates, setSubscribeToUpdates] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    industry: '',
    annualRevenue: ''
  });

  const industries = [
    'E-commerce',
    'Retail',
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Education',
    'Other'
  ];

  const revenueRanges = [
    'Less than $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M - $10M',
    'More than $10M'
  ];

  const platforms = [
    { name: 'Shopify', description: 'E-commerce platform' },
    { name: 'WooCommerce', description: 'WordPress e-commerce' },
    { name: 'BigCommerce', description: 'Enterprise e-commerce' },
    { name: 'Facebook Ads', description: 'Social media advertising' },
    { name: 'Google Ads', description: 'Search advertising' },
    { name: 'Mailchimp', description: 'Email marketing' }
  ];

  const getProgress = () => {
    switch(step) {
      case 1: return 33;
      case 2: return 67;
      case 3: return 100;
      default: return 0;
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const togglePlatform = (platformName) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformName)
        ? prev.filter(p => p !== platformName)
        : [...prev, platformName]
    );
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCreateAccount = () => {
    console.log('Creating account with:', {
      ...formData,
      selectedPlatforms,
      agreedToTerms,
      subscribeToUpdates
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        
        {/* Logo - Responsive positioning */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Modulus.ai</span>
          </div>
        </div>

        {/* Progress Bar - Better responsive container */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm text-gray-600">Step {step} of 3</span>
            <span className="text-xs sm:text-sm text-gray-600">{getProgress()}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gray-900 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content Container - Responsive width and centering */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            
            {/* Step 1: Create Account */}
            {step === 1 && (
              <div>
                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Create your account</h1>
                  <p className="text-sm sm:text-base text-gray-600">Get started with your free trial</p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Create a strong password"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 text-sm sm:text-base"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={nextStep}
                    className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
                  >
                    Continue
                  </button>

                  <div className="text-center">
                    <span className="text-gray-600 text-sm sm:text-base">Or sign up with</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="hidden xs:inline">Google</span>
                      {/* <span className="xs:hidden">G</span> */}
                    </button>
                    <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.5 12c0-6.35-5.15-11.5-11.5-11.5S.5 5.65.5 12c0 5.74 4.21 10.49 9.71 11.34v-8.03H7.36V12h2.85V9.85c0-2.81 1.68-4.37 4.24-4.37 1.23 0 2.52.22 2.52.22v2.77h-1.42c-1.4 0-1.83.87-1.83 1.76V12h3.12l-.5 3.31h-2.62v8.03C19.29 22.49 23.5 17.74 23.5 12z"/>
                      </svg>
                      <span className="hidden xs:inline">Microsoft</span>
                      {/* <span className="xs:hidden">M</span> */}
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-gray-600 text-sm sm:text-base">Already have an account? </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">Sign in</button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {step === 2 && (
              <div>
                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Tell us about your business</h1>
                  <p className="text-sm sm:text-base text-gray-600">Help us personalize your experience</p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Your Company Inc."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <div className="relative">
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm sm:text-base"
                      >
                        <option value="">Select your industry</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue</label>
                    <div className="relative">
                      <select
                        value={formData.annualRevenue}
                        onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm sm:text-base"
                      >
                        <option value="">Select revenue range</option>
                        {revenueRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={prevStep}
                      className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
                    >
                      Continue
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-gray-600 text-sm sm:text-base">Already have an account? </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">Sign in</button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Platform Selection */}
            {step === 3 && (
              <div>
                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Connect your platforms</h1>
                  <p className="text-sm sm:text-base text-gray-600">Choose which platforms to integrate</p>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-xs sm:text-sm text-gray-600">Select the platforms you currently use. You can connect them later.</p>
                  
                  {platforms.map(platform => (
                    <button
                      key={platform.name}
                      onClick={() => togglePlatform(platform.name)}
                      className={`w-full p-3 sm:p-4 border rounded-lg text-left transition-all ${
                        selectedPlatforms.includes(platform.name)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">{platform.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{platform.description}</p>
                        </div>
                        {selectedPlatforms.includes(platform.name) && (
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="ml-2 text-xs sm:text-sm text-gray-700">
                      I agree to the{' '}
                      <button className="text-blue-600 hover:text-blue-800 underline">Terms of Service</button>
                      {' '}and{' '}
                      <button className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</button>
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={subscribeToUpdates}
                      onChange={(e) => setSubscribeToUpdates(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="ml-2 text-xs sm:text-sm text-gray-700">
                      Send me product updates and marketing emails
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCreateAccount}
                    disabled={!agreedToTerms}
                    className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    Create Account
                  </button>
                </div>

                <div className="text-center mt-6">
                  <span className="text-gray-600 text-sm sm:text-base">Already have an account? </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">Sign in</button>
                </div>
              </div>
            )}
          </div>

          {/* Back to Homepage - Now in responsive flow */}
          <div className="mt-6 sm:mt-8 text-center">
            <button className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}