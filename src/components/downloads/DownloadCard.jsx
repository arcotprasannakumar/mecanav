function DownloadCard({ item, onDownload }) {
  const accentMap = {
    blue: {
      iconBg: "bg-blue-50 text-blue-600",
      button: "bg-[#0d6efd] hover:bg-[#0b5ed7] text-white",
      tag: "text-blue-600",
    },
    green: {
      iconBg: "bg-emerald-50 text-emerald-600",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
      tag: "text-emerald-600",
    },
    amber: {
      iconBg: "bg-amber-50 text-amber-600",
      button: "bg-amber-500 hover:bg-amber-600 text-black",
      tag: "text-amber-600",
    },
  };

  const accent = accentMap[item.accent] ?? accentMap.blue;

  return (
    <div className="h-full rounded bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${accent.iconBg}`}>
          <span className="text-sm font-bold uppercase">{item.type}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">{item.title}</h3>
          <p className={`text-sm ${accent.tag}`}>
            {item.type} • {item.sizeLabel}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onDownload(item)}
        className={`flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition ${accent.button}`}
      >
        {item.actionLabel}
      </button>

      {!item.available ? (
        <p className="mt-4 text-sm leading-6 text-slate-500">{item.note}</p>
      ) : null}
    </div>
  );
}

export default DownloadCard;
