import React from "react";
import { Link } from "react-router-dom";
import dashboardPlaceholder from "../../../public/dash/dash.svg";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 text-center lg:text-left">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">
            Welcome to Modulus.ai!
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6 lg:mb-8">
            Track your sales and unlock insights
            <br className="hidden md:block" />
            to boost your brand&apos;s growth
          </p>
          <Link to="workspace-connect">
            <button className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base">
              Connect Accounts
            </button>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-10">
        <img
          src={dashboardPlaceholder}
          alt="Dashboard Preview"
          className="max-w-full max-h-[400px] md:max-h-[600px] lg:max-h-[800px] object-contain rounded-xl shadow"
        />
      </div>
    </div>
  );
};

export default Dashboard;
