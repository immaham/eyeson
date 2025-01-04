import ContactSection from "../components/ContactSection";
import Creativity from "../components/Creativity";
import HeroSectionNav from "../components/HeroSectionNav";
import Ideas from "../components/Ideas";
import KeyProject from "../components/KeyProject";
import Vision from "../components/Vision";

const page = () => {
  return (
    <div className="portfolio-page-wrapper">
      <section className="portfolio-page-container">
        <HeroSectionNav route={"/portfolio"} />
        <Vision />
        <Creativity />
        <Ideas />
        <KeyProject />
        <ContactSection />
      </section>
    </div>
  );
};

export default page;
