function PageHero({ title, breadcrumbs = [], backgroundImage, overlayClassName = "bg-black/70" }) {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      {backgroundImage ? <div className={`absolute inset-0 ${overlayClassName}`} /> : null}
      <div className="relative mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {breadcrumbs.length ? (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/75 sm:text-sm">
            {breadcrumbs.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-center gap-3">
                {index > 0 ? <span>›</span> : null}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default PageHero;
