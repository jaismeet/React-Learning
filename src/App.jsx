import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/layout/Header.jsx";
import PageLoader from "./components/common/PageLoader.jsx";
import BackToTop from "./components/common/BackToTop.jsx";
import { navItems } from "./data/siteData.js";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const pageById = Object.fromEntries(navItems.map((item) => [item.id, item]));
const pageByPath = Object.fromEntries(navItems.map((item) => [item.path, item]));

function pageFromPath(pathname) {
  return pageByPath[pathname]?.id ?? "home";
}

export default function App() {
  const routerNavigate = useNavigate();
  const location = useLocation();
  const activePage = useMemo(() => pageFromPath(location.pathname), [location.pathname]);
  const [loadingPage, setLoadingPage] = useState(null);
  const loadingTimer = useRef(null);

  const navigate = (pageId) => {
    const target = pageById[pageId];
    if (!target || loadingPage) return;

    if (pageId === activePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoadingPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });

    window.clearTimeout(loadingTimer.current);
    loadingTimer.current = window.setTimeout(() => {
      routerNavigate(target.path);
      setLoadingPage(null);
      window.scrollTo({ top: 0 });
    }, 950);
  };

  useEffect(() => {
    return () => window.clearTimeout(loadingTimer.current);
  }, []);

  useEffect(() => {
    const hashPage = location.hash.replace("#", "");
    const oldHashTarget = pageById[hashPage];
    if (oldHashTarget) {
      routerNavigate(oldHashTarget.path, { replace: true });
    }
  }, [location.hash, routerNavigate]);

  return (
    <main>
      <PageLoader isLoading={Boolean(loadingPage)} />
      <Header
        activePage={activePage}
        isLoading={Boolean(loadingPage)}
        navItems={navItems}
        onNavigate={navigate}
      />

      <div className="page-view" key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={navigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={navigate} />} />
          <Route path="/careers" element={<CareersPage onNavigate={navigate} />} />
          <Route path="/services" element={<ServicesPage onNavigate={navigate} />} />
          <Route path="/projects" element={<ProjectsPage onNavigate={navigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={navigate} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <BackToTop />
    </main>
  );
}
