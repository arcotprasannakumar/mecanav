import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/ui/PageMeta";
import useModelViewer from "../hooks/useModelViewer";

import heroVideo from "../assets/media/bannervideos.mp4";
import appVideoOne from "../assets/media/dddd.mp4";
import appVideoTwo from "../assets/media/dddd2.mp4";
import appVideoThree from "../assets/media/dddd1.mp4";
import stadiumVideo from "../assets/media/stadiumvideo.mp4";
import modelAsset from "../assets/media/113133.glb";

import whoWeAreBg from "../assets/images/applications/architectural-light-innerpage-final-001.webp";
import faqBg from "../assets/images/applications/park-lighting-home-001.webp";
import parkImage from "../assets/images/applications/parklightingapplication.webp";
import riverImage from "../assets/images/applications/riverlighting.webp";
import stageImage from "../assets/images/applications/stagelightin1.webp";

import lightOnBase from "../assets/images/animatedimages/withoutlightsss.webp";
import lightOnTop from "../assets/images/animatedimages/bridgeanimya.webp";

import wheelCover from "../assets/images/covers/wheel.webp";
import barCover from "../assets/images/covers/bar.webp";
import neonCover from "../assets/images/covers/neon.webp";
import panelCover from "../assets/images/covers/15.webp";

import contactBg from "../assets/images/banners/contactbg.png";
import worldMapImage from "../assets/images/world-map.webp";

import floodOff from "../assets/images/Final-Products/Product spec imgs/flood_off0.webp";
import floodOn from "../assets/images/Final-Products/Product spec imgs/flood_on.webp";
import fountainOff from "../assets/images/Final-Products/Product spec imgs/fountain off.webp";
import fountainOn from "../assets/images/Final-Products/Product spec imgs/fountain on.webp";
import groundOff from "../assets/images/Final-Products/Product spec imgs/ground_light_off.webp";
import groundOn from "../assets/images/Final-Products/Product spec imgs/ground light on.webp";
import neonOff from "../assets/images/Final-Products/Product spec imgs/neon_flex_off.webp";
import neonOn from "../assets/images/Final-Products/Product spec imgs/neon_flex_on.webp";
import pixelDotOff from "../assets/images/Final-Products/Product spec imgs/pixel dot_off.webp";
import pixelDotOn from "../assets/images/Final-Products/Product spec imgs/pixel_dot_on.webp";
import poolOff from "../assets/images/Final-Products/Product spec imgs/pool_off.webp";
import poolOn from "../assets/images/Final-Products/Product spec imgs/pool_light.webp";
import stripOff from "../assets/images/Final-Products/Product spec imgs/strip_off.webp";
import stripOn from "../assets/images/Final-Products/Product spec imgs/strip_on.webp";
import wallWindowOff from "../assets/images/Final-Products/Product spec imgs/wall window off.webp";
import wallWindowOn from "../assets/images/Final-Products/Product spec imgs/wall window on.webp";
import treeOn from "../assets/images/Final-Products/Product spec imgs/treehighlighters_on.webp";
import treeOff from "../assets/images/Final-Products/Product spec imgs/treehighlighters_off.webp";
import goboOff from "../assets/images/Final-Products/Product spec imgs/gobo_off.webp";
import goboOn from "../assets/images/Final-Products/Product spec imgs/gobo_on.webp";
import fanOff from "../assets/images/Final-Products/Product spec imgs/fan-off.webp";
import fanOn from "../assets/images/Final-Products/Product spec imgs/fan-on.webp";
import pillarOff from "../assets/images/Final-Products/Product spec imgs/piller-highlighter-off.webp";
import pillarOn from "../assets/images/Final-Products/Product spec imgs/piller-highlighter-on.webp";
import pixelBarOff from "../assets/images/Final-Products/Product spec imgs/pixel eld bar off.webp.webp";
import pixelBarOn from "../assets/images/Final-Products/Product spec imgs/pixel led bar on.webp";
import pixelPanelOff from "../assets/images/Final-Products/Product spec imgs/pixel panel off.webp.webp";
import pixelPanelOn from "../assets/images/Final-Products/Product spec imgs/pixel panel on.webp.webp";
import wallWasherOff from "../assets/images/Final-Products/Product spec imgs/wallwasher_off.webp";
import wallWasherOn from "../assets/images/Final-Products/Product spec imgs/wallwasher_on.webp";

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

const animationImageModules = import.meta.glob("../assets/images/animationcode/*.webp", {
  eager: true,
  import: "default",
});

const animationImageMap = Object.fromEntries(
  Object.entries(animationImageModules).map(([path, source]) => [
    path.split("/").pop()?.replace(".webp", ""),
    source,
  ]),
);

