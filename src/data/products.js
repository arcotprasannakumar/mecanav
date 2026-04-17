import { createLookupMap } from "../utils/data";
import ww12vNp11 from "../assets/images/Final-Products/pixel-led-strips/WW-12V-NP-1.1.webp";
import ww12vNp12 from "../assets/images/Final-Products/pixel-led-strips/WW-12V-NP-1.2.webp";
import ww12vNp13 from "../assets/images/Final-Products/pixel-led-strips/WW-12V-NP-1.3.webp";
import ww24vP11 from "../assets/images/Final-Products/pixel-led-strips/WW-24V-P-1.1.webp";
import ww24vP12 from "../assets/images/Final-Products/pixel-led-strips/WW-24V-P-1.2.webp";
import ww24vP13 from "../assets/images/Final-Products/pixel-led-strips/WW-24V-P-1.3.webp";
import rgbw24vNp11 from "../assets/images/Final-Products/pixel-led-strips/RGBW-24V-NP-1.1.webp";
import rgbw24vNp12 from "../assets/images/Final-Products/pixel-led-strips/RGBW-24V-NP-1.2.webp";
import rgbw24vNp13 from "../assets/images/Final-Products/pixel-led-strips/RGBW-24V-NP-1.3.webp";
import rgbww24vP11 from "../assets/images/Final-Products/pixel-led-strips/RGBWW-24V-P-1.1.webp";
import rgbww24vP12 from "../assets/images/Final-Products/pixel-led-strips/RGBWW-24V-P-1.2.webp";
import rgbww24vP13 from "../assets/images/Final-Products/pixel-led-strips/RGBWW-24V-P-1.3.webp";
import strip5 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (5).webp";
import strip6 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (6).webp";
import strip7 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (7).webp";
import strip8 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (8).webp";
import strip9 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (9).webp";
import strip10 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (10).webp";
import strip11 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (11).webp";
import strip12 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (12).webp";
import strip13 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (13).webp";
import strip14 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (14).webp";
import strip15 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (15).webp";
import strip16 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (16).webp";
import strip17 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (17).webp";
import strip18 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (18).webp";
import strip19 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (19).webp";
import strip20 from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (20).webp";
import pixelLedStripPdf from "../assets/pdfs/PIXEL-LED-STRIP-WEBSITE.pdf";

const sharedGallery = [
  strip5,
  strip6,
  strip7,
  strip8,
  strip9,
  strip10,
  strip11,
  strip12,
  strip13,
  strip14,
  strip15,
  strip16,
  strip17,
  strip18,
  strip19,
  strip20,
];

const pixelStripDocuments = [
  { label: "Pixel LED Strip Catalogue", href: pixelLedStripPdf, type: "PDF" },
];

const baseSpecs = [
  { feature: "Wattage", value: "14.5W/MTR" },
  { feature: "CRI", value: "≥90" },
  { feature: "Cutting Intervals", value: "100MM" },
  { feature: "Strip Size", value: "10MM (Customized)" },
  { feature: "Led Make", value: "CREE / BLX / LUMI / OSRAM" },
  { feature: "LED Source", value: "5050" },
  { feature: "Operating Temperature", value: "45°-50°C" },
  { feature: "Burning Hours", value: "40,000 + hours" },
  { feature: "IP Rating", value: "IP20, IP54, IP65, IP66" },
  { feature: "Driver", value: "FULLHAM/PHILIPS/BAG" },
  { feature: "Warranty", value: "5 Years" },
  { feature: "Body Material", value: "Aluminium" },
  { feature: "Current", value: "1.21A/MTR" },
  { feature: "Max Length", value: "20 MTRS" },
];

const makeSpecs = ({ model, inputVoltage, cct, protocol }) => [
  { feature: "Model", value: model },
  ...baseSpecs.slice(0, 1),
  { feature: "Input Voltage", value: inputVoltage },
  { feature: "CCT", value: cct },
  ...baseSpecs.slice(1, 10),
  { feature: "Protocol", value: protocol },
  ...baseSpecs.slice(10),
];

