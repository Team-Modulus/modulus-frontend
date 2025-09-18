import { useState } from "react"

export default function HeroSection({ onWatchDemo }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">

            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="gradient-text">AI-Powered</span>
              
              <br />
              Marketing That
              <br />
              Actually Works
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
              Transform your marketing with intelligent automation. Create high-converting campaigns, optimize
              performance in real-time, and scale your business with the power of AI.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 group">
                <span className="group-hover:mr-2 transition-all duration-300">Start Free Trial</span>
                <svg className="inline-block w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={onWatchDemo}
                className="bg-white border-2 border-gray-300 text-gray-700 text-lg px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Watch Demo
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              ✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white  p-6 ">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                AI Powered
              </div>
              <img
                src="https://8476663.fs1.hubspotusercontent-na1.net/hubfs/8476663/CR24-000_Featured_Image.png"
                alt="AI Marketing Dashboard"
                className="w-full "
              />
            </div>
            
            {/* Floating popup elements */}
            <div className="absolute -top-12 -left-12 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg popup-message popup-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                +340% ROI
              </div>
              {/* Message tail */}
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-green-500"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-16 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg popup-message popup-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                AI Optimizing...
              </div>
              {/* Message tail */}
              <div className="absolute top-0 left-4 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-purple-600"></div>
            </div>
            
            <div className="absolute top-16 -left-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg popup-message popup-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Campaign Live!
              </div>
              {/* Message tail */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-blue-600"></div>
            </div>
            
            <div className="absolute bottom-16 -right-20 bg-gradient-to-r from-orange-500 to-orange-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg popup-message popup-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Leads +250%
              </div>
              {/* Message tail */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-orange-600"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .popup-message {
          opacity: 0;
          transform: scale(0.3) translateY(20px);
          animation: popupSlideIn 0.6s ease-out forwards;
        }

        .popup-1 {
          animation-delay: 1s;
        }

        .popup-2 {
          animation-delay: 1.5s;
        }

        .popup-3 {
          animation-delay: 2s;
        }

        .popup-4 {
          animation-delay: 2.5s;
        }

        @keyframes popupSlideIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(0px);
          }
          70% {
            transform: scale(0.95) translateY(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
            animation: floatGentle 3s ease-in-out infinite;
          }
        }

        .popup-message:nth-child(1) {
          animation: popupSlideIn 0.6s ease-out 1s forwards, floatGentle 3s ease-in-out 1.6s infinite;
        }

        .popup-message:nth-child(2) {
          animation: popupSlideIn 0.6s ease-out 1.5s forwards, floatGentle 3s ease-in-out 2.1s infinite;
        }

        .popup-message:nth-child(3) {
          animation: popupSlideIn 0.6s ease-out 2s forwards, floatGentle 3s ease-in-out 2.6s infinite;
        }

        .popup-message:nth-child(4) {
          animation: popupSlideIn 0.6s ease-out 2.5s forwards, floatGentle 3s ease-in-out 3.1s infinite;
        }

        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }

        /* Hover effects for interactive feel */
        .popup-message:hover {
          transform: scale(1.05) !important;
          transition: transform 0.2s ease-out;
        }

        /* Gradient text animation */
        .gradient-text {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #3b82f6, #8b5cf6);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}