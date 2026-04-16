import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import PageMeta from "../components/ui/PageMeta";

const sidebarCategories = [
  {
    key: "pixel-led-strip",
    label: "Pixel LED Strip",
    links: [
      { label: "WW - Non-Pixel - 12V LED Strip", slug: "ww-12v-non-pixel-led-strip" },
      { label: "WW - Pixel - 24V Pixel LED Strip", slug: "ww-24v-pixel-led-strip" },
      { label: "RGB - Pixel - 24V Pixel LED Strip", slug: "rgb-24v-pixel-led-strip" },
      { label: "RGBW - Non-Pixel - 24V LED Strip", slug: "rgbw-24v-non-pixel-led-strip" },
      { label: "RGBWW - Pixel - 24V LED Strip", slug: "rgbww-24v-pixel-led-strip" },
    ],
  },
  {
    key: "neon-flex-led",
    label: "Neon Flex LED",
    links: [{ label: "View Neon Flex LED Products", to: "/products/category/neon-flex-led" }],
  },
  {
    key: "pixel-led-bars",
    label: "Pixel LED Bars",
    links: [{ label: "View Pixel LED Bars Products", to: "/products/category/pixel-led-bars" }],
  },
  {
    key: "pixel-led-panel",
    label: "Pixel LED Panel",
    links: [{ label: "View Pixel LED Panel Products", to: "/products/category/pixel-led-panel" }],
  },
  {
    key: "pixel-dot-lights",
    label: "Pixel Dot Lights",
    links: [{ label: "View Pixel Dot Lights Products", to: "/products/category/pixel-dot-lights" }],
  },
  {
    key: "wall-washers-lights",
    label: "Wall Washer Lights",
    links: [
      { label: "View Wall Washer Lights Products", to: "/products/category/wall-washers-lights" },
    ],
  },
  {
    key: "pillar-highlighters",
    label: "Pillar Highlighters",
    links: [{ label: "View Pillar Highlighters Products", to: "/products/category/pillar-highlighters" }],
  },
  {
    key: "fan-projection-lights",
    label: "Fan Projection Lights",
    links: [{ label: "View Fan Projection Lights Products", to: "/products/category/fan-projection-lights" }],
  },
  {
    key: "wall-window-lights",
    label: "Wall Window Lights",
    links: [{ label: "View Wall Window Lights Products", to: "/products/category/wall-window-lights" }],
  },
  {
    key: "gobo-lights",
    label: "Gobo Lights",
    links: [{ label: "View Gobo Lights Products", to: "/products/category/gobo-lights" }],
  },
  {
    key: "pool-lights",
    label: "Pool Lights",
    links: [{ label: "View Pool Lights Products", to: "/products/category/pool-lights" }],
  },
  {
    key: "fountain-lights",
    label: "Fountain Lights",
    links: [{ label: "View Fountain Lights Products", to: "/products/category/fountain-lights" }],
  },
  {
    key: "recessed-ground-lights",
    label: "Recessed Ground Lights",
    links: [{ label: "View Recessed Ground Lights Products", to: "/products/category/recessed-ground-lights" }],
  },
  {
    key: "tree-highlighters",
    label: "Tree Highlighters",
    links: [{ label: "View Tree Highlighters Products", to: "/products/category/tree-highlighters" }],
  },
  {
    key: "flood-lights",
    label: "Flood Lights",
    links: [{ label: "View Flood Lights Products", to: "/products/category/flood-lights" }],
  },
  {
    key: "dmx-controllers",
    label: "DMX Controllers",
    links: [{ label: "View DMX Controllers Products", to: "/products/category/dmx-controllers" }],
  },
  {
    key: "drivers",
    label: "Drivers",
    links: [{ label: "View Drivers Products", to: "/products/category/drivers" }],
  },
];

function SidebarCategories({ openCategory, setOpenCategory, mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    if (link.to) {
      navigate(link.to);
      return;
    }
    navigate(`/product/${link.slug}`);
  };

  return (
    <aside className="w-full lg:w-[280px] lg:shrink-0 lg:border-r lg:border-white/10">
      <div className="px-4 pt-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full rounded-md bg-black px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          Categories {mobileOpen ? "▴" : "▾"}
        </button>
      </div>

      <div
        className={`bg-black px-4 py-4 transition-all duration-200 lg:block lg:h-full ${mobileOpen ? "block" : "hidden"}`}
      >
        <div className="space-y-2">
          {sidebarCategories.map((category) => {
            const isOpen = openCategory === category.key;
            return (
              <div key={category.key}>
                <button
                  type="button"
                  onClick={() => setOpenCategory((prev) => (prev === category.key ? null : category.key))}
                  className="flex w-full items-center justify-between rounded-md bg-black px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.06em] text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  <span>{category.label}</span>
                  <span className={`text-xs transition-transform ${isOpen ? "rotate-90" : ""}`}>▶</span>
                </button>

                {isOpen ? (
                  <div className="ml-2 mt-2 rounded-md border-l-2 border-white/65 bg-[#2e2e2e] py-2 pl-4 pr-2">
                    {category.links.map((link) => (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => handleLinkClick(link)}
                        className="block w-full py-1.5 text-left text-xs font-light text-white/90 transition-colors hover:text-cyan-300"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function ProductsGrid() {
  const navigate = useNavigate();
  const productCards = useMemo(
    () =>
      products.map((product) => ({
        slug: product.slug,
        title: product.title,
        image: product.cardImage,
      })),
    [],
  );

  return (
    <main className="flex-1 bg-[#f5f5f5] p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {productCards.map((product) => (
          <button
            key={product.slug}
            type="button"
            onClick={() => navigate(`/product/${product.slug}`)}
            className="group overflow-hidden bg-white text-left"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="px-2 pb-2 pt-2 text-sm font-light text-gray-600 md:px-3 md:pb-3">
              {product.title}
            </h2>
          </button>
        ))}
      </div>
    </main>
  );
}

function ProductsPage() {
  const [openCategory, setOpenCategory] = useState("pixel-led-strip");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="bg-[#f5f5f5] text-black">
      <PageMeta
        title="Products"
        description="Explore Mecanav product categories and listings."
      />
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="flex flex-col lg:flex-row">
          <SidebarCategories
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
          <ProductsGrid />
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
