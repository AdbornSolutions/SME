import { lazy, Suspense, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Common/Footer";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Blog = lazy(() => import("./Pages/Blog"));
const Services = lazy(() => import("./Pages/Services"));
const Career = lazy(() => import("./Pages/Career"));
const Contactus = lazy(() => import("./Pages/Contactus"));
const EstimateBBQ = lazy(() => import("./Pages/ServicePage/EstimateBBQ"));
const FactoryBuilding = lazy(() => import("./Pages/ServicePage/FactoryBuilding"));
const IndustrialCons = lazy(() => import("./Pages/ServicePage/IndustrialCons"));
const IndustryRoads = lazy(() => import("./Pages/ServicePage/IndustryRoads"));
const LandDev = lazy(() => import("./Pages/ServicePage/LandDev"));
const MasterPlanning = lazy(() => import("./Pages/ServicePage/MasterPlanning"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "SME Engineers & Contractors | Industrial Construction",
      "/about": "About Us | SME Engineers & Contractors",
      "/blog": "Industrial Construction Insights | SME",
      "/services": "Industrial Construction Services | SME",
      "/career": "Careers | SME Engineers & Contractors",
      "/contact": "Contact Us | SME Engineers & Contractors",
    };

    const serviceTitle = pathname.startsWith("/services/")
      ? "Service Details | SME Engineers & Contractors"
      : null;

    document.title = pageTitles[pathname] || serviceTitle || "Page Not Found | SME";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-[#f4f3f0]" role="status" aria-label="Loading page">
      <span className="size-9 animate-spin rounded-full border-2 border-[#d5d1ca] border-t-[#ff4b2e]" />
    </div>
  );
}

function NotFound() {
  return (
    <main className="grid min-h-[72vh] place-items-center bg-[#f4f3f0] px-5 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#ff4b2e]">404 Error</p>
        <h1 className="mt-4 font-display text-[clamp(44px,7vw,88px)] font-medium leading-none tracking-[-.06em]">Page not found</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-black/60">The page you are looking for may have moved or does not exist.</p>
        <Link className="mt-7 inline-flex rounded-full bg-[#ff4b2e] px-6 py-3 text-sm font-semibold text-white" to="/">Back to Home</Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/estimation-and-boq" element={<EstimateBBQ />} />
          <Route path="/services/land-development" element={<LandDev />} />
          <Route path="/services/industrial-construction" element={<IndustrialCons />} />
          <Route path="/services/factory-buildings" element={<FactoryBuilding />} />
          <Route path="/services/industrial-roads" element={<IndustryRoads />} />
          <Route path="/services/master-planning" element={<MasterPlanning />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
