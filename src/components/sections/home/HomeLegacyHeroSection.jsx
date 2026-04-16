import { useEffect, useRef, useState } from "react";
import heroVideo from "../../../assets/media/wall washor 2.mp4";

const heroSlides = [
  {
    heading: "Innovative Lighting Solutions",
    body: "Bringing brilliance to every space with our cutting-edge display lights.",
  },
  {
    heading: "Quality Meets Design",
    body: "Stylish, energy-efficient lighting for modern interiors.",
  },
  {
    heading: "Illuminate Your Vision",
    body: "Custom lighting for retail, commercial, and residential spaces.",
  },
];

function HomeLegacyHeroSection() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const heroVideoElement = heroVideoRef.current;
    if (!heroVideoElement) {
      return;
    }

    const handleLoaded = () => {
      if (heroVideoElement.duration > 12) {
        heroVideoElement.currentTime = 10.8;
      }
    };

    heroVideoElement.addEventListener("loadedmetadata", handleLoaded);
    heroVideoElement.play().catch(() => {});
    return () => heroVideoElement.removeEventListener("loadedmetadata", handleLoaded);
  }, []);

  return (
    <section className="hero-slider-container">
      <video
        ref={heroVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="video-bg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.heading}
            className={`hero-content text-white text-center${heroIndex === index ? " active" : ""}`}
          >
            {index === 0 ? <h1 className="small-text">{slide.heading}</h1> : <h2 className="small-text">{slide.heading}</h2>}
            <p>{slide.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeLegacyHeroSection;
