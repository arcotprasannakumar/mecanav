import { useState } from "react";
import DownloadCard from "../components/downloads/DownloadCard";
import downloads from "../data/downloads";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import { triggerFileDownload } from "../utils/fileDownload";
import { getUnavailableMessage } from "../utils/formValidation";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
 
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
    <section className="bg-[#e7e7ea] text-black">
      <PageMeta
        title="Downloads"
        description="Browse legacy Mecanav download references and document availability states."
      />
 
      <section className="px-4 pb-14 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-[1480px]">
          <h1 className="text-center text-[30px] font-semibold tracking-[0.08em] text-[#17385b] sm:text-[32px]">
            Downloads
          </h1>
 
          {notice ? (
            <StatusPanel
              tone="warning"
              message={notice}
              className="mx-auto mt-6 max-w-3xl shadow-none"
            />
          ) : null}
 
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {downloads.map((item) => (
              <DownloadCard
                key={item.slug}
                item={item}
                onDownload={handleDownload}
              />
            ))}
          </div>
        </div>
      </section>
 
      <HomeLegacyPartnersSection />
    </section>
  );
}
 
export default DownloadsPage;
