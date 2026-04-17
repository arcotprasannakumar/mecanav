import { Link } from "react-router-dom";

function CatalogueCard({ title, image, to, onDownload }) {
  return (
    <article className="group relative overflow-hidden bg-[#d7d1cb] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#d7d1cb]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
        />

        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-end p-5">
          <h3 className="max-w-[45%] text-right text-[16px] font-semibold uppercase leading-tight tracking-[0.08em] text-white">
            {title}
          </h3>
        </div> */}
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
