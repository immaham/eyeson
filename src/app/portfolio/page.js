import ContactSection from "../components/ContactSection";
import Creativity from "../components/Creativity";
import HeroSectionNav from "../components/HeroSectionNav";
import Ideas from "../components/Ideas";
import KeyProject from "../components/KeyProject";
import Vision from "../components/Vision";

const page = () => {
  return (
    <section className="portfolio-page-container">
      <HeroSectionNav />
      <Vision />
      <Creativity />
      <Ideas />
      <KeyProject />
      <ContactSection />
    </section>
  );
};

export default page;
