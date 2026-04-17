import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import catalogues, { catalogueMap } from "../data/catalogues";
import CataloguePreview from "../components/catalogues/CataloguePreview";
import CatalogueFormGate from "../components/catalogues/CatalogueFormGate";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import { triggerFileDownload } from "../utils/fileDownload";

function CatalogueDetailPage() {
  const { catalogueSlug } = useParams();
  const catalogue = catalogueMap[catalogueSlug];
  const [isGateOpen, setIsGateOpen] = useState(false);

  const unavailableMessage = useMemo(() => {
    if (!catalogue || catalogue.pdfFile) {
      return "";
    }

    return "This catalogue preview is available now. Please contact the Mecanav team for the downloadable PDF.";
  }, [catalogue]);

  if (!catalogue) {
    return (
      <section className="bg-[#0f0f0f] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <StatusPanel
            title="Catalogue not found"
            message="The requested catalogue slug is not mapped yet."
            actionLabel="Back to Catalogues"
            actionTo="/catalogues"
          />
        </div>
      </section>
    );
  }

  const triggerDownload = () => {
    const didDownload = triggerFileDownload(catalogue.pdfFile);
    if (didDownload) {
      setIsGateOpen(false);
    }
  };

  const relatedCatalogues = catalogues
    .filter((item) => item.slug !== catalogue.slug)
    .slice(0, 4);

  return (
    <section className="bg-[#0f0f0f] px-4 py-12 text-white sm:px-6 lg:px-8">
      <PageMeta
        title={catalogue.title}
        description={catalogue.summary}
      />
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          <Link to="/catalogues" className="hover:text-white">
            Catalogues
          </Link>
          <span>/</span>
          <span className="text-white/75">{catalogue.title}</span>
        </div>

        <div className="mx-auto max-w-[1240px]">
          <div>
            <CataloguePreview flipbookUrl={catalogue.flipbookUrl} title={catalogue.title} />
          </div>
        </div>

        {/*
        <section className="mt-10 rounded-[20px] border border-white/10 bg-white/5 p-5">
          <div className="mb-6 flex flex-col gap-3 border-b border-white/10 pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white">{catalogue.title}</h1>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-white/70">{catalogue.summary}</p>
              {catalogue.overview ? (
                <p className="mt-2 max-w-3xl text-sm leading-7 text-white/55">{catalogue.overview}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={catalogue.flipbookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white"
              >
                Open Flipbook
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
                onClick={() => setIsGateOpen(true)}
              >
                {catalogue.downloadLabel}
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-light text-white">More Catalogues</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {relatedCatalogues.map((item) => (
              <Link
                key={item.slug}
                to={`/catalogues/${item.slug}`}
                className="overflow-hidden rounded-[18px] border border-white/10 bg-black/30 transition hover:-translate-y-1 hover:border-white/20"
              >
                <img src={item.cardImage} alt={item.title} loading="lazy" decoding="async" className="w-full object-cover" />
                <p className="px-4 py-3 text-sm leading-6 text-white/75">{item.title}</p>
              </Link>
            ))}
          </div>
        </section>
        */}
      </div>

      <CatalogueFormGate
        isOpen={isGateOpen}
        onClose={() => setIsGateOpen(false)}
        onSubmit={triggerDownload}
        unavailableMessage={unavailableMessage}
        fields={catalogue.formFields}
      />
      <HomeLegacyPartnersSection />
    </section>
  );
}

export default CatalogueDetailPage;
