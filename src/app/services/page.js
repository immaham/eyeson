import ContactSection from "../components/ContactSection";
import Faqs from "../components/Faqs";
import HeroSectionNav from "../components/HeroSectionNav";
import ServicesOffer from "../components/ServicesOffer";

const page = () => {
  return (
    <section className="services-page-container">
      <HeroSectionNav />
      <ServicesOffer />
      <Faqs />
      <ContactSection />
    </section>
  );
};

export default page;
