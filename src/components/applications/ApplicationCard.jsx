import { Link } from "react-router-dom";
 
function ApplicationCard({ title, image, to, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="group relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-[500px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />
        <Link
          to={to}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-black/70 px-5 py-3 text-base text-white opacity-0 transition group-hover:bg-white group-hover:text-black group-hover:opacity-100"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}
 
export default ApplicationCard;
 