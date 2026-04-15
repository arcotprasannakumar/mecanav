import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGallery from "../components/products/ProductGallery";
import ProductSpecsTable from "../components/products/ProductSpecsTable";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import products, { productMap } from "../data/products";
import { productCategoryMap } from "../data/productCategories";

const tabs = [
  { id: "info", label: "Product Info" },
  { id: "gallery", label: "Gallery" },
  { id: "downloads", label: "Downloads" },
];

function ProductDetailPage() {
  const { productSlug } = useParams();
  const product = productMap[productSlug];
  const category = product ? productCategoryMap[product.categorySlug] : null;
  const [activeTab, setActiveTab] = useState("info");
  const [activeHeroImage, setActiveHeroImage] = useState(product?.heroImages?.[0] ?? null);

  useEffect(() => {
    setActiveHeroImage(product?.heroImages?.[0] ?? null);
    setActiveTab("info");
  }, [productSlug, product]);

  if (!product) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <StatusPanel
          title="Product not found"
          message="This product slug is not mapped yet."
          actionLabel="Back to Products"
          actionTo="/products"
        />
      </section>
    );
  }

  const relatedProducts = products
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .slice(0, 4);

  return (
    <section className="bg-white text-black">
      <PageMeta
        title={product.title}
        description={product.description}
        type="product"
      />
      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <Link to="/products" className="hover:text-black">Products</Link>
          <span>/</span>
          {category ? (
            <>
              <Link to={`/products/category/${category.slug}`} className="hover:text-black">
                {category.title}
              </Link>
              <span>/</span>
            </>
          ) : null}
          <span className="text-slate-700">{product.title}</span>
        </div>

        <section className="grid gap-8 rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.08)] lg:grid-cols-[minmax(0,1fr)_420px] lg:p-8">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[26px] border border-black/10 bg-slate-50">
              {activeHeroImage ? (
                <img
                  src={activeHeroImage}
                  alt={product.title}
                  className="h-[340px] w-full object-cover sm:h-[460px]"
                />
              ) : null}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.heroImages.map((image) => (
                <button
                  key={image}
                  type="button"
                  className={`overflow-hidden rounded-[18px] border bg-white ${
                    image === activeHeroImage ? "border-black/30" : "border-black/10"
                  }`}
                  onClick={() => setActiveHeroImage(image)}
                >
                  <img src={image} alt="" className="h-24 w-full object-cover sm:h-28" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-['Poppins',sans-serif] text-3xl font-light leading-tight text-[#111] sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>
            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-500">Overview</p>
            <p className="mt-2 text-base leading-8 text-slate-700">{product.overview}</p>
            <a
              href={product.cta.href}
              className="mt-8 inline-flex w-fit items-center rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black/85"
            >
              {product.cta.label}
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.08)] lg:p-8">
          <div id="product-tabs" className="flex flex-wrap gap-3" role="tablist" aria-label="Product detail sections">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                className={`rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "border border-black/10 bg-white text-slate-600 hover:border-black/25"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === "info" ? (
              <div id="panel-info" role="tabpanel" aria-labelledby="tab-info" className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                <div>
                  <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-[#111]">
                    Product Information
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-700">{product.productInfo}</p>
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Key Features
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {product.keyFeatures.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                          <span className="mt-2 text-[10px]">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#111] p-6 text-white">
                  <h3 className="text-xl font-light">Applications</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                    {product.applications.map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-[20px] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                      Legacy Source
                    </p>
                    <p className="mt-2 text-sm text-white/75">{product.legacySource}</p>
                    {category ? (
                      <p className="mt-3 text-sm text-white/60">Category: {category.title}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === "gallery" ? (
              <div id="panel-gallery" role="tabpanel" aria-labelledby="tab-gallery">
                <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-[#111]">
                  Gallery
                </h2>
                <div className="mt-6">
                  <ProductGallery images={product.gallery} title={product.title} />
                </div>
              </div>
            ) : null}

            {activeTab === "downloads" ? (
              <div id="panel-downloads" role="tabpanel" aria-labelledby="tab-downloads">
                <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-[#111]">
                  Downloads
                </h2>
                <div className="mt-6 space-y-4">
                  {product.documents.length ? (
                    product.documents.map((document) => (
                      <div
                        key={document.label}
                        className="rounded-[20px] border border-black/10 bg-slate-50 px-5 py-4"
                      >
                        <p className="font-medium text-slate-800">{document.label}</p>
                        {document.href ? (
                          <a
                            href={document.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-flex text-sm text-slate-600 underline"
                          >
                            Open document
                          </a>
                        ) : (
                          <p className="mt-2 text-sm text-slate-500">
                            Referenced by the legacy page, but the file is not present in the
                            project yet.
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <StatusPanel
                      tone="light"
                      message="No downloadable documents were linked on the migrated legacy page."
                      className="rounded-[20px] px-5 py-4 text-sm shadow-none"
                    />
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-[#111]">Specifications</h2>
          <div className="mt-6">
            <ProductSpecsTable specs={product.technicalSpecs} />
          </div>
        </section>

        <section className="mt-8 rounded-[30px] bg-black px-6 py-10 text-white sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">Product Showcase</p>
              <h2 className="mt-3 font-['Poppins',sans-serif] text-3xl font-light">
                {category?.title ?? "Product Family"}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/70">
                This section mirrors the legacy detail-page product spotlight block while using
                the selected product imagery and structured React data.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4">
              <img src={product.cardImage} alt={product.title} className="w-full rounded-[24px] object-cover" />
              <div className="pointer-events-none absolute inset-x-8 bottom-4 h-10 rounded-full bg-white/30 blur-2xl" />
            </div>
          </div>
        </section>

        {relatedProducts.length ? (
          <section className="mt-8 rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.08)] lg:p-8">
            <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-[#111]">
              More In This Family
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="overflow-hidden rounded-[22px] border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]"
                >
                  <img src={item.cardImage} alt={item.title} className="h-56 w-full object-cover" />
                  <p className="px-4 py-3 text-sm font-light leading-6 text-slate-700">{item.title}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}

export default ProductDetailPage;
