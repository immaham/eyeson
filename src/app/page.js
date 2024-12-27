"use client";
import ContactSection from "./components/ContactSection";
import EyesOn from "./components/EyesOn";
import Faqs from "./components/Faqs";
import HeroSectionBtn from "./components/HeroSectionBtn";
import HeroSectionCenter from "./components/HeroSectionCenter";
import HeroSectionNav from "./components/HeroSectionNav";
import KeyProject from "./components/KeyProject";
import Mission from "./components/Mission";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="body-container">
      <main className="main">
        <secion>
          <section className="hero-section">
            <HeroSectionNav route={"/"} />
            <HeroSectionCenter />
            <HeroSectionBtn />
          </section>
          <Mission />
          <Services />
          <KeyProject />
          <Portfolio />
          <EyesOn />
          <Faqs />
          <ContactSection />
        </secion>
      </main>
    </div>
  );
}
