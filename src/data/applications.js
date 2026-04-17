import { createLookupMap } from "../utils/data";
import bridgeCard from "../assets/images/applications/b11.webp";
import parkCard from "../assets/images/applications/p3.webp";
import architecturalCard from "../assets/images/applications/a1.webp";
import riverCard from "../assets/images/applications/r3.webp";
import river1 from "../assets/images/applications/r1.webp";
import river2 from "../assets/images/applications/r2.webp";
import river4 from "../assets/images/applications/r4.webp";
import river5 from "../assets/images/applications/r5.webp";
import ferrisCard from "../assets/images/applications/f1.webp";
import ferrisHero1 from "../assets/images/applications/Copilot.webp";
import ferrisHero2 from "../assets/images/applications/f2.webp";
import ferrisHero3 from "../assets/images/applications/f3.webp";
import ferrisHero4 from "../assets/images/applications/f4.webp";
import ferrisHero5 from "../assets/images/applications/f5.webp";
import signsCard from "../assets/images/applications/sppli11 (2).webp";
import signs1 from "../assets/images/applications/sppli11 (3).webp";
import signs2 from "../assets/images/applications/sppli11 (4).webp";
import signs3 from "../assets/images/applications/sppli11 (1).webp";
import mediaCard from "../assets/images/applications/od5.webp";
import media1 from "../assets/images/applications/od1.webp";
import media2 from "../assets/images/applications/od2.webp";
import media3 from "../assets/images/applications/od3.webp";
import media4 from "../assets/images/applications/od4.webp";
import streetCard from "../assets/images/applications/str3.webp";
import street1 from "../assets/images/applications/str1.webp";
import street2 from "../assets/images/applications/str2.webp";
import street4 from "../assets/images/applications/str4.webp";
import street5 from "../assets/images/applications/str5.webp";
import pubCard from "../assets/images/applications/pb1.webp";
import pub2 from "../assets/images/applications/pb2.webp";
import pub3 from "../assets/images/applications/pb3.webp";
import pub4 from "../assets/images/applications/pb4.webp";
import pub5 from "../assets/images/applications/pb5.webp";
import studioCard from "../assets/images/applications/studioapplication-1.webp";
import studio2 from "../assets/images/applications/studioapplication-2.webp";
import studio3 from "../assets/images/applications/studioapplication-3.webp";
import studio4 from "../assets/images/applications/studioapplication-4.webp";
import studio5 from "../assets/images/applications/studioapplication-5.webp";
import stageCard from "../assets/images/applications/s4.webp";
import lightShowsCard from "../assets/images/applications/l1.webp";
import lightShows2 from "../assets/images/applications/l2.webp";
import lightShows3 from "../assets/images/applications/l3.webp";
import lightShows4 from "../assets/images/applications/l4.webp";
import lightShows5 from "../assets/images/applications/l5.webp";

import bridge2 from "../assets/images/applications/r1.webp";
import bridge3 from "../assets/images/applications/b33.webp";
import bridge4 from "../assets/images/applications/b44.webp";
import bridge5 from "../assets/images/applications/b55.webp";

import architectural2 from "../assets/images/applications/a2.webp";
import architectural3 from "../assets/images/applications/a3.webp";
import architectural4 from "../assets/images/applications/a4.webp";
import architectural5 from "../assets/images/applications/a5.webp";

import park1 from "../assets/images/applications/parkapplication-2.webp";
import park2 from "../assets/images/applications/p1.webp";
import park4 from "../assets/images/applications/parkapplication1-3.webp";
import park5 from "../assets/images/applications/parkapplication-1.webp";

import stage1 from "../assets/images/applications/s1.webp";
import stage2 from "../assets/images/applications/s2.webp";
import stage3 from "../assets/images/applications/s3.webp";
import stage5 from "../assets/images/applications/s5.webp";

