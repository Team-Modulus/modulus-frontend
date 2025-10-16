import { useState, useContext } from 'react';
import { Eye, EyeOff, ArrowLeft, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../../context/AuthContext';
import API from '../../constants/Api';
import axios from 'axios';
import { auth, provider, signInWithPopup } from "../../config/firebase";
import { FullPageLoader } from '../../utils/loader';

export default function UnifiedAuthPage() {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(mainContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (mode === 'signup' && !validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (mode === 'signup') {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      if (!agreedToTerms) {
        newErrors.terms = 'You must agree to the Terms of Service and Privacy Policy';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    if (apiError) {
      setApiError('');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(API.auth.login, {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = res.data;
      setUser(user || null);
      setToken(token || "");
      localStorage.setItem("token", token || "");
      localStorage.setItem("user", JSON.stringify(user || null));
      navigate("/dashboard");
    } catch (err) {
      setApiError(
        err.response?.data?.msg ||
        err.response?.data?.message ||
        "Invalid email or password. Please try again."
      );
    }
  };

  const handleSignup = async () => {
    try {
      const { data } = await axios.post(API.auth.register, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        selectedPlatforms: [],
        agreedToTerms,
        subscribeToUpdates: false,
      });

      setUser(data.user || null);
      setToken(data.token || "");
      localStorage.setItem("user", JSON.stringify(data.user || null));
      localStorage.setItem("token", data.token || "");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setApiError(
        error.response?.data?.msg ||
        error.response?.data?.message ||
        error.message ||
        "An error occurred while creating your account. Please try again."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setApiError("");

    try {
      if (mode === 'login') {
        await handleLogin();
      } else {
        await handleSignup();
      }
    } catch (err) {
      console.error("Auth error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const { displayName, email, uid } = user;

      const res = await axios.post(API.auth.googlelogin, {
        name: displayName,
        email,
        firebaseUid: uid,
      });

      const { token, user: backendUser } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(backendUser));
      setUser(backendUser || null);
      setToken(token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Google auth error:", err);
      setApiError("Google authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setErrors({});
    setApiError('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
    setAgreedToTerms(false);
    setRememberMe(false);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <>
      {isLoading && <FullPageLoader />}
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-blue-400/10 to-indigo-400/10 animate-gradient-shift-reverse"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen p-4 relative z-10">
          
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Modulus.ai</span>
            </div>
          </div>

          {/* Auth Form Container */}
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6">
              
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                  {mode === 'login' ? 'Welcome back' : 'Create your account'}
                </h1>
                <p className="text-sm text-gray-600">
                  {mode === 'login' 
                    ? 'Sign in to your account to continue' 
                    : 'Get started with your free trial'
                  }
                </p>
              </div>

              {/* API Error Message */}
              {apiError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-2 text-sm text-red-700">{apiError}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Fields (Signup Only) */}
                {mode === 'signup' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                        className={`w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          errors.firstName 
                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Doe"
                        className={`w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          errors.lastName 
                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={mode === 'login' ? "Enter your email" : "john@company.com"}
                    className={`w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder={mode === 'login' ? "Enter your password" : "Create a strong password"}
                      className={`w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors pr-10 ${
                        errors.password 
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:ring-blue-500 focus:border-transparent'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                  )}
                  {mode === 'signup' && !errors.password && formData.password && (
                    <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters</p>
                  )}
                </div>

                {/* Login Options */}
                {mode === 'login' && (
                  <div className="flex items-center justify-between">
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
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Terms Agreement (Signup Only) */}
                {mode === 'signup' && (
                  <div className="space-y-3">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => {
                          setAgreedToTerms(e.target.checked);
                          if (errors.terms) {
                            setErrors(prev => {
                              const newErrors = { ...prev };
                              delete newErrors.terms;
                              return newErrors;
                            });
                          }
                        }}
                        className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 flex-shrink-0 ${
                          errors.terms ? 'border-red-300' : ''
                        }`}
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        I agree to the{' '}
                        <button type="button" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</button>
                        {' '}and{' '}
                        <button type="button" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</button>
                      </span>
                    </label>
                    {errors.terms && (
                      <p className="text-xs text-red-600 ml-6">{errors.terms}</p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading 
                    ? (mode === 'login' ? 'Signing In...' : 'Creating Account...') 
                    : (mode === 'login' ? 'Sign In' : 'Create Account')
                  }
                </button>
              </form>

              {/* Divider */}
              <div className="mt-5 mb-5">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or {mode === 'login' ? 'continue' : 'sign up'} with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  disabled={isLoading}
                  onClick={handleGoogleAuth}
                  className="flex items-center justify-center px-3 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button 
                  type="button"
                  disabled={isLoading}
                  className="flex items-center justify-center px-3 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 12c0-6.35-5.15-11.5-11.5-11.5S.5 5.65.5 12c0 5.74 4.21 10.49 9.71 11.34v-8.03H7.36V12h2.85V9.85c0-2.81 1.68-4.37 4.24-4.37 1.23 0 2.52.22 2.52.22v2.77h-1.42c-1.4 0-1.83.87-1.83 1.76V12h3.12l-.5 3.31h-2.62v8.03C19.29 22.49 23.5 17.74 23.5 12z"/>
                  </svg>
                  Microsoft
                </button>
              </div>

              {/* Mode Toggle Link */}
              <div className="mt-5 text-center">
                <span className="text-gray-600 text-sm">
                  {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button 
                  type="button"
                  onClick={toggleMode}
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm"
                >
                  {mode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </div>
            </div>

            {/* Back to Homepage */}
            <div className="mt-6 text-center">
              <button 
                type="button"
                onClick={handleBackToHome}
                className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to homepage
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gradient-shift {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          @keyframes gradient-shift-reverse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1.1) rotate(5deg);
            }
            50% {
              opacity: 1;
              transform: scale(1) rotate(-5deg);
            }
          }

          @keyframes blob {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }

          .animate-gradient-shift {
            animation: gradient-shift 8s ease-in-out infinite;
          }

          .animate-gradient-shift-reverse {
            animation: gradient-shift-reverse 10s ease-in-out infinite;
          }

          .animate-blob {
            animation: blob 12s ease-in-out infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </>
  );
}