import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from '../utils/ErrorBoundary.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import LandingPage from '../pages/Landing-page.jsx';
import FeaturesPage from '../pages/Featurepage.jsx';
import PricingPage from '../pages/Pricing-page.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import AboutCompanyPage from '../pages/AboutCompany.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import ConnectAccount from '../pages/accounts/Accounts-main.jsx';
import ConnectGoogleAdsButton from '../pages/accounts/connect.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from '../pages/auth/Login.jsx';


function AppRouter() {
  return (
  
        <ErrorBoundary>
          <Router>
            <MainLayout>
              <div className="min-h-screen bg-gray-50">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/features" element={<FeaturesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/about-company" element={<AboutCompanyPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<Login/>}/>

                  {/* Protected Dashboard Routes */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    {/* <Route path="analytics" element={<Analytics />} />
                    <Route path="ai-creation" element={<AICreation />} />
                    <Route path="performance" element={<Performance />} />
                    <Route path="leads" element={<LeadsCRM />} />
                    <Route path="billing" element={<Billing />} />
                    <Route path="settings" element={<Settings />} /> */}

                  

             <Route path="workspace-connect" element={<ConnectAccount/>}/>
            <Route path="connect" element={<ConnectGoogleAdsButton/>}/>
                  </Route>
                </Routes>
              </div>
            </MainLayout>
          </Router>
        </ErrorBoundary>
    
  );
}

export default AppRouter;