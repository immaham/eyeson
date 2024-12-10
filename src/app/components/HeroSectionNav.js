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
        <div className="nav-links">
          <a href="#">
            <p className="nav-link-home">Home</p>
          </a>
          <a href="#">
            <p className="nav-link-services">Services</p>
          </a>
          <a href="#">
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
