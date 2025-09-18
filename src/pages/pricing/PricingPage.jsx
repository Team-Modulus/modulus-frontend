import { useState } from "react"
import PricingHero from "./PricingHero"
import PricingCards from "./PricingCards"
import ComparisonTable from "./ComparisonTable"
import FAQSection from "./FAQ"
import PricingCTA from "./PricingCTA"

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const handleBillingChange = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
  }

  return (
    <div className="min-h-screen bg-white">
      <PricingHero 
        billingCycle={billingCycle} 
        onBillingChange={handleBillingChange} 
      />
      <PricingCards billingCycle={billingCycle} />
      <ComparisonTable/>
      <FAQSection />
      <PricingCTA />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 2s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default PricingPage