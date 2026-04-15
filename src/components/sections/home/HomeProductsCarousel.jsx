import { useEffect, useState } from "react";
import floodOff from "../../../assets/images/Final-Products/Product spec imgs/flood_off0.webp";
import floodOn from "../../../assets/images/Final-Products/Product spec imgs/flood_on.webp";
import fountainOff from "../../../assets/images/Final-Products/Product spec imgs/fountain off.webp";
import fountainOn from "../../../assets/images/Final-Products/Product spec imgs/fountain on.webp";
import groundOff from "../../../assets/images/Final-Products/Product spec imgs/ground_light_off.webp";
import groundOn from "../../../assets/images/Final-Products/Product spec imgs/ground light on.webp";
import neonOff from "../../../assets/images/Final-Products/Product spec imgs/neon_flex_off.webp";
import neonOn from "../../../assets/images/Final-Products/Product spec imgs/neon_flex_on.webp";
import pixelDotOff from "../../../assets/images/Final-Products/Product spec imgs/pixel dot_off.webp";
import pixelDotOn from "../../../assets/images/Final-Products/Product spec imgs/pixel_dot_on.webp";
import poolOff from "../../../assets/images/Final-Products/Product spec imgs/pool_off.webp";
import poolOn from "../../../assets/images/Final-Products/Product spec imgs/pool_light.webp";
import stripOff from "../../../assets/images/Final-Products/Product spec imgs/strip_off.webp";
import stripOn from "../../../assets/images/Final-Products/Product spec imgs/strip_on.webp";
import wallWindowOff from "../../../assets/images/Final-Products/Product spec imgs/wall window off.webp";
import wallWindowOn from "../../../assets/images/Final-Products/Product spec imgs/wall window on.webp";
import treeImageA from "../../../assets/images/Final-Products/Product spec imgs/treehighlighters_on.webp";
import treeImageB from "../../../assets/images/Final-Products/Product spec imgs/treehighlighters_off.webp";
import goboOff from "../../../assets/images/Final-Products/Product spec imgs/gobo_off.webp";
import goboOn from "../../../assets/images/Final-Products/Product spec imgs/gobo_on.webp";
import fanOff from "../../../assets/images/Final-Products/Product spec imgs/fan-off.webp";
import fanOn from "../../../assets/images/Final-Products/Product spec imgs/fan-on.webp";
import pillarOff from "../../../assets/images/Final-Products/Product spec imgs/piller-highlighter-off.webp";
import pillarOn from "../../../assets/images/Final-Products/Product spec imgs/piller-highlighter-on.webp";
import pixelBarOff from "../../../assets/images/Final-Products/Product spec imgs/pixel eld bar off.webp.webp";
import pixelBarOn from "../../../assets/images/Final-Products/Product spec imgs/pixel led bar on.webp";
import pixelPanelOff from "../../../assets/images/Final-Products/Product spec imgs/pixel panel off.webp.webp";
import pixelPanelOn from "../../../assets/images/Final-Products/Product spec imgs/pixel panel on.webp.webp";
import wallWasherOff from "../../../assets/images/Final-Products/Product spec imgs/wallwasher_off.webp";
import wallWasherOn from "../../../assets/images/Final-Products/Product spec imgs/wallwasher_on.webp";

const items = [
  { label: "Flood Lights", off: floodOff, on: floodOn },
  { label: "Fountain Lights", off: fountainOff, on: fountainOn },
  { label: "Ground Lights", off: groundOff, on: groundOn },
  { label: "Neon Flex LED", off: neonOff, on: neonOn },
  { label: "Pixel Dot Lights", off: pixelDotOff, on: pixelDotOn },
  { label: "Pool Lights", off: poolOff, on: poolOn },
  { label: "Pixel LED Strip", off: stripOff, on: stripOn },
  { label: "Wall Window Lights", off: wallWindowOff, on: wallWindowOn },
  { label: "Tree Highlighters", off: treeImageA, on: treeImageB },
  { label: "Gobo Lights", off: goboOff, on: goboOn },
  { label: "Fan Projection Lights", off: fanOff, on: fanOn },
  { label: "Pillar Highlighters", off: pillarOff, on: pillarOn },
  { label: "Pixel LED Bars", off: pixelBarOff, on: pixelBarOn },
  { label: "Pixel LED Panel", off: pixelPanelOff, on: pixelPanelOn },
  { label: "Wall Washers Lights", off: wallWasherOff, on: wallWasherOn },
];

function HomeProductsCarousel() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsOn((current) => !current);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  const marqueeItems = [...items, ...items];

  return (
    <section className="partners-section overflow-hidden bg-[#131313] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px] text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/45">Products In Motion</p>
        <h2 className="mt-3 text-4xl font-light text-white sm:text-5xl">Lighting Families</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          The legacy homepage rotated these product visuals between off and on states.
          That same visual intent is preserved here with a lightweight React version.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="home-marquee flex w-max gap-6">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="w-[230px] flex-none rounded-[28px] border border-white/10 bg-white/[0.03] p-3 sm:w-[260px]"
            >
              <div className="overflow-hidden rounded-[22px] bg-black">
                <img
                  src={isOn ? item.on : item.off}
                  alt={item.label}
                  className="h-[230px] w-full object-cover sm:h-[260px]"
                />
              </div>
              <p className="px-2 pb-2 pt-4 text-sm uppercase tracking-[0.18em] text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProductsCarousel;
