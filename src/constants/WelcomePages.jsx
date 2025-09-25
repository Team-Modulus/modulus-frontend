import { BarChart3, TrendingUp, Heart, Users } from "lucide-react";
import CustomerAnalyticsDashboard from "../pages/dashboard/analytics/AnalyticsData";
import RefundsReturnsPage from "../pages/dashboard/refund&return/Refund-returnData";
import OrdersPage from "../pages/dashboard/orders/OrdersData";
import LeadsPage from "../pages/dashboard/leads/LeadsData";
import SalesCallsPage from "../pages/dashboard/calls/CallsData";
import InventoryPage from "../pages/dashboard/inventory/InventoryData";
import VendorsPage from "../pages/dashboard/vendors/VendorData";
import RevenuePage from "../pages/dashboard/revenue/RevenueData";
import ProfitLossPage from "../pages/dashboard/p&l/Profit&lossData";
import ForecastingPage from "../pages/dashboard/forecasting/ForcastingData";

const welcomePages = {
  "/dashboard/refund-return": {
    title: "Refund & Return",
    subtitle: "Easily manage product returns and refunds to keep your customers happy.",
    heroIcon: Users,
    heroText: "Welcome to Refund & Return Management! 👥",
    heroButton: "Connect Your Store",
    component: RefundsReturnsPage,
    features: [
      {
        icon: BarChart3,
        title: "Return Analytics",
        description: "Track and analyze return requests and reasons.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Refund Trends",
        description: "Monitor refund rates and customer satisfaction.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Customer Retention",
        description: "Improve loyalty by handling returns efficiently.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Streamline your returns process",
      description: "Connect your store to automate and track refunds and returns.",
      buttonText: "Start Managing Returns",
    },
  },

  "/dashboard/sales": {
    title: "Sales Analytics",
    subtitle: "Track your sales performance and revenue growth.",
    heroIcon: BarChart3,
    heroText: "Welcome to Sales Analytics 📈",
    heroButton: "Connect Sales Data",
    features: [
      {
        icon: TrendingUp,
        title: "Revenue Trends",
        description: "Analyze sales growth over time.",
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
      },
      {
        icon: Users,
        title: "Customer Acquisition",
        description: "Monitor new and returning customers.",
        bgColor: "bg-pink-100",
        iconColor: "text-pink-600",
      },
      {
        icon: Heart,
        title: "Best Sellers",
        description: "Identify top-performing products.",
        bgColor: "bg-indigo-100",
        iconColor: "text-indigo-600",
      },
    ],
    cta: {
      title: "Boost your sales",
      description: "Connect your sales platform to unlock actionable insights.",
      buttonText: "Connect Sales Platform",
    },
  },

  "/dashboard/orders": {
    title: "Order Management",
    subtitle: "Track, manage, and fulfill orders efficiently.",
    heroIcon: Users,
    heroText: "Welcome to Order Management! 🛒",
    heroButton: "Connect Your Store",
    component: OrdersPage,
    features: [
      {
        icon: BarChart3,
        title: "Order Tracking",
        description: "Monitor order status and fulfillment.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Order Volume",
        description: "Analyze order trends and peak periods.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Customer Satisfaction",
        description: "Ensure timely delivery and happy customers.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Optimize your order process",
      description: "Connect your store to manage orders seamlessly.",
      buttonText: "Start Managing Orders",
    },
  },

  "/dashboard/calls": {
    title: "Sales Call",
    subtitle: "Monitor and improve your customer support calls.",
    heroIcon: Users,
    heroText: "Welcome to Call Center Analytics! ☎️",
    heroButton: "Connect Call Data",
    component: SalesCallsPage,
    features: [
      {
        icon: BarChart3,
        title: "Call Volume",
        description: "Track number of calls and peak times.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Resolution Rate",
        description: "Analyze how quickly issues are resolved.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Customer Feedback",
        description: "Monitor satisfaction after calls.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Improve your support",
      description: "Connect your call center data for better insights.",
      buttonText: "Connect Call Center",
    },
  },

  "/dashboard/leads": {
    title: "Lead Management",
    subtitle: "Capture and nurture leads to grow your business.",
    heroIcon: Users,
    heroText: "Welcome to Lead Management! 🚀",
    heroButton: "Connect Lead Source",
    component: LeadsPage,
    features: [
      {
        icon: BarChart3,
        title: "Lead Analytics",
        description: "Track lead sources and conversion rates.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Pipeline Growth",
        description: "Monitor your sales pipeline.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Lead Engagement",
        description: "Analyze interactions and follow-ups.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Grow your leads",
      description: "Connect your CRM to start tracking leads.",
      buttonText: "Connect CRM",
    },
  },

  "/dashboard/inventory": {
    title: "Inventory Management",
    subtitle: "Monitor stock levels and optimize inventory.",
    heroIcon: Users,
    heroText: "Welcome to Inventory Management! 📦",
    heroButton: "Connect Inventory System",
    component: InventoryPage,
    features: [
      {
        icon: BarChart3,
        title: "Stock Analytics",
        description: "Track inventory levels and turnover.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Reorder Alerts",
        description: "Get notified when stock is low.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Product Performance",
        description: "Identify slow and fast-moving items.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Optimize your inventory",
      description: "Connect your inventory system for real-time tracking.",
      buttonText: "Connect Inventory",
    },
  },

  "/dashboard/vendors": {
    title: "Vendor Management",
    subtitle: "Manage relationships and performance of your vendors.",
    heroIcon: Users,
    heroText: "Welcome to Vendor Management! 🏢",
    heroButton: "Connect Vendor Data",
    component: VendorsPage,
    features: [
      {
        icon: BarChart3,
        title: "Vendor Analytics",
        description: "Track vendor performance and reliability.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Cost Analysis",
        description: "Monitor costs and negotiate better deals.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Relationship Management",
        description: "Strengthen vendor partnerships.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Enhance vendor relationships",
      description: "Connect your vendor data for better management.",
      buttonText: "Connect Vendors",
    },
  },

  "/dashboard/forecasting": {
    title: "Forecasting",
    subtitle: "Predict future sales and inventory needs.",
    heroIcon: Users,
    heroText: "Welcome to Forecasting! 🔮",
    heroButton: "Connect Data Sources",
    component: ForecastingPage,
    features: [
      {
        icon: BarChart3,
        title: "Sales Forecast",
        description: "Predict upcoming sales trends.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Inventory Forecast",
        description: "Estimate future stock requirements.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Demand Planning",
        description: "Align supply with expected demand.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Plan for the future",
      description: "Connect your data sources for accurate forecasting.",
      buttonText: "Start Forecasting",
    },
  },

  "/dashboard/p&l": {
    title: "Profit & Loss",
    subtitle: "Analyze your business profitability and expenses.",
    heroIcon: Users,
    heroText: "Welcome to Profit & Loss! 💰",
    heroButton: "Connect Financial Data",
    component: ProfitLossPage,
    features: [
      {
        icon: BarChart3,
        title: "Profit Analysis",
        description: "Track profits and losses over time.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Expense Breakdown",
        description: "Analyze where your money goes.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Financial Health",
        description: "Monitor your business’s financial status.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Understand your finances",
      description: "Connect your financial data for deeper insights.",
      buttonText: "Connect Financials",
    },
  },

  "/dashboard/expenses": {
    title: "Expense Management",
    subtitle: "Track and control your business expenses.",
    heroIcon: Users,
    heroText: "Welcome to Expense Management! 🧾",
    heroButton: "Connect Expense Data",
    component: CustomerAnalyticsDashboard,
    features: [
      {
        icon: BarChart3,
        title: "Expense Tracking",
        description: "Monitor all business expenses.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Cost Optimization",
        description: "Identify areas to reduce costs.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Budget Management",
        description: "Stay within your budget limits.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Control your expenses",
      description: "Connect your expense data for better management.",
      buttonText: "Connect Expenses",
    },
  },

  "/dashboard/revenue": {
    title: "Revenue",
    subtitle: "Monitor and grow your business revenue.",
    heroIcon: Users,
    heroText: "Welcome to Revenue Dashboard! 💵",
    heroButton: "Connect Revenue Data",
    component: RevenuePage,
    features: [
      {
        icon: BarChart3,
        title: "Revenue Streams",
        description: "Analyze different sources of revenue.",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: TrendingUp,
        title: "Growth Rate",
        description: "Track revenue growth over time.",
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: Heart,
        title: "Recurring Revenue",
        description: "Monitor subscription and repeat sales.",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    cta: {
      title: "Increase your revenue",
      description: "Connect your revenue data for actionable insights.",
      buttonText: "Connect Revenue",
    },
  },
};

export default welcomePages;
