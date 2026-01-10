import { useEffect } from "react";

import Expertise from "../pages/Expertise";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import AboutPage from "../pages/AboutPage";
import Footer from "../pages/Footer";

const sectionIds = ["Hero", "About", "Expertise", "Work", "Contact"];

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
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <section id="Hero">
        <Hero />
      </section>

      <section id="About">
        <AboutPage />
      </section>

      <section id="Expertise">
        <Expertise />
      </section>

      <section id="Work">
        <Work />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Sections;
