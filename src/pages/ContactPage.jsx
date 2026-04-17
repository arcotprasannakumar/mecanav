import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import navigation from "../data/navigation";
import locations from "../data/locations";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import ContactForm from "../components/contact/ContactForm";
import LocationCard from "../components/contact/LocationCard";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import contactBackground from "../assets/images/applications/od3.webp";
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
 
      <section
        id="breadcrumb-section"
        className="relative overflow-hidden text-center"
        style={{
          backgroundImage: `url(${contactBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1280px] flex-col items-center justify-center px-4 py-16 sm:min-h-[380px] lg:min-h-[400px]">
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
            Contact
          </h2>
 
          <div className="flex items-center gap-2 text-sm text-white">
            <Link to="/" className="transition hover:text-white/75">
              Home
            </Link>
            <span>›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>
 
<section id="contact" className="bg-black px-4 py-6 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-[1600px]">
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
      <div className="min-h-[450px] rounded-[16px] bg-[#171717] px-6 py-7 sm:px-6 sm:py-7">
        <h2 className="text-[42px] font-semibold leading-[1.08] text-white sm:text-[44px]">
          Get in Touch
        </h2>
 
        <p className="mt-6 max-w-[650px] text-[17px] font-normal leading-[1.9] text-white/85">
          We&apos;d love to hear from you. Reach out for project inquiries, feedback, or
          general questions.
        </p>
 
        <div className="mt-10 space-y-6">
          <ContactInfoCard
            text="123 Light Street, Glow City"
            icon="📍"
            iconColor="text-[#14b8d4]"
          />
 
          <ContactInfoCard
            text={contactEmail}
            href={`mailto:${contactEmail}`}
            icon="✉"
            iconColor="text-[#ff4d5a]"
          />
        </div>
 
        <div className="mt-8 flex flex-wrap gap-2">
          {socialLinks.map((social) =>
            social.href ? (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2b2b2b] transition duration-300 hover:bg-[#363636]"
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="h-[18px] w-[18px] object-contain"
                />
              </a>
            ) : (
              <span
                key={social.label}
                className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full bg-[#2b2b2b] opacity-50"
                aria-label={`${social.label} unavailable`}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="h-[18px] w-[18px] object-contain"
                />
              </span>
            ),
          )}
        </div>
      </div>
 
      <ContactForm />
    </div>
  </div>
</section>
 
<section id="faq" className="bg-[#1c1c1c] px-4 py-10 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-[1280px]">
    <h2 className="mb-10 text-center text-[32px] font-semibold text-white">
      Frequently Asked Questions
    </h2>
 
    <div className="mx-auto max-w-[1100px] space-y-3">
      {faqs.map((item, index) => {
        const isOpen = activeFaqIndex === index;
 
        return (
          <div
            key={item.question}
            className="rounded-[6px] border border-white/10 bg-[#181818]"
          >
            <button
              type="button"
              onClick={() => setActiveFaqIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between px-5 py-5 text-left"
            >
              <span className="text-[17px] font-medium text-white">
                {item.question}
              </span>
 
              <span className="text-[22px] text-white">
                {isOpen ? "−" : "+"}
              </span>
            </button>
 
            {isOpen && (
              <div className="border-t border-white/10 bg-[#222222] px-5 py-4 text-[15px] leading-7 text-white/75">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>
 
 
<section className="bg-black px-2 pt-8 sm:px-4 lg:px-6">
  <div className="mx-auto max-w-[1600px]">
    
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-[26px] font-semibold text-white sm:text-[30px]">
        Search Your Nearest Location
      </h2>
    </div>
 
    {/* Search */}
    <form
      className="mx-auto mt-6 flex w-full max-w-[760px] flex-col gap-2 rounded-[12px] bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:flex-row sm:items-center"
      onSubmit={(event) => {
        event.preventDefault();
        setHasSearched(true);
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search By City Or Country..."
        className="h-[52px] flex-1 rounded-[8px] border border-[#d7d7d7] bg-[#f3f3f3] px-4 text-[15px] text-black placeholder:text-[#8a8a8a] focus:border-[#0d6efd] focus:outline-none"
      />
 
      <button
        type="submit"
        className="h-[52px] rounded-[8px] bg-[#0d57d8] px-6 text-[15px] font-medium text-white transition hover:bg-[#0b4cc0] sm:min-w-[100px]"
      >
        Search
      </button>
    </form>
 
    {/* Map */}
    <div className="mt-8 overflow-hidden rounded-[14px] mb-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9650744.676098576!2d-1.5541365!3d54.559322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487931b71d11600f%3A0xf6ba7d65126b47d3!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1716118513051!5m2!1sen!2sin"
        title="Mecanav map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[420px] w-full border-0"
      />
    </div>
 
    {/* Results (tight) */}
    {hasSearched && (
      <div className="mx-auto mt-3 max-w-[760px]">
        {filteredLocations.length ? (
          <div className="space-y-3">
            {filteredLocations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        ) : (
          <StatusPanel
            tone="light"
            message="No matching location found."
            className="rounded-[12px] bg-white px-4 py-4 text-sm"
          />
        )}
      </div>
    )}
  </div>
</section>
    </section>
  );
}
 
export default ContactPage;
