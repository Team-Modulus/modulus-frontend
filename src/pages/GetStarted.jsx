export const GetStartedPage = ({ setCurrentPage }) => {
  const [step, setStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState({
    businessType: '',
    goals: [],
    budget: '',
    experience: ''
  });

  const businessTypes = [
    'E-commerce', 'SaaS', 'Local Business', 'Restaurant', 'Real Estate', 
    'Healthcare', 'Education', 'Finance', 'Other'
  ];

  const goals = [
    'Lead Generation', 'Brand Awareness', 'Sales', 'App Installs', 
    'Website Traffic', 'Engagement', 'Conversions'
  ];

  const budgets = [
    '$500 - $1,000', '$1,000 - $5,000', '$5,000 - $10,000', 
    '$10,000 - $25,000', '$25,000+'
  ];

  const handleGoalToggle = (goal) => {
    setOnboardingData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) 
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    console.log('Onboarding completed:', onboardingData);
    // Handle onboarding completion
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Modulus
          </h1>
          <p className="text-gray-600 mt-2">Let's set up your AI-powered campaigns</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {step} of 4</span>
            <span className="text-sm text-gray-600">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What type of business do you have?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {businessTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setOnboardingData(prev => ({ ...prev, businessType: type }))}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      onboardingData.businessType === type
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What are your main goals? (Select all that apply)</h2>
              <div className="grid grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => handleGoalToggle(goal)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      onboardingData.goals.includes(goal)
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's your monthly advertising budget?</h2>
              <div className="space-y-4">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    onClick={() => setOnboardingData(prev => ({ ...prev, budget }))}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      onboardingData.budget === budget
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How experienced are you with digital advertising?</h2>
              <div className="space-y-4">
                {['Beginner - New to digital ads', 'Intermediate - Some experience', 'Advanced - Very experienced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setOnboardingData(prev => ({ ...prev, experience: level }))}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      onboardingData.experience === level
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={step === 1 ? () => setCurrentPage('landing') : handleBack}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              {step === 1 ? '← Back to Home' : 'Back'}
            </button>
            
            <button
              onClick={step === 4 ? handleComplete : handleNext}
              disabled={
                (step === 1 && !onboardingData.businessType) ||
                (step === 2 && onboardingData.goals.length === 0) ||
                (step === 3 && !onboardingData.budget) ||
                (step === 4 && !onboardingData.experience)
              }
              className="px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 4 ? 'Complete Setup' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
