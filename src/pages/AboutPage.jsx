import aboutInnovation from "../assets/icons/about-innovation.webp";
import aboutIntegrity from "../assets/icons/about-integrity.webp";
import aboutPassion from "../assets/icons/about-passion.webp";
import aboutFocus from "../assets/icons/about-focus.webp";
import aboutTeam from "../assets/icons/about-team.webp";
import aboutSafety from "../assets/icons/about-safety.webp";
import sustainability from "../assets/icons/sustainability.webp";
import excellence from "../assets/icons/excellence.webp";
import modelAsset from "../assets/media/wall washer and stand 2.glb";
import heroBackground from "../assets/images/banners/contactbg.png";
import HomeProductsCarousel from "../components/sections/home/HomeProductsCarousel";
import PageMeta from "../components/ui/PageMeta";
import PageHero from "../components/ui/PageHero";
import useModelViewer from "../hooks/useModelViewer";

const timelineItems = [
  {
    year: "2024",
    title: "Our Lighting Timeline",
    text: "Each project marks a step forward — from our first glow to becoming a trusted name in architectural lighting.",
  },
  {
    year: "2023",
    title: "From Concept to Glow",
    text: "We turn bold ideas into brilliant facades — combining creativity and cutting-edge lighting tech.",
  },
  {
    year: "2022",
    title: "The MECANAV Company Story in Lights",
    text: "Born to make architecture shine — we craft stories through light, color, and motion.",
  },
  {
    year: "2021",
    title: "Milestones of Illumination",
    text: "From homes to smart buildings, every milestone reflects our passion to light up spaces and dreams.",
  },
];

const values = [
  {
    title: "Innovation",
    text: "Adapting to change with futuristic ideas and creative lighting design.",
    icon: aboutInnovation,
  },
  {
    title: "Integrity",
    text: "We shine with honesty — always ethical, always transparent.",
    icon: aboutIntegrity,
  },
  {
    title: "Passion",
    text: "Every project is powered by the fire to create dazzling experiences.",
    icon: aboutPassion,
  },
  {
    title: "Customer Focus",
    text: "We design with your vision in mind — always personalized, always glowing.",
    icon: aboutFocus,
  },
  {
    title: "Team Work",
    text: "Collaborative brilliance — like lights in sync, we work as one.",
    icon: aboutTeam,
  },
  {
    title: "Safety",
    text: "We light up buildings — not risks. Safety is always a priority.",
    icon: aboutSafety,
  },
  {
    title: "Sustainability",
    text: "Lighting up the world responsibly — we care for the planet as we illuminate it.",
    icon: sustainability,
  },
  {
    title: "Excellence",
    text: "Precision, perfection, and performance — we don’t just deliver, we excel.",
    icon: excellence,
  },
];

function AboutPage() {
  useModelViewer();

  return (
    <section className="bg-[#0f0f0f] text-white">
      <PageMeta
        title="About"
        description="Learn about Mecanav, our lighting journey, and the core values behind our architectural lighting solutions."
      />
      <PageHero
        title="Who We Are"
        breadcrumbs={[{ label: "Home" }, { label: "About Us" }]}
        backgroundImage={heroBackground}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-[28px] bg-white p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <model-viewer
              src={modelAsset}
              alt="3D Spotlight"
              auto-rotate=""
              camera-controls=""
              camera-orbit="18deg 100deg 2.5m"
              background-color="#ffffff"
              style={{ width: "100%", height: "500px", maxWidth: "100%" }}
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Illuminate the Extraordinary</h2>
            <p className="mt-5 text-base leading-8 text-white/80">
              At Mecanav, we don’t just light up structures—we create unforgettable experiences.
              From sleek Pixel LED Strips that trace every curve of a design to bold Neon Flex
              LEDs that splash vibrant personality across any surface, our lighting turns spaces
              into living, breathing art.
            </p>
            <p className="mt-5 text-base leading-8 text-white/80">
              Every glow, every pulse, every shift in color is crafted to inspire awe and spark
              emotion. Whether it’s elevating a skyscraper, reimagining a storefront, or making a
              landmark unforgettable—we deliver lighting that leaves a lasting impression.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Our Lighting Journey</h2>
          <div className="mt-10 space-y-6">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`grid gap-4 md:grid-cols-[120px_minmax(0,1fr)] ${
                  index % 2 === 1 ? "md:translate-x-8" : ""
                }`}
              >
                <div className="flex items-start">
                  <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-lg font-semibold text-white">
                    {item.year}
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Our Core Values</h2>
            <p className="mt-3 text-base text-white/65">Guided by light, powered by principles.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <img src={value.icon} alt={value.title} className="h-9 w-9 object-contain" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeProductsCarousel />
    </section>
  );
}

export default AboutPage;
