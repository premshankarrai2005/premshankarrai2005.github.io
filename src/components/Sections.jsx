import { useEffect } from "react";

import Expertise from "../pages/Expertise";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import AboutPage from "../pages/AboutPage";
import Footer from "../pages/Footer";

const sectionIds = ["hero", "about", "expertise", "work", "contact"];

const Sections = () => {


  // ✅ Scroll → URL sync
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white transition-colors duration-300 min-h-screen">
      <Hero />
      <AboutPage />
      <Expertise />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Sections;
