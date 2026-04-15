import { Link, useParams } from "react-router-dom";
import applications, { applicationMap } from "../data/applications";
import ApplicationCarousel from "../components/applications/ApplicationCarousel";
import HomeProductsCarousel from "../components/sections/home/HomeProductsCarousel";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";

function ApplicationDetailPage() {
  const { applicationSlug } = useParams();
  const application = applicationMap[applicationSlug];

  if (!application) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <StatusPanel
          title="Application not found"
          message="The requested application slug is not mapped yet."
          actionLabel="Back to Applications"
          actionTo="/applications"
        />
      </section>
    );
  }

  const relatedApplications = applications
    .filter((item) => item.slug !== application.slug)
    .slice(0, 4);

  const hasFullDetail = application.migrationStatus === "full";

  return (
    <section className="bg-[#0e0e0e] text-white">
      <PageMeta
        title={application.title}
        description={application.summary}
      />
      <div className="mx-auto max-w-[1100px] px-4 py-10 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          <Link to="/applications" className="hover:text-white">
            Applications
          </Link>
          <span>/</span>
          <span className="text-white/75">{application.title}</span>
        </div>

        <h1 className="mt-12 text-[2rem] font-bold text-white">{application.title}</h1>

        <div className="mt-12">
          <ApplicationCarousel images={application.heroImages} title={application.title} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white sm:text-[1.5rem]">
            {application.headline ?? application.title}
          </h2>
          {application.overview ? (
            <p className="mx-auto mt-4 max-w-[800px] text-base leading-8 text-[#ccc]">
              {application.overview}
            </p>
          ) : (
            <p className="mx-auto mt-4 max-w-[800px] text-base leading-8 text-[#ccc]">
              This application card is available from the legacy applications hub, but its
              full detail-page copy has not been migrated yet in this phase.
            </p>
          )}
        </div>

        {hasFullDetail && (application.keyHighlights.length || application.useCases.length) ? (
          <div className="mt-12 grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Key Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                {application.keyHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 text-[10px]">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Use Cases</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {application.useCases.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-12 rounded-[24px] border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">Legacy Source</p>
          <p className="mt-3 text-sm leading-7 text-white/70">{application.legacySource}</p>
          {application.migrationStatus !== "full" ? (
            <p className="mt-3 text-sm leading-7 text-white/55">
              This route is using hub-level data only for now. Full detail content for this
              application is intentionally deferred to a later migration pass.
            </p>
          ) : null}
        </div>
      </div>

      <HomeProductsCarousel />

      <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-light text-white">More Applications</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedApplications.map((item) => (
              <Link
                key={item.slug}
                to={`/applications/${item.slug}`}
                className="overflow-hidden rounded-[18px] border border-white/10 bg-black/30 transition hover:-translate-y-1 hover:border-white/20"
              >
                <img src={item.cardImage} alt={item.title} loading="lazy" decoding="async" className="h-56 w-full object-cover" />
                <p className="px-4 py-3 text-sm font-light leading-6 text-white/75">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default ApplicationDetailPage;
