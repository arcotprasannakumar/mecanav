import projectBackground from "../assets/images/applications/Bridge-lighting-homepage-final.webp";
import ComingSoonHero from "../components/info/ComingSoonHero";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import PageMeta from "../components/ui/PageMeta";

function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projects"
        description="Mecanav project showcase coming soon."
      />
      <ComingSoonHero
        backgroundImage={projectBackground}
        title="Coming Soon..."
        subtitle="We're working on something awesome."
      />
      <HomeLegacyPartnersSection />
    </>
  );
}

export default ProjectsPage;
