import { useParams } from "react-router-dom";
import ProductSidebar from "../components/products/ProductSidebar";
import ProductCard from "../components/products/ProductCard";
import HomeLegacyPartnersSection from "../components/sections/home/HomeLegacyPartnersSection";
import PageMeta from "../components/ui/PageMeta";
import StatusPanel from "../components/ui/StatusPanel";
import productCategories, { productCategoryMap } from "../data/productCategories";
import { productsByCategory } from "../data/products";

function ProductCategoryPage() {
  const { slug } = useParams();
  const category = productCategoryMap[slug];
  const categoryProducts = slug ? productsByCategory(slug) : [];
  const productsBySlug = Object.fromEntries(categoryProducts.map((product) => [product.slug, product]));
  const sourceItems = category?.sidebarItems?.length
    ? category.sidebarItems
    : categoryProducts.map((product) => ({
        slug: product.slug,
        label: product.title,
        to: `/products/${product.slug}`,
      }));
  const displayProducts = sourceItems.map((item) => {
    const mappedProduct = productsBySlug[item.slug];

    return {
      slug: item.slug,
      title: mappedProduct?.title ?? item.label,
      image: mappedProduct?.cardImage ?? category.image,
      to: item.to ?? `/products/${item.slug}`,
    };
  });
  const productCounts = Object.fromEntries(
    productCategories.map((item) => [
      item.slug,
      item.sidebarItems?.length || productsByCategory(item.slug).length,
    ]),
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
        <div className="flex-1 bg-[#fffafa] p-4 sm:p-6 lg:p-10">
          {displayProducts.length ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {displayProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  title={product.title}
                  image={product.image}
                  to={product.to}
                />
              ))}
            </div>
          ) : (
            <StatusPanel
              tone="light"
              message="Product details for this category are being prepared. Please contact the Mecanav team for the latest specification support."
              className="mt-8 shadow-none"
            />
          )}
        </div>
      </div>
      <HomeLegacyPartnersSection />
    </section>
  );
}

export default ProductCategoryPage;
