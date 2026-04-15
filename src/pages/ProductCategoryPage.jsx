import { Link, useParams } from "react-router-dom";
import ProductSidebar from "../components/products/ProductSidebar";
import ProductCard from "../components/products/ProductCard";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import productCategories, { productCategoryMap } from "../data/productCategories";
import { productsByCategory } from "../data/products";

function ProductCategoryPage() {
  const { slug } = useParams();
  const category = productCategoryMap[slug];
  const categoryProducts = slug ? productsByCategory(slug) : [];
  const productCounts = Object.fromEntries(
    productCategories.map((item) => [item.slug, productsByCategory(item.slug).length]),
  );

  if (!category) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <StatusPanel
          title="Product category not found"
          message="The requested category slug is not mapped yet."
          actionLabel="Back to Products"
          actionTo="/products"
        />
      </section>
    );
  }

  return (
    <section className="bg-[#fffafa] text-black">
      <PageMeta
        title={category.title}
        description={category.description}
      />
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-[1600px] flex-col lg:flex-row">
        <ProductSidebar
          categories={productCategories}
          activeCategorySlug={category.slug}
          productCounts={productCounts}
        />
        <main className="flex-1 bg-[#fffafa] p-4 sm:p-6 lg:p-8">
          <div className="rounded-[26px] border border-black/10 bg-white p-5 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Category
                </p>
                <h1 className="mt-3 font-['Poppins',sans-serif] text-3xl font-light text-[#111] sm:text-4xl">
                  {category.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  {category.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/products"
                    className="rounded-full border border-black/15 px-5 py-3 text-sm uppercase tracking-[0.18em] text-slate-700 transition hover:border-black/30"
                  >
                    All Categories
                  </Link>
                  <span className="rounded-full bg-black px-5 py-3 text-sm uppercase tracking-[0.18em] text-white">
                    {categoryProducts.length} Structured Products
                  </span>
                </div>
              </div>
              <div className="overflow-hidden rounded-[24px] border border-black/10 bg-[#f8f6f6]">
                <img src={category.image} alt={category.title} className="h-[300px] w-full object-cover" />
              </div>
            </div>
          </div>

          {categoryProducts.length ? (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  title={product.title}
                  image={product.cardImage}
                  to={`/products/${product.slug}`}
                />
              ))}
            </div>
          ) : (
            <StatusPanel
              tone="light"
              message="Product-level data for this category has not been migrated yet. The route and category shell are ready so the remaining products can be added mostly through `src/data/products.js`."
              className="mt-8 shadow-none"
            />
          )}
        </main>
      </div>
    </section>
  );
}

export default ProductCategoryPage;
