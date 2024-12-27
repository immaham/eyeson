"use client";

const HeroSectionNav = ({ route }) => {
  console.log(route);
  return (
    <section className="nav">
      <nav className="nav-container">
        <div className="nav-logo">
          <img src="../logo.png" />
          <p>EysOn</p>
        </div>
        <img src="../hero-light-center.svg" className="hero-light-center" />
        <img src="../hero-light-3.svg" className="hero-light-3" />
        <img src="../hero-light-4.svg" className="hero-light-4" />
        <img src="../hero-light-5.svg" className="hero-light-5" />
        <img src="../hero-light-6.svg" className="hero-light-6" />
        <img src="../hero-light-7.svg" className="hero-light-7" />
        <div className="nav-links">
          <a href="/">
            <p className={route === "/" ? "nav-link-active" : ""}>Home</p>
          </a>
          <a href="/services">
            <p className={route === "/services" ? "nav-link-active" : ""}>
              Services
            </p>
          </a>
          <a href="/portfolio">
            <p className={route === "/portfolio" ? "nav-link-active" : ""}>
              Portfolio
            </p>
          </a>
        </div>
        <div className="nav-motion-container">
          <p className="nav-motion">Motion Graphic</p>
          <p className="nav-motion">VFX & Effects</p>
          <p className="nav-motion">2D 3D Animations</p>
          <p className="nav-motion">Social Media Content</p>
          <p className="nav-motion">Video Editting</p>
          <p className="nav-motion">Graphic Design</p>
        </div>
      </nav>
    </section>
  );
};

export default HeroSectionNav;
