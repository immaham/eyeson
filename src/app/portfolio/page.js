import ContactSection from "../components/ContactSection";
import HeroSectionNav from "../components/HeroSectionNav";
import KeyProject from "../components/KeyProject";

const page = () => {
  return (
    <section className="portfolio-page-container">
      <HeroSectionNav />
      <p>portfolio</p>
      <KeyProject />
      <ContactSection />
    </section>
  );
};

export default page;
