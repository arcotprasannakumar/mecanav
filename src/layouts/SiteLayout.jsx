import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MobileMenu from "../components/layout/MobileMenu";
import BackToTop from "../components/layout/BackToTop";
import Preloader from "../components/layout/Preloader";

function SiteLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(110);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobileMenuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const headerElement = document.getElementById("header-section");
    if (!headerElement) {
      return undefined;
    }

    const updateHeaderHeight = () => {
      const nextHeight = Math.round(headerElement.getBoundingClientRect().height);
      if (nextHeight > 0) {
        setHeaderHeight(nextHeight);
      }
    };

    updateHeaderHeight();

    const onResize = () => window.requestAnimationFrame(updateHeaderHeight);
    window.addEventListener("resize", onResize, { passive: true });

    let observer;
    if ("ResizeObserver" in window) {
      observer = new ResizeObserver(updateHeaderHeight);
      observer.observe(headerElement);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return (
    <div
      className={`legacy-site-shell min-h-screen bg-black text-white${isHomePage ? " is-home-page" : " is-inner-page"}`}
      style={{ "--site-header-height": `${headerHeight}px` }}
    >
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
