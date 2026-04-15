function PageHero({ title, breadcrumbs = [], backgroundImage, overlayClassName = "bg-black/70" }) {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-center sm:px-6 lg:px-8"
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
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        {breadcrumbs.length ? (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/75">
            {breadcrumbs.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-center gap-4">
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
