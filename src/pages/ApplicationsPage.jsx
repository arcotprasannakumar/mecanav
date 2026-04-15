import { useEffect, useState } from "react";
import applications from "../data/applications";
import ApplicationCard from "../components/applications/ApplicationCard";
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
      { rootMargin: "-20% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToApplication = (slug) => {
    setActiveSlug(slug);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-black text-white">
      <PageMeta
        title="Applications"
        description="Explore Mecanav lighting applications across bridges, parks, facades, stages, and public environments."
      />
      <div className="px-5 pb-4 pt-8 sm:px-8 lg:px-10">
        <h1 className="text-center text-[32px] font-light leading-none text-white sm:text-left sm:text-[64px]">
          Applications
        </h1>
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-col bg-[#f6f2f2] px-5 pb-16 pt-8 sm:px-8 lg:flex-row lg:px-[60px] lg:pb-20 lg:pt-[50px]">
        <aside className="w-full lg:w-[280px] lg:flex-none">
          <div className="sticky top-20 bg-black">
            <ul className="flex gap-2 overflow-x-auto p-3 whitespace-nowrap lg:block lg:space-y-0 lg:overflow-visible lg:p-0">
              {applications.map((application) => (
                <li
                  key={application.slug}
                  className={`cursor-pointer border-l-0 px-[14px] py-[8px] text-sm transition lg:border-l-[4px] lg:px-[10px] lg:py-3 lg:text-[18px] ${
                    activeSlug === application.slug
                      ? "rounded-full bg-white font-semibold text-black lg:rounded-none lg:border-l-[6px] lg:border-l-[#615f5f]"
                      : "rounded-full bg-[#222] text-white lg:rounded-none lg:bg-transparent lg:border-l-transparent"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full text-left"
                    onClick={() => scrollToApplication(application.slug)}
                  >
                    {application.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex-1 pt-8 lg:pl-[60px] lg:pt-0">
          {applications.map((application) => (
            <section key={application.slug} id={application.slug} className="mb-[60px] lg:mb-[100px]">
              <p className="mb-5 px-0 text-start font-['Inter',sans-serif] text-[20px] text-[#7e7d7d] sm:text-[28px] lg:px-[30px]">
                {application.title}
              </p>
              <ApplicationCard
                title={application.title}
                image={application.cardImage}
                to={`/applications/${application.slug}`}
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApplicationsPage;
