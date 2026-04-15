import { Link } from "react-router-dom";
import wheelCover from "../../../assets/images/covers/wheel.webp";
import barCover from "../../../assets/images/covers/bar.webp";
import neonCover from "../../../assets/images/covers/neon.webp";
import fifteenCover from "../../../assets/images/covers/15.webp";

const catalogues = [
  { label: "Ferris Wheel Catalogue", image: wheelCover, to: "/catalogues/catalogues1-1" },
  { label: "Pixel LED Bar Catalogue", image: barCover, to: "/catalogues/catalogues1-2" },
  { label: "Neon Flex Catalogue", image: neonCover, to: "/catalogues/catalogues1-3" },
  { label: "Facade Lighting Catalogue", image: fifteenCover, to: "/catalogues/catalogues1-4" },
];

function HomeCatalogues() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1380px] text-center">
        <h2 className="text-4xl font-light text-white sm:text-5xl">Catalogues</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {catalogues.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group mx-auto w-full max-w-[320px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="overflow-hidden rounded-[22px]">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/catalogues"
            className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-transparent hover:text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCatalogues;
