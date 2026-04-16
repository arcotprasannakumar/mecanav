import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function ProductSidebar({ categories, activeCategorySlug, productCounts = {} }) {
  const initialOpen = useMemo(() => activeCategorySlug ?? null, [activeCategorySlug]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(initialOpen);

  const toggleCategory = (slug) => {
    setOpenCategory((current) => (current === slug ? null : slug));
  };

  return (
    <aside className="w-full border-b border-black/10 bg-[#030303] p-4 lg:min-h-full lg:w-[290px] lg:flex-none lg:border-b-0 lg:border-r lg:border-r-black/10 lg:p-6">
      <button
        type="button"
        className="flex w-full items-center justify-center rounded-md bg-black px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white lg:hidden"
        onClick={() => setIsMobileOpen((current) => !current)}
      >
        Categories
        <span className={`ml-3 transition ${isMobileOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      <div className={`${isMobileOpen ? "mt-4 flex" : "hidden"} flex-col gap-3 lg:mt-0 lg:flex`}>
        {categories.map((category) => {
          const isOpen = openCategory === category.slug;
          const items = category.sidebarItems ?? [];
          const count = productCounts[category.slug] ?? 0;

          return (
            <div key={category.slug}>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-white transition sm:text-sm ${
                  activeCategorySlug === category.slug ? "bg-white/10" : "bg-black hover:scale-[1.02]"
                }`}
                onClick={() => toggleCategory(category.slug)}
              >
                <span>{category.title}</span>
                <span className={`transition ${isOpen ? "rotate-90" : ""}`}>▶</span>
              </button>

              <div
                className={`overflow-hidden rounded-b-md border-l-4 border-l-white bg-[#2e2e2e] transition-all duration-300 ${
                  isOpen ? "mt-0 max-h-[900px] px-4 py-3 opacity-100" : "max-h-0 px-4 py-0 opacity-0"
                }`}
              >
                <Link
                  to={`/products/category/${category.slug}`}
                  className="flex items-center gap-2 py-2 text-[11px] font-light tracking-[0.03em] text-white transition hover:translate-x-1 hover:text-[#00ffe5]"
                >
                  <span className="text-[10px]">▶</span>
                  Browse category
                  {count ? <span className="text-white/45">({count})</span> : null}
                </Link>
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.to}
                    className="flex items-center gap-2 py-2 text-[11px] font-light tracking-[0.03em] text-white transition hover:translate-x-1 hover:text-[#00ffe5]"
                  >
                    <span className="text-[10px]">▶</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default ProductSidebar;
