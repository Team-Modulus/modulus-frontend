import React from 'react';

const Header = () => {
  return (
   <div className="px-4 py-3.5 border-b border-gray-200 flex justify-between items-center bg-white shadow p-8">
              <h1 className="text-2xl font-semibold font-exo px-16 text-gray-800">Dashboard</h1>
              <div className="flex items-center space-x-4">
                {/* <span className="text-gray-600">Welcome, {user?.name}</span> */}
                <button
                  // onClick={handleLogout}
                  className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
  );
};

export default Header; 