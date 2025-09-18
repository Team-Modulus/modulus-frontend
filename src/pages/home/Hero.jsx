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
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button
                onClick={onWatchDemo}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              ✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                AI Powered
              </div>
              <img
                src="/placeholder-8md1p.png"
                alt="AI Marketing Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium animate-pulse-ai">
              +340% ROI
            </div>
            <div className="absolute -bottom-4 -right-8 bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium animate-pulse-ai">
              AI Optimizing...
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}