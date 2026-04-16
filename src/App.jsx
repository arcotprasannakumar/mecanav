import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductCategoryPage = lazy(() => import("./pages/ProductCategoryPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const ApplicationsPage = lazy(() => import("./pages/ApplicationsPage"));
const ApplicationDetailPage = lazy(() => import("./pages/ApplicationDetailPage"));
const CataloguesPage = lazy(() => import("./pages/CataloguesPage"));
const CatalogueDetailPage = lazy(() => import("./pages/CatalogueDetailPage"));
const DownloadsPage = lazy(() => import("./pages/DownloadsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black px-4 text-center text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-white/65">Loading Mecanav...</p>
        </div>
      }
    >
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/category/:slug" element={<ProductCategoryPage />} />
          <Route path="/products/:productSlug" element={<ProductDetailPage />} />
          <Route path="/product/:productSlug" element={<ProductDetailPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route
            path="/applications/:applicationSlug"
            element={<ApplicationDetailPage />}
          />
          <Route path="/catalogues" element={<CataloguesPage />} />
          <Route
            path="/catalogues/:catalogueSlug"
            element={<CatalogueDetailPage />}
          />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
