import React from "react";

const Ideas = () => {
  return (
    <section className="portfolio-ideas">
      <h1>Let’s Make Your Ideas Unforgettable</h1>
      <img src="./ideas-background.png" className="background" />
      <div className="cards">
        <div className="card">
          <img src="./portfolio-page-light1.svg" className="light" />
          <img src="./vision-icon.svg" className="icon" />
          <h1>Your Vision, Our Expertise</h1>
          <p>
            Whether you need eye-catching designs, stunning animations, or
            impactful VFX, we’re here to bring your ideas to life. Our team
            tailors every project to fit your brand's unique voice and message.
          </p>
        </div>
        <div className="card">
          <img src="./portfolio-page-light2.svg" className="light" />
          <img src="./idea-icon.svg" className="icon" />
          <h1>Transforming Ideas into Visual Impact</h1>
          <p>
            From concept to completion, we handle every aspect of visual
            storytelling to ensure your project stands out. We’re ready to craft
            visuals that connect, engage, and inspire your audience.
          </p>
        </div>
        <div className="card">
          <img src="./portfolio-page-light3.svg" className="light" />
          <img src="./target-icon.svg" className="icon" />
          <h1>Creating Visuals with Purpose</h1>
          <p>
            Our services go beyond aesthetics; we focus on delivering visuals
            that communicate and captivate. Let’s collaborate to make your
            message unforgettable through design, animation, and VFX.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ideas;
