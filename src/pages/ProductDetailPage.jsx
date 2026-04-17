import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGallery from "../components/products/ProductGallery";
import ProductSpecsTable from "../components/products/ProductSpecsTable";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import products, { productMap } from "../data/products";
import productCategories, { productCategoryMap } from "../data/productCategories";
import productFallbacks from "../data/productFallbacks";

const tabs = [
  { id: "info", label: "Product Info" },
  { id: "gallery", label: "Gallery" },
  { id: "downloads", label: "Downloads" },
];

function ProductDetailPage() {
  const { productSlug } = useParams();
  const mappedProduct = productMap[productSlug];
  const fallbackCategory =
    productCategories.find((item) => item.sidebarItems?.some((sidebarItem) => sidebarItem.slug === productSlug)) ??
    null;
  const fallbackSidebarItem =
    fallbackCategory?.sidebarItems?.find((sidebarItem) => sidebarItem.slug === productSlug) ?? null;
  const fallbackAssets = fallbackCategory ? productFallbacks[fallbackCategory.slug] : null;
  const product = mappedProduct ?? (fallbackCategory && fallbackSidebarItem
    ? {
        slug: fallbackSidebarItem.slug,
        title: fallbackAssets?.title ?? fallbackSidebarItem.label,
        categorySlug: fallbackCategory.slug,
        cardImage: fallbackAssets?.heroImages?.[0] ?? fallbackCategory.image,
        heroImages: fallbackAssets?.heroImages?.length ? fallbackAssets.heroImages : [fallbackCategory.image],
        gallery: fallbackAssets?.heroImages?.length ? fallbackAssets.heroImages : [fallbackCategory.image],
        description: fallbackCategory.description,
        overview: fallbackCategory.description,
        productInfo: `${fallbackSidebarItem.label} belongs to the ${fallbackCategory.title} family. This page connects the product to its primary category, brochure assets, and available specification context.`,
        keyFeatures: [
          `${fallbackCategory.title} product family`,
          "Category brochure and product imagery available",
          "Specification support available on request",
        ],
        technicalSpecs: [
          { feature: "Category", value: fallbackCategory.title },
          { feature: "Detail Status", value: "Category-level specification available" },
        ],
        productCodes: [],
        applications: [fallbackCategory.title],
        documents: fallbackAssets?.documents ?? [],
        cta: { label: "Explore Features", href: "#product-tabs" },
        legacySource: fallbackCategory.legacySource,
        migrationStatus: fallbackCategory.migrationStatus,
      }
    : null);
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
  const heroImages = product.heroImages?.length ? product.heroImages : [product.cardImage].filter(Boolean);
  const galleryImages = [...new Set([...(heroImages ?? []), ...(product.gallery ?? [])])];

  return (
    <section className="bg-black text-white">
      <PageMeta
        title={product.title}
        description={product.description}
        type="product"
      />
      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
          <Link to="/products" className="hover:text-white">Products</Link>
          <span>/</span>
          {category ? (
            <>
              <Link to={`/products/category/${category.slug}`} className="hover:text-white">
                {category.title}
              </Link>
              <span>/</span>
            </>
          ) : null}
          <span className="text-white/75">{product.title}</span>
        </div>

        <section className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[18px] bg-[#030303]">
              {activeHeroImage ? (
                <img
                  src={activeHeroImage}
                  alt={product.title}
                  className="h-[320px] w-full object-cover sm:h-[460px] lg:h-[520px]"
                />
              ) : null}
            </div>
          </div>

          <div className="space-y-4 lg:pb-8">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`block w-full overflow-hidden rounded-[18px] border transition ${
                  image === activeHeroImage ? "border-white/70" : "border-white/10 hover:border-white/35"
                }`}
                onClick={() => setActiveHeroImage(image)}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-36 w-full bg-[#050505] object-cover sm:h-40 lg:h-[178px]"
                />
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 max-w-5xl">
          <h1 className="font-['Poppins',sans-serif] text-3xl font-light leading-tight text-white sm:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">{product.description}</p>
          <a
            href={product.cta.href}
            className="mt-8 inline-flex w-fit items-center rounded-[10px] bg-[#f1ece9] px-10 py-4 text-base font-semibold text-black transition hover:bg-white"
          >
            {product.cta.label}
          </a>
        </section>

        <section className="mt-12">
          <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-white sm:text-4xl">
            Overview
          </h2>
          <p className="mt-4 max-w-5xl text-base leading-8 text-white/80 sm:text-lg">
            {product.overview}
          </p>
        </section>

        <section className="mt-8">
          <div id="product-tabs" className="flex flex-wrap gap-3" role="tablist" aria-label="Product detail sections">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                className={`rounded-[10px] border px-6 py-3 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? "border-[#b8b3b0] bg-[#b8b3b0] text-black"
                    : "border-white/70 bg-transparent text-white hover:border-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === "info" ? (
              <div id="panel-info" role="tabpanel" aria-labelledby="tab-info" className="space-y-6">
                <div className="rounded-[18px] bg-[#b7b3b3] px-6 py-6 text-black sm:px-7">
                  <h3 className="text-2xl font-semibold">Product Information</h3>
                  <p className="mt-4 text-base leading-8 text-black/90">{product.productInfo}</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                  <div className="rounded-[18px] border border-white/10 bg-white/5 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                      Key Features
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {product.keyFeatures.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm leading-7 text-white/80 sm:text-base">
                          <span className="mt-2 text-[10px] text-white/55">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-white/5 p-6">
                    <h3 className="text-xl font-light text-white">Applications</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                      {product.applications.map((application) => (
                        <li key={application}>{application}</li>
                      ))}
                    </ul>

                    <div className="mt-8 rounded-[16px] border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                        Product Family
                      </p>
                      {category ? (
                        <p className="mt-2 text-sm text-white/75">{category.title}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === "gallery" ? (
              <div id="panel-gallery" role="tabpanel" aria-labelledby="tab-gallery">
                <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-white">
                  Gallery
                </h2>
                <div className="mt-6">
                  <ProductGallery images={galleryImages} title={product.title} />
                </div>
              </div>
            ) : null}

            {activeTab === "downloads" ? (
              <div id="panel-downloads" role="tabpanel" aria-labelledby="tab-downloads">
                <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-white">
                  Downloads
                </h2>
                <div className="mt-6 grid gap-4">
                  {product.documents.length ? (
                    product.documents.map((document) => (
                      <div
                        key={document.label}
                        className="rounded-[18px] border border-white/10 bg-white/5 px-5 py-5"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-lg font-medium text-white">{document.label}</p>
                            <p className="mt-1 text-sm text-white/55">{document.type ?? "Document"}</p>
                          </div>
                          {document.href ? (
                            <a
                              href={document.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex w-fit items-center rounded-[10px] border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/15"
                            >
                              Open download
                            </a>
                          ) : (
                            <p className="text-sm text-white/55">
                              This document is available on request from the Mecanav team.
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <StatusPanel
                      tone="light"
                      message="No downloadable documents are linked for this product yet. Please contact the Mecanav team for the latest files."
                      className="rounded-[20px] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70 shadow-none"
                    />
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center font-['Poppins',sans-serif] text-4xl font-light text-white sm:text-6xl">
            Specifications
          </h2>
          <div className="mt-8">
            <ProductSpecsTable specs={product.technicalSpecs} />
          </div>
        </section>

        <section className="mt-12 rounded-[22px] bg-[#4a4949] px-6 py-10 text-white sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center">
            <div>
              <h2 className="font-['Poppins',sans-serif] text-4xl font-light text-white/70 sm:text-6xl">
                {category?.title ?? "Product Family"}
              </h2>
            </div>
            <div className="flex justify-end">
              <img
                src={product.cardImage}
                alt={product.title}
                className="max-h-[300px] w-full max-w-[520px] object-contain"
              />
            </div>
          </div>
        </section>

        {relatedProducts.length ? (
          <section className="mt-10">
            <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-white">
              More In This Family
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="overflow-hidden rounded-[22px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/25"
                >
                  <img src={item.cardImage} alt={item.title} className="h-56 w-full object-cover" />
                  <p className="px-4 py-4 text-sm font-light leading-6 text-white/80">{item.title}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
      <HomeLegacyPartnersSection />
    </section>
  );
}

export default ProductDetailPage;
