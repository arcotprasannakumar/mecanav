function ContactInfoCard({ title, text, href, icon, subtle }) {
  const content = href ? (
    <a href={href} className="transition hover:text-white">
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-white">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">{title}</p>
        <div className="mt-2 text-sm leading-7 text-white/75">{content}</div>
        {subtle ? <p className="mt-1 text-xs leading-6 text-white/45">{subtle}</p> : null}
      </div>
    </div>
  );
}

export default ContactInfoCard;
