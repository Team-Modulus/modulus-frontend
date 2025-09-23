import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { GrAnnounce, GrEmptyCircle } from "react-icons/gr";
import { IoCall, IoPersonOutline, IoReload } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { BsBoxSeam, BsBuilding, BsGraphUpArrow, BsPersonAdd } from "react-icons/bs";
import { FiBarChart, FiDollarSign } from "react-icons/fi";
import { MdOutlineSettings, MdOutlineSupport, MdOutlineHelp } from "react-icons/md";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { LuBoxes } from "react-icons/lu";
import { PiChartLineDown, PiChartLineUp } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleToggleSubmenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

   const menuItems = [
    {
      icon: <GoHome />,
      label: "Dashboard",
      to: "/dashboard",
      hasNew: false,
      // children: [
      //   { label: "Analytics", to: "/dashboard/analytics" },
      //   { label: "Reports", to: "/dashboard/reports" },
      // ],
    },
    {
      icon: <GrAnnounce />,
      label: "Marketing",
      to: "workspace-connect",
      hasNew: true,
      children: [
        { icon: <BsGraphUpArrow />, label: "Perfomance", to: "marketing-perfomance" },
        { icon:<SlSocialFacebook/>,label: "Social Media", to: "social-media" },
         { icon:<GrEmptyCircle/>,label: "Campaign", to: "campaign" },
      ],
    },
    {
      icon: <IoPersonOutline />,
      label: "Customers",
      to: "performance",
      hasNew: false,
      children: [
        { icon:<FiBarChart/>,label: "Analytics", to: "analytics" },
        { icon:<IoReload/>,label: "Refund & Return", to: "refund-return" },
      ],
    },
    {
      icon: <CiShoppingCart />,
      label: "Sales",
      to: "leads",
      hasNew: false,
      children: [
        { icon:<CiShoppingCart/>,label: "Orders", to: "orders" },
        {icon:<BsPersonAdd/>, label: "Leads", to: "leads" },
        { icon:<IoCall/>,label: "Calls", to: "calls" },
      ],
    },
     {
      icon: <BsBoxSeam />,
      label: "Logistics",
      to: "settings",
      hasNew: false,
      children: [
        { icon:<LuBoxes/>,label: "Inventory", to: "Inventory" },
        {  icon:<BsBuilding/>,label: "Vendors", to: "vendors" },
      ],
    },
       {
      icon: <FiDollarSign />,
      label: "Finance",
      to: "",
      hasNew: false,
      children: [
     {  icon:<PiChartLineUp/>,label: "Revenue", to: "vendors" },
         {  icon:<RiMoneyDollarBoxLine/>,label: "P&L", to: "vendors" },
          {  icon:<PiChartLineDown/>,label: "Expenses", to: "vendors" },
           {  icon:<BsBuilding/>,label: "Forecasting", to: "vendors" },
      ],
    },
    {
      icon: <MdOutlineSettings />,
      label: "Settings",
      to: "settings",
      hasNew: false,
    children: [
  { label: "Account Settings", to: "settings", state: { tab: "account" } },
  { label: "Integrations", to: "settings", state: { tab: "integrations" } },
],
    },
  ];


  const bottomMenuItems = [
    { icon: <MdOutlineSupport />, label: "Support", to: "#" },
    { icon: <MdOutlineHelp />, label: "Help", to: "#" },
  ];

  const renderMenu = () => (
    <nav className="flex-1 p-2 space-y-2 overflow-y-auto">
     {menuItems.map((item, index) => (
  <div key={index}>
    {item.label === "Dashboard" ? (
      // Dashboard link (no collapse)
      <Link
        to={item.to}
        className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200"
      >
        {item.icon}
        <span className={`ml-3 flex-1 text-left ${isCollapsed ? "hidden" : "block"}`}>
          {item.label}
        </span>
      </Link>
    ) : item.children ? (
      // Items with submenu
      <button
        onClick={() => handleToggleSubmenu(item.label)}
        className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200"
      >
        {item.icon}
        <span className={`ml-3 flex-1 text-left ${isCollapsed ? "hidden" : "block"}`}>
          {item.label}
        </span>
        {!isCollapsed && (
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              openMenu === item.label ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
    ) : (
      // Other simple links without submenu
      <Link
        to={item.to}
        className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200"
      >
        {item.icon}
        <span className={`ml-3 flex-1 text-left ${isCollapsed ? "hidden" : "block"}`}>
          {item.label}
        </span>
      </Link>
    )}

    {/* Submenu */}
    {openMenu === item.label && item.children && (
      <div className={`ml-8 mt-2 space-y-1 ${isCollapsed ? "ml-0 flex flex-col items-center" : ""}`}>
        {item.children.map((child, childIndex) => (
          <Link
            key={childIndex}
            to={child.to}
            state={child.state}
            className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
            title={isCollapsed ? child.label : ""}
          >
            {child.icon && <span className="text-lg">{child.icon}</span>}
            {!isCollapsed && <span>{child.label}</span>}
          </Link>
        ))}
      </div>
    )}
  </div>
))}

    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-72"
        } bg-white shadow-md flex flex-col p-3 py-8 lg:p-0 transition-all duration-300 relative hidden lg:flex font-exo font-medium`}
      >
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-white rounded-full p-1 shadow-md border border-gray-200"
        >
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="p-4 border-b flex items-center justify-between lg:justify-start">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
            {isCollapsed ? <span className="text-purple-600">M</span> : <>Modulus.ai <span className="text-purple-600">°</span></>}
          </h1>
        </div>

        {renderMenu()}

        {/* Bottom Menu */}
        <div className={`p-4 border-t flex flex-col space-y-2 ${isCollapsed ? "hidden" : "block"}`}>
          {bottomMenuItems.map((item, index) => (
            <Link key={index} to={item.to} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
              {item.icon}
              <span className={`ml-3 ${isCollapsed ? "hidden" : "block"}`}>{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>

          {/* Sidebar Content */}
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4 overflow-y-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Modulus.ai <span className="text-purple-600">°</span>
            </h1>

            {renderMenu()}

            <div className="p-4 border-t space-y-2">
              {bottomMenuItems.map((item, index) => (
                <Link key={index} to={item.to} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
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
