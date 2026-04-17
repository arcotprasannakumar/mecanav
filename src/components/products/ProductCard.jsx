import { Link } from "react-router-dom";

function ProductCard({ title, image, to, className = "", captionClassName = "" }) {
  return (
    <article
      className={`group overflow-hidden rounded-[20px] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] ${className}`}
    >
      <Link to={to} className="block h-full">
        <div className="overflow-hidden bg-white">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
          />
        </div>
        <h2
          className={`px-4 py-3 font-['Poppins',sans-serif] text-[15px] font-light leading-6 text-[#6e6e6e] ${captionClassName}`}
        >
          {title}
        </h2>
      </Link>
    </article>
  );
}

export default ProductCard;
