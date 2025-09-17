import { useLocation } from "react-router-dom";
import Header from "../component/common/Header";
import Footer from "../component/common/Footer";

function MainLayout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
