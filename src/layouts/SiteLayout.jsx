import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MobileMenu from "../components/layout/MobileMenu";
import BackToTop from "../components/layout/BackToTop";
import Preloader from "../components/layout/Preloader";

function SiteLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="legacy-site-shell min-h-screen bg-black text-white">
      <div id="thetop" />
      <Preloader />
      <Header
        pathname={location.pathname}
        onMenuToggle={() => setIsMobileMenuOpen(true)}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default SiteLayout;
