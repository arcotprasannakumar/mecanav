import { createLookupMap } from "../utils/data";
import wheelCover from "../assets/images/covers/wheel.webp";
import barCover from "../assets/images/covers/bar.webp";
import neonCover from "../assets/images/covers/neon.webp";
import panelCover from "../assets/images/covers/15.webp";
import dotCover from "../assets/images/covers/dot.webp";
import wallWasherCover from "../assets/images/covers/wallwasher.webp";
import wallWindowCover from "../assets/images/covers/wallwindow.webp";
import fanCover from "../assets/images/covers/fan.webp";
import goboCover from "../assets/images/covers/gobo.webp";
import fountainCover from "../assets/images/covers/fountain.webp";
import poolCover from "../assets/images/covers/pool.webp";
import groundCover from "../assets/images/covers/ground.webp";
import pillarCover from "../assets/images/covers/pillar.webp";
import floodCover from "../assets/images/covers/flood.webp";
import treeCover from "../assets/images/covers/tree.webp";

import pixelLedStripPdf from "../assets/pdfs/PIXEL-LED-STRIP-WEBSITE.pdf";
import pixelLedBarsPdf from "../assets/pdfs/pixel-led-bars-web.pdf";
import neonFlexPdf from "../assets/pdfs/NEON-FLEX-WEB.pdf";
import pixelLedPanelPdf from "../assets/pdfs/Pixel-LED-panel-web .pdf";
import pixelDotPdf from "../assets/pdfs/_Pixel-Dot-web .pdf";
import wallWasherPdf from "../assets/pdfs/Wall-Washer-light-web.pdf";
import wallWindowPdf from "../assets/pdfs/WALL-WINDOW-WEB.pdf";
import fanProjectionPdf from "../assets/pdfs/Fan-Projection-Lights-web.pdf";
import goboPdf from "../assets/pdfs/GOBO-WEB.pdf";
import fountainPdf from "../assets/pdfs/FOUNTAIN LIGHTS web.pdf";
import poolPdf from "../assets/pdfs/POOL LIGHTS web.pdf";
import recessedGroundPdf from "../assets/pdfs/RECESSED GROUND LIGHTS WEB.pdf";
import pillarPdf from "../assets/pdfs/piller-highlighters-WEB.pdf";
import floodPdf from "../assets/pdfs/FLOOD LIGHTS  web.pdf";
import treePdf from "../assets/pdfs/_Tree Highlighters  web.pdf";

const formFields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true, maxLength: 10 },
  { name: "siteAddress", label: "Site Address", type: "textarea", required: true },
];

