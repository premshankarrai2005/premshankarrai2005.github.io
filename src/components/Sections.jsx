


import Expertise from "../pages/Expertise";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import AboutPage from "../pages/AboutPage";
import Footer from "../pages/Footer";

const Sections = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 ">
        <Hero />
        <AboutPage />
        <Expertise />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Sections;
