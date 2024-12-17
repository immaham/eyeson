import ContactSection from "../components/ContactSection";
import Design from "../components/Design";
import Faqs from "../components/Faqs";
import HeroSectionNav from "../components/HeroSectionNav";
import ServicesOffer from "../components/ServicesOffer";

const page = () => {
  return (
    <section className="services-page-container">
      <HeroSectionNav />
      <ServicesOffer />
      <Design />
      <Faqs />
      <ContactSection />
    </section>
  );
};

export default page;
