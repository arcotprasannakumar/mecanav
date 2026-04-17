import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import applications from "../data/applications";
import PageMeta from "../components/ui/PageMeta";
 
function ApplicationsPage() {
  const [activeSlug, setActiveSlug] = useState(applications[0]?.slug ?? null);
 
  useEffect(() => {
    const sections = applications
      .map((application) => document.getElementById(application.slug))
      .filter(Boolean);
 
    if (!sections.length) {
      return undefined;
    }
 
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
 
        if (visible?.target?.id) {
          setActiveSlug(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );
 
    sections.forEach((section) => observer.observe(section));
 
    return () => observer.disconnect();
  }, []);
 
  const scrollToApplication = (slug) => {
    setActiveSlug(slug);
    document.getElementById(slug)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
 
  return (
    <section className="bg-black pt-[120px] text-white lg:pt-[140px]">
      <PageMeta
        title="Applications"
        description="Explore Mecanav lighting applications across bridges, parks, facades, stages, and public environments."
      />
 
      <div className="px-5 pb-6 pt-8 sm:px-8 lg:px-10">
        <h1 className="text-left text-[32px] font-light leading-none text-white sm:text-[48px] lg:text-[64px]">
          Applications
        </h1>
      </div>
 
      <div className="mx-auto max-w-[1700px] bg-[#f3efef] px-4 pb-16 pt-8 sm:px-6 lg:px-7 lg:pb-24 lg:pt-[40px]">
        <div className="grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-[60px]">
          <aside className="lg:sticky lg:top-[120px] lg:self-start">
            <div className="overflow-hidden bg-black">
              <ul className="flex overflow-x-auto whitespace-nowrap lg:block lg:overflow-visible">
                {applications.map((application) => (
                  <li
                    key={application.slug}
                    className={`border-l-[6px] transition-all duration-300 ${
                      activeSlug === application.slug
                        ? "border-l-[#666] bg-white text-black"
                        : "border-l-transparent bg-black text-white hover:bg-[#111]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => scrollToApplication(application.slug)}
                      className="block w-full px-5 py-5 text-left text-[17px] font-normal leading-none sm:text-[19px] lg:px-[18px] lg:py-[24px] lg:text-[18px]"
                    >
                      {application.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
 
          <div className="min-w-0">
            {applications.map((application) => (
              <section
                key={application.slug}
                id={application.slug}
                className="mb-16 scroll-mt-[150px] lg:mb-[72px]"
              >
                <h2 className="mb-8 text-[18px] font-light leading-none tracking-[-0.02em] text-[#7a7a7a] sm:text-[38px] lg:mb-8 lg:text-[30px]">
                  {application.title}
                </h2>
 
                <Link
  to={`/applications/${application.slug}`}
  className="group relative block w-[90%] overflow-hidden"
>
  {/* Fixed ratio container */}
  <div className="relative w-full aspect-[16/9] bg-black">
    <img
      src={application.cardImage}
      alt={application.title}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
 
  {/* Light overlay */}
  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
 
  {/* Button */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
    <span className="inline-flex min-w-[170px] items-center justify-center bg-white px-8 py-5 text-[18px] text-black shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
      Know More
    </span>
  </div>
</Link>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default ApplicationsPage;