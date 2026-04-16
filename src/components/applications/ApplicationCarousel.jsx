import { useEffect, useState } from "react";
 
function ApplicationCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
 
  useEffect(() => {
    setActiveIndex(0);
  }, [images]);
 
  if (!images?.length) {
    return null;
  }
 
  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };
 
  const goNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };
 
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={`${image}-${index}`} className="w-full flex-none">
            <div className="group relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[500px]">
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                loading={index === activeIndex ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
 
      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            className="absolute left-5 top-1/2 z-10 -translate-y-1/2 bg-transparent text-[34px] text-white transition hover:text-white/75"
            onClick={goPrevious}
          >
            &#10094;
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="absolute right-5 top-1/2 z-10 -translate-y-1/2 bg-transparent text-[34px] text-white transition hover:text-white/75"
            onClick={goNext}
          >
            &#10095;
          </button>
        </>
      ) : null}
    </div>
  );
}
 
export default ApplicationCarousel;