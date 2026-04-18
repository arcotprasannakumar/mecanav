import { createLookupMap } from "../utils/data";

const getAssetUrl = (path) => new URL(`../assets/images/${path}`, import.meta.url).href;

const pixelStripBase = "Final-Products/Product spec imgs/pixel led strip";

const pixelLedStripImages = {
  ww12vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (5).webp`),
  ww12vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (6).webp`),
  ww24vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (7).webp`),
  ww24vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (8).webp`),
  rgb12vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (9).webp`),
  rgb12vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (10).webp`),
  rgb24vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (11).webp`),
  rgb24vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (12).webp`),
  rgbw12vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (13).webp`),
  rgbw12vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (14).webp`),
  rgbw24vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (15).webp`),
  rgbw24vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (16).webp`),
  rgbww12vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (17).webp`),
  rgbww12vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (18).webp`),
  rgbww24vNonPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (19).webp`),
  rgbww24vPixel: getAssetUrl(`${pixelStripBase}/Pixel-led-strip (20).webp`),
};

const neonBase = "Final-Products/Product spec imgs/neon";

const neonFlexImages = {
  ww12vNonPixel: getAssetUrl(`${neonBase}/neon1.webp`),
  ww12vPixel: getAssetUrl(`${neonBase}/neon2.webp`),
  ww24vNonPixel: getAssetUrl(`${neonBase}/neon3.webp`),
  ww24vPixel: getAssetUrl(`${neonBase}/neon4.webp`),
  rgb12vNonPixel: getAssetUrl(`${neonBase}/neon5.webp`),
  rgb12vPixel: getAssetUrl(`${neonBase}/neon6.webp`),
  rgb24vNonPixel: getAssetUrl(`${neonBase}/neon7.webp`),
  rgb24vPixel: getAssetUrl(`${neonBase}/neon8.webp`),
  rgbw12vNonPixel: getAssetUrl(`${neonBase}/neon9.webp`),
  rgbw12vPixel: getAssetUrl(`${neonBase}/neon10.webp`),
  rgbw24vNonPixel: getAssetUrl(`${neonBase}/neon11.webp`),
  rgbw24vPixel: getAssetUrl(`${neonBase}/neon12.webp`),
  rgbww12vNonPixel: getAssetUrl(`${neonBase}/neon13.webp`),
  rgbww12vPixel: getAssetUrl(`${neonBase}/neon14.webp`),
  rgbww24vNonPixel: getAssetUrl(`${neonBase}/neon15.webp`),
  rgbww24vPixel: getAssetUrl(`${neonBase}/neon16.webp`),
};

const barsBase = "Final-Products/Product spec imgs/pixel led bars";

const pixelLedBarsImages = {
  ww24vNonPixel: getAssetUrl(`${barsBase}/bar1.webp`),
  ww24vPixel: getAssetUrl(`${barsBase}/bar2.webp`),
  ww48vNonPixel: getAssetUrl(`${barsBase}/bar3.webp`),
  ww48vPixel: getAssetUrl(`${barsBase}/bar4.webp`),

  rgb24vNonPixel: getAssetUrl(`${barsBase}/bar5.webp`),
  rgb24vPixel: getAssetUrl(`${barsBase}/bar6.webp`),
  rgb48vNonPixel: getAssetUrl(`${barsBase}/bar7.webp`),
  rgb48vPixel: getAssetUrl(`${barsBase}/bar8.webp`),

  rgbw24vNonPixel: getAssetUrl(`${barsBase}/bar9.webp`),
  rgbw24vPixel: getAssetUrl(`${barsBase}/bar10.webp`),
  rgbw48vNonPixel: getAssetUrl(`${barsBase}/bar11.webp`),
  rgbw48vPixel: getAssetUrl(`${barsBase}/bar12.webp`),

  rgbww24vNonPixel: getAssetUrl(`${barsBase}/bar13.webp`),
  rgbww24vPixel: getAssetUrl(`${barsBase}/bar14.webp`),
  rgbww48vNonPixel: getAssetUrl(`${barsBase}/bar15.webp`),
  rgbww48vPixel: getAssetUrl(`${barsBase}/bar16.webp`),
};

const panelBase = "Final-Products/Product spec imgs/pixel led panels";

const pixelLedPanelImages = {
  ww24vNonPixel: getAssetUrl(`${panelBase}/panel1.webp`),
  ww24vPixel: getAssetUrl(`${panelBase}/panel2.webp`),
  ww48vNonPixel: getAssetUrl(`${panelBase}/panel3.webp`),
  ww48vPixel: getAssetUrl(`${panelBase}/panel4.webp`),

  rgb24vNonPixel: getAssetUrl(`${panelBase}/panel5.webp`),
  rgb24vPixel: getAssetUrl(`${panelBase}/panel6.webp`),
  rgb48vNonPixel: getAssetUrl(`${panelBase}/panel7.webp`),
  rgb48vPixel: getAssetUrl(`${panelBase}/panel8.webp`),

  rgbw24vNonPixel: getAssetUrl(`${panelBase}/panel9.webp`),
  rgbw24vPixel: getAssetUrl(`${panelBase}/panel10.webp`),
  rgbw48vNonPixel: getAssetUrl(`${panelBase}/panel11.webp`),
  rgbw48vPixel: getAssetUrl(`${panelBase}/panel12.webp`),

  rgbww24vNonPixel: getAssetUrl(`${panelBase}/panel13.webp`),
  rgbww24vPixel: getAssetUrl(`${panelBase}/panel14.webp`),
  rgbww48vNonPixel: getAssetUrl(`${panelBase}/panel15.webp`),
  rgbww48vPixel: getAssetUrl(`${panelBase}/panel16.webp`),
};

const dotBase = "Final-Products/Product spec imgs/dot lights main products";

const pixelDotLightsImages = {
  ww24vNonPixel: getAssetUrl(`${dotBase}/dot1.webp`),
  ww24vPixel: getAssetUrl(`${dotBase}/dot2.webp`),
  ww48vNonPixel: getAssetUrl(`${dotBase}/dot3.webp`),
  ww48vPixel: getAssetUrl(`${dotBase}/dot4.webp`),

  rgb24vNonPixel: getAssetUrl(`${dotBase}/dot5.webp`),
  rgb24vPixel: getAssetUrl(`${dotBase}/dot6.webp`),
  rgb48vNonPixel: getAssetUrl(`${dotBase}/dot7.webp`),
  rgb48vPixel: getAssetUrl(`${dotBase}/dot8.webp`),

  rgbw24vNonPixel: getAssetUrl(`${dotBase}/dot9.webp`),
  rgbw24vPixel: getAssetUrl(`${dotBase}/dot10.webp`),
  rgbw48vNonPixel: getAssetUrl(`${dotBase}/dot11.webp`),
  rgbw48vPixel: getAssetUrl(`${dotBase}/dot12.webp`),

  rgbww24vNonPixel: getAssetUrl(`${dotBase}/dot13.webp`),
  rgbww24vPixel: getAssetUrl(`${dotBase}/dot14.webp`),
  rgbww48vNonPixel: getAssetUrl(`${dotBase}/dot15.webp`),
  rgbww48vPixel: getAssetUrl(`${dotBase}/dot16.webp`),
};

const wallWasherBase = "Final-Products/Product spec imgs/wall washers product lights";

const wallWashersImages = {
  ww24vNonPixel: getAssetUrl(`${wallWasherBase}/Wallwasher1.webp`),
  ww24vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher2.webp`),
  ww48vNonPixel: getAssetUrl(`${wallWasherBase}/Wallwasher3.webp`),
  ww48vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher4.webp`),

  rgb24vNonPixel: getAssetUrl(`${wallWasherBase}/Wallwasher5.webp`),
  rgb24vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher6.webp`),
  rgb48vNonPixel: getAssetUrl(`${wallWasherBase}/Wallwasher7.webp`),
  rgb48vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher8.webp`),

  rgbw24vNonPixel: getAssetUrl(`${wallWasherBase}/Wallwasher9.webp`),
  rgbw24vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher10.webp`),
  rgbw48vNonPixel: getAssetUrl(`${wallWasherBase}/120.webp`),
  rgbw48vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher12.webp`),

  rgbww24vNonPixel: getAssetUrl(`${wallWasherBase}/Wallwasher13.webp`),
  rgbww24vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher14.webp`),
  rgbww48vNonPixel: getAssetUrl(`${wallWasherBase}/Wallwasher15.webp`),
  rgbww48vPixel: getAssetUrl(`${wallWasherBase}/Wallwasher11.webp`),
};

const pillarBase = "Final-Products/Product spec imgs/piller highlighters";

const pillarHighlightersImages = {
  ww24_48vNonPixel: getAssetUrl(`${pillarBase}/pilla1.webp`),
  ww24_48vPixel: getAssetUrl(`${pillarBase}/pilla2.webp`),
  ww220vNonPixel: getAssetUrl(`${pillarBase}/pilla3.webp`),
  ww220vPixel: getAssetUrl(`${pillarBase}/pilla4.webp`),

  rgb24_48vNonPixel: getAssetUrl(`${pillarBase}/pilla5.webp`),
  rgb24_48vPixel: getAssetUrl(`${pillarBase}/pilla6.webp`),
  rgb220vNonPixel: getAssetUrl(`${pillarBase}/pilla7.webp`),
  rgb220vPixel: getAssetUrl(`${pillarBase}/pilla8.webp`),

  rgbw24_48vNonPixel: getAssetUrl(`${pillarBase}/pilla9.webp`),
  rgbw24_48vPixel: getAssetUrl(`${pillarBase}/pilla10.webp`),
  rgbw220vNonPixel: getAssetUrl(`${pillarBase}/pilla11.webp`),
  rgbw220vPixel: getAssetUrl(`${pillarBase}/pilla12.webp`),

  rgbww24_48vNonPixel: getAssetUrl(`${pillarBase}/pilla13.webp`),
  rgbww24_48vPixel: getAssetUrl(`${pillarBase}/pilla14.webp`),
  rgbww220vNonPixel: getAssetUrl(`${pillarBase}/pilla15.webp`),
  rgbww220vPixel: getAssetUrl(`${pillarBase}/pilla16.webp`),
};

const fanProjectionImages = {
  fanProjection1: getAssetUrl("Final-Products/Product spec imgs/fan projection/fan1.webp"),
  fanProjection2: getAssetUrl("Final-Products/Product spec imgs/fan projection/fan2.webp"),
};

const wallWindowBase = "Final-Products/Product spec imgs/wallwindow lights";

