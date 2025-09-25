import { Plus } from "lucide-react";

export default function WelcomePage({
  title,
  subtitle,
  heroIcon: HeroIcon,
  heroText,
  heroButton,
  features,
  cta,
  onButtonClick, 
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-12 mb-12 text-center border border-green-100">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-4">
              <HeroIcon className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">{heroText}</h2>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          onClick={onButtonClick}>
            <Plus className="w-5 h-5 mr-2" />
            {heroButton}
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${feature.bgColor} rounded-xl mb-6`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {cta.title}
            </h3>
            <p className="text-gray-600 mb-6">{cta.description}</p>
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
              {cta.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
