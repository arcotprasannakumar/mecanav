import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBackdrop from "../../../assets/images/banners/allcoverimg.webp";
import heroMainImage from "../../../assets/images/applications/Bridge-lighting-homepage-final.webp";
import heroChildOne from "../../../assets/images/applications/Ferris-Wheel-Lighting-final-001.webp";
import heroChildTwo from "../../../assets/images/applications/park-lighting-home-001.webp";
import heroChildThree from "../../../assets/images/applications/sppli11 (3).webp";

const slides = [
  {
    eyebrow: "Architectural Lighting",
    title: "Designing facades that come alive after dark.",
    description:
      "Mecanav facade lighting solutions bring landmarks, public spaces, and commercial environments to life with precision-driven illumination.",
    ctaLabel: "Explore Products",
    ctaTo: "/products",
    image: heroMainImage,
    childOne: heroChildOne,
    childTwo: heroChildTwo,
    childThree: heroChildThree,
  },
  {
    eyebrow: "Bridge Lighting",
    title: "Engineered lighting for bold urban landmarks.",
    description:
      "From bridge spans to civic infrastructure, our lighting systems combine visual impact with durable outdoor-ready performance.",
    ctaLabel: "View Applications",
    ctaTo: "/applications",
    image: heroChildOne,
    childOne: heroMainImage,
    childTwo: heroChildTwo,
    childThree: heroChildThree,
  },
  {
    eyebrow: "Media Facades",
    title: "Dynamic light experiences built for attention.",
    description:
      "Pixel-driven fixtures, DMX control, and facade-focused products help create motion, storytelling, and memorable nighttime identity.",
    ctaLabel: "Contact Us",
    ctaTo: "/contact",
    image: heroChildThree,
    childOne: heroMainImage,
    childTwo: heroChildOne,
    childThree: heroChildTwo,
  },
];

function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.84) 48%, rgba(0,0,0,0.78) 100%), url(${heroBackdrop})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex min-h-[720px] w-full max-w-[1480px] items-center px-4 py-16 sm:px-6 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[72px_minmax(0,1fr)]">
          <div className="hidden items-center justify-center lg:flex">
            <div className="flex flex-col gap-6">
              {slides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  aria-label={`Go to ${slide.eyebrow} slide`}
                  className={`h-[2px] transition-all duration-300 ${
                    activeIndex === index ? "w-14 bg-white" : "w-8 bg-white/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)]">
            <div className="max-w-xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.45em] text-white/70">
                {activeSlide.eyebrow}
              </p>
              <h1 className="max-w-[13ch] text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                {activeSlide.title}
              </h1>
              <p className="mt-8 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
                {activeSlide.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={activeSlide.ctaTo}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white bg-white px-7 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white"
                >
                  {activeSlide.ctaLabel}
                </Link>
                <Link
                  to="/catalogues"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/35 px-7 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Catalogues
                </Link>
              </div>
            </div>

            <div className="relative ml-auto w-full max-w-[620px]">
              <div className="absolute inset-x-0 top-10 h-56 rounded-full bg-white/10 blur-3xl sm:h-72" />
              <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.eyebrow}
                  className="home-fade-in h-[320px] w-full rounded-[28px] object-cover sm:h-[420px] lg:h-[500px]"
                  key={activeSlide.image}
                />
              </div>
              <img
                src={activeSlide.childOne}
                alt=""
                className="home-fade-in absolute -right-2 top-12 hidden w-36 rounded-3xl border border-white/10 object-cover shadow-2xl sm:block lg:-right-12 lg:w-48"
                key={`${activeSlide.childOne}-1`}
              />
              <img
                src={activeSlide.childTwo}
                alt=""
                className="home-fade-in absolute -left-4 bottom-20 hidden w-40 rounded-3xl border border-white/10 object-cover shadow-2xl sm:block lg:-left-12 lg:w-52"
                key={`${activeSlide.childTwo}-2`}
              />
              <img
                src={activeSlide.childThree}
                alt=""
                className="home-fade-in absolute bottom-0 right-6 hidden w-32 rounded-3xl border border-white/10 object-cover shadow-2xl md:block lg:-bottom-14 lg:right-[-84px] lg:w-44"
                key={`${activeSlide.childThree}-3`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
