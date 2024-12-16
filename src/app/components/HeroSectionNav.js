"use client";
const HeroSectionNav = () => {
  return (
    <section className="nav">
      <nav className="nav-container">
        <div className="nav-logo">
          <img src="../logo.png" />
          {/* <img src="../frame953.svg" className="light-top" /> */}
          {/* <img src="../ellipse3.svg" className="ellipse3 light" />
          <img src="../vector2.svg" className="vector2 light" />
          <img src="../vector3.svg" className="vector3 light" />
          <img src="../ellipse4.svg" className="ellipse4 light" />
          <img src="../vector4.svg" className="vector4 light" />
          <img src="../vector5.svg" className="vector5 light" /> */}
          <p>EysOn</p>
        </div>
        <img src="../hero-light-center.svg" className="hero-light-center" />
        <img src="../hero-light-3.svg" className="hero-light-3 light-off" />
        <img src="../hero-light-4.svg" className="hero-light-4 light-off" />
        <img src="../hero-light-5.svg" className="hero-light-5 light-off" />
        <img src="../hero-light-6.svg" className="hero-light-6 light-off" />
        <img src="../hero-light-7.svg" className="hero-light-7 light-off" />
        <div className="nav-links">
          <a href="/">
            <p className="nav-link-home">Home</p>
          </a>
          <a href="/services">
            <p className="nav-link-services">Services</p>
          </a>
          <a href="/portfolio">
            <p className="nav-link-portfolio">Portfolio</p>
          </a>
        </div>
        <div>
          <p className="nav-motion">Motion Graphic</p>
        </div>
      </nav>
    </section>
  );
};

export default HeroSectionNav;
