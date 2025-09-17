import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/Header';
import dashboardPlaceholder from '../../../public/dash/dash.svg'; // Use your preferred placeholder image

const Dashboard = () => {
//   const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Simulate data fetching
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // setData({ ... }); // Uncomment and set data to show dashboard
      setData(null); // Set to null to show placeholder
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    // logout();
    navigate('/login');
  };
 const handleConnectAccounts = () => {
    console.log('Connecting accounts...');
  };
  return (
    <div className="min-h-fit ">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
       <Header/>
          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto  p-6 flex items-center justify-center">
            <div className="min-h-screen ">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      ) : !data ? (
        // No Data Layout - Split Screen matching the image
        <div className="flex h-screen">
          {/* Left Side - Welcome & Connect */}
          <div className="flex-1 flex flex-col justify-center px-16 ">
            <div className="max-w-lg">
              <p className="text-gray-600 font-exo text-lg mb-2">Hey Developer,</p>
              <h1 className="text-5xl font-bold font-exo text-gray-900 mb-8">
                Welcome to Martecko!
              </h1>
              <p className="text-gray-600 font-sans text-xl font-semibold mb-8 leading-relaxed">
                Track your sales and unlock insights<br />
                to boost your brand's growth
              </p>
              
              {/* Platform Icons */}
            <div className="flex items-center space-x- mb-2">
  <div className="flex items-center justify-center w-12 h-12 ">
    <img src="../../public/icon/shopify.png" alt="S" className="w-6 h-6" />
  </div>
  <div className="flex items-center justify-center w-12 h-12">
    <img src="../../public/icon/amazonSeller.png" alt="A" className="w-6 h-6" />
  </div>
  <div className="flex items-center justify-center w-12 h-12">
    <img src="../../public/icon/amazonVendor.png" alt="G" className="w-6 h-6" />
  </div>
</div>

           
              <p className="text-gray-500 font-exo font-semibold text-base mb-8">
                Connect your accounts to get started
              </p>
             
                 <Link to="/workspace-connect" className="block mb-4">
              <button 
                onClick={handleConnectAccounts}
                className="bg-gray-900 text-white px-8 py-4 font-sans rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Connect Accounts
              </button>
               </Link>
            </div>
          </div>

          {/* Right Side - Dashboard Preview (now just an image) */}
          <div className="flex-1 p-4  flex items-center justify-center">
            <img
              src={dashboardPlaceholder}
              alt="Dashboard Preview"
              className="max-w-full max-h-[800px] object-contain rounded-xl shadow"
            />
          </div>
        </div>
      ) : (
        // Regular Dashboard with Data
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Cards when data is available */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
              <p className="text-3xl font-bold text-gray-900">₹1,50,774</p>
              <p className="text-green-500 text-sm">+22.1% from last month</p>
            </div>
          </div>
        </div>
      )}
    </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 