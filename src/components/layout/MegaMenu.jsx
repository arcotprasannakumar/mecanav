import { useId, useState } from "react";
import { NavLink } from "react-router-dom";

function MegaMenu({ item, active = false }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const baseTriggerClass = [
    "inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.14em] transition",
    active ? "text-white" : "text-white/80 hover:text-white",
  ].join(" ");

  if (item.variant === "dropdown") {
    return (
      <div
        className="group relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(false);
          }
        }}
      >
        <button
          type="button"
          className={baseTriggerClass}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((current) => !current)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
            }
          }}
        >
          {item.label}
          <span className="text-base leading-none">+</span>
        </button>
        <div
          id={menuId}
          className={`absolute left-1/2 top-full z-30 mt-4 w-60 -translate-x-1/2 rounded-b-xl border border-white/10 bg-[#111111] p-3 shadow-2xl transition duration-200 ${
            open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
          }`}
        >
          <ul className="space-y-1">
            {item.children.map((child) => (
              <li key={child.label}>
                <NavLink
                  to={child.to}
                  className="block rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <NavLink
        to={item.to}
        className={baseTriggerClass}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
          }
        }}
      >
        {item.label}
        <span className="text-base leading-none transition group-hover:-rotate-180">+</span>
      </NavLink>
      <div
        id={menuId}
        className={`absolute left-1/2 top-full z-30 mt-4 w-[min(1000px,92vw)] -translate-x-1/2 rounded-b-2xl border border-white/10 bg-[#111111] px-8 py-7 shadow-2xl transition duration-200 ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="grid grid-cols-4 gap-6">
          {item.columns.map((column, index) => (
            <div key={`${item.label}-${index}`} className="flex flex-col gap-1">
              {column.map((child) => (
                <NavLink
                  key={child.label}
                  to={child.to}
                  className="rounded-md px-2 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
