import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet /> {/* child pages render here */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
