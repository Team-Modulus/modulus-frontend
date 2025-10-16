import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../../context/AuthContext';

const Login = () => {
  const { token, setToken, user, setUser } = useContext(mainContext);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: 'test@gmail.com',
    password: '12345'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://modulus-odn4.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Login failed');
      }
      localStorage.setItem('token', data.token);
      setToken(data.token);
      
      
      // Redirect to dashboard or home page
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-32">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Multiple flowing wave paths */}
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M-100,${200 + i * 60} Q300,${150 + i * 60} 600,${200 + i * 60} T1300,${200 + i * 60}`}
              stroke="url(#waveGradient)"
              strokeWidth="2"
              fill="none"
              className={`animate-pulse`}
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            >
              <animate
                attributeName="d"
                dur={`${8 + i}s`}
                repeatCount="indefinite"
                values={`M-100,${200 + i * 60} Q300,${150 + i * 60} 600,${200 + i * 60} T1300,${200 + i * 60};
                         M-100,${200 + i * 60} Q300,${250 + i * 60} 600,${150 + i * 60} T1300,${200 + i * 60};
                         M-100,${200 + i * 60} Q300,${150 + i * 60} 600,${200 + i * 60} T1300,${200 + i * 60}`}
              />
            </path>
          ))}
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-12 py-8">
        {/* Left Content */}
        <div className={`flex-1 w-full max-w-3xl transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} text-center lg:text-left`}>
          {/* Brand Logo */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-wider">
              Modulus.ai
              <span className="text-purple-400">°</span>
            </h1>
          </div>

          {/* Main Heading */}
          <div className="mb-4 lg:mb-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Data<br className="hidden sm:block" />
              Co-Pilot for<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                Online
              </span> Brands
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-purple-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Insights and dashboards to accelerate<br className="hidden sm:block" />
            your <span className="text-pink-400 font-semibold">brand's growth</span>
          </p>

          {/* Demo Badge */}
          <div className="mt-6 lg:mt-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/30 border border-purple-400/30 text-purple-200 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Demo Environment
            </span>
          </div>
        </div>

        {/* Right Login Form */}
        <div className={`w-full max-w-md transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Login</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@martecko.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button type="button" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                  Forgot Password
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>

              {/* Create Account */}
              <div className="text-center text-sm text-gray-300">
                Don't have an account?{' '}
                <button type="button" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;