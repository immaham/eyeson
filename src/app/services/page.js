"use client";
import Benefits from "../components/Benefits";
import ContactSection from "../components/ContactSection";
import Design from "../components/Design";
import Faqs from "../components/Faqs";
import Gallery from "../components/Gallery";
import HeroSectionNav from "../components/HeroSectionNav";
import ServicesOffer from "../components/ServicesOffer";

const page = () => {
  return (
    <section className="services-page-container">
      <HeroSectionNav />
      <ServicesOffer />
      <Design />
      <Gallery />
      <Benefits />
      <Faqs />
      <ContactSection />
    </section>
  );
};

export default page;
