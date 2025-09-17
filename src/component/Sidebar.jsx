import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdWorkspacePremium } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineSupport } from "react-icons/md";
import { MdOutlineHelp } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      icon: (<LuLayoutDashboard/>),
      label: 'My Dashboard',
      hasNew: false,
      to: '/dashboard',
    },
    {
      icon: (<MdWorkspacePremium/>),
      label: 'My Workspaces',
      hasNew: true,
      to: '/workspace-connect',
    },
    {
      icon: (<MdOutlineRocketLaunch/>),
      label: 'Boost',
      hasNew: false,
      to: '#',
    },
    {
      icon: (<GoGraph/>),
      label: 'P&L Tracker',
      hasNew: false,
      to: '#',
    },
    {
      icon: (<MdOutlineSettings/>),
      label: 'Control Panel',
      hasNew: false,
      to: '#',
    }
  ];

  const bottomMenuItems = [
    {
      icon: (<MdOutlineSupport/>),
      label: 'Support',
      to: '#',
    },
    {
      icon: (<MdOutlineHelp/>),
      label: 'Help',
      to: '#',
    }
  ];

  return (
    <>
      <aside className={`${isCollapsed ? 'w-20' : 'w-72'} bg-white shadow-md flex flex-col p-3 py-8 lg:p-0 transition-all duration-300 relative hidden lg:flex font-exo font-medium`}>
        {/* Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-white rounded-full p-1 shadow-md border border-gray-200"
        >
          <svg 
            className={`w-4 h-4 transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="p-4 border-b flex items-center justify-between lg:justify-start">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
            {isCollapsed ? (
              <span className="text-purple-600">M</span>
            ) : (
              <>MARTECKO <span className="text-purple-600">°</span></>
            )}
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} className="flex items-center p-3  text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
              {item.icon}
              <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>
                {item.label}
                {item.hasNew && (
                  <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">NEW</span>
                )}
              </span>
            </Link>
          ))}
          <div className={`mt-auto pt-4 ${isCollapsed ? 'hidden' : 'block'}`}>
            <Link to="/workspace-connect">
              <button className="w-full py-2 bg-black text-white rounded-md hover:bg-indigo-800 transition duration-300">Connect</button>
            </Link>
          </div>
        </nav>

        <div className={`p-4 border-t flex flex-col space-y-2 ${isCollapsed ? 'hidden' : 'block'}`}>
          {bottomMenuItems.map((item, index) => (
            <Link key={index} to={item.to} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
              {item.icon}
              <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>
          
          {/* Menu Content */}
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-4 border-b">
              <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
                {isCollapsed ? (
                  <span className="text-purple-600">M</span>
                ) : (
                  <>MARTECKO <span className="text-purple-600">°</span></>
                )}
              </h1>
            </div>

            <nav className="p-4 space-y-2">
              {menuItems.map((item, index) => (
                <Link key={index} to={item.to} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
                  {item.icon}
                  <span className="ml-3">
                    {item.label}
                    {item.hasNew && (
                      <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">NEW</span>
                    )}
                  </span>
                </Link>
              ))}
              <div className="mt-4">
                <Link to="/workspace-connect">
                  <button className="w-full py-2 bg-black text-white rounded-md hover:bg-indigo-800 transition duration-300">Connect</button>
                </Link>
              </div>
            </nav>

            <div className="p-4 border-t space-y-2">
              {bottomMenuItems.map((item, index) => (
                <Link key={index} to={item.to} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar; 