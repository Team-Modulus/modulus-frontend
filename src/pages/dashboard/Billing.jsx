// "use client"

// import { useState } from "react"

// const Billing = () => {
//   const [selectedPlan, setSelectedPlan] = useState("pro")
//   const [billingCycle, setBillingCycle] = useState("monthly")

//   const plans = [
//     {
//       id: "starter",
//       name: "Starter",
//       monthlyPrice: 29,
//       yearlyPrice: 290,
//       features: ["Up to 5 campaigns", "Basic analytics", "Email support", "1 user account"],
//     },
//     {
//       id: "pro",
//       name: "Professional",
//       monthlyPrice: 99,
//       yearlyPrice: 990,
//       features: [
//         "Unlimited campaigns",
//         "Advanced analytics",
//         "Priority support",
//         "5 user accounts",
//         "AI ad creation",
//         "Custom integrations",
//       ],
//     },
//     {
//       id: "enterprise",
//       name: "Enterprise",
//       monthlyPrice: 299,
//       yearlyPrice: 2990,
//       features: [
//         "Everything in Pro",
//         "White-label solution",
//         "Dedicated account manager",
//         "Unlimited users",
//         "Custom AI models",
//         "SLA guarantee",
//       ],
//     },
//   ]

//   const invoices = [
//     {
//       id: "INV-001",
//       date: "2024-01-15",
//       amount: "$99.00",
//       status: "paid",
//       plan: "Professional",
//     },
//     {
//       id: "INV-002",
//       date: "2023-12-15",
//       amount: "$99.00",
//       status: "paid",
//       plan: "Professional",
//     },
//     {
//       id: "INV-003",
//       date: "2023-11-15",
//       amount: "$99.00",
//       status: "paid",
//       plan: "Professional",
//     },
//   ]

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
//         <p className="text-gray-600">Manage your subscription and billing information</p>
//       </div>

//       {/* Current Plan */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h2>
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="text-xl font-bold text-blue-600">Professional Plan</h3>
//             <p className="text-gray-600">$99/month • Next billing: February 15, 2024</p>
//           </div>
//           <div className="text-right">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//               Upgrade Plan
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Plan Comparison */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-lg font-semibold text-gray-900">Available Plans</h2>
//           <div className="flex items-center space-x-4">
//             <span className="text-sm text-gray-600">Monthly</span>
//             <button
//               onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
//               className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                 billingCycle === "yearly" ? "bg-blue-600" : "bg-gray-200"
//               }`}
//             >
//               <span
//                 className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                   billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
//                 }`}
//               />
//             </button>
//             <span className="text-sm text-gray-600">Yearly (Save 20%)</span>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`border rounded-xl p-6 ${
//                 selectedPlan === plan.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
//               }`}
//             >
//               <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
//               <div className="mt-4">
//                 <span className="text-3xl font-bold text-gray-900">
//                   ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
//                 </span>
//                 <span className="text-gray-600">/{billingCycle === "monthly" ? "month" : "year"}</span>
//               </div>
//               <ul className="mt-6 space-y-3">
//                 {plan.features.map((feature, index) => (
//                   <li key={index} className="flex items-center text-sm text-gray-600">
//                     <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={() => setSelectedPlan(plan.id)}
//                 className={`w-full mt-6 py-2 px-4 rounded-lg font-medium transition-colors ${
//                   selectedPlan === plan.id
//                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                     : "border border-gray-300 text-gray-700 hover:bg-gray-50"
//                 }`}
//               >
//                 {selectedPlan === plan.id ? "Current Plan" : "Select Plan"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Payment Method */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
//               <span className="text-white text-xs font-bold">VISA</span>
//             </div>
//             <div>
//               <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
//               <p className="text-sm text-gray-600">Expires 12/25</p>
//             </div>
//           </div>
//           <button className="text-blue-600 hover:text-blue-700 font-medium">Update</button>
//         </div>
//       </div>

//       {/* Billing History */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-200">
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Invoice</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Plan</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {invoices.map((invoice) => (
//                 <tr key={invoice.id} className="border-b border-gray-100">
//                   <td className="py-3 px-4 font-medium text-gray-900">{invoice.id}</td>
//                   <td className="py-3 px-4 text-gray-600">{invoice.date}</td>
//                   <td className="py-3 px-4 text-gray-600">{invoice.plan}</td>
//                   <td className="py-3 px-4 text-gray-900">{invoice.amount}</td>
//                   <td className="py-3 px-4">
//                     <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
//                       {invoice.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4">
//                     <button className="text-blue-600 hover:text-blue-700 text-sm">Download</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Billing