const wallWindowImages = {
  ww24vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow1.webp`),
  ww24vPixel: getAssetUrl(`${wallWindowBase}/wallwindow2.webp`),
  ww48vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow3.webp`),
  ww48vPixel: getAssetUrl(`${wallWindowBase}/wallwindow4.webp`),

  rgb24vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow5.webp`),
  rgb24vPixel: getAssetUrl(`${wallWindowBase}/wallwindow6.webp`),
  rgb48vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow7.webp`),
  rgb48vPixel: getAssetUrl(`${wallWindowBase}/wallwindow8.webp`),

  rgbw24vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow9.webp`),
  rgbw24vPixel: getAssetUrl(`${wallWindowBase}/wallwindow10.webp`),
  rgbw48vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow11.webp`),
  rgbw48vPixel: getAssetUrl(`${wallWindowBase}/wallwindow12.webp`),

  rgbww24vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow13.webp`),
  rgbww24vPixel: getAssetUrl(`${wallWindowBase}/wallwindow14.webp`),
  rgbww48vNonPixel: getAssetUrl(`${wallWindowBase}/wallwindow15.webp`),
  rgbww48vPixel: getAssetUrl(`${wallWindowBase}/wallwindow16.webp`),
};

const goboImages = {
  gobo1: getAssetUrl("Final-Products/Product spec imgs/gobo/gobo1.webp"),
  gobo2: getAssetUrl("Final-Products/Product spec imgs/gobo/gobo 2.webp"),
  gobo3: getAssetUrl("Final-Products/Product spec imgs/gobo/gobo 3.webp"),
  gobo4: getAssetUrl("Final-Products/Product spec imgs/gobo/gobo 4.webp"),
};

const poolLightsImages = {
  ww24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool1.webp"),
  ww24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool2.webp"),
  ww220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool3.webp"),
  ww220vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool4.webp"),

  rgb24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool5.webp"),
  rgb24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool6.webp"),
  rgb220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool7.webp"),
  rgb220vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool8.webp"),

  rgbw24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool9.webp"),
  rgbw24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool10.webp"),
  rgbw220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool1.webp"),
  rgbw220vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool2.webp"),

  rgbww24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool3.webp"),
  rgbww24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool4.webp"),
  rgbww220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool5.webp"),
  rgbww220vPixel: getAssetUrl("Final-Products/Product spec imgs/pool lights/pool6.webp"),
};





const fountainBase = "Final-Products/Product spec imgs/fountain lights";

const fountainLightsImages = {
  ww24_48vNonPixel: getAssetUrl(`${fountainBase}/fountain1.webp`),
  ww24_48vPixel: getAssetUrl(`${fountainBase}/fountain2.webp`),
  ww220vNonPixel: getAssetUrl(`${fountainBase}/fountain3.webp`),
  ww220vPixel: getAssetUrl(`${fountainBase}/fountain4.webp`),

  rgb24_48vNonPixel: getAssetUrl(`${fountainBase}/fountain5.webp`),
  rgb24_48vPixel: getAssetUrl(`${fountainBase}/fountain6.webp`),
  rgb220vNonPixel: getAssetUrl(`${fountainBase}/fountain7.webp`),
  rgb220vPixel: getAssetUrl(`${fountainBase}/fountain8.webp`),

  rgbw24_48vNonPixel: getAssetUrl(`${fountainBase}/fountain9.webp`),
  rgbw24_48vPixel: getAssetUrl(`${fountainBase}/fountain10.webp`),
  rgbw220vNonPixel: getAssetUrl(`${fountainBase}/fountain11.webp`),
  rgbw220vPixel: getAssetUrl(`${fountainBase}/fountain12.webp`),

  rgbww24_48vNonPixel: getAssetUrl(`${fountainBase}/fountain13.webp`),
  rgbww24_48vPixel: getAssetUrl(`${fountainBase}/fountain14.webp`),
  rgbww220vNonPixel: getAssetUrl(`${fountainBase}/fountain15.webp`),
  rgbww220vPixel: getAssetUrl(`${fountainBase}/fountain16.webp`),
};

const groundLightsImages = {
  ww24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground1.webp"),
  ww24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground2.webp"),
  ww220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground3.webp"),
  ww220vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground4.webp"),

  rgb24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground5.webp"),
  rgb24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground6.webp"),
  rgb220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground7.webp"),
  rgb220vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground8.webp"),

  rgbw24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground9.webp"),
  rgbw24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground10.webp"),
  rgbw220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground11.webp"),
  rgbw220vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground12.webp"),

  rgbww24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground13.webp"),
  rgbww24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground14.webp"),
  rgbww220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground15.webp"),
  rgbww220vPixel: getAssetUrl("Final-Products/Product spec imgs/ground lights/ground16.webp"),
};

const treeHighlighterImages = {
  tree1: getAssetUrl("Final-Products/Product spec imgs/Tree highlighters/Tree highlighter1.webp"),
  tree2: getAssetUrl("Final-Products/Product spec imgs/Tree highlighters/Tree highlighter2.webp"),
  tree3: getAssetUrl("Final-Products/Product spec imgs/Tree highlighters/Tree highlighter3.webp"),
  tree4: getAssetUrl("Final-Products/Product spec imgs/Tree highlighters/Tree highlighter4.webp"),
};

const floodLightsImages = {
  ww24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood1.webp"),
  ww24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood2.webp"),
  ww220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood3.webp"),
  ww220vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood4.webp"),

  rgb24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood5.webp"),
  rgb24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood6.webp"),
  rgb220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood7.webp"),
  rgb220vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood8.webp"),

  rgbw24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood9.webp"),
  rgbw24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood10.webp"),
  rgbw220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood11.webp"),
  rgbw220vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood12.webp"),

  rgbww24_48vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood13.webp"),
  rgbww24_48vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood14.webp"),
  rgbww220vNonPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood15.webp"),
  rgbww220vPixel: getAssetUrl("Final-Products/Product spec imgs/flood light/Flood16.webp"),
};

const dmxControllerImages = {
  dmx1: getAssetUrl("Final-Products/Product spec imgs/drivers and controllers/contro.webp"),
  dmx2: getAssetUrl("Final-Products/Product spec imgs/drivers and controllers/contro2.webp"),
  dmx3: getAssetUrl("Final-Products/Product spec imgs/drivers and controllers/contro3.webp"),
};

const driverImages = {
  driver1: getAssetUrl("Final-Products/Product spec imgs/drivers and controllers/driver.webp"),
  driver2: getAssetUrl("Final-Products/Product spec imgs/drivers and controllers/driver2.webp"),
};

const neonFlexImage = getAssetUrl("Final-Products/Product spec imgs/neon/neon10.webp");
const pixelLedBarsImage = getAssetUrl("Final-Products/Product spec imgs/pixel led bars/bar13.webp");
const pixelLedPanelImage = getAssetUrl("Final-Products/Product spec imgs/pixel led panels/panel14.webp");
const pixelDotLightsImage = getAssetUrl("Final-Products/Product spec imgs/dot lights main products/dot1.webp");
const wallWashersImage = getAssetUrl("Final-Products/Product spec imgs/wall washers product lights/Wallwasher10.webp");
const pillarHighlightersImage = getAssetUrl("Final-Products/Product spec imgs/piller highlighters/pilla7.webp");
const fanProjectionImage = getAssetUrl("Final-Products/Product spec imgs/fan projection/fan3.webp");
const wallWindowImage = getAssetUrl("Final-Products/Product spec imgs/wallwindow lights/wallwindow11.webp");
const goboImage = getAssetUrl("Final-Products/Product spec imgs/gobo/gobo 2.webp");
const poolImage = getAssetUrl("Final-Products/Product spec imgs/pool lights/pool3.webp");
const fountainImage = getAssetUrl("Final-Products/Product spec imgs/fountain lights/fountain15.webp");
const groundImage = getAssetUrl("Final-Products/Product spec imgs/ground lights/ground10.webp");
const treeImage = getAssetUrl("Final-Products/Product spec imgs/Tree highlighters/Tree highlighter4.webp");
const floodImage = getAssetUrl("Final-Products/Product spec imgs/flood light/Flood5.webp");
const dmxImage = getAssetUrl("Final-Products/Product spec imgs/drivers and controllers/contro3.webp");
const driverImage = getAssetUrl("Final-Products/Product spec imgs/drivers and controllers/driver2.webp");

const productCategories = [
  {
    slug: "pixel-led-strip",
    title: "Pixel LED Strip",
    image: pixelLedStripImages.ww24vPixel,
    legacySource: "product.html, Pixel-LED-Strip-Product.html",
    migrationStatus: "partial",
    description:
      "Flexible strip solutions spanning WW, RGB, RGBW, and RGBWW configurations across pixel and non-pixel variants.",
    sidebarItems: [
      {
        slug: "ww-12v-non-pixel-led-strip",
        label: "WW - Non-Pixel - 12V LED Strip",
        to: "/products/ww-12v-non-pixel-led-strip",
        image: pixelLedStripImages.ww12vNonPixel,
      },
      {
        slug: "ww-12v-pixel-led-strip",
        label: "WW - Pixel - 12V LED Strip",
        to: "/products/ww-12v-pixel-led-strip",
        image: pixelLedStripImages.ww12vPixel,
      },
      {
        slug: "ww-24v-non-pixel-led-strip",
        label: "WW - Non-Pixel - 24V LED Strip",
        to: "/products/ww-24v-non-pixel-led-strip",
        image: pixelLedStripImages.ww24vNonPixel,
      },
      {
        slug: "ww-24v-pixel-led-strip",
        label: "WW - Pixel - 24V LED Strip",
        to: "/products/ww-24v-pixel-led-strip",
        image: pixelLedStripImages.ww24vPixel,
      },
      {
        slug: "rgb-12v-non-pixel-led-strip",
        label: "RGB - Non-Pixel - 12V LED Strip",
        to: "/products/rgb-12v-non-pixel-led-strip",
        image: pixelLedStripImages.rgb12vNonPixel,
      },
      {
        slug: "rgb-12v-pixel-led-strip",
        label: "RGB - Pixel - 12V Pixel LED Strip",
        to: "/products/rgb-12v-pixel-led-strip",
        image: pixelLedStripImages.rgb12vPixel,
      },
      {
        slug: "rgb-24v-non-pixel-led-strip",
        label: "RGB - Non-Pixel - 24V LED Strip",
        to: "/products/rgb-24v-non-pixel-led-strip",
        image: pixelLedStripImages.rgb24vNonPixel,
      },
      {
        slug: "rgb-24v-pixel-led-strip",
        label: "RGB - Pixel - 24V Pixel LED Strip",
        to: "/products/rgb-24v-pixel-led-strip",
        image: pixelLedStripImages.rgb24vPixel,
      },
      {
        slug: "rgbw-12v-non-pixel-led-strip",
        label: "RGBW - Non-Pixel - 12V LED Strip",
        to: "/products/rgbw-12v-non-pixel-led-strip",
        image: pixelLedStripImages.rgbw12vNonPixel,
      },
      {
        slug: "rgbw-12v-pixel-led-strip",
        label: "RGBW - Pixel - 12V Pixel LED Strip",
        to: "/products/rgbw-12v-pixel-led-strip",
        image: pixelLedStripImages.rgbw12vPixel,
      },
      {
        slug: "rgbw-24v-non-pixel-led-strip",
        label: "RGBW - Non-Pixel - 24V LED Strip",
        to: "/products/rgbw-24v-non-pixel-led-strip",
        image: pixelLedStripImages.rgbw24vNonPixel,
      },
      {
        slug: "rgbw-24v-pixel-led-strip",
        label: "RGBW - Pixel - 24V Pixel LED Strip",
        to: "/products/rgbw-24v-pixel-led-strip",
        image: pixelLedStripImages.rgbw24vPixel,
      },
      {
        slug: "rgbww-12v-non-pixel-led-strip",
        label: "RGBWW - Non-Pixel - 12V LED Strip",
        to: "/products/rgbww-12v-non-pixel-led-strip",
        image: pixelLedStripImages.rgbww12vNonPixel,
      },
      {
        slug: "rgbww-12v-pixel-led-strip",
        label: "RGBWW - Pixel - 12V Pixel LED Strip",
        to: "/products/rgbww-12v-pixel-led-strip",
        image: pixelLedStripImages.rgbww12vPixel,
      },
      {
        slug: "rgbww-24v-non-pixel-led-strip",
        label: "RGBWW - Non-Pixel - 24V LED Strip",
        to: "/products/rgbww-24v-non-pixel-led-strip",
        image: pixelLedStripImages.rgbww24vNonPixel,
      },
      {
        slug: "rgbww-24v-pixel-led-strip",
        label: "RGBWW - Pixel - 24V Pixel LED Strip",
        to: "/products/rgbww-24v-pixel-led-strip",
        image: pixelLedStripImages.rgbww24vPixel,
      },
    ],
  },
  {
  slug: "neon-flex-led",
  title: "Neon Flex LED",
  image: neonFlexImages.rgbw12vPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Flexible neon profile products for continuous linear accents, facade outlines, and decorative highlights.",

  sidebarItems: [
    { slug: "ww-12v-non-pixel-neon-flex", label: "12V Warm White Neon Flex – Non Pixel", to: "/products/ww-12v-non-pixel-neon-flex", image: neonFlexImages.ww12vNonPixel },
    { slug: "ww-12v-pixel-neon-flex", label: "12V Warm White Neon Flex – Pixel", to: "/products/ww-12v-pixel-neon-flex", image: neonFlexImages.ww12vPixel },
    { slug: "ww-24v-non-pixel-neon-flex", label: "24V Warm White Neon Flex – Non Pixel", to: "/products/ww-24v-non-pixel-neon-flex", image: neonFlexImages.ww24vNonPixel },
    { slug: "ww-24v-pixel-neon-flex", label: "24V Warm White Neon Flex – Pixel", to: "/products/ww-24v-pixel-neon-flex", image: neonFlexImages.ww24vPixel },

    { slug: "rgb-12v-non-pixel-neon-flex", label: "12V RGB Neon Flex – Non Pixel", to: "/products/rgb-12v-non-pixel-neon-flex", image: neonFlexImages.rgb12vNonPixel },
    { slug: "rgb-12v-pixel-neon-flex", label: "12V RGB Neon Flex – Pixel", to: "/products/rgb-12v-pixel-neon-flex", image: neonFlexImages.rgb12vPixel },
    { slug: "rgb-24v-non-pixel-neon-flex", label: "24V RGB Neon Flex – Non Pixel", to: "/products/rgb-24v-non-pixel-neon-flex", image: neonFlexImages.rgb24vNonPixel },
    { slug: "rgb-24v-pixel-neon-flex", label: "24V RGB Neon Flex – Pixel", to: "/products/rgb-24v-pixel-neon-flex", image: neonFlexImages.rgb24vPixel },

    { slug: "rgbw-12v-non-pixel-neon-flex", label: "12V RGBW Neon Flex – Non Pixel", to: "/products/rgbw-12v-non-pixel-neon-flex", image: neonFlexImages.rgbw12vNonPixel },
    { slug: "rgbw-12v-pixel-neon-flex", label: "12V RGBW Neon Flex – Pixel", to: "/products/rgbw-12v-pixel-neon-flex", image: neonFlexImages.rgbw12vPixel },
    { slug: "rgbw-24v-non-pixel-neon-flex", label: "24V RGBW Neon Flex – Non Pixel", to: "/products/rgbw-24v-non-pixel-neon-flex", image: neonFlexImages.rgbw24vNonPixel },
    { slug: "rgbw-24v-pixel-neon-flex", label: "24V RGBW Neon Flex – Pixel", to: "/products/rgbw-24v-pixel-neon-flex", image: neonFlexImages.rgbw24vPixel },

    { slug: "rgbww-12v-non-pixel-neon-flex", label: "12V RGBWW Neon Flex – Non Pixel", to: "/products/rgbww-12v-non-pixel-neon-flex", image: neonFlexImages.rgbww12vNonPixel },
    { slug: "rgbww-12v-pixel-neon-flex", label: "12V RGBWW Neon Flex – Pixel", to: "/products/rgbww-12v-pixel-neon-flex", image: neonFlexImages.rgbww12vPixel },
    { slug: "rgbww-24v-non-pixel-neon-flex", label: "24V RGBWW Neon Flex – Non Pixel", to: "/products/rgbww-24v-non-pixel-neon-flex", image: neonFlexImages.rgbww24vNonPixel },
    { slug: "rgbww-24v-pixel-neon-flex", label: "24V RGBWW Neon Flex – Pixel", to: "/products/rgbww-24v-pixel-neon-flex", image: neonFlexImages.rgbww24vPixel },
  ],
},
  {
  slug: "pixel-led-bars",
  title: "Pixel LED Bars",
  image: pixelLedBarsImages.rgbww24vNonPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Linear bar lighting systems for media facades, architectural outlines, and dynamic pixel effects.",

  sidebarItems: [
    { slug: "ww-24v-non-pixel-led-bars", label: "24V Warm White Non Pixel LED Bar", to: "/products/ww-24v-non-pixel-led-bars", image: pixelLedBarsImages.ww24vNonPixel },
    { slug: "ww-24v-pixel-led-bars", label: "24V Warm White Pixel LED Bar", to: "/products/ww-24v-pixel-led-bars", image: pixelLedBarsImages.ww24vPixel },
    { slug: "ww-48v-non-pixel-led-bars", label: "48V Warm White Non Pixel LED Bar", to: "/products/ww-48v-non-pixel-led-bars", image: pixelLedBarsImages.ww48vNonPixel },
    { slug: "ww-48v-pixel-led-bars", label: "48V Warm White Pixel LED Bar", to: "/products/ww-48v-pixel-led-bars", image: pixelLedBarsImages.ww48vPixel },

    { slug: "rgb-24v-non-pixel-led-bars", label: "24V RGB Non Pixel LED Bar", to: "/products/rgb-24v-non-pixel-led-bars", image: pixelLedBarsImages.rgb24vNonPixel },
    { slug: "rgb-24v-pixel-led-bars", label: "24V RGB Pixel LED Bar", to: "/products/rgb-24v-pixel-led-bars", image: pixelLedBarsImages.rgb24vPixel },
    { slug: "rgb-48v-non-pixel-led-bars", label: "48V RGB Non Pixel LED Bar", to: "/products/rgb-48v-non-pixel-led-bars", image: pixelLedBarsImages.rgb48vNonPixel },
    { slug: "rgb-48v-pixel-led-bars", label: "48V RGB Pixel LED Bar", to: "/products/rgb-48v-pixel-led-bars", image: pixelLedBarsImages.rgb48vPixel },

    { slug: "rgbw-24v-non-pixel-led-bars", label: "24V RGBW Non Pixel LED Bar", to: "/products/rgbw-24v-non-pixel-led-bars", image: pixelLedBarsImages.rgbw24vNonPixel },
    { slug: "rgbw-24v-pixel-led-bars", label: "24V RGBW Pixel LED Bar", to: "/products/rgbw-24v-pixel-led-bars", image: pixelLedBarsImages.rgbw24vPixel },
    { slug: "rgbw-48v-non-pixel-led-bar", label: "48V RGBW Non Pixel LED Bar", to: "/products/rgbw-48v-non-pixel-led-bar", image: pixelLedBarsImages.rgbw48vNonPixel },
    { slug: "rgbw-48v-pixel-led-bar", label: "48V RGBW Pixel LED Bar", to: "/products/rgbw-48v-pixel-led-bar", image: pixelLedBarsImages.rgbw48vPixel },

    { slug: "rgbww-24v-non-pixel-led-bar", label: "24V RGBWW Non Pixel LED Bar", to: "/products/rgbww-24v-non-pixel-led-bar", image: pixelLedBarsImages.rgbww24vNonPixel },
    { slug: "rgbww-24v-pixel-led-bar", label: "24V RGBWW Pixel LED Bar", to: "/products/rgbww-24v-pixel-led-bar", image: pixelLedBarsImages.rgbww24vPixel },
    { slug: "rgbww-48v-non-pixel-led-bar", label: "48V RGBWW Non Pixel LED Bar", to: "/products/rgbww-48v-non-pixel-led-bar", image: pixelLedBarsImages.rgbww48vNonPixel },
    { slug: "rgbww-48v-pixel-led-bar", label: "48V RGBWW Pixel LED Bar", to: "/products/rgbww-48v-pixel-led-bar", image: pixelLedBarsImages.rgbww48vPixel },
  ],
},
  {
  slug: "pixel-led-panel",
  title: "Pixel LED Panel",
  image: pixelLedPanelImages.rgbww24vPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Panel and mesh-based media lighting for vivid surface effects and large-format visual displays.",
  sidebarItems: [
    { slug: "ww-24v-non-pixel-led-panel", label: "24V Warm White Non Pixel LED Panel", to: "/products/ww-24v-non-pixel-led-panel", image: pixelLedPanelImages.ww24vNonPixel },
    { slug: "ww-24v-pixel-led-panel", label: "24V Warm White Pixel LED Panel", to: "/products/ww-24v-pixel-led-panel", image: pixelLedPanelImages.ww24vPixel },
    { slug: "ww-48v-non-pixel-led-panel", label: "48V Warm White Non Pixel LED Panel", to: "/products/ww-48v-non-pixel-led-panel", image: pixelLedPanelImages.ww48vNonPixel },
    { slug: "ww-48v-pixel-led-panel", label: "48V Warm White Pixel LED Panel", to: "/products/ww-48v-pixel-led-panel", image: pixelLedPanelImages.ww48vPixel },

    { slug: "rgb-24v-non-pixel-led-panel", label: "24V RGB Non Pixel LED Panel", to: "/products/rgb-24v-non-pixel-led-panel", image: pixelLedPanelImages.rgb24vNonPixel },
    { slug: "rgb-24v-pixel-led-panel", label: "24V RGB Pixel LED Panel", to: "/products/rgb-24v-pixel-led-panel", image: pixelLedPanelImages.rgb24vPixel },
    { slug: "rgb-48v-non-pixel-led-panel", label: "48V RGB Non Pixel LED Panel", to: "/products/rgb-48v-non-pixel-led-panel", image: pixelLedPanelImages.rgb48vNonPixel },
    { slug: "rgb-48v-pixel-led-panel", label: "48V RGB Pixel LED Panel", to: "/products/rgb-48v-pixel-led-panel", image: pixelLedPanelImages.rgb48vPixel },

    { slug: "rgbw-24v-non-pixel-led-panel", label: "24V RGBW Non Pixel LED Panel", to: "/products/rgbw-24v-non-pixel-led-panel", image: pixelLedPanelImages.rgbw24vNonPixel },
    { slug: "rgbw-24v-pixel-led-panel", label: "24V RGBW Pixel LED Panel", to: "/products/rgbw-24v-pixel-led-panel", image: pixelLedPanelImages.rgbw24vPixel },
    { slug: "rgbw-48v-non-pixel-led-panel", label: "48V RGBW Non Pixel LED Panel", to: "/products/rgbw-48v-non-pixel-led-panel", image: pixelLedPanelImages.rgbw48vNonPixel },
    { slug: "rgbw-48v-pixel-led-panel", label: "48V RGBW Pixel LED Panel", to: "/products/rgbw-48v-pixel-led-panel", image: pixelLedPanelImages.rgbw48vPixel },

    { slug: "rgbww-24v-non-pixel-led-panel", label: "24V RGBWW Non Pixel LED Panel", to: "/products/rgbww-24v-non-pixel-led-panel", image: pixelLedPanelImages.rgbww24vNonPixel },
    { slug: "rgbww-24v-pixel-led-panel", label: "24V RGBWW Pixel LED Panel", to: "/products/rgbww-24v-pixel-led-panel", image: pixelLedPanelImages.rgbww24vPixel },
    { slug: "rgbww-48v-non-pixel-led-panel", label: "48V RGBWW Non Pixel LED Panel", to: "/products/rgbww-48v-non-pixel-led-panel", image: pixelLedPanelImages.rgbww48vNonPixel },
    { slug: "rgbww-48v-pixel-led-panel", label: "48V RGBWW Pixel LED Panel", to: "/products/rgbww-48v-pixel-led-panel", image: pixelLedPanelImages.rgbww48vPixel },
  ],
},
  {
  slug: "pixel-dot-lights",
  title: "Pixel Dot Lights",
  image: pixelDotLightsImages.rgbww24vPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Point-source pixel fixtures for signage, facades, contours, and animated lighting installations.",

  sidebarItems: [
    { slug: "ww-24v-non-pixel-dot-lights", label: "24V Non-Pixel Dot Light – Warm White", to: "/products/ww-24v-non-pixel-dot-lights", image: pixelDotLightsImages.ww24vNonPixel },
    { slug: "ww-24v-pixel-dot-lights", label: "24V Pixel Dot Light – Warm White", to: "/products/ww-24v-pixel-dot-lights", image: pixelDotLightsImages.ww24vPixel },
    { slug: "ww-48v-non-pixel-dot-lights", label: "48V Non-Pixel Dot Light – Warm White", to: "/products/ww-48v-non-pixel-dot-lights", image: pixelDotLightsImages.ww48vNonPixel },
    { slug: "ww-48v-pixel-dot-lights", label: "48V Pixel Dot Light – Warm White", to: "/products/ww-48v-pixel-dot-lights", image: pixelDotLightsImages.ww48vPixel },

    { slug: "rgb-24v-non-pixel-dot-lights", label: "24V Non-Pixel Dot Light – RGB", to: "/products/rgb-24v-non-pixel-dot-lights", image: pixelDotLightsImages.rgb24vNonPixel },
    { slug: "rgb-24v-pixel-dot-lights", label: "24V Pixel RGB Dot Light", to: "/products/rgb-24v-pixel-dot-lights", image: pixelDotLightsImages.rgb24vPixel },
    { slug: "rgb-48v-non-pixel-dot-lights", label: "48V Non-Pixel RGB Dot Light", to: "/products/rgb-48v-non-pixel-dot-lights", image: pixelDotLightsImages.rgb48vNonPixel },
    { slug: "rgb-48v-pixel-dot-lights", label: "48V Pixel RGB Dot Light", to: "/products/rgb-48v-pixel-dot-lights", image: pixelDotLightsImages.rgb48vPixel },

    { slug: "rgbw-24v-non-pixel-dot-lights", label: "24V Non-Pixel RGBW Dot Light", to: "/products/rgbw-24v-non-pixel-dot-lights", image: pixelDotLightsImages.rgbw24vNonPixel },
    { slug: "rgbw-24v-pixel-dot-lights", label: "24V Pixel RGBW Dot Light", to: "/products/rgbw-24v-pixel-dot-lights", image: pixelDotLightsImages.rgbw24vPixel },
    { slug: "rgbw-48v-non-pixel-dot-lights", label: "48V Non-Pixel RGBW Dot Light", to: "/products/rgbw-48v-non-pixel-dot-lights", image: pixelDotLightsImages.rgbw48vNonPixel },
    { slug: "rgbw-48v-pixel-dot-lights", label: "48V Pixel RGBW Dot Light", to: "/products/rgbw-48v-pixel-dot-lights", image: pixelDotLightsImages.rgbw48vPixel },

    { slug: "rgbww-24v-non-pixel-dot-lights", label: "24V Non-Pixel RGBWW Dot Light", to: "/products/rgbww-24v-non-pixel-dot-lights", image: pixelDotLightsImages.rgbww24vNonPixel },
    { slug: "rgbww-24v-pixel-dot-lights", label: "24V Pixel RGBWW Dot Light", to: "/products/rgbww-24v-pixel-dot-lights", image: pixelDotLightsImages.rgbww24vPixel },
    { slug: "rgbww-48v-non-pixel-dot-lights", label: "48V Non-Pixel RGBWW Dot Light", to: "/products/rgbww-48v-non-pixel-dot-lights", image: pixelDotLightsImages.rgbww48vNonPixel },
    { slug: "rgbww-48v-pixel-dot-lights", label: "48V Pixel RGBWW Dot Light", to: "/products/rgbww-48v-pixel-dot-lights", image: pixelDotLightsImages.rgbww48vPixel },
  ],
},
 {
  slug: "wall-washers-lights",
  title: "Wall Washers Lights",
  image: wallWashersImages.rgbw24vPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Wall washer families for uniform facade illumination, grazing, and architectural emphasis.",
  sidebarItems: [
    { slug: "ww-24v-non-pixel-wall-washer-lights", label: "24V Warm White – Non-Pixel Wall Washer", to: "/products/ww-24v-non-pixel-wall-washer-lights", image: wallWashersImages.ww24vNonPixel },
    { slug: "ww-24v-pixel-wall-washer-lights", label: "24V Warm White – Pixel Wall Washer", to: "/products/ww-24v-pixel-wall-washer-lights", image: wallWashersImages.ww24vPixel },
    { slug: "ww-48v-non-pixel-wall-washer-lights", label: "48V Warm White – Non-Pixel Wall Washer", to: "/products/ww-48v-non-pixel-wall-washer-lights", image: wallWashersImages.ww48vNonPixel },
    { slug: "ww-48v-pixel-wall-washer-lights", label: "48V Warm White – Pixel Wall Washer", to: "/products/ww-48v-pixel-wall-washer-lights", image: wallWashersImages.ww48vPixel },

    { slug: "rgb-24v-non-pixel-wall-washer-lights", label: "24V RGB – Non-Pixel Wall Washer", to: "/products/rgb-24v-non-pixel-wall-washer-lights", image: wallWashersImages.rgb24vNonPixel },
    { slug: "rgb-24v-pixel-wall-washer-lights", label: "24V RGB – Pixel Wall Washer", to: "/products/rgb-24v-pixel-wall-washer-lights", image: wallWashersImages.rgb24vPixel },
    { slug: "rgb-48v-non-pixel-wall-washer-lights", label: "48V RGB – Non-Pixel Wall Washer", to: "/products/rgb-48v-non-pixel-wall-washer-lights", image: wallWashersImages.rgb48vNonPixel },
    { slug: "rgb-48v-pixel-wall-washer-lights", label: "48V RGB – Pixel Wall Washer", to: "/products/rgb-48v-pixel-wall-washer-lights", image: wallWashersImages.rgb48vPixel },

    { slug: "rgbw-24v-non-pixel-wall-washer-lights", label: "24V RGBW – Non-Pixel Wall Washer", to: "/products/rgbw-24v-non-pixel-wall-washer-lights", image: wallWashersImages.rgbw24vNonPixel },
    { slug: "rgbw-24v-pixel-wall-washer-lights", label: "24V RGBW – Pixel Wall Washer", to: "/products/rgbw-24v-pixel-wall-washer-lights", image: wallWashersImages.rgbw24vPixel },
    { slug: "rgbw-48v-non-pixel-wallwasher", label: "48V RGBW – Non-Pixel Wall Washer", to: "/products/rgbw-48v-non-pixel-wallwasher", image: wallWashersImages.rgbw48vNonPixel },
    { slug: "rgbw-48v-pixel-wallwasher", label: "48V RGBW – Pixel Wall Washer", to: "/products/rgbw-48v-pixel-wallwasher", image: wallWashersImages.rgbw48vPixel },

    { slug: "rgbww-24v-non-pixel-wallwasher", label: "24V RGBWW – Non-Pixel Wall Washer", to: "/products/rgbww-24v-non-pixel-wallwasher", image: wallWashersImages.rgbww24vNonPixel },
    { slug: "rgbww-24v-pixel-wallwasher", label: "24V RGBWW – Pixel Wall Washer", to: "/products/rgbww-24v-pixel-wallwasher", image: wallWashersImages.rgbww24vPixel },
    { slug: "rgbww-48v-non-pixel-wallwasher", label: "48V RGBWW – Non-Pixel Wall Washer", to: "/products/rgbww-48v-non-pixel-wallwasher", image: wallWashersImages.rgbww48vNonPixel },
    { slug: "rgbww-48v-pixel-wallwasher", label: "48V RGBWW – Pixel Wall Washer", to: "/products/rgbww-48v-pixel-wallwasher", image: wallWashersImages.rgbww48vPixel },
  ],
},
  {
  slug: "pillar-highlighters",
  title: "Pillar Highlighters",
  image: pillarHighlightersImages.rgbw24_48vPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Pillar and spike highlight fixtures for columns, landscapes, entryways, and vertical features.",

  sidebarItems: [
    { slug: "ww-24-48v-non-pixel-piller-highlighters", label: "WW – Non-Pixel – 24/48V DC Pillar Highlighter", to: "/products/ww-24-48v-non-pixel-piller-highlighters", image: pillarHighlightersImages.ww24_48vNonPixel },
    { slug: "ww-24-48v-pixel-piller-highlighters", label: "WW – Pixel – 24/48V DC Pillar Highlighter", to: "/products/ww-24-48v-pixel-piller-highlighters", image: pillarHighlightersImages.ww24_48vPixel },
    { slug: "ww-220v-non-pixel-piller-highlighters", label: "WW – Non-Pixel – 220V AC Pillar Highlighter", to: "/products/ww-220v-non-pixel-piller-highlighters", image: pillarHighlightersImages.ww220vNonPixel },
    { slug: "ww-220v-pixel-piller-highlighters", label: "WW – Pixel – 220V AC Pillar Highlighter", to: "/products/ww-220v-pixel-piller-highlighters", image: pillarHighlightersImages.ww220vPixel },

    { slug: "rgb-24-48v-non-pixel-piller-highlighters", label: "RGB – Non-Pixel – 24/48V DC Pillar Highlighter", to: "/products/rgb-24-48v-non-pixel-piller-highlighters", image: pillarHighlightersImages.rgb24_48vNonPixel },
    { slug: "rgb-24-48v-pixel-piller-highlighters", label: "RGB – Pixel – 24/48V DC Pillar Highlighter", to: "/products/rgb-24-48v-pixel-piller-highlighters", image: pillarHighlightersImages.rgb24_48vPixel },
    { slug: "rgb-220v-non-pixel-piller-highlighters", label: "RGB – Non-Pixel – 220V AC Pillar Highlighter", to: "/products/rgb-220v-non-pixel-piller-highlighters", image: pillarHighlightersImages.rgb220vNonPixel },
    { slug: "rgb-220v-pixel-piller-highlighters", label: "RGB – Pixel – 220V AC Pillar Highlighter", to: "/products/rgb-220v-pixel-piller-highlighters", image: pillarHighlightersImages.rgb220vPixel },

    { slug: "rgbw-24-48v-non-pixel-piller-highlighters", label: "RGBW – Non-Pixel – 24/48V DC Pillar Highlighter", to: "/products/rgbw-24-48v-non-pixel-piller-highlighters", image: pillarHighlightersImages.rgbw24_48vNonPixel },
    { slug: "rgbw-24-48v-pixel-piller-highlighters", label: "RGBW – Pixel – 24/48V DC Pillar Highlighter", to: "/products/rgbw-24-48v-pixel-piller-highlighters", image: pillarHighlightersImages.rgbw24_48vPixel },
    { slug: "rgbw-220v-non-pixel-piller-highlighters", label: "RGBW – Non-Pixel – 220V AC Pillar Highlighter", to: "/products/rgbw-220v-non-pixel-piller-highlighters", image: pillarHighlightersImages.rgbw220vNonPixel },
    { slug: "rgbw-220v-pixel-piller-highlighters", label: "RGBW – Pixel – 220V AC Pillar Highlighter", to: "/products/rgbw-220v-pixel-piller-highlighters", image: pillarHighlightersImages.rgbw220vPixel },

    { slug: "rgbww-24-48v-non-pixel-piller-highlighters", label: "RGBWW – Non-Pixel – 24/48V DC Pillar Highlighter", to: "/products/rgbww-24-48v-non-pixel-piller-highlighters", image: pillarHighlightersImages.rgbww24_48vNonPixel },
    { slug: "rgbww-24-48v-pixel-piller-highlighters", label: "RGBWW – Pixel – 24/48V DC Pillar Highlighter", to: "/products/rgbww-24-48v-pixel-piller-highlighters", image: pillarHighlightersImages.rgbww24_48vPixel },
    { slug: "rgbww-220v-non-pixel-piller-highlighters", label: "RGBWW – Non-Pixel – 220V AC Pillar Highlighter", to: "/products/rgbww-220v-non-pixel-piller-highlighters", image: pillarHighlightersImages.rgbww220vNonPixel },
    { slug: "rgbww-220v-pixel-piller-highlighters", label: "RGBWW – Pixel – 220V AC Pillar Highlighter", to: "/products/rgbww-220v-pixel-piller-highlighters", image: pillarHighlightersImages.rgbww220vPixel },
  ],
},
 {
  slug: "fan-projection-lights",
  title: "Fan Projection Lights",
  image: fanProjectionImages.fanProjection1,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "3D hologram fan products for promotional displays, event visuals, and high-impact brand moments.",
  sidebarItems: [
    {
      slug: "fan-projection-1",
      label: "3D Fan Projection Light",
      to: "/products/fan-projection-1",
      image: fanProjectionImages.fanProjection1,
    },
    {
      slug: "fan-projection-2",
      label: "3D Hologram Fan Projection Light",
      to: "/products/fan-projection-2",
      image: fanProjectionImages.fanProjection2,
    },
  ],
},
  {
  slug: "wall-window-lights",
  title: "Wall Window Lights",
  image: wallWindowImages.rgbw24vPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Facade window lighting products for building outlines, window frames, and synchronized exterior effects.",

  sidebarItems: [
    { slug: "ww-24v-non-pixel-wall-window-lights", label: "24V Non-Pixel Warm White Wall Window Light", to: "/products/ww-24v-non-pixel-wall-window-lights", image: wallWindowImages.ww24vNonPixel },
    { slug: "ww-24v-pixel-wall-window-lights", label: "24V Pixel Warm White Wall Window Light", to: "/products/ww-24v-pixel-wall-window-lights", image: wallWindowImages.ww24vPixel },
    { slug: "ww-48v-non-pixel-wall-window-lights", label: "48V Non-Pixel Warm White Wall Window Light", to: "/products/ww-48v-non-pixel-wall-window-lights", image: wallWindowImages.ww48vNonPixel },
    { slug: "ww-48v-pixel-wall-window-lights", label: "48V Pixel Warm White Wall Window Light", to: "/products/ww-48v-pixel-wall-window-lights", image: wallWindowImages.ww48vPixel },

    { slug: "rgb-24v-non-pixel-wall-window-lights", label: "24V Non-Pixel RGB Wall Window Light", to: "/products/rgb-24v-non-pixel-wall-window-lights", image: wallWindowImages.rgb24vNonPixel },
    { slug: "rgb-24v-pixel-wall-window-lights", label: "24V Pixel RGB Wall Window Light", to: "/products/rgb-24v-pixel-wall-window-lights", image: wallWindowImages.rgb24vPixel },
    { slug: "rgb-48v-non-pixel-wall-window-lights", label: "48V Non-Pixel RGB Wall Window Light", to: "/products/rgb-48v-non-pixel-wall-window-lights", image: wallWindowImages.rgb48vNonPixel },
    { slug: "rgb-48v-pixel-wall-window-lights", label: "48V Pixel RGB Wall Window Light", to: "/products/rgb-48v-pixel-wall-window-lights", image: wallWindowImages.rgb48vPixel },

    { slug: "rgbw-24v-non-pixel-wall-window-lights", label: "24V Non-Pixel RGBW Wall Window Light", to: "/products/rgbw-24v-non-pixel-wall-window-lights", image: wallWindowImages.rgbw24vNonPixel },
    { slug: "rgbw-24v-pixel-wall-window-lights", label: "24V Pixel RGBW Wall Window Light", to: "/products/rgbw-24v-pixel-wall-window-lights", image: wallWindowImages.rgbw24vPixel },
    { slug: "rgbw-48v-non-pixel-wall-window-lights", label: "48V Non-Pixel RGBW Wall Window Light", to: "/products/rgbw-48v-non-pixel-wall-window-lights", image: wallWindowImages.rgbw48vNonPixel },
    { slug: "rgbw-48v-pixel-wall-window-lights", label: "48V Pixel RGBW Wall Window Light", to: "/products/rgbw-48v-pixel-wall-window-lights", image: wallWindowImages.rgbw48vPixel },

    { slug: "rgbww-24v-non-pixel-wall-window-lights", label: "24V Non-Pixel RGBWW Wall Window Light", to: "/products/rgbww-24v-non-pixel-wall-window-lights", image: wallWindowImages.rgbww24vNonPixel },
    { slug: "rgbww-24v-pixel-wall-window-lights", label: "24V Pixel RGBWW Wall Window Light", to: "/products/rgbww-24v-pixel-wall-window-lights", image: wallWindowImages.rgbww24vPixel },
    { slug: "rgbww-48v-non-pixel-wall-window-lights", label: "48V Non-Pixel RGBWW Wall Window Light", to: "/products/rgbww-48v-non-pixel-wall-window-lights", image: wallWindowImages.rgbww48vNonPixel },
    { slug: "rgbww-48v-pixel-wall-window-lights", label: "48V Pixel RGBWW Wall Window Light", to: "/products/rgbww-48v-pixel-wall-window-lights", image: wallWindowImages.rgbww48vPixel },
  ],
},
  {
  slug: "gobo-lights",
  title: "Gobo Lights",
  image: goboImages.gobo1,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Projection and gobo products for logos, patterns, themed visuals, and event environments.",

  sidebarItems: [
    {
      slug: "Gobo-Lights-1",
      label: "Gobo Lights 1",
      to: "/products/Gobo-Lights-1",
      image: goboImages.gobo1,
    },
    {
      slug: "Gobo-Lights-2",
      label: "Gobo Lights 2",
      to: "/products/Gobo-Lights-2",
      image: goboImages.gobo2,
    },
    {
      slug: "Gobo-Lights-3",
      label: "Gobo Lights 3",
      to: "/products/Gobo-Lights-3",
      image: goboImages.gobo3,
    },
    {
      slug: "Gobo-Lights-4",
      label: "Gobo Lights 4",
      to: "/products/Gobo-Lights-4",
      image: goboImages.gobo4,
    },
  ],
},
  {
  slug: "pool-lights",
  title: "Pool Lights",
  image: poolLightsImages.ww220vNonPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Pool-rated fixtures for underwater illumination, leisure spaces, and architectural water features.",
  sidebarItems: [
    { slug: "ww-24-48v-non-pixel-pool-lights", label: "WW – Non-Pixel – 24/48V DC Pool Light", to: "/products/ww-24-48v-non-pixel-pool-lights", image: poolLightsImages.ww24_48vNonPixel },
    { slug: "ww-24-48v-pixel-pool-lights", label: "WW – Pixel – 24/48V DC Pool Light", to: "/products/ww-24-48v-pixel-pool-lights", image: poolLightsImages.ww24_48vPixel },
    { slug: "ww-220v-non-pixel-pool-lights", label: "WW – Non-Pixel – 220V AC Pool Light", to: "/products/ww-220v-non-pixel-pool-lights", image: poolLightsImages.ww220vNonPixel },
    { slug: "ww-220v-pixel-pool-lights", label: "WW – Pixel – 220V AC Pool Light", to: "/products/ww-220v-pixel-pool-lights", image: poolLightsImages.ww220vPixel },

    { slug: "rgb-24-48v-non-pixel-pool-lights", label: "RGB – Non-Pixel – 24/48V DC Pool Light", to: "/products/rgb-24-48v-non-pixel-pool-lights", image: poolLightsImages.rgb24_48vNonPixel },
    { slug: "rgb-24-48v-pixel-pool-lights", label: "RGB – Pixel – 24/48V DC Pool Light", to: "/products/rgb-24-48v-pixel-pool-lights", image: poolLightsImages.rgb24_48vPixel },
    { slug: "rgb-220v-non-pixel-pool-lights", label: "RGB – Non-Pixel – 220V AC Pool Light", to: "/products/rgb-220v-non-pixel-pool-lights", image: poolLightsImages.rgb220vNonPixel },
    { slug: "rgb-220v-pixel-pool-lights", label: "RGB – Pixel – 220V AC Pool Light", to: "/products/rgb-220v-pixel-pool-lights", image: poolLightsImages.rgb220vPixel },

    { slug: "rgbw-24-48v-non-pixel-pool-lights", label: "RGBW – Non-Pixel – 24/48V DC Pool Light", to: "/products/rgbw-24-48v-non-pixel-pool-lights", image: poolLightsImages.rgbw24_48vNonPixel },
    { slug: "rgbw-24-48v-pixel-pool-lights", label: "RGBW – Pixel – 24/48V DC Pool Light", to: "/products/rgbw-24-48v-pixel-pool-lights", image: poolLightsImages.rgbw24_48vPixel },
    { slug: "rgbw-220v-non-pixel-poollights", label: "RGBW – Non-Pixel – 220V AC Pool Light", to: "/products/rgbw-220v-non-pixel-poollights", image: poolLightsImages.rgbw220vNonPixel },
    { slug: "rgbw-220v-pixel-poollights", label: "RGBW – Pixel – 220V AC Pool Light", to: "/products/rgbw-220v-pixel-poollights", image: poolLightsImages.rgbw220vPixel },

    { slug: "rgbww-24-48v-non-pixel-poollights", label: "RGBWW – Non-Pixel – 24/48V DC Pool Light", to: "/products/rgbww-24-48v-non-pixel-poollights", image: poolLightsImages.rgbww24_48vNonPixel },
    { slug: "rgbww-24-48v-pixel-poollights", label: "RGBWW – Pixel – 24/48V DC Pool Light", to: "/products/rgbww-24-48v-pixel-poollights", image: poolLightsImages.rgbww24_48vPixel },
    { slug: "rgbww-220v-non-pixel-poollights", label: "RGBWW – Non-Pixel – 220V AC Pool Light", to: "/products/rgbww-220v-non-pixel-poollights", image: poolLightsImages.rgbww220vNonPixel },
    { slug: "rgbww-220v-pixel-poollights", label: "RGBWW – Pixel – 220V AC Pool Light", to: "/products/rgbww-220v-pixel-poollights", image: poolLightsImages.rgbww220vPixel },
  ],
},
 {
  slug: "fountain-lights",
  title: "Fountain Lights",
  image: fountainLightsImages.ww220vNonPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Fountain lighting products for water jets, pools, public plazas, and synchronized show effects.",

  sidebarItems: [
    { slug: "ww-24-48v-non-pixel-fountain-lights", label: "WW – Non-Pixel – 24/48V DC Fountain Light", to: "/products/ww-24-48v-non-pixel-fountain-lights", image: fountainLightsImages.ww24_48vNonPixel },
    { slug: "ww-24-48v-pixel-fountain-lights", label: "WW – Pixel – 24/48V DC Fountain Light", to: "/products/ww-24-48v-pixel-fountain-lights", image: fountainLightsImages.ww24_48vPixel },
    { slug: "ww-220v-non-pixel-fountain-lights", label: "WW – Non-Pixel – 220V AC Fountain Light", to: "/products/ww-220v-non-pixel-fountain-lights", image: fountainLightsImages.ww220vNonPixel },
    { slug: "ww-220v-pixel-fountain-lights", label: "WW – Pixel – 220V AC Fountain Light", to: "/products/ww-220v-pixel-fountain-lights", image: fountainLightsImages.ww220vPixel },

    { slug: "rgb-24-48v-non-pixel-fountain-lights", label: "RGB – Non-Pixel – 24/48V DC Fountain Light", to: "/products/rgb-24-48v-non-pixel-fountain-lights", image: fountainLightsImages.rgb24_48vNonPixel },
    { slug: "rgb-24-48v-pixel-fountain-lights", label: "RGB – Pixel – 24/48V DC Fountain Light", to: "/products/rgb-24-48v-pixel-fountain-lights", image: fountainLightsImages.rgb24_48vPixel },
    { slug: "rgb-220v-non-pixel-fountain-lights", label: "RGB – Non-Pixel – 220V AC Fountain Light", to: "/products/rgb-220v-non-pixel-fountain-lights", image: fountainLightsImages.rgb220vNonPixel },
    { slug: "rgb-220v-pixel-fountain-lights", label: "RGB – Pixel – 220V AC Fountain Light", to: "/products/rgb-220v-pixel-fountain-lights", image: fountainLightsImages.rgb220vPixel },

    { slug: "rgbw-24-48v-non-pixel-fountain-lights", label: "RGBW – Non-Pixel – 24/48V DC Fountain Light", to: "/products/rgbw-24-48v-non-pixel-fountain-lights", image: fountainLightsImages.rgbw24_48vNonPixel },
    { slug: "rgbw-24-48v-pixel-fountain-lights", label: "RGBW – Pixel – 24/48V DC Fountain Light", to: "/products/rgbw-24-48v-pixel-fountain-lights", image: fountainLightsImages.rgbw24_48vPixel },
    { slug: "rgbw-220v-non-pixel-fountain-lights", label: "RGBW – Non-Pixel – 220V AC Fountain Light", to: "/products/rgbw-220v-non-pixel-fountain-lights", image: fountainLightsImages.rgbw220vNonPixel },
    { slug: "rgbw-220v-pixel-fountain-lights", label: "RGBW – Pixel – 220V AC Fountain Light", to: "/products/rgbw-220v-pixel-fountain-lights", image: fountainLightsImages.rgbw220vPixel },

    { slug: "rgbww-24-48v-non-pixel-fountain-lights", label: "RGBWW – Non-Pixel – 24/48V DC Fountain Light", to: "/products/rgbww-24-48v-non-pixel-fountain-lights", image: fountainLightsImages.rgbww24_48vNonPixel },
    { slug: "rgbww-24-48v-pixel-fountain-lights", label: "RGBWW – Pixel – 24/48V DC Fountain Light", to: "/products/rgbww-24-48v-pixel-fountain-lights", image: fountainLightsImages.rgbww24_48vPixel },
    { slug: "rgbww-220v-non-pixel-fountain-lights", label: "RGBWW – Non-Pixel – 220V AC Fountain Light", to: "/products/rgbww-220v-non-pixel-fountain-lights", image: fountainLightsImages.rgbww220vNonPixel },
    { slug: "rgbww-220v-pixel-fountain-lights", label: "RGBWW – Pixel – 220V AC Fountain Light", to: "/products/rgbww-220v-pixel-fountain-lights", image: fountainLightsImages.rgbww220vPixel },
  ],
},
  {
  slug: "recessed-ground-lights",
  title: "Recessed Ground Lights",
  image: groundLightsImages.rgbw24_48vPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Ground recessed fixtures for pathways, facades, landscape accents, and durable outdoor uplighting.",
  sidebarItems: [
    { slug: "ww-24-48v-non-pixel-ground-lights", label: "WW – Non-Pixel – 24/48V DC Ground Light", to: "/products/ww-24-48v-non-pixel-ground-lights", image: groundLightsImages.ww24_48vNonPixel },
    { slug: "ww-24-48v-pixel-ground-lights", label: "WW – Pixel – 24/48V DC Ground Light", to: "/products/ww-24-48v-pixel-ground-lights", image: groundLightsImages.ww24_48vPixel },
    { slug: "ww-220v-non-pixel-ground-lights", label: "WW – Non-Pixel – 220V AC Ground Light", to: "/products/ww-220v-non-pixel-ground-lights", image: groundLightsImages.ww220vNonPixel },
    { slug: "ww-220v-pixel-ground-lights", label: "WW – Pixel – 220V AC Ground Light", to: "/products/ww-220v-pixel-ground-lights", image: groundLightsImages.ww220vPixel },

    { slug: "rgb-24-48v-non-pixel-ground-lights", label: "RGB – Non-Pixel – 24/48V DC Ground Light", to: "/products/rgb-24-48v-non-pixel-ground-lights", image: groundLightsImages.rgb24_48vNonPixel },
    { slug: "rgb-24-48v-pixel-ground-lights", label: "RGB – Pixel – 24/48V DC Ground Light", to: "/products/rgb-24-48v-pixel-ground-lights", image: groundLightsImages.rgb24_48vPixel },
    { slug: "rgb-220v-non-pixel-ground-lights", label: "RGB – Non-Pixel – 220V AC Ground Light", to: "/products/rgb-220v-non-pixel-ground-lights", image: groundLightsImages.rgb220vNonPixel },
    { slug: "rgb-220v-pixel-ground-lights", label: "RGB – Pixel – 220V AC Ground Light", to: "/products/rgb-220v-pixel-ground-lights", image: groundLightsImages.rgb220vPixel },

    { slug: "rgbw-24-48v-non-pixel-ground-lights", label: "RGBW – Non-Pixel – 24/48V DC Ground Light", to: "/products/rgbw-24-48v-non-pixel-ground-lights", image: groundLightsImages.rgbw24_48vNonPixel },
    { slug: "rgbw-24-48v-pixel-ground-lights", label: "RGBW – Pixel – 24/48V DC Ground Light", to: "/products/rgbw-24-48v-pixel-ground-lights", image: groundLightsImages.rgbw24_48vPixel },
    { slug: "rgbw-220v-non-pixel-ground-light", label: "RGBW – Non-Pixel – 220V AC Ground Light", to: "/products/rgbw-220v-non-pixel-ground-light", image: groundLightsImages.rgbw220vNonPixel },
    { slug: "rgbw-220v-pixel-ground-light", label: "RGBW – Pixel – 220V AC Ground Light", to: "/products/rgbw-220v-pixel-ground-light", image: groundLightsImages.rgbw220vPixel },

    { slug: "rgbww-24-48v-non-pixel-ground-light", label: "RGBWW – Non-Pixel – 24/48V DC Ground Light", to: "/products/rgbww-24-48v-non-pixel-ground-light", image: groundLightsImages.rgbww24_48vNonPixel },
    { slug: "rgbww-24-48v-pixel-ground-light", label: "RGBWW – Pixel – 24/48V DC Ground Light", to: "/products/rgbww-24-48v-pixel-ground-light", image: groundLightsImages.rgbww24_48vPixel },
    { slug: "rgbww-220v-non-pixel-ground-light", label: "RGBWW – Non-Pixel – 220V AC Ground Light", to: "/products/rgbww-220v-non-pixel-ground-light", image: groundLightsImages.rgbww220vNonPixel },
    { slug: "rgbww-220v-pixel-ground-light", label: "RGBWW – Pixel – 220V AC Ground Light", to: "/products/rgbww-220v-pixel-ground-light", image: groundLightsImages.rgbww220vPixel },
  ],
},
  {
  slug: "tree-highlighters",
  title: "Tree Highlighters",
  image: treeHighlighterImages.tree1,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Outdoor tree highlighting fixtures for landscape lighting, gardens, and architectural greenery accents.",

  sidebarItems: [
    {
      slug: "Tree-Highlighters_Specifi",
      label: "Tree Highlighters",
      to: "/products/Tree-Highlighters_Specifi",
      image: treeHighlighterImages.tree1,
    },
    {
      slug: "Tree-Highlighter-Lights-1_Specifi",
      label: "Tree Highlighter Lights 1",
      to: "/products/Tree-Highlighter-Lights-1_Specifi",
      image: treeHighlighterImages.tree2,
    },
    {
      slug: "Tree-Highlighter-Lights-2_Specifi",
      label: "Tree Highlighter Lights 2",
      to: "/products/Tree-Highlighter-Lights-2_Specifi",
      image: treeHighlighterImages.tree3,
    },
    {
      slug: "Tree-Highlighter-Lights-3_Specifi",
      label: "Tree Highlighter Lights 3",
      to: "/products/Tree-Highlighter-Lights-3_Specifi",
      image: treeHighlighterImages.tree4,
    },
  ],
},
  {
  slug: "flood-lights",
  title: "Flood Lights",
  image: floodLightsImages.rgb24_48vNonPixel,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Flood lighting products for broad-area illumination, architectural facades, and outdoor project lighting.",
  sidebarItems: [
    { slug: "ww-24-48v-non-pixel-flood-lights", label: "WW – Non-Pixel – 24/48V DC Flood Light", to: "/products/ww-24-48v-non-pixel-flood-lights", image: floodLightsImages.ww24_48vNonPixel },
    { slug: "ww-24-48v-pixel-flood-lights", label: "WW – Pixel – 24/48V DC Flood Light", to: "/products/ww-24-48v-pixel-flood-lights", image: floodLightsImages.ww24_48vPixel },
    { slug: "ww-220v-non-pixel-flood-lights", label: "WW – Non-Pixel – 220V AC Flood Light", to: "/products/ww-220v-non-pixel-flood-lights", image: floodLightsImages.ww220vNonPixel },
    { slug: "ww-220v-pixel-flood-lights", label: "WW – Pixel – 220V AC Flood Light", to: "/products/ww-220v-pixel-flood-lights", image: floodLightsImages.ww220vPixel },

    { slug: "rgb-24-48v-non-pixel-flood-lights", label: "RGB – Non-Pixel – 24/48V DC Flood Light", to: "/products/rgb-24-48v-non-pixel-flood-lights", image: floodLightsImages.rgb24_48vNonPixel },
    { slug: "rgb-24-48v-pixel-flood-lights", label: "RGB – Pixel – 24/48V DC Flood Light", to: "/products/rgb-24-48v-pixel-flood-lights", image: floodLightsImages.rgb24_48vPixel },
    { slug: "rgb-220v-non-pixel-flood-lights", label: "RGB – Non-Pixel – 220V AC Flood Light", to: "/products/rgb-220v-non-pixel-flood-lights", image: floodLightsImages.rgb220vNonPixel },
    { slug: "rgb-220v-pixel-flood-lights", label: "RGB – Pixel – 220V AC Flood Light", to: "/products/rgb-220v-pixel-flood-lights", image: floodLightsImages.rgb220vPixel },

    { slug: "rgbw-24-48v-non-pixel-flood-lights", label: "RGBW – Non-Pixel – 24/48V DC Flood Light", to: "/products/rgbw-24-48v-non-pixel-flood-lights", image: floodLightsImages.rgbw24_48vNonPixel },
    { slug: "rgbw-24-48v-pixel-flood-lights", label: "RGBW – Pixel – 24/48V DC Flood Light", to: "/products/rgbw-24-48v-pixel-flood-lights", image: floodLightsImages.rgbw24_48vPixel },
    { slug: "rgbw-220v-non-pixel-Flood-Lights", label: "RGBW – Non-Pixel – 220V AC Flood Light", to: "/products/rgbw-220v-non-pixel-Flood-Lights", image: floodLightsImages.rgbw220vNonPixel },
    { slug: "rgbw-220v-pixel-Flood-Lights", label: "RGBW – Pixel – 220V AC Flood Light", to: "/products/rgbw-220v-pixel-Flood-Lights", image: floodLightsImages.rgbw220vPixel },

    { slug: "rgbww-24-48v-non-pixel-Flood-Lights", label: "RGBWW – Non-Pixel – 24/48V DC Flood Light", to: "/products/rgbww-24-48v-non-pixel-Flood-Lights", image: floodLightsImages.rgbww24_48vNonPixel },
    { slug: "rgbww-24-48v-pixel-Flood-Lights", label: "RGBWW – Pixel – 24/48V DC Flood Light", to: "/products/rgbww-24-48v-pixel-Flood-Lights", image: floodLightsImages.rgbww24_48vPixel },
    { slug: "rgbww-220v-non-pixel-Flood-Lights", label: "RGBWW – Non-Pixel – 220V AC Flood Light", to: "/products/rgbww-220v-non-pixel-Flood-Lights", image: floodLightsImages.rgbww220vNonPixel },
    { slug: "rgbww-220v-pixel-Flood-Lights", label: "RGBWW – Pixel – 220V AC Flood Light", to: "/products/rgbww-220v-pixel-Flood-Lights", image: floodLightsImages.rgbww220vPixel },
  ],
},
 {
  slug: "drivers-and-controllers",
  title: "Drivers & Controllers",
  image: dmxControllerImages.dmx1,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "DMX controllers and driver solutions for managing lighting systems, pixel control, and synchronized installations.",

  sidebarItems: [
    {
      slug: "DMX-Controllers_Specifi-1",
      label: "DMX Controllers",
      to: "/products/DMX-Controllers_Specifi-1",
      image: dmxControllerImages.dmx1,
    },
    {
      slug: "DMX-Controllers_Specifi-2",
      label: "DMX Controllers",
      to: "/products/DMX-Controllers_Specifi-2",
      image: dmxControllerImages.dmx2,
    },
    {
      slug: "DMX-Controllers_Specifi-3",
      label: "DMX Controllers",
      to: "/products/DMX-Controllers_Specifi-3",
      image: dmxControllerImages.dmx3,
    },
  ],
},
 {
  slug: "drivers",
  title: "Drivers",
  image: driverImages.driver1,
  legacySource: "product.html",
  migrationStatus: "complete",
  description:
    "Driver solutions for powering and controlling architectural, decorative, and pixel lighting systems.",
  sidebarItems: [
    {
      slug: "Drivers-1_Specifi",
      label: "Drivers 1",
      to: "/products/Drivers-1_Specifi",
      image: driverImages.driver1,
    },
    {
      slug: "Drivers-2_Specifi",
      label: "Drivers 2",
      to: "/products/Drivers-2_Specifi",
      image: driverImages.driver2,
    },
  ],
},
];

export const productCategoryMap = createLookupMap(productCategories);

export default productCategories;