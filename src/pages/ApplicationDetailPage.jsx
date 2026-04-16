import { useParams } from "react-router-dom";
import { applicationMap } from "../data/applications";
import ApplicationCarousel from "../components/applications/ApplicationCarousel";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
 
function ApplicationDetailPage() {
  const { applicationSlug } = useParams();
  const application = applicationMap[applicationSlug];
 
  if (!application) {
    return (
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <StatusPanel
            title="Application not found"
            message="The requested application slug is not mapped yet."
            actionLabel="Back to Applications"
            actionTo="/applications"
          />
        </div>
      </section>
    );
  }
 
  return (
    <section className="bg-black pt-[110px] text-white lg:pt-[130px]">
      <PageMeta
        title={application.title}
        description={application.overview || application.summary || application.title}
      />
 
      <div className="mx-auto max-w-[1300px] px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
        <div className="text-center">
          {/* <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            <Link to="/applications" className="transition hover:text-white">
              Applications
            </Link>
            <span>/</span>
            <span className="text-white/70">{application.title}</span>
          </div> */}
 
          <h1 className="text-[30px] font-300 leading-none text-white sm:text-[36px] lg:text-[44px]">
            {application.title} Applications
          </h1>
        </div>
 
        <div className="mx-auto mt-10 max-w-[1000px] lg:mt-12">
          <ApplicationCarousel
            images={application.heroImages}
            title={application.title}
          />
        </div>
 
        <div className="mx-auto mt-8 max-w-[860px] text-center lg:mt-10">
          <h2 className="text-[22px] font-semibold leading-tight text-white sm:text-[26px]">
            {application.headline || application.title}
          </h2>
 
          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-8 text-white/65 sm:text-[15px]">
            {application.overview ||
              "This application is available in the applications hub, and full detail content will be added soon."}
          </p>
        </div>
      </div>
 
      <HomeLegacyPartnersSection />
 
    </section>
  );
}
 
export default ApplicationDetailPage;