const mapDots = [
  { key: "dot1", label: "Hyderabad, India", className: "mappingpoint-dot1" },
  { key: "dot2", label: "United Kingdom", className: "mappingpoint-dot2" },
  { key: "dot3", label: "China", className: "mappingpoint-dot3" },
  { key: "dot4", label: "Italy", className: "mappingpoint-dot4" },
  { key: "dot5", label: "Canada", className: "mappingpoint-dot5" },
  { key: "dot6", label: "Dubai, UAE", className: "mappingpoint-dot6" },
  { key: "dot7", label: "Germany", className: "mappingpoint-dot7" },
];

const partnerItems = [
  { off: floodOff, on: floodOn },
  { off: fountainOff, on: fountainOn },
  { off: groundOff, on: groundOn },
  { off: neonOff, on: neonOn },
  { off: pixelDotOff, on: pixelDotOn },
  { off: poolOff, on: poolOn },
  { off: stripOff, on: stripOn },
  { off: wallWindowOff, on: wallWindowOn },
  { off: treeOn, on: treeOff },
  { off: goboOff, on: goboOn },
  { off: fanOff, on: fanOn },
  { off: pillarOff, on: pillarOn },
  { off: pixelBarOff, on: pixelBarOn },
  { off: pixelPanelOff, on: pixelPanelOn },
  { off: wallWasherOff, on: wallWasherOn },
];

const faqItems = [
  { question: "What is your delivery timeline?", answer: "Our standard delivery time is 5-7" },
  {
    question: "Do you offer installation services?",
    answer: "Yes, we provide installation services through our certified partners in select cities.",
  },
  {
    question: "Can I customize my lighting solution?",
    answer: "Absolutely. We work with clients to create tailored solutions based on your design and functional needs.",
  },
  {
    question: "What warranty do you provide?",
    answer: "We offer a 2-year warranty on all our products against manufacturing defects.",
  },
];