const applications = [
  {
    slug: "bridge-lighting",
    title: "Bridge Lighting",
    cardImage: bridgeCard,
    heroImages: [bridgeCard, bridge2, bridge3, bridge4, bridge5],
    summary: "Bridge lighting that balances safety, civic identity, and visual drama.",
    headline: "Enhance Bridges with Dynamic Lighting",
    overview:
      "Explore how our lighting solutions elevate bridge design — blending safety, function, and stunning visual appeal for cities and landmarks.",
    keyHighlights: [
      "Enhances bridge visibility and nighttime identity",
      "Balances functional lighting with visual impact",
      "Suitable for landmark and city bridge projects",
    ],
    useCases: ["City bridges", "Landmark crossings", "Public infrastructure"],
    cta: null,
    legacySource: "bridge-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "park-lighting",
    title: "Park Lighting",
    cardImage: parkCard,
    heroImages: [park1, park2, parkCard, park4, park5],
    summary: "Landscape-friendly lighting for safe, inviting public spaces after sunset.",
    headline: "Enhancing Parks with Smart & Aesthetic Lighting Solutions",
    overview:
      "Our park lighting solutions combine functionality with beauty—illuminating pathways, landscapes, and recreational areas to ensure safety, enhance ambiance, and promote extended public use after sunset. Designed with energy efficiency and durability in mind, our fixtures seamlessly integrate into natural and urban environments, transforming parks into welcoming, vibrant, and secure spaces for all.",
    keyHighlights: [
      "Illuminates pathways, landscapes, and recreational areas",
      "Designed for energy efficiency and durability",
      "Supports safer, more welcoming public use after sunset",
    ],
    useCases: ["Park pathways", "Landscape zones", "Recreational areas"],
    cta: null,
    legacySource: "park-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "architectural-lighting",
    title: "Architectural Lighting",
    cardImage: architecturalCard,
    heroImages: [
      architecturalCard,
      architectural2,
      architectural3,
      architectural4,
      architectural5,
    ],
    summary: "Facade-focused lighting that reveals form, texture, and structure after dark.",
    headline: "Architectural Lighting Applications | Elevate Structures with Precision Lighting",
    overview:
      "Discover how our architectural lighting solutions bring buildings to life after dark. From facades and monuments to commercial complexes and cultural landmarks, our lighting systems enhance structural form, highlight key features, and create a dramatic visual impact. Designed for performance, energy efficiency, and longevity, our fixtures are tailored to meet the aesthetic and functional needs of modern architecture.",
    keyHighlights: [
      "Brings facades and monuments to life after dark",
      "Highlights architectural form and signature features",
      "Designed for performance, efficiency, and longevity",
    ],
    useCases: ["Facades", "Monuments", "Commercial complexes", "Cultural landmarks"],
    cta: null,
    legacySource: "architectural-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "river-lighting",
    title: "River Lighting",
    cardImage: riverCard,
    heroImages: [river1, river2, riverCard, river4, river5],
    summary: "Riverfront lighting concepts and installations.",
    headline: "River Lighting Applications | Illuminate Waterfronts with Elegance",
    overview:
      "Transform riversides, bridges, and waterfront promenades with specialized river lighting solutions. Designed to enhance natural beauty while ensuring safety and visibility, these systems create stunning reflections, accentuate architectural elements, and enrich nighttime ambience with durable, weather-resistant performance.",
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "river-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "ferris-wheel-lighting",
    title: "Ferris Wheel Lighting",
    cardImage: ferrisCard,
    heroImages: [ferrisHero1, ferrisHero2, ferrisHero3, ferrisHero4, ferrisHero5],
    summary: "Animated attraction lighting for ferris wheels and circular structures.",
    headline: "Ferris Wheel Lighting Applications | Captivate Crowds with Dynamic Illumination",
    overview:
      "Make Ferris wheels the centerpiece of any skyline with vibrant and customizable lighting solutions. From dynamic RGB animations to synchronized light shows, our systems enhance visual appeal and draw attention from afar. Engineered for high-altitude, rotating structures, our fixtures deliver durability, energy efficiency, and seamless control for amusement parks, festivals, and urban landmarks.",
    keyHighlights: [
      "Dynamic RGB animations and synchronized light-show control",
      "Engineered for high-altitude rotating structures",
      "Built for durable, energy-efficient attraction lighting",
    ],
    useCases: ["Amusement parks", "Festivals", "Urban landmarks"],
    cta: null,
    legacySource: "ferris-wheel-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "signs-and-logos",
    title: "Signs and Logos",
    cardImage: signsCard,
    heroImages: [signs1, signs2, signs3, signsCard],
    summary: "Brand and signage lighting treatments for identity-focused surfaces.",
    headline: "Signs & Logos Lighting Applications | Maximize Brand Visibility Day and Night",
    overview:
      "Enhance the impact of your brand with precision lighting for signs and logos. Tailored solutions support maximum visibility, legibility, and visual appeal across corporate logos, retail signage, and wayfinding elements with weather-resistant fixtures, vibrant colors, and customizable beam angles.",
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "signs-and-logs-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "outdoor-media-facade",
    title: "Outdoor Media Facade Lighting",
    cardImage: mediaCard,
    heroImages: [media1, media2, media3, media4, mediaCard],
    summary: "Media facade lighting for dynamic exterior storytelling.",
    headline: "Outdoor Media Facade Lighting Applications | Transform Facades into Digital Landmarks",
    overview:
      "Turn building exteriors into dynamic canvases with outdoor media facade lighting solutions. Ideal for advertising, branding, and immersive storytelling, these systems support video, animations, and interactive content with high brightness, clarity, energy efficiency, and scalable architectural integration.",
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "outdoor-media-facade-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "street-lighting",
    title: "Street Lighting",
    cardImage: streetCard,
    heroImages: [street1, street2, streetCard, street4, street5],
    summary: "Street and urban lighting scenarios for public environments.",
    headline: "Street Lighting Applications | Smart, Safe & Sustainable Illumination",
    overview:
      "Street lighting solutions enhance safety, visibility, and urban aesthetics across main roads, highways, residential streets, and public spaces. Energy-efficient LED systems provide uniform illumination, reduce glare, support smart-city integration, and offer robust long-life performance.",
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "street-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "pub-lighting",
    title: "Pub Lighting",
    cardImage: pubCard,
    heroImages: [pubCard, pub2, pub3, pub4, pub5],
    summary: "Atmospheric lighting ideas for pub and lounge environments.",
    headline: "Pub Lighting Applications | Set the Mood with Stylish & Functional Lighting",
    overview:
      "Enhance the atmosphere of pubs and nightlife venues with versatile lighting solutions. From warm ambient lighting to dynamic accent effects, these fixtures create inviting, memorable spaces with customizable colors, dimmable options, and energy-efficient performance.",
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "pub-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "studio-lighting",
    title: "Studio Lighting",
    cardImage: studioCard,
    heroImages: [studioCard, studio2, studio3, studio4, studio5],
    summary: "Studio-focused lighting installations and ambience treatments.",
    headline: "Studio Lighting Applications | Precision Lighting for Creative Spaces",
    overview:
      "Elevate visual production with studio lighting solutions designed for film, photography, broadcasting, and content creation. These systems offer precise control, adjustable color temperatures, and flicker-free illumination for green screens, set lighting, product shoots, and creative environments.",
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "studio-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "stage-lighting",
    title: "Stage Lighting",
    cardImage: stageCard,
    heroImages: [stage1, stage2, stage3, stageCard, stage5],
    summary: "Dynamic stage lighting systems for concerts, theaters, and live productions.",
    headline: "Stage Lighting-Applications",
    overview:
      "Create unforgettable performances with our state-of-the-art stage lighting solutions. Designed for concerts, theaters, events, and live shows, our systems deliver dynamic color control, seamless dimming, and intelligent effects to match any creative vision. From spotlighting performers to crafting immersive atmospheres, our fixtures provide the flexibility, power, and reliability needed to elevate every stage production.",
    keyHighlights: [
      "Dynamic color control and intelligent effects",
      "Supports seamless dimming for live productions",
      "Built for reliability in performance environments",
    ],
    useCases: ["Concerts", "Theaters", "Events", "Live shows"],
    cta: null,
    legacySource: "stage-lighting-applications.html",
    migrationStatus: "full",
  },
  {
    slug: "light-shows",
    title: "Light Shows",
    cardImage: lightShowsCard,
    heroImages: [lightShowsCard, lightShows2, lightShows3, lightShows4, lightShows5],
    summary: "Experience-focused animated lighting presentations and installations.",
    headline: "Light Shows Lighting Applications | Captivate Audiences with Spectacular Visuals",
    overview:
      "Transform buildings and outdoor spaces into mesmerizing spectacles with advanced light-show solutions. Vibrant colors, synchronized effects, and programmable animations deliver memorable visual experiences for festivals, events, celebrations, and expressive facade installations.",
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "light-shows-applications.html",
    migrationStatus: "full",
  },
];

export const applicationMap = createLookupMap(applications);

export default applications;
