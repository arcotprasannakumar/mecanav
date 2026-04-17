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
    description: "Flexible neon profile products for continuous linear accents, facade outlines, and decorative highlights.",
    sidebarItems: [{ slug: "neon-flex-led-series", label: "Neon Flex LED Series", to: "/products/neon-flex-led-series" }],
  },
  {
    slug: "pixel-led-bars",
    title: "Pixel LED Bars",
    image: pixelLedBarsImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Linear bar lighting systems for media facades, architectural outlines, and dynamic pixel effects.",
    sidebarItems: [{ slug: "pixel-led-bars-series", label: "Pixel LED Bars Series", to: "/products/pixel-led-bars-series" }],
  },
  {
    slug: "pixel-led-panel",
    title: "Pixel LED Panel",
    image: pixelLedPanelImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Panel and mesh-based media lighting for vivid surface effects and large-format visual displays.",
    sidebarItems: [{ slug: "pixel-led-panel-series", label: "Pixel LED Panel Series", to: "/products/pixel-led-panel-series" }],
  },
  {
    slug: "pixel-dot-lights",
    title: "Pixel Dot Lights",
    image: pixelDotLightsImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Point-source pixel fixtures for signage, facades, contours, and animated lighting installations.",
    sidebarItems: [{ slug: "pixel-dot-lights-series", label: "Pixel Dot Lights Series", to: "/products/pixel-dot-lights-series" }],
  },
  {
    slug: "wall-washers-lights",
    title: "Wall Washers Lights",
    image: wallWashersImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Wall washer families for uniform facade illumination, grazing, and architectural emphasis.",
    sidebarItems: [{ slug: "wall-washers-lights-series", label: "Wall Washers Lights Series", to: "/products/wall-washers-lights-series" }],
  },
  {
    slug: "pillar-highlighters",
    title: "Pillar Highlighters",
    image: pillarHighlightersImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Pillar and spike highlight fixtures for columns, landscapes, entryways, and vertical features.",
    sidebarItems: [{ slug: "pillar-highlighters-series", label: "Pillar Highlighters Series", to: "/products/pillar-highlighters-series" }],
  },
  {
    slug: "fan-projection-lights",
    title: "Fan Projection Lights",
    image: fanProjectionImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "3D hologram fan products for promotional displays, event visuals, and high-impact brand moments.",
    sidebarItems: [{ slug: "fan-projection-lights-series", label: "Fan Projection Lights Series", to: "/products/fan-projection-lights-series" }],
  },
  {
    slug: "wall-window-lights",
    title: "Wall Window Lights",
    image: wallWindowImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Facade window lighting products for building outlines, window frames, and synchronized exterior effects.",
    sidebarItems: [{ slug: "wall-window-lights-series", label: "Wall Window Lights Series", to: "/products/wall-window-lights-series" }],
  },
  {
    slug: "gobo-lights",
    title: "Gobo Lights",
    image: goboImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Projection and gobo products for logos, patterns, themed visuals, and event environments.",
    sidebarItems: [{ slug: "gobo-lights-series", label: "Gobo Lights Series", to: "/products/gobo-lights-series" }],
  },
  {
    slug: "pool-lights",
    title: "Pool Lights",
    image: poolImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Pool-rated fixtures for underwater illumination, leisure spaces, and architectural water features.",
    sidebarItems: [{ slug: "pool-lights-series", label: "Pool Lights Series", to: "/products/pool-lights-series" }],
  },
  {
    slug: "fountain-lights",
    title: "Fountain Lights",
    image: fountainImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Fountain lighting products for water jets, pools, public plazas, and synchronized show effects.",
    sidebarItems: [{ slug: "fountain-lights-series", label: "Fountain Lights Series", to: "/products/fountain-lights-series" }],
  },
  {
    slug: "recessed-ground-lights",
    title: "Recessed Ground Lights",
    image: groundImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Ground recessed fixtures for pathways, facades, landscape accents, and durable outdoor uplighting.",
    sidebarItems: [{ slug: "recessed-ground-lights-series", label: "Recessed Ground Lights Series", to: "/products/recessed-ground-lights-series" }],
  },
  {
    slug: "tree-highlighters",
    title: "Tree Highlighters",
    image: treeImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Landscape and tree highlighter products for gardens, parks, trees, and outdoor focal points.",
    sidebarItems: [{ slug: "tree-highlighters-series", label: "Tree Highlighters Series", to: "/products/tree-highlighters-series" }],
  },
  {
    slug: "flood-lights",
    title: "Flood Lights",
    image: floodImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Flood lighting products for broad-area illumination, architectural facades, and outdoor project lighting.",
    sidebarItems: [{ slug: "flood-lights-series", label: "Flood Lights Series", to: "/products/flood-lights-series" }],
  },
  {
    slug: "dmx-controllers",
    title: "DMX Controllers",
    image: dmxImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Control hardware for DMX lighting systems, programmed scenes, and synchronized facade effects.",
    sidebarItems: [{ slug: "dmx-controllers-series", label: "DMX Controllers Series", to: "/products/dmx-controllers-series" }],
  },
  {
    slug: "drivers",
    title: "Drivers",
    image: driverImage,
    legacySource: "product.html",
    migrationStatus: "shell-only",
    description: "Power and driver products for reliable LED operation across architectural and decorative lighting systems.",
    sidebarItems: [{ slug: "drivers-series", label: "Drivers Series", to: "/products/drivers-series" }],
  },
];

export const productCategoryMap = createLookupMap(productCategories);

export default productCategories;
