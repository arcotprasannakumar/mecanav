import projectBackground from "../assets/images/applications/Bridge-lighting-homepage-final.webp";
import ComingSoonHero from "../components/info/ComingSoonHero";
import PageMeta from "../components/ui/PageMeta";

function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projects"
        description="Mecanav projects page. The migrated React route is live and the original page content remains a coming soon state."
      />
      <ComingSoonHero
        backgroundImage={projectBackground}
        title="Coming Soon..."
        subtitle="We're working on something awesome."
      />
    </>
  );
}

export default ProjectsPage;
