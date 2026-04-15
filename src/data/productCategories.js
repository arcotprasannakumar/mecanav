import { createLookupMap } from "../utils/data";
import pixelLedStripImage from "../assets/images/Final-Products/Product spec imgs/pixel led strip/Pixel-led-strip (8).webp";
import neonFlexImage from "../assets/images/Final-Products/Product spec imgs/neon/neon10.webp";
import pixelLedBarsImage from "../assets/images/Final-Products/Product spec imgs/pixel led bars/bar13.webp";
import pixelLedPanelImage from "../assets/images/Final-Products/Product spec imgs/pixel led panels/panel14.webp";
import pixelDotLightsImage from "../assets/images/Final-Products/Product spec imgs/dot lights main products/dot1.webp";
import wallWashersImage from "../assets/images/Final-Products/Product spec imgs/wall washers product lights/Wallwasher10.webp";
import pillarHighlightersImage from "../assets/images/Final-Products/Product spec imgs/piller highlighters/pilla7.webp";
import fanProjectionImage from "../assets/images/Final-Products/Product spec imgs/fan projection/fan3.webp";
import wallWindowImage from "../assets/images/Final-Products/Product spec imgs/wallwindow lights/wallwindow11.webp";
import goboImage from "../assets/images/Final-Products/Product spec imgs/gobo/gobo 2.webp";
import poolImage from "../assets/images/Final-Products/Product spec imgs/pool lights/pool3.webp";
import fountainImage from "../assets/images/Final-Products/Product spec imgs/fountain lights/fountain15.webp";
import groundImage from "../assets/images/Final-Products/Product spec imgs/ground lights/ground10.webp";
import treeImage from "../assets/images/Final-Products/Product spec imgs/Tree highlighters/Tree highlighter4.webp";
import floodImage from "../assets/images/Final-Products/Product spec imgs/flood light/Flood5.webp";
import dmxImage from "../assets/images/Final-Products/Product spec imgs/drivers and controllers/contro3.webp";
import driverImage from "../assets/images/Final-Products/Product spec imgs/drivers and controllers/driver2.webp";

const productCategories = [
  {
    slug: "pixel-led-strip",
    title: "Pixel LED Strip",
    image: pixelLedStripImage,
    legacySource: "product.html, Pixel-LED-Strip-Product.html",
    migrationStatus: "partial",
    description:
      "Flexible strip solutions spanning WW, RGB, RGBW, and RGBWW configurations across pixel and non-pixel variants.",
    sidebarItems: [
      { slug: "ww-12v-non-pixel-led-strip", label: "WW - Non-Pixel - 12V LED Strip", to: "/products/ww-12v-non-pixel-led-strip" },
      { slug: "ww-12v-pixel-led-strip", label: "WW - Pixel - 12V LED Strip", to: "/products/ww-12v-pixel-led-strip" },
      { slug: "ww-24v-non-pixel-led-strip", label: "WW - Non-Pixel - 24V LED Strip", to: "/products/ww-24v-non-pixel-led-strip" },
      { slug: "ww-24v-pixel-led-strip", label: "WW - Pixel - 24V LED Strip", to: "/products/ww-24v-pixel-led-strip" },
      { slug: "rgb-12v-non-pixel-led-strip", label: "RGB - Non-Pixel - 12V LED Strip", to: "/products/rgb-12v-non-pixel-led-strip" },
      { slug: "rgb-12v-pixel-led-strip", label: "RGB - Pixel - 12V Pixel LED Strip", to: "/products/rgb-12v-pixel-led-strip" },
      { slug: "rgb-24v-non-pixel-led-strip", label: "RGB - Non-Pixel - 24V LED Strip", to: "/products/rgb-24v-non-pixel-led-strip" },
      { slug: "rgb-24v-pixel-led-strip", label: "RGB - Pixel - 24V Pixel LED Strip", to: "/products/rgb-24v-pixel-led-strip" },
      { slug: "rgbw-12v-non-pixel-led-strip", label: "RGBW - Non-Pixel - 12V LED Strip", to: "/products/rgbw-12v-non-pixel-led-strip" },
      { slug: "rgbw-12v-pixel-led-strip", label: "RGBW - Pixel - 12V Pixel LED Strip", to: "/products/rgbw-12v-pixel-led-strip" },
      { slug: "rgbw-24v-non-pixel-led-strip", label: "RGBW - Non-Pixel - 24V LED Strip", to: "/products/rgbw-24v-non-pixel-led-strip" },
      { slug: "rgbw-24v-pixel-led-strip", label: "RGBW - Pixel - 24V Pixel LED Strip", to: "/products/rgbw-24v-pixel-led-strip" },
      { slug: "rgbww-12v-non-pixel-led-strip", label: "RGBWW - Non-Pixel - 12V LED Strip", to: "/products/rgbww-12v-non-pixel-led-strip" },
      { slug: "rgbww-12v-pixel-led-strip", label: "RGBWW - Pixel - 12V Pixel LED Strip", to: "/products/rgbww-12v-pixel-led-strip" },
      { slug: "rgbww-24v-non-pixel-led-strip", label: "RGBWW - Non-Pixel - 24V LED Strip", to: "/products/rgbww-24v-non-pixel-led-strip" },
      { slug: "rgbww-24v-pixel-led-strip", label: "RGBWW - Pixel - 24V Pixel LED Strip", to: "/products/rgbww-24v-pixel-led-strip" },
    ],
  },
  {
    slug: "neon-flex-led",
    title: "Neon Flex LED",
    image: neonFlexImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Flexible neon profile products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "pixel-led-bars",
    title: "Pixel LED Bars",
    image: pixelLedBarsImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Linear bar lighting systems. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "pixel-led-panel",
    title: "Pixel LED Panel",
    image: pixelLedPanelImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Panel and mesh-based media lighting. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "pixel-dot-lights",
    title: "Pixel Dot Lights",
    image: pixelDotLightsImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Point-source pixel fixtures. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "wall-washers-lights",
    title: "Wall Washers Lights",
    image: wallWashersImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Wall washer families. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "pillar-highlighters",
    title: "Pillar Highlighters",
    image: pillarHighlightersImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Pillar and spike highlight fixtures. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "fan-projection-lights",
    title: "Fan Projection Lights",
    image: fanProjectionImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "3D hologram fan products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "wall-window-lights",
    title: "Wall Window Lights",
    image: wallWindowImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Facade window lighting products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "gobo-lights",
    title: "Gobo Lights",
    image: goboImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Projection and gobo products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "pool-lights",
    title: "Pool Lights",
    image: poolImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Pool-rated fixtures. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "fountain-lights",
    title: "Fountain Lights",
    image: fountainImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Fountain lighting products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "recessed-ground-lights",
    title: "Recessed Ground Lights",
    image: groundImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Ground recessed fixtures. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "tree-highlighters",
    title: "Tree Highlighters",
    image: treeImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Landscape and tree highlighter products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "flood-lights",
    title: "Flood Lights",
    image: floodImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Flood lighting products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "dmx-controllers",
    title: "DMX Controllers",
    image: dmxImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Control hardware. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
  {
    slug: "drivers",
    title: "Drivers",
    image: driverImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Power and driver products. Detail migration deferred to a later bulk pass.",
    sidebarItems: [],
  },
];

export const productCategoryMap = createLookupMap(productCategories);

export default productCategories;
