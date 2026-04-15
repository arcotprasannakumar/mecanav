import { Link } from "react-router-dom";

function CatalogueCard({ title, image, to, onDownload }) {
  return (
    <article className="group relative overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-[-60px] flex flex-col justify-center gap-3 opacity-0 transition-all duration-300 group-hover:right-[15px] group-hover:opacity-100">
        <Link
          to={to}
          aria-label={`Preview ${title}`}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-base text-white transition hover:bg-black"
        >
          <span aria-hidden="true">◉</span>
        </Link>
        <button
          type="button"
          aria-label={`Download ${title}`}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-base text-white transition hover:bg-black"
          onClick={onDownload}
        >
          <span aria-hidden="true">↓</span>
        </button>
      </div>
    </article>
  );
}

export default CatalogueCard;
