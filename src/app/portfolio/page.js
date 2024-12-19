import ContactSection from "../components/ContactSection";
import Creativity from "../components/Creativity";
import HeroSectionNav from "../components/HeroSectionNav";
import KeyProject from "../components/KeyProject";
import Vision from "../components/Vision";

const page = () => {
  return (
    <section className="portfolio-page-container">
      <HeroSectionNav />
      <Vision />
      <Creativity />
      <KeyProject />
      <ContactSection />
    </section>
  );
};

export default page;
