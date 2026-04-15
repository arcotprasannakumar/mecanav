import { useMemo, useState } from "react";

const imageModules = import.meta.glob("../../../assets/images/animationcode/*.webp", {
  eager: true,
  import: "default",
});

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, source]) => [
    path.split("/").pop()?.replace(".webp", ""),
    source,
  ]),
);

const controls = [
  "Ferris Wheel Lighting",
  "Bridge Lighting",
  "Park Lighting",
  "River Lighting",
  "Signs and Logos",
  "Street Lighting",
];

function HomeLightingDemo() {
  const [state, setState] = useState([0, 0, 0, 0, 0, 0]);

  const imageSource = useMemo(() => {
    const key = state.join("");
    return imageMap[key] ?? imageMap["000000"];
  }, [state]);

  const toggleLight = (index) => {
    setState((current) => current.map((value, itemIndex) => (itemIndex === index ? (value ? 0 : 1) : value)));
  };

  return (
    <section className="bg-[#0b0b0b] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1380px] items-center gap-10 rounded-[36px] border border-white/10 bg-[#151515] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Interactive Demo</p>
          <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">
            Control Each Lighting Layer
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70 sm:text-base">
            This homepage demo from the legacy site showed how multiple application
            lighting layers combine into a single facade view. The original image
            switching behavior is preserved here with React state.
          </p>

          <div className="mt-8 space-y-3">
            {controls.map((label, index) => {
              const enabled = state[index] === 1;
              return (
                <label
                  key={label}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 transition hover:border-white/20"
                >
                  <span className="text-sm text-white/90 sm:text-base">{label}</span>
                  <span className="relative inline-flex h-7 w-14 items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={enabled}
                      onChange={() => toggleLight(index)}
                    />
                    <span className="absolute inset-0 rounded-full bg-white/20 transition peer-checked:bg-emerald-400/80" />
                    <span className="absolute left-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-7" />
                  </span>
                </label>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white/85"
              onClick={() => setState([1, 1, 1, 1, 1, 1])}
            >
              All On
            </button>
            <button
              type="button"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white"
              onClick={() => setState([0, 0, 0, 0, 0, 0])}
            >
              All Off
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black">
          <img
            src={imageSource}
            alt="Lighting controller output"
            className="h-full min-h-[320px] w-full object-cover md:min-h-[420px] lg:min-h-[540px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeLightingDemo;
