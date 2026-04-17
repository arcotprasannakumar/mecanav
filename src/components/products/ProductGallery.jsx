import { useEffect, useState } from "react";

function ProductGallery({ images, title }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0] ?? null);
  }, [images]);

  if (!images.length) {
    return (
      <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-sm text-white/60">
        Gallery not available for this product yet.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#050505]">
        <img
          src={activeImage}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-[360px] w-full object-cover sm:h-[460px]"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            className={`overflow-hidden rounded-[18px] border bg-white/5 transition ${
              activeImage === image ? "border-white/60" : "border-white/10 hover:border-white/30"
            }`}
            onClick={() => setActiveImage(image)}
          >
            <img src={image} alt={`${title} thumbnail`} loading="lazy" decoding="async" className="h-28 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
