import productCategories from "../data/productCategories";
import products, { productsByCategory } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import ProductSidebar from "../components/products/ProductSidebar";
import PageMeta from "../components/ui/PageMeta";

function ProductsPage() {
  const productCounts = Object.fromEntries(
    productCategories.map((category) => [category.slug, productsByCategory(category.slug).length]),
  );

  return (
    <section className="bg-[#fffafa] text-black">
      <PageMeta
        title="Products"
        description="Browse Mecanav product categories and structured lighting families prepared in the React migration."
      />
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-[1600px] flex-col lg:flex-row">
        <ProductSidebar categories={productCategories} productCounts={productCounts} />
        <main className="flex-1 bg-[#fffafa] p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Product Hub
            </p>
            <h1 className="mt-3 font-['Poppins',sans-serif] text-3xl font-light text-[#111] sm:text-4xl">
              Products
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              This React product hub preserves the legacy flow: a category sidebar on the
              left and a category card grid on the right. The first category family is now
              fully data-driven, and the remaining families are ready for bulk migration.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((category) => (
              <ProductCard
                key={category.slug}
                title={category.title}
                image={category.image}
                to={`/products/category/${category.slug}`}
              />
            ))}
          </div>

          <div className="mt-10 rounded-[24px] border border-black/10 bg-white p-6">
            <h2 className="font-['Poppins',sans-serif] text-2xl font-light text-[#111]">
              Current Structured Migration Scope
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Fully structured products currently available in React: {products.length}. The
              first migrated family is <strong>Pixel LED Strip</strong>. Other product families
              are listed and routed as categories, but their product-level data is deferred for
              the later bulk migration pass.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default ProductsPage;
