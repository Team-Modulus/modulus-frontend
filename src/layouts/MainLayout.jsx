import { useLocation, Outlet } from "react-router-dom";
import Header from "../component/common/Header";
import Footer from "../component/common/Footer";

function MainLayout() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {!hideHeaderFooter && <Header />}

      <main className="flex-1">
        <Outlet /> {/* 👈 renders the matched child route */}
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
