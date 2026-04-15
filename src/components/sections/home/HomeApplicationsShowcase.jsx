import { Link } from "react-router-dom";
import bridgeImage from "../../../assets/images/applications/b11.webp";
import parkImage from "../../../assets/images/applications/p3.webp";
import architecturalImage from "../../../assets/images/applications/a1.webp";
import riverImage from "../../../assets/images/applications/r3.webp";
import ferrisImage from "../../../assets/images/applications/f1.webp";
import signsImage from "../../../assets/images/applications/sppli11 (2).webp";

const items = [
  {
    label: "Bridge Lighting",
    image: bridgeImage,
    to: "/applications/bridge-lighting",
  },
  {
    label: "Park Lighting",
    image: parkImage,
    to: "/applications/park-lighting",
  },
  {
    label: "Architectural Lighting",
    image: architecturalImage,
    to: "/applications/architectural-lighting",
  },
  {
    label: "River Lighting",
    image: riverImage,
    to: "/applications/river-lighting",
  },
  {
    label: "Ferris Wheel Lighting",
    image: ferrisImage,
    to: "/applications/ferris-wheel-lighting",
  },
  {
    label: "Signs and Logos",
    image: signsImage,
    to: "/applications/signs-and-logos",
  },
];

function HomeApplicationsShowcase() {
  return (
    <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/55">Applications</p>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">Lighting In Action</h2>
          </div>
          <Link
            to="/applications"
            className="inline-flex w-fit items-center rounded-full border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.22em] text-white/75 transition hover:border-white hover:text-white"
          >
            View All Applications
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/55">Application</p>
                    <h3 className="mt-2 text-2xl font-light text-white">{item.label}</h3>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl text-white transition group-hover:border-white">
                    +
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeApplicationsShowcase;
