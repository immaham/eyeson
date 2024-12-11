"use client";

const HeroSectionCenter = () => {
  return (
    <section className="hero-section-center">
      <img src="../hero-light-1.svg" className="hero-light-1 light-off" />
      <img src="../hero-light-2.svg" className="hero-light-2 light-off" />
      <div className="hero-eye-top">
        <img src="../vector.svg" className="hero-eye-circle-top" />
        <img src="../rectangle.png" />
      </div>
      <div className="hero-title">
        <h1>Excellence</h1>
        <h1>in</h1>
        <h1>every</h1>
        <h1> detail</h1>
      </div>
      <div className="hero-eye-down">
        <img src="../rectangle.png" />
        <img src="../vector.svg" className="hero-eye-circle-down" />
      </div>
    </section>
  );
};

export default HeroSectionCenter;
