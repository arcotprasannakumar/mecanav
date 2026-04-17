import solutionBackground from "../assets/images/applications/architectural-light-innerpage-final-001.webp";
import ComingSoonHero from "../components/info/ComingSoonHero";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import PageMeta from "../components/ui/PageMeta";

function SolutionsPage() {
  return (
    <>
      <PageMeta
        title="Solutions"
        description="Mecanav lighting solutions coming soon."
      />
      <ComingSoonHero
        backgroundImage={solutionBackground}
        title="Coming Soon..."
        subtitle="We're working on something awesome."
      />
      <HomeLegacyPartnersSection />
    </>
  );
}

export default SolutionsPage;
