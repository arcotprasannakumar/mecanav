import { useMemo, useState } from "react";
import catalogues from "../data/catalogues";
import CatalogueCard from "../components/catalogues/CatalogueCard";
import CatalogueFormGate from "../components/catalogues/CatalogueFormGate";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import PageMeta from "../components/ui/PageMeta";
import { triggerFileDownload } from "../utils/fileDownload";

function CataloguesPage() {
  const [selectedCatalogue, setSelectedCatalogue] = useState(null);

  const unavailableMessage = useMemo(() => {
    if (!selectedCatalogue || selectedCatalogue.pdfFile) {
      return "";
    }

    return "This catalogue is currently available as a preview. Please contact the Mecanav team for the downloadable PDF.";
  }, [selectedCatalogue]);

  const handleDownload = (catalogue) => {
    setSelectedCatalogue(catalogue);
  };

  const triggerDownload = () => {
    const didDownload = triggerFileDownload(selectedCatalogue?.pdfFile);
    if (didDownload) {
      setSelectedCatalogue(null);
    }
  };

  return (
    <section className="bg-[#d7d4d4] px-4 py-12 text-black sm:px-6 lg:px-8">
      <PageMeta
        title="Catalogues"
        description="Preview and download Mecanav product catalogues."
      />
      <div className="mx-auto max-w-[1400px]">
        <div className="px-2 py-5 text-center">
          <h1 className="font-['Poppins',sans-serif] font-bold tracking-[0.08em] text-[#010101] sm:text-4xl">
            OUR CATALOGUES
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {catalogues.map((catalogue) => (
            <CatalogueCard
              key={catalogue.slug}
              title={catalogue.title}
              image={catalogue.cardImage}
              to={`/catalogues/${catalogue.slug}`}
              onDownload={() => handleDownload(catalogue)}
            />
          ))}
        </div>
      </div>

      <CatalogueFormGate
        isOpen={Boolean(selectedCatalogue)}
        onClose={() => setSelectedCatalogue(null)}
        onSubmit={triggerDownload}
        unavailableMessage={unavailableMessage}
        fields={selectedCatalogue?.formFields}
      />
      <HomeLegacyPartnersSection />
    </section>
  );
}

export default CataloguesPage;
