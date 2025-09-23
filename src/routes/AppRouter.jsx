import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../utils/ErrorBoundary.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import ConnectAccount from '../pages/accounts/Accounts-main.jsx';
import ConnectGoogleAdsButton from '../pages/accounts/connect.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from '../pages/auth/Login.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import LandingPage from '../pages/home/LandingPage.jsx';
import PricingPage from '../pages/pricing/PricingPage.jsx';
import FeaturesPage from '../pages/features/FeaturePage.jsx';
import AboutPage from '../pages/about/AboutPage.jsx';
import ContactPage from '../pages/contact/ContactPage.jsx';
import  GetStartedPage from '../pages/GetStarted.jsx';
import Settings from '../pages/dashboard/Settings.jsx';
import CampaignOverview from '../pages/dashboard/CampaignOverview.jsx';
import Analytics from '../pages/dashboard/Analytics.jsx';
import Performance from '../pages/dashboard/Performance.jsx';
import Billing from '../pages/dashboard/Billing.jsx';
import LeadsCRM from '../pages/dashboard/LeadsCRM.jsx';
import AICreation from '../pages/dashboard/AICreation.jsx';
import Dash from '../pages/dashboard/Dash-landing.jsx';
import MarketingPerformance from '../pages/dashboard/MarketingPerformance.jsx';
import SocialMedia from '../pages/dashboard/SocialMedia.jsx';
import CampaignManagement from '../pages/dashboard/CampaignPage.jsx';

function AppRouter() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes with MainLayout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage/>} />
                <Route path="/get-started" element={<GetStartedPage />} />
                 
              <Route path="/login" element={<Login />} />
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


  <Route path="workspace-connect" element={<ConnectAccount />} />
  
  <Route path="connect" element={<ConnectGoogleAdsButton />} />
   <Route path="settings" element={<Settings />} />
    <Route path="overview" element={<CampaignOverview />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="performance" element={<Performance />} />
    <Route path="billing" element={<Billing />} />
     <Route path="leads" element={<LeadsCRM />} />
        <Route path="ads-creation" element={<AICreation />} />
</Route>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default AppRouter;
