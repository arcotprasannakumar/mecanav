import { useEffect, useState } from "react";
import PageMeta from "../components/ui/PageMeta";
import HomeLegacyHeroSection from "../components/sections/home/HomeLegacyHeroSection";
import HomeWhoWeAreSection from "../components/sections/home/HomeWhoWeAreSection";
import HomeLegacyApplicationsSection from "../components/sections/home/HomeLegacyApplicationsSection";
import HomeLegacyTaglineVideoSection from "../components/sections/home/HomeLegacyTaglineVideoSection";
import HomeLegacyLightCompareSection from "../components/sections/home/HomeLegacyLightCompareSection";
import HomeLegacyControllerSection from "../components/sections/home/HomeLegacyControllerSection";
import HomeLegacyCataloguesSection from "../components/sections/home/HomeLegacyCataloguesSection";
import HomeLegacyFaqContactSection from "../components/sections/home/HomeLegacyFaqContactSection";
import HomeSupportMapSection from "../components/sections/home/HomeSupportMapSection";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";

function HomePage() {
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    const headerElement = document.getElementById("header-section");
    if (!headerElement) {
      return undefined;
    }

    const updateNavbarHeight = () => {
      const nextHeight = Math.round(headerElement.getBoundingClientRect().height);
      if (nextHeight > 0) {
        setNavbarHeight(nextHeight);
      }
    };

    updateNavbarHeight();

    const onResize = () => window.requestAnimationFrame(updateNavbarHeight);
    window.addEventListener("resize", onResize, { passive: true });

    let observer;
    if ("ResizeObserver" in window) {
      observer = new ResizeObserver(updateNavbarHeight);
      observer.observe(headerElement);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="legacy-home-page" style={{ "--home-navbar-height": `${navbarHeight}px` }}>
      <PageMeta
        title="Mecanav - Create Impact After Sunset"
        description="Mecanav facade lighting homepage with products, catalogues, applications, and support sections."
      />

      <HomeLegacyHeroSection />
      <HomeWhoWeAreSection />
      <HomeLegacyApplicationsSection />
      <HomeLegacyTaglineVideoSection />
      <HomeLegacyLightCompareSection />
      <HomeLegacyControllerSection />
      <HomeLegacyCataloguesSection />
      <HomeLegacyFaqContactSection />
      <HomeSupportMapSection />
      <HomeLegacyPartnersSection />
    </div>
  );
}

export default HomePage;
