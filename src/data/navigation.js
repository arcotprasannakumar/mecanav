import logo from "../assets/images/logo/mecanavulogo.webp";
import facebookIcon from "../assets/icons/fb.webp";
import instagramIcon from "../assets/icons/instagram.webp";
import twitterIcon from "../assets/icons/twitter.webp";
import youtubeIcon from "../assets/icons/youtube.webp";
import linkedinIcon from "../assets/icons/linkedin.webp";
import pinterestIcon from "../assets/icons/Pinterest.webp";
import whatsappIcon from "../assets/icons/whatsapp.webp";
import tiktokIcon from "../assets/icons/tiktok.webp";
import threadsIcon from "../assets/icons/threads.webp";
import redditIcon from "../assets/icons/reddit.webp";
import telegramIcon from "../assets/icons/telegram.webp";

const productMegaColumns = [
  [
    { label: "Pixel LED Strip", to: "/products/category/pixel-led-strip" },
    { label: "Neon Flex LED", to: "/products/category/neon-flex-led" },
    { label: "Pixel LED Bars", to: "/products/category/pixel-led-bars" },
    { label: "Pixel LED Panel", to: "/products/category/pixel-led-panel" },
  ],
  [
    { label: "Pixel Dot Lights", to: "/products/category/pixel-dot-lights" },
    { label: "Wall Washers Lights", to: "/products/category/wall-washers-lights" },
    { label: "Pillar Highlighters", to: "/products/category/pillar-highlighters" },
    { label: "Fan Projection Lights", to: "/products/category/fan-projection-lights" },
  ],
  [
    { label: "Wall Window Lights", to: "/products/category/wall-window-lights" },
    { label: "Gobo Lights", to: "/products/category/gobo-lights" },
    { label: "Pool Lights", to: "/products/category/pool-lights" },
    { label: "Fountain Lights", to: "/products/category/fountain-lights" },
  ],
  [
    { label: "Recessed Ground Lights", to: "/products/category/recessed-ground-lights" },
    { label: "Tree Highlighters", to: "/products/category/tree-highlighters" },
    { label: "Flood Lights", to: "/products/category/flood-lights" },
    { label: "DMX Controllers", to: "/products/category/dmx-controllers" },
    { label: "Drivers", to: "/products/category/drivers" },
  ],
];

const servicesMenu = [
  { label: "Catalogues", to: "/catalogues" },
  { label: "Downloads", to: "/downloads" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
];

const footerProducts = [
  "Pixel LED Strip",
  "Neon Flex LED",
  "Pixel LED Bars",
  "Pixel LED Panel",
  "Pixel Dot Lights",
  "Wall Washers Lights",
  "Pillar Highlighters",
  "Wall Window Lights",
  "Gobo Lights",
  "Fan Projection Lights",
  "Pool Lights",
  "Fountain Lights",
  "Recessed Ground Lights",
  "Tree Highlighters",
  "Flood Lights",
  "DMX Controllers",
  "Drivers",
].map((label) => ({
  label,
  to: `/products/category/${label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`,
}));

const footerApplications = [
  { label: "Bridge Lighting", to: "/applications/bridge-lighting" },
  { label: "Park Lighting", to: "/applications/park-lighting" },
  { label: "Architectural Lighting", to: "/applications/architectural-lighting" },
  { label: "River Lighting", to: "/applications/river-lighting" },
  { label: "Ferris Wheel Lighting", to: "/applications/ferris-wheel-lighting" },
  { label: "Signs and Logos", to: "/applications/signs-and-logos" },
  { label: "Outdoor Media Facade", to: "/applications/outdoor-media-facade" },
  { label: "Street Lighting", to: "/applications/street-lighting" },
  { label: "Pub Lighting", to: "/applications/pub-lighting" },
  { label: "Studio Lighting", to: "/applications/studio-lighting" },
  { label: "Stage Lighting", to: "/applications/stage-lighting" },
  { label: "Light Shows", to: "/applications/light-shows" },
];

const navigation = {
  brand: {
    label: "Mecanav",
    to: "/",
    logo,
  },
  header: [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about" },
    {
      label: "PRODUCTS",
      to: "/products",
      variant: "mega",
      columns: productMegaColumns,
      mobileChildren: productMegaColumns.flat(),
    },
    { label: "APPLICATIONS", to: "/applications" },
    {
      label: "SERVICES",
      to: "#",
      variant: "dropdown",
      children: servicesMenu,
    },
    { label: "CONTACT US", to: "/contact" },
  ],
  mobileExtraLinks: [
    { label: "LOCATE US", href: "#footer-contact" },
  ],
  footer: {
    quickLinks: [
      { label: "HOME", to: "/" },
      { label: "ABOUT US", to: "/about" },
      { label: "PRODUCTS", to: "/products" },
      { label: "APPLICATIONS", to: "/applications" },
      { label: "SERVICES", to: "/catalogues" },
      { label: "CONTACT US", to: "/contact" },
    ],
    products: footerProducts,
    applications: footerApplications,
    services: servicesMenu,
    contact: {
      addressLines: ["Welford Road,", "LE26BD, Leicester, UK"],
      email: "sales@mecanav.uk",
    },
    social: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61578361105537",
        icon: facebookIcon,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/mecanav.facade/",
        icon: instagramIcon,
      },
      {
        label: "X",
        href: "https://x.com/Mecanav_facade",
        icon: twitterIcon,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@Mecanav_facade",
        icon: youtubeIcon,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/mecanav/",
        icon: linkedinIcon,
      },
      {
        label: "Pinterest",
        href: "https://in.pinterest.com/mecanav_facade/",
        icon: pinterestIcon,
      },
      {
        label: "WhatsApp",
        href: null,
        icon: whatsappIcon,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@mecanav_facade",
        icon: tiktokIcon,
      },
      {
        label: "Threads",
        href: "https://www.threads.com/@mecanav.facade",
        icon: threadsIcon,
      },
      {
        label: "Reddit",
        href: "https://www.reddit.com/user/Mecanav_facade/",
        icon: redditIcon,
      },
      {
        label: "Telegram",
        href: null,
        icon: telegramIcon,
      },
    ],
  },
};

export default navigation;
