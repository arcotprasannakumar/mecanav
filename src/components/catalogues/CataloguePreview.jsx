function CataloguePreview({ flipbookUrl, title }) {
  return (
    <div className="space-y-4">
      <div className="hidden h-[90vh] w-full overflow-hidden rounded-[12px] shadow-[0_0_25px_rgba(255,255,255,0.1)] md:block">
        <iframe
          title={`${title} preview`}
          src={flipbookUrl}
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>

      <div className="rounded-[12px] border border-white/10 bg-white/5 p-5 text-left text-white md:hidden">
        <p className="text-sm leading-7 text-white/70">
          The legacy catalogue pages redirected mobile users to the external flipbook view.
          This React migration keeps that intent explicit with a direct preview button.
        </p>
        <a
          href={flipbookUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white"
        >
          Open Flipbook Preview
        </a>
      </div>
    </div>
  );
}

export default CataloguePreview;
