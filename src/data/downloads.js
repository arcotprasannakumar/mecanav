import { createLookupMap } from "../utils/data";

const downloads = [
  {
    slug: "company-profile",
    title: "Company Profile",
    type: "PDF",
    sizeLabel: "1.2 MB",
    actionLabel: "Download",
    available: false,
    file: null,
    legacyPath: "downloads/company-profile.pdf",
    legacySource: "Downloads.html",
    migrationStatus: "legacy-missing",
    note: "Available on request from the Mecanav team.",
    accent: "blue",
  },
  {
    slug: "iso-9001-certificate",
    title: "ISO 9001 Certificate",
    type: "PDF",
    sizeLabel: "850 KB",
    actionLabel: "Download",
    available: false,
    file: null,
    legacyPath: "downloads/iso-9001.pdf",
    legacySource: "Downloads.html",
    migrationStatus: "legacy-missing",
    note: "Available on request from the Mecanav team.",
    accent: "green",
  },
  {
    slug: "product-catalogue-zip",
    title: "Product Catalogue",
    type: "ZIP",
    sizeLabel: "4.5 MB",
    actionLabel: "Download",
    available: false,
    file: null,
    legacyPath: "downloads/catalogue.zip",
    legacySource: "Downloads.html",
    migrationStatus: "legacy-missing",
    note: "Available on request from the Mecanav team.",
    accent: "amber",
  },
];

export const downloadsMap = createLookupMap(downloads);

export default downloads;
