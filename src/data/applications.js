import { createLookupMap } from "../utils/data";
import bridgeCard from "../assets/images/applications/b11.webp";
import parkCard from "../assets/images/applications/p3.webp";
import architecturalCard from "../assets/images/applications/a1.webp";
import riverCard from "../assets/images/applications/r3.webp";
import ferrisCard from "../assets/images/applications/f1.webp";
import signsCard from "../assets/images/applications/sppli11 (2).webp";
import mediaCard from "../assets/images/applications/od5.webp";
import streetCard from "../assets/images/applications/str3.webp";
import pubCard from "../assets/images/applications/pb1.webp";
import studioCard from "../assets/images/applications/studioapplication-1.webp";
import stageCard from "../assets/images/applications/s4.webp";
import lightShowsCard from "../assets/images/applications/l1.webp";

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
    heroImages: [riverCard],
    summary: "Riverfront lighting concepts and installations.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "river-lighting-applications.html",
    migrationStatus: "hub-only",
  },
  {
    slug: "ferris-wheel-lighting",
    title: "Ferris Wheel Lighting",
    cardImage: ferrisCard,
    heroImages: [ferrisCard],
    summary: "Animated attraction lighting for ferris wheels and circular structures.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "ferris-wheel-lighting-applications.html",
    migrationStatus: "hub-only",
  },
  {
    slug: "signs-and-logos",
    title: "Signs and Logos",
    cardImage: signsCard,
    heroImages: [signsCard],
    summary: "Brand and signage lighting treatments for identity-focused surfaces.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "signs-and-logs-applications.html",
    migrationStatus: "hub-only",
  },
  {
    slug: "outdoor-media-facade",
    title: "Outdoor Media Facade Lighting",
    cardImage: mediaCard,
    heroImages: [mediaCard],
    summary: "Media facade lighting for dynamic exterior storytelling.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "outdoor-media-facade-applications.html",
    migrationStatus: "hub-only",
  },
  {
    slug: "street-lighting",
    title: "Street Lighting",
    cardImage: streetCard,
    heroImages: [streetCard],
    summary: "Street and urban lighting scenarios for public environments.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "street-lighting-applications.html",
    migrationStatus: "hub-only",
  },
  {
    slug: "pub-lighting",
    title: "Pub Lighting",
    cardImage: pubCard,
    heroImages: [pubCard],
    summary: "Atmospheric lighting ideas for pub and lounge environments.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "pub-lighting-applications.html",
    migrationStatus: "hub-only",
  },
  {
    slug: "studio-lighting",
    title: "Studio Lighting",
    cardImage: studioCard,
    heroImages: [studioCard],
    summary: "Studio-focused lighting installations and ambience treatments.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "studio-lighting-applications.html",
    migrationStatus: "hub-only",
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
    heroImages: [lightShowsCard],
    summary: "Experience-focused animated lighting presentations and installations.",
    headline: null,
    overview: null,
    keyHighlights: [],
    useCases: [],
    cta: null,
    legacySource: "light-shows-applications.html",
    migrationStatus: "hub-only",
  },
];

export const applicationMap = createLookupMap(applications);

export default applications;
