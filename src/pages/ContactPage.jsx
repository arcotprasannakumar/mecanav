import { useMemo, useState } from "react";
import navigation from "../data/navigation";
import locations from "../data/locations";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import ContactForm from "../components/contact/ContactForm";
import LocationCard from "../components/contact/LocationCard";
import PageMeta from "../components/ui/PageMeta";
import PageHero from "../components/ui/PageHero";
import StatusPanel from "../components/ui/StatusPanel";
import contactBackground from "../assets/images/banners/contactbg.png";
import worldMapImage from "../assets/images/world-map.webp";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer architectural and MECANAV design, installation, and maintenance services.",
  },
  {
    question: "How can I request a quote?",
    answer: "You can request a quote through our contact form or by emailing us.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we provide full installation services for all our lighting systems.",
  },
];

function ContactPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredLocations = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return [];
    }

    return locations.filter((location) =>
      `${location.name} ${location.country}`.toLowerCase().includes(term),
    );
  }, [query]);

  const contactEmail = navigation.footer.contact.email;
  const socialLinks = navigation.footer.social;

  return (
    <section className="bg-[#0f0f0f] text-white">
      <PageMeta
        title="Contact"
        description="Contact Mecanav for project inquiries, lighting support, and location information."
      />
      <PageHero
        title="Contact"
        breadcrumbs={[{ label: "Home" }, { label: "Contact Us" }]}
        backgroundImage={contactBackground}
        overlayClassName="bg-black/65"
      />

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2">
          <div className="rounded-[12px] bg-[#1c1c1c] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/70">
              We&apos;d love to hear from you. Reach out for project inquiries, feedback, or
              general questions.
            </p>

            <div className="mt-8 space-y-4">
              <ContactInfoCard
                title="Address"
                text="123 Light Street, Glow City"
                icon="⌖"
              />
              <ContactInfoCard
                title="Email"
                text={contactEmail}
                href={`mailto:${contactEmail}`}
                icon="@"
                subtle="Legacy React migration note: the original page used this email and a Google Form, not an app-owned mail backend."
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2c2c2c] transition hover:scale-105 hover:bg-white"
                    aria-label={social.label}
                  >
                    <img src={social.icon} alt={social.label} className="h-5 w-5 object-contain" />
                  </a>
                ) : (
                  <span
                    key={social.label}
                    className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full bg-[#2c2c2c] opacity-50"
                    aria-label={`${social.label} unavailable`}
                  >
                    <img src={social.icon} alt={social.label} className="h-5 w-5 object-contain" />
                  </span>
                )
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section id="faq" className="bg-[#111] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-white">Frequently Asked Questions</h2>
          <div className="mt-10 rounded-[12px] bg-[#181818] p-5 shadow-[0_0_10px_rgba(255,255,255,0.05)] sm:p-8">
            <div className="space-y-3">
              {faqs.map((item, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div key={item.question} className="overflow-hidden border-b border-white/10 last:border-b-0">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 px-1 py-5 text-left"
                      onClick={() => setActiveFaqIndex(isOpen ? -1 : index)}
                    >
                      <span className="text-lg font-medium text-white">{item.question}</span>
                      <span className="text-2xl text-white/65">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen ? (
                      <div className="mb-4 rounded-xl bg-[#2a2a2a] px-5 py-4 text-sm leading-7 text-[#ccc]">
                        {item.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">Search Your Nearest Location</h2>
          </div>

          <form
            className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 rounded-xl bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.2)] sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              setHasSearched(true);
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by city or country..."
              className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-black placeholder:text-slate-400 focus:border-[#0052D4] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#0052D4] px-6 py-3 font-semibold text-white transition hover:bg-[#003bb3]"
            >
              Search
            </button>
          </form>

          {hasSearched ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.9fr)]">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
                <img
                  src={worldMapImage}
                  alt="World map"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>

              <div className="rounded-2xl bg-[#aaa5a5] p-4">
                {filteredLocations.length ? (
                  <div className="space-y-4">
                    {filteredLocations.map((location) => (
                      <LocationCard key={location.slug} location={location} />
                    ))}
                  </div>
                ) : (
                  <StatusPanel
                    tone="light"
                    message="No matching legacy location card was found for this search. The original API-key-based map filter was broken, so this React version keeps the search experience safe and card-based."
                    className="rounded-2xl px-5 py-6 shadow-none"
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-[#1c1c1c] px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9650744.676098576!2d-1.5541365!3d54.559322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487931b71d11600f%3A0xf6ba7d65126b47d3!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1716118513051!5m2!1sen!2sin"
              title="Mecanav map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContactPage;
