import React from "react";

const Vision = () => {
  return (
    <section className="portfolio-vision">
      <h1 className="header-responsive">
        Where Vision Meets Craft in Portfolio
      </h1>
      <img src="./offer4.jpg" className="background" />
      <img src="./portfolio-light1.svg" className="portfolio-light1" />
      <div className="images-container">
        <div className="images-flex">
          <div className="image-container absolute">
            <img src="./services-gallery2.jpeg" />
          </div>
          <div className="image-container absolute">
            <img src="./offer5.jpg" />
          </div>
        </div>
        <div className="images-flex">
          <div className="image-container">
            <img src="./offer1.jpg" />
          </div>
          <div className="image-container">
            <img src="./offer4.jpg" />
          </div>
        </div>
        <div className="images-flex">
          <div className="image-container">
            <img src="./offer3.jpg" />
          </div>
          <div className="image-container">
            <img src="./offer2.jpg" />
          </div>
        </div>
      </div>
      <p className="header-responsive">
        Discover our portfolio, where creative vision meets expert
        craftsmanship. From stunning graphic design to immersive 2D and 3D
        animations, dynamic video productions, and cutting-edge VFX, our work
        spans a wide range of visual storytelling. Each project reflects our
        dedication to bringing ideas to life with impact and precision,
        showcasing our skill in turning concepts into compelling visuals. Dive
        in to see how our team of designers, animators
      </p>
      <div className="content">
        <h1>Where Vision Meets Craft in Portfolio</h1>
        <p>
          Discover our portfolio, where creative vision meets expert
          craftsmanship. From stunning graphic design to immersive 2D and 3D
          animations, dynamic video productions, and cutting-edge VFX, our work
          spans a wide range of visual storytelling. Each project reflects our
          dedication to bringing ideas to life with impact and precision,
          showcasing our skill in turning concepts into compelling visuals. Dive
          in to see how our team of designers, animators
        </p>
      </div>
    </section>
  );
};

export default Vision;
