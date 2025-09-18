import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../utils/ErrorBoundary.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import AboutCompanyPage from '../pages/AboutCompany.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import ConnectAccount from '../pages/accounts/Accounts-main.jsx';
import ConnectGoogleAdsButton from '../pages/accounts/connect.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from '../pages/auth/Login.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import LandingPage from '../pages/home/LandingPage.jsx';
import PricingPage from '../pages/pricing/PricingPage.jsx';
import FeaturesPage from '../pages/features/FeaturePage.jsx';

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
              <Route path="/about-company" element={<AboutCompanyPage />} />
              <Route path="/contact" element={<ContactPage />} />
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
  <Route index element={<Dashboard />} /> {/* default dashboard landing */}
  <Route path="workspace-connect" element={<ConnectAccount />} />
  <Route path="connect" element={<ConnectGoogleAdsButton />} />
</Route>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default AppRouter;
