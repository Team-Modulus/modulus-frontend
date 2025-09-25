import { useState } from 'react';
import { CreditCard, Plus, Download, Check } from 'lucide-react';

export default function BillingSubscription() {
  const [selectedPlan, setSelectedPlan] = useState('free');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      description: 'Perfect for small businesses',
      price: '$29/mo',
      features: ['Basic analytics', 'Up to 5 integrations', 'Email support']
    },
    {
      id: 'growth',
      name: 'Growth Plan',
      description: 'Most popular choice',
      price: '$79/mo',
      popular: true,
      features: ['Advanced analytics', 'Unlimited integrations', 'Priority support', 'Custom reports']
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      description: 'Advanced features',
      price: '$199/mo',
      features: ['Enterprise analytics', 'White-label options', 'Dedicated support', 'API access']
    }
  ];

  const billingHistory = [
    {
      month: 'June 2024',
      amount: '$0.00 (Trial)',
      status: 'paid'
    },
    {
      month: 'May 2024',
      amount: '$0.00 (Trial)',
      status: 'paid'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Subscription</h1>
          <p className="text-gray-600">Manage your subscription and payment methods</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Plan */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
              <p className="text-sm text-gray-600">Manage your subscription</p>
            </div>

            <div className="p-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-base font-semibold text-gray-900">Free Trial</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">14 days remaining</p>
                <p className="text-xs text-gray-500">Trial ends on July 5, 2024</p>
              </div>

              <div className="mb-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Upgrade Options</h4>
                <div className="space-y-3">
                  {plans.map((plan) => (
                    <div 
                      key={plan.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        plan.popular 
                          ? 'border-blue-500 bg-blue-50' 
                          : selectedPlan === plan.id 
                            ? 'border-gray-300 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center">
                            <h5 className="font-medium text-gray-900">{plan.name}</h5>
                            {plan.popular && (
                              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                                Most popular choice
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{plan.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{plan.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
              <p className="text-sm text-gray-600">Manage your payment information</p>
            </div>

            <div className="p-6">
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-50 rounded-lg mr-3">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-600">Expires 12/25</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                    Primary
                  </span>
                </div>
              </div>

              <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4 mr-2" />
                Add Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
          </div>

          <div className="divide-y divide-gray-200">
            {billingHistory.map((bill, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{bill.month}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-medium text-gray-900">{bill.amount}</p>
                  <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <Download className="w-3 h-3 mr-1" />
                    Download Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help with Billing?</h3>
          <p className="text-gray-600 mb-4">
            Have questions about your subscription or need to update your billing information? 
            Our support team is here to help you with any billing-related inquiries.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Billing Support
            </button>
            <button className="px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}