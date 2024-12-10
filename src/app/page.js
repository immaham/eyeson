import ContactSection from "./components/ContactSection";
import EyesOn from "./components/EyesOn";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import HeroSectionBtn from "./components/HeroSectionBtn";
import HeroSectionCenter from "./components/HeroSectionCenter";
import HeroSectionNav from "./components/HeroSectionNav";
import KeyProject from "./components/KeyProject";
import Mission from "./components/Mission";
import MouseLight from "./components/MouseLight";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="body-container">
      <MouseLight />
      <main className="main">
        {/* <img src="../ellipse2.svg" className="ellipse2 light" />
        <img src="../ellipse4.svg" className="ellipse5 light" /> */}
        <secion>
          <section className="hero-section">
            <HeroSectionNav />
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
