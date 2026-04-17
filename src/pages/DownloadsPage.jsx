import { useState } from "react";
import DownloadCard from "../components/downloads/DownloadCard";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import downloads from "../data/downloads";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import { triggerFileDownload } from "../utils/fileDownload";
import { getUnavailableMessage } from "../utils/formValidation";

function DownloadsPage() {
  const [notice, setNotice] = useState("");

  const handleDownload = (item) => {
    if (!item.available || !item.file) {
      setNotice(getUnavailableMessage(item.title, item.note));
      return;
    }

    triggerFileDownload(item.file);
    setNotice("");
  };

  return (
    <section className="bg-[#f9fafb] text-black">
      <PageMeta
        title="Downloads"
        description="Browse Mecanav download cards and document availability states."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="text-center text-4xl font-semibold text-gray-800 sm:text-5xl">Downloads</h1>

          {notice ? (
            <StatusPanel tone="warning" message={notice} className="mx-auto mt-6 max-w-3xl shadow-none" />
          ) : null}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {downloads.map((item) => (
              <DownloadCard key={item.slug} item={item} onDownload={handleDownload} />
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-600">
            Download availability is shown on each card so visitors can quickly see which
            documents are ready and which ones should be requested from the Mecanav team.
          </div>
        </div>
      </section>
      <HomeLegacyPartnersSection />
    </section>
  );
}

export default DownloadsPage;
