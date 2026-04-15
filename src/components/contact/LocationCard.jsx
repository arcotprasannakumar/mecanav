function LocationCard({ location }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-sm">
      <h3 className="text-lg font-semibold text-black">{location.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{location.address}</p>
      <p className="mt-2 text-sm text-slate-600">{location.phone}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${location.name} ${location.address}`,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:border-black"
      >
        Open in Maps
      </a>
    </div>
  );
}

export default LocationCard;