const catalogues = [
  {
    slug: "catalogues1-1",
    title: "Pixel LED Strip Catalogue",
    cardImage: wheelCover,
    previewImages: [wheelCover],
    summary: "Legacy flipbook preview and downloadable PDF for the Pixel LED Strip range.",
    overview:
      "The legacy detail page for this catalogue is a flipbook-only preview. This React version preserves the same preview-first flow and the gated local PDF download.",
    pdfFile: pixelLedStripPdf,
    flipbookUrl: "https://heyzine.com/flip-book/733c7cfc52.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/733c7cfc52.html" },
    legacySource: "Catalogues.html, catalogues1.1.html",
    migrationStatus: "full",
  },
  {
    slug: "catalogues1-2",
    title: "Pixel LED Bars Catalogue",
    cardImage: barCover,
    previewImages: [barCover],
    summary: "Legacy flipbook preview and downloadable PDF for the Pixel LED Bars range.",
    overview:
      "The original detail page embeds a Heyzine flipbook and provides a gated PDF download from the catalogue hub. Both behaviors are preserved here.",
    pdfFile: pixelLedBarsPdf,
    flipbookUrl: "https://heyzine.com/flip-book/6e567a1e9d.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/6e567a1e9d.html" },
    legacySource: "Catalogues.html, catalogues1.2.html",
    migrationStatus: "full",
  },
  {
    slug: "catalogues1-3",
    title: "Neon Flex Catalogue",
    cardImage: neonCover,
    previewImages: [neonCover],
    summary: "Legacy flipbook preview and downloadable PDF for the Neon Flex range.",
    overview:
      "This catalogue follows the same flipbook-only detail pattern found across the catalogue set, paired with a gated local PDF download.",
    pdfFile: neonFlexPdf,
    flipbookUrl: "https://heyzine.com/flip-book/d5965bb850.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/d5965bb850.html" },
    legacySource: "Catalogues.html, catalogues1.3.html",
    migrationStatus: "full",
  },
  {
    slug: "catalogues1-4",
    title: "Pixel LED Panel Catalogue",
    cardImage: panelCover,
    previewImages: [panelCover],
    summary: "Legacy flipbook preview and downloadable PDF for the Pixel LED Panel range.",
    overview:
      "The original detail route uses an embedded Heyzine flipbook and redirects mobile users to the same preview URL. The React detail page keeps that preview logic in a clearer form.",
    pdfFile: pixelLedPanelPdf,
    flipbookUrl: "https://heyzine.com/flip-book/a065da96f9.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/a065da96f9.html" },
    legacySource: "Catalogues.html, catalogues1.4.html",
    migrationStatus: "full",
  },
  {
    slug: "catalogues1-5",
    title: "Pixel Dot Catalogue",
    cardImage: dotCover,
    previewImages: [dotCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: pixelDotPdf,
    flipbookUrl: "https://heyzine.com/flip-book/2a20078b70.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/2a20078b70.html" },
    legacySource: "Catalogues.html, catalogues1.5.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-6",
    title: "Fan Projection Lights Catalogue",
    cardImage: fanCover,
    previewImages: [fanCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: fanProjectionPdf,
    flipbookUrl: "https://heyzine.com/flip-book/982e26a457.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/982e26a457.html" },
    legacySource: "Catalogues.html, catalogues1.6.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-7",
    title: "Flood Lights Catalogue",
    cardImage: floodCover,
    previewImages: [floodCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: floodPdf,
    flipbookUrl: "https://heyzine.com/flip-book/3b82020331.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/3b82020331.html" },
    legacySource: "Catalogues.html, catalogues1.7.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-8",
    title: "Fountain Lights Catalogue",
    cardImage: fountainCover,
    previewImages: [fountainCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: fountainPdf,
    flipbookUrl: "https://heyzine.com/flip-book/f7c1b8cc69.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/f7c1b8cc69.html" },
    legacySource: "Catalogues.html, catalogues1.8.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-9",
    title: "Gobo Catalogue",
    cardImage: goboCover,
    previewImages: [goboCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: goboPdf,
    flipbookUrl: "https://heyzine.com/flip-book/4707da5585.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/4707da5585.html" },
    legacySource: "Catalogues.html, catalogues1.9.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-10",
    title: "Recessed Ground Lights Catalogue",
    cardImage: groundCover,
    previewImages: [groundCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: recessedGroundPdf,
    flipbookUrl: "https://heyzine.com/flip-book/9147805411.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/9147805411.html" },
    legacySource: "Catalogues.html, catalogues1.10.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-11",
    title: "Pillar Highlighters Catalogue",
    cardImage: pillarCover,
    previewImages: [pillarCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: pillarPdf,
    flipbookUrl: "https://heyzine.com/flip-book/63aacdd664.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/63aacdd664.html" },
    legacySource: "Catalogues.html, catalogues1.11.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-12",
    title: "Pool Lights Catalogue",
    cardImage: poolCover,
    previewImages: [poolCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: poolPdf,
    flipbookUrl: "https://heyzine.com/flip-book/702954596a.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/702954596a.html" },
    legacySource: "Catalogues.html, catalogues1.12.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-13",
    title: "Tree Highlighters Catalogue",
    cardImage: treeCover,
    previewImages: [treeCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: treePdf,
    flipbookUrl: "https://heyzine.com/flip-book/0c968f9d4a.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/0c968f9d4a.html" },
    legacySource: "Catalogues.html, catalogues1.13.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-14",
    title: "Wall Washer Lights Catalogue",
    cardImage: wallWasherCover,
    previewImages: [wallWasherCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: wallWasherPdf,
    flipbookUrl: "https://heyzine.com/flip-book/5f31456475.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/5f31456475.html" },
    legacySource: "Catalogues.html, catalogues1.14.html",
    migrationStatus: "partial",
  },
  {
    slug: "catalogues1-15",
    title: "Wall Window Lights Catalogue",
    cardImage: wallWindowCover,
    previewImages: [wallWindowCover],
    summary: "Hub and download data migrated; detail content remains flipbook-driven.",
    overview: null,
    pdfFile: wallWindowPdf,
    flipbookUrl: "https://heyzine.com/flip-book/dd6361b4e3.html",
    downloadLabel: "Download Catalogue",
    formRequired: true,
    formFields,
    cta: { label: "Open Flipbook", href: "https://heyzine.com/flip-book/dd6361b4e3.html" },
    legacySource: "Catalogues.html, catalogues1.15.html",
    migrationStatus: "partial",
  },
];

export const catalogueMap = createLookupMap(catalogues);

export default catalogues;