const products = [
  {
    slug: "ww-12v-non-pixel-led-strip",
    title: "WW - Non-Pixel - 12V LED Strip",
    categorySlug: "pixel-led-strip",
    cardImage: strip5,
    heroImages: [ww12vNp11, ww12vNp12, ww12vNp13],
    gallery: sharedGallery,
    description: "Flexible WW NON Pixel LED Strip with, addressable lighting.",
    overview:
      "A flexible, high-efficiency warm white LED strip designed for smooth, ambient lighting in any space.",
    productInfo:
      "A high-efficiency, flexible Warm White LED strip engineered for seamless ambient lighting. Ideal for cove lighting, under-cabinet use, architectural accents, and general-purpose illumination where pixel-level control is not needed. Delivers smooth, uniform light output with excellent thermal management and installation flexibility.",
    keyFeatures: [
      "Warm white output for uniform ambient lighting",
      "12V DC format suited to compact installations",
      "Flexible strip construction for architectural detailing",
      "Non-pixel design for stable continuous illumination",
    ],
    technicalSpecs: makeSpecs({
      model: "MECWW1219NP-12V",
      inputVoltage: "12V DC (Customized)",
      cct: "WW",
      protocol: "NA",
    }),
    productCodes: [],
    applications: ["Cove lighting", "Under-cabinet lighting", "Architectural accents"],
    documents: pixelStripDocuments,
    cta: { label: "Explore Features", href: "#product-tabs" },
    legacySource: "ww-12v-non-pixel-led-strip.html",
    migrationStatus: "full",
  },
  {
    slug: "ww-24v-pixel-led-strip",
    title: "WW - Pixel - 24V Pixel LED Strip",
    categorySlug: "pixel-led-strip",
    cardImage: strip8,
    heroImages: [ww24vP11, ww24vP12, ww24vP13],
    gallery: sharedGallery,
    description: "High-power warm white pixel strip for expansive, animated lighting projects.",
    overview: "Great for hotels, large retail spaces, and high-end residential use.",
    productInfo:
      "24V pixel strip delivering warm white animation with low voltage drop over long runs. Ideal for professional-grade architectural and interior illumination.",
    keyFeatures: [
      "Pixel-addressable warm white animation",
      "24V architecture for longer runs",
      "Compatible with DMX512, SPI, ArtNET, and DALI protocols",
      "Suitable for hospitality, retail, and premium residential lighting",
    ],
    technicalSpecs: makeSpecs({
      model: "MECWW1219P-24V",
      inputVoltage: "24V DC (Customized)",
      cct: "WW",
      protocol: "DMX512,SPI,ArtNET,DALI",
    }),
    productCodes: [],
    applications: ["Hotels", "Large retail spaces", "High-end residential projects"],
    documents: pixelStripDocuments,
    cta: { label: "Explore Features", href: "#product-tabs" },
    legacySource: "ww-24v-pixel-led-strip.html",
    migrationStatus: "full",
  },
  {
    slug: "rgb-24v-pixel-led-strip",
    title: "RGB - Pixel - 24V Pixel LED Strip",
    categorySlug: "pixel-led-strip",
    cardImage: strip12,
    heroImages: [strip12, strip13, strip14],
    gallery: sharedGallery,
    description: "Addressable RGB strip for vibrant long-run color animations.",
    overview: "Ideal for stage designs, clubs, and building outlines.",
    productInfo:
      "Pixel RGB strip with long-distance 24V capability delivers flawless animated visuals across larger spaces, supporting DMX/SPI control.",
    keyFeatures: [
      "Addressable RGB color animation",
      "24V format for extended installation lengths",
      "Built for DMX512, SPI, ArtNET, and DALI ecosystems",
      "Strong fit for entertainment and facade outlines",
    ],
    technicalSpecs: makeSpecs({
      model: "MECR1219P-24V",
      inputVoltage: "24V DC (Customized)",
      cct: "RGB",
      protocol: "DMX512,SPI,ArtNET,DALI",
    }),
    productCodes: [],
    applications: ["Stage designs", "Clubs", "Building outlines"],
    documents: pixelStripDocuments,
    cta: { label: "Explore Features", href: "#product-tabs" },
    legacySource: "rgb-24v-pixel-led-strip.html",
    migrationStatus: "full",
  },
  {
    slug: "rgbw-24v-non-pixel-led-strip",
    title: "RGBW - Non-Pixel - 24V LED Strip",
    categorySlug: "pixel-led-strip",
    cardImage: strip15,
    heroImages: [rgbw24vNp11, rgbw24vNp12, rgbw24vNp13],
    gallery: sharedGallery,
    description: "Static RGBW tones for sleek, colorful yet practical lighting.",
    overview: "Ideal for restaurants, theaters, and multipurpose interiors.",
    productInfo:
      "Non-pixel RGBW provides stable illumination with color blending plus white output, designed for mood and task lighting.",
    keyFeatures: [
      "Stable RGBW blending without pixel addressing",
      "24V DC format for practical low-drop installations",
      "Combines decorative color with usable white light",
      "Well suited to interior hospitality environments",
    ],
    technicalSpecs: makeSpecs({
      model: "MECRW1219NP-24V",
      inputVoltage: "24V DC (Customized)",
      cct: "RGBW",
      protocol: "NA",
    }),
    productCodes: [],
    applications: ["Restaurants", "Theaters", "Multipurpose interiors"],
    documents: pixelStripDocuments,
    cta: { label: "Explore Features", href: "#product-tabs" },
    legacySource: "rgbw-24v-non-pixel-led-strip.html",
    migrationStatus: "full",
  },
  {
    slug: "rgbww-24v-pixel-led-strip",
    title: "RGBWW - Pixel - 24V LED Strip",
    categorySlug: "pixel-led-strip",
    cardImage: strip20,
    heroImages: [rgbww24vP11, rgbww24vP12, rgbww24vP13],
    gallery: sharedGallery,
    description: "Pixel RGB with tunable dual whites for immersive, adaptive lighting.",
    overview: "Great for advanced residential or hospitality applications.",
    productInfo:
      "Pixel RGBWW strips offer animated color scenes plus controllable warmth, making them ideal for smart lighting control systems.",
    keyFeatures: [
      "Pixel RGBWW output with animated scenes and warm white control",
      "24V system designed for scalable installs",
      "Works with DMX512, SPI, ArtNET, and DALI workflows",
      "Built for smart hospitality and advanced residential lighting",
    ],
    technicalSpecs: makeSpecs({
      model: "MECRWW1219P-24V",
      inputVoltage: "24V DC (Customized)",
      cct: "RGBWW",
      protocol: "DMX512,SPI,ArtNET,DALI",
    }),
    productCodes: [],
    applications: ["Advanced residential", "Hospitality applications", "Smart lighting systems"],
    documents: pixelStripDocuments,
    cta: { label: "Explore Features", href: "#product-tabs" },
    legacySource: "rgbww-24v-pixel-led-strip.html",
    migrationStatus: "full",
  },
];

export const productsByCategory = (categorySlug) =>
  products.filter((product) => product.categorySlug === categorySlug);

export const productMap = createLookupMap(products);

export default products;
