function ComingSoonHero({ backgroundImage, title, subtitle }) {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/65 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />
      <div className="relative z-[1] max-w-[90%] px-5">
        <h1 className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white text-3xl font-bold sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-white/85 sm:text-base">{subtitle}</p>
      </div>
    </section>
  );
}

export default ComingSoonHero;
