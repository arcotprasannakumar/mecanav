import solutionBackground from "../assets/images/applications/architectural-light-innerpage-final-001.webp";
import ComingSoonHero from "../components/info/ComingSoonHero";
import PageMeta from "../components/ui/PageMeta";

function SolutionsPage() {
  return (
    <>
      <PageMeta
        title="Solutions"
        description="Mecanav solutions page. The migrated React route is live and the original page content remains a coming soon state."
      />
      <ComingSoonHero
        backgroundImage={solutionBackground}
        title="Coming Soon..."
        subtitle="We're working on something awesome."
      />
    </>
  );
}

export default SolutionsPage;
