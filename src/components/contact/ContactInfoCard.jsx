function ContactInfoCard({ text, href, icon, iconColor = "text-white" }) {
  const content = href ? (
    <a href={href} className="transition hover:text-white">
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );
 
  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-6 w-6 items-center justify-center text-[20px] ${iconColor}`}>
        {icon}
      </div>
 
      <div className="text-[16px] font-normal text-white/95">{content}</div>
    </div>
  );
}
 
export default ContactInfoCard;
 