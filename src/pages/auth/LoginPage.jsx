import { useState } from 'react';
import { BarChart3, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt with:', { email, password, rememberMe });
  };

  const handleSignUp = () => {
    // Navigation to signup would go here
    navigate("/signup")
    console.log('Navigate to signup');
  };

  const handleForgotPassword = () => {
    // Forgot password logic would go here
    console.log('Forgot password clicked');
  };

  const handleBackToHome = () => {
    // Navigate back to homepage
    console.log('Navigate to homepage');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        
        {/* Logo - Responsive sizing */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Modulus.ai</span>
          </div>
        </div>

        {/* Sign In Form Container - Responsive width */}
        <div className="w-full max-w-sm sm:max-w-md">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            
            {/* Header - Responsive text sizing */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
              <p className="text-sm sm:text-base text-gray-600">Sign in to your account to continue</p>
            </div>

            {/* Form - Responsive spacing */}
            <div className="space-y-4 sm:space-y-6">
              
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-12 text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password - Responsive layout */}
              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 xs:gap-0">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors text-left xs:text-right"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
              >
                Sign In
              </button>
            </div>

            {/* Divider */}
            <div className="mt-4 sm:mt-6 mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
            </div>

            {/* Social Login Buttons - Responsive text */}
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

            {/* Sign Up Link - Responsive text sizing */}
            <div className="mt-4 sm:mt-6 text-center">
              <span className="text-gray-600 text-sm sm:text-base">Don't have an account? </span>
              <button 
                onClick={handleSignUp}
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm sm:text-base"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Back to Homepage - Now in responsive flow */}
          <div className="mt-6 sm:mt-8 text-center">
            <button 
              onClick={handleBackToHome}
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}