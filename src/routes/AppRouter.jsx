import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../utils/ErrorBoundary.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
// import Dashboard from '../pages/dashboard/Dashboard.jsx';
// import ConnectAccount from '../pages/accounts/Accounts-main.jsx';
import ConnectGoogleAdsButton from '../pages/accounts/connect.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
// import Login from '../pages/auth/Login.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import LandingPage from '../pages/home/LandingPage.jsx';
import PricingPage from '../pages/pricing/PricingPage.jsx';
import FeaturesPage from '../pages/features/FeaturePage.jsx';
import AboutPage from '../pages/about/AboutPage.jsx';
import ContactPage from '../pages/contact/ContactPage.jsx';
import  GetStartedPage from '../pages/GetStarted.jsx';
// import Settings from '../pages/dashboard/Settings.jsx';
// import CampaignOverview from '../pages/dashboard/CampaignOverview.jsx';

// import Performance from '../pages/dashboard/Performance.jsx';
// import Billing from '../pages/dashboard/Billing.jsx';
// import LeadsCRM from '../pages/dashboard/LeadsCRM.jsx';
// import AICreation from '../pages/dashboard/AICreation.jsx';
import Dash from '../pages/dashboard/Dash-landing.jsx';
import MarketingPerformance from '../pages/dashboard/MarketingPerformance.jsx';
import SocialMedia from '../pages/dashboard/SocialMedia.jsx';
import CampaignManagement from '../pages/dashboard/CampaignPage.jsx';
import CustomerAnalyticsWelcome from '../pages/dashboard/analytics/AnalyticsPage.jsx';
import DynamicWelcome from '../pages/dashboard/DynamicWelcome.jsx';
import AccountSettings from '../pages/dashboard/account/Account-settings.jsx';
import IntegrationsPage from '../pages/dashboard/account/Integrations.jsx';
import TeamManagement from '../pages/dashboard/account/TeamMangement.jsx';
import BillingSubscription from '../pages/dashboard/account/Billing.jsx';
import DataManagementPage from '../pages/dashboard/account/DataManagement.jsx';
import SignInPage from '../pages/auth/LoginPage.jsx';
import SignUpFlow from '../pages/auth/SignUp.jsx';
import PublicRoute from './PublicRoute.jsx';
import AuthSuccess from '../pages/auth/AuthSuccess.jsx';
import PrivacyPolicy from '../pages/Privacy-Policy.jsx';
import TermsAndConditions from '../pages/TermsAndCondition.jsx';
import UnifiedAuthPage from '../pages/auth/Auth.jsx';

function AppRouter() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes with MainLayout */}
            <Route element={<PublicRoute> <MainLayout /></PublicRoute>}>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage/>} />
                <Route path="/get-started" element={<GetStartedPage />} />
                   <Route path="/success" element={<AuthSuccess />} />
                       
              <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                  
              <Route path="/terms-condition" element={<TermsAndConditions/>} />
              <Route path="/auth" element={<UnifiedAuthPage/>} />
                 
              {/* <Route path="/login" element={<SignInPage/>} />
              <Route path="/signup" element={<SignUpFlow/>} /> */}
            </Route>

            {/* Protected Dashboard Routes */}
            <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout/> {/* layout with sidebar & header */}
    </ProtectedRoute>
  }
>
  {/* <Route index element={<Dashboard />} />  */}
  {/* default dashboard landing */}
   <Route index element={<Dash />} /> 
   <Route path='marketing-perfomance' element={<MarketingPerformance/>} />
     <Route path='social-media' element={<SocialMedia/>} />
     <Route path='campaign' element={<CampaignManagement/>}/>
      <Route path="analytics" element={< CustomerAnalyticsWelcome/>} />
    
     {["refund-return", "leads", "orders", "calls","inventory","vendors","revenue","p&l","forecasting","expenses"].map((p) => (
     <Route key={p} path={p} element={<DynamicWelcome />} />
     ))}

       <Route path="settings" element={< AccountSettings/>} />
         <Route path="billing" element={< BillingSubscription/>} />
           <Route path="team" element={< TeamManagement/>} />
             <Route path="data" element={< DataManagementPage/>} />
               <Route path="integration" element={< IntegrationsPage/>} />


  
  <Route path="connect" element={<ConnectGoogleAdsButton />} />

</Route>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default AppRouter;