function HomePage() {
  const [heroIndex, setHeroIndex] = useState(2);
  const [splitX, setSplitX] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [controllerState, setControllerState] = useState([0, 0, 0, 0, 0, 0]);
  const [activeFaq, setActiveFaq] = useState(0);
  const [partnerOnState, setPartnerOnState] = useState(false);
  const [partnerIndex, setPartnerIndex] = useState(0);
  const heroVideoRef = useRef(null);

  useModelViewer();

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
    return () => heroVideoElement.removeEventListener("loadedmetadata", handleLoaded);
  }, []);

  useEffect(() => {
    const onMove = (event) => {
      if (!dragging) {
        return;
      }

      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      const next = Math.max(0, Math.min((clientX / window.innerWidth) * 100, 100));
      setSplitX(next);
    };

    const stopDrag = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging]);

  useEffect(() => {
    const toggleInterval = window.setInterval(() => {
      setPartnerOnState((current) => !current);
    }, 2000);

    return () => window.clearInterval(toggleInterval);
  }, []);

  useEffect(() => {
    const carouselInterval = window.setInterval(() => {
      setPartnerIndex((current) => (current + 1) % partnerItems.length);
    }, 3000);

    return () => window.clearInterval(carouselInterval);
  }, []);

  const controllerImage = useMemo(() => {
    const key = controllerState.join("");
    return animationImageMap[key] ?? animationImageMap["000000"];
  }, [controllerState]);

  const visiblePartners = useMemo(() => {
    const rotated = [...partnerItems.slice(partnerIndex), ...partnerItems.slice(0, partnerIndex)];
    return [...rotated, ...rotated].slice(0, 8);
  }, [partnerIndex]);

  const toggleController = (index) => {
    setControllerState((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? (item ? 0 : 1) : item)),
    );
  };

  return (
    <div className="legacy-home-page">
      <PageMeta
        title="Mecanav - Create Impact After Sunset"
        description="Mecanav facade lighting homepage with products, catalogues, applications, and support sections."
      />

      <section className="hero-slider-container">
        <video ref={heroVideoRef} autoPlay muted loop playsInline className="video-bg">
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

        <button
          type="button"
          className="legacy-hero-arrow legacy-hero-arrow-left"
          aria-label="Previous slide"
          onClick={() => setHeroIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
        >
          &lsaquo;
        </button>
        <button
          type="button"
          className="legacy-hero-arrow legacy-hero-arrow-right"
          aria-label="Next slide"
          onClick={() => setHeroIndex((current) => (current + 1) % heroSlides.length)}
        >
          &rsaquo;
        </button>

        <div className="legacy-hero-dots" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.heading}
              type="button"
              className={heroIndex === index ? "active" : ""}
              onClick={() => setHeroIndex(index)}
            />
          ))}
        </div>
      </section>

      <section
        className="whoweareaboutus section professional-bg-container"
        style={{ backgroundImage: `url(${whoWeAreBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", position: "relative" }}
      >
        <div className="image-mask" />

        <div className="container content-center">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 content">
              <h3 className="text-white">Who We Are</h3>
              <p className="text-white">
                We specialize in innovative facade lighting solutions that enhance architecture, create stunning visual effects, and improve ambiance. From homes to commercial buildings, we bring structures to life with light.
              </p>
              <Link to="/about" className="read-more text-dark bg-white">
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="application-section py-2">
        <div className="container my-2">
          <h2 className="text-white mb-2 text-center small-text">Applications</h2>

          <div className="row g-4">
            <div className="col-lg-8 col-md-6 col-12 px-0">
              <Link to="/applications">
                <div className="bg-card">
                  <video className="bg-video" autoPlay muted loop playsInline>
                    <source src={appVideoOne} type="video/mp4" />
                  </video>
                  <div className="overlay" />
                  <div className="content">
                    <h3>Architectural Lighting</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 px-0">
              <Link to="/applications">
                <div className="bg-card">
                  <div className="bg-image" style={{ backgroundImage: `url('${parkImage}')` }} />
                  <div className="overlay" />
                  <div className="content">
                    <h3>Park Lighting</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12 px-0">
              <Link to="/applications">
                <div className="bg-card">
                  <div className="bg-image" style={{ backgroundImage: `url('${riverImage}')` }} />
                  <div className="overlay" />
                  <div className="content">
                    <h3>River Lighting</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-8 col-md-6 col-12 px-0">
              <Link to="/applications">
                <div className="bg-card">
                  <video className="bg-video" autoPlay muted loop playsInline>
                    <source src={appVideoTwo} type="video/mp4" />
                  </video>
                  <div className="overlay" />
                  <div className="content">
                    <h3>Ferris Wheel Lighting</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8 col-md-6 col-12 px-0">
              <Link to="/applications">
                <div className="bg-card">
                  <video className="bg-video" autoPlay muted loop playsInline>
                    <source src={appVideoThree} type="video/mp4" />
                  </video>
                  <div className="overlay" />
                  <div className="content">
                    <h3>Bridge Lighting</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 px-0">
              <Link to="/applications">
                <div className="bg-card">
                  <div className="bg-image" style={{ backgroundImage: `url('${stageImage}')` }} />
                  <div className="overlay" />
                  <div className="content">
                    <h3>Stage Lighting</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="animiyaa-video-section">
        <video id="animiyaaVideo" autoPlay muted playsInline loop>
          <source src={stadiumVideo} type="video/mp4" />
        </video>
        <div className="centered-text">
          <h2 id="animatedSingleText">Beyond Illumination - Into Imagination</h2>
        </div>
      </section>

      <section className="lightoffandon-container mt-0 bg-white mb-0">
        <img src={lightOnBase} className="lightoffandon-image on" alt="Without light" />
        <img src={lightOnTop} className="lightoffandon-image off" id="lightoffandon-off" alt="With light" style={{ clipPath: `inset(0 ${100 - splitX}% 0 0)` }} />

        <div
          className="lightoffandon-divider"
          id="lightoffandon-divider"
          style={{ left: `${splitX}%` }}
          onMouseDown={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onTouchStart={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
        >
          <div className="lightoffandon-buttons">
            <span className="left">&lt;</span>
            <span className="right">&gt;</span>
          </div>
          <span className={`light-text${dragging ? " show" : ""}`} id="light-text" style={{ left: `${splitX / 2}%` }}>
            {"Light On".split("").map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter === " " ? "\u00A0" : letter}</span>
            ))}
          </span>
        </div>
      </section>

      <div className="legacy-controller-wrap">
        <div className="sidebar">
          <div className="toggle-group">
            <label htmlFor="toggle0">Ferris Wheel Lighting</label>
            <label className="switch">
              <input type="checkbox" id="toggle0" checked={Boolean(controllerState[0])} onChange={() => toggleController(0)} />
              <span className="slider" />
            </label>
          </div>

          <div className="toggle-group">
            <label htmlFor="toggle1">Fountain Lighting</label>
            <label className="switch">
              <input type="checkbox" id="toggle1" checked={Boolean(controllerState[1])} onChange={() => toggleController(1)} />
              <span className="slider" />
            </label>
          </div>

          <div className="toggle-group">
            <label htmlFor="toggle5">Architecture Lighting</label>
            <label className="switch">
              <input type="checkbox" id="toggle5" checked={Boolean(controllerState[5])} onChange={() => toggleController(5)} />
              <span className="slider" />
            </label>
          </div>

          <div className="toggle-group">
            <label htmlFor="toggle4">Pool Lighting</label>
            <label className="switch">
              <input type="checkbox" id="toggle4" checked={Boolean(controllerState[4])} onChange={() => toggleController(4)} />
              <span className="slider" />
            </label>
          </div>

          <div className="toggle-group">
            <label htmlFor="toggle2">Bridge Lighting</label>
            <label className="switch">
              <input type="checkbox" id="toggle2" checked={Boolean(controllerState[2])} onChange={() => toggleController(2)} />
              <span className="slider" />
            </label>
          </div>

          <div className="toggle-group">
            <label htmlFor="toggle3">Park Lighting</label>
            <label className="switch">
              <input type="checkbox" id="toggle3" checked={Boolean(controllerState[3])} onChange={() => toggleController(3)} />
              <span className="slider" />
            </label>
          </div>

          <div className="control-buttons">
            <button type="button" className="control-btn on-btn" onClick={() => setControllerState([1, 1, 1, 1, 1, 1])}>All ON</button>
            <button type="button" className="control-btn off-btn" onClick={() => setControllerState([0, 0, 0, 0, 0, 0])}>All OFF</button>
          </div>
        </div>

        <div className="main-content">
          <img id="display" src={controllerImage} alt="Lighting View" />
        </div>
      </div>

      <section className="bookcats-section">
        <h2 className="bookcats-title">Catalogues</h2>
        <div className="bookcats-wrapper show" id="bookcatsWrapper">
          <Link to="/catalogues/catalogues1-1"><div className="bookcats-item"><img src={wheelCover} alt="Lighting" /></div></Link>
          <Link to="/catalogues/catalogues1-2"><div className="bookcats-item"><img src={barCover} alt="facde lighting" /></div></Link>
          <Link to="/catalogues/catalogues1-3"><div className="bookcats-item"><img src={neonCover} alt="mecanav lighting" /></div></Link>
          <Link to="/catalogues/catalogues1-4"><div className="bookcats-item"><img src={panelCover} alt="facade lighting" /></div></Link>
        </div>

        <button type="button" className="bookcats-btn" onClick={() => { window.location.href = "/catalogues"; }}>
          View More
        </button>
      </section>

      <section className="position-relative" style={{ background: "transparent", overflow: "hidden" }}>
        <div className="container position-relative">
          <section className="whoweareaboutus" style={{ backgroundImage: `url(${faqBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", position: "relative" }}>
            <div className="image-mask" />
            <div className="row justify-content-center mb-5 position-relative" style={{ zIndex: 1 }}>
              <div className="col-lg-11 col-xl-10 mx-auto">
                <h2 className="text-center mb-4 text-uppercase fw-semibold fs-4" style={{ color: "#e0e0e0" }}>FAQ</h2>
                <div className="accordion-faq">
                  {faqItems.map((item, index) => (
                    <div key={item.question} className={`faq-box faq-bg${activeFaq === index ? " active" : ""}`}>
                      <h5 className="faq-question" onClick={() => setActiveFaq(index)}>{item.question}</h5>
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="my-5" />

          <div className="row align-items-center contact-background gy-4" style={{ backgroundImage: `url(${contactBg})` }}>
            <div className="col-lg-6">
              <form id="contact_form" className="contact-box p-4">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" className="form-control contact-input transparent-input" placeholder="Full Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control contact-input transparent-input" placeholder="Email Address" required />
                  </div>
                  <div className="col-12">
                    <input type="tel" className="form-control contact-input transparent-input" placeholder="Phone Number" required />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control contact-input transparent-input" rows="4" placeholder="Your Message" required />
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="contact-btn px-5 py-2 rounded-pill shadow-sm">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6 text-center">
              <model-viewer src={modelAsset} alt="3D Product View" auto-rotate="" camera-controls="" ar="" background-color="#f3f3f3" style={{ width: "100%", height: "390px" }} />
            </div>
          </div>
        </div>
      </section>

      <div className="mappingpoint-section">
        <div className="mappingpoint-text">
          <h2>Our Support</h2>
          <p>Serving numerous countries with pre-sales and after-sales technical support</p>
        </div>

        <div className="mappingpoint-container">
          <img src={worldMapImage} alt="World Map" className="mappingpoint-image" />
          {mapDots.map((dot) => (
            <div key={dot.key} className={`mappingpoint-dot ${dot.className}`} data-country={dot.label}>
              <div className="mappingpoint-inner-dot" />
            </div>
          ))}
        </div>
      </div>

      <section id="partners-section" className="partners-section sec-ptb-60 bg-light-gray">
        <div className="container">
          <div id="partners-carousel" className="legacy-partners-carousel">
            {visiblePartners.map((item, index) => (
              <div className="item" key={`partner-${index}`}>
                <span className="partner-logo" aria-hidden="true">
                  <img className="toggle-image" src={partnerOnState ? item.on : item.off} alt={`Product ${index + 1}`} loading="lazy" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
