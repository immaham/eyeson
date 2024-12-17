import React from "react";
import ViewMoreBtn from "./ViewMoreBtn";

const Gallery = () => {
  return (
    <section className="services-gallery">
      <div className="header">
        <h1>Gallery of various projects</h1>
        <ViewMoreBtn text="Portfolio" />
      </div>
      <section className="sliders-container">
        <div className="slider">
          <div className="card" style={{ "--position": 1 }}>
            <img src="./services-gallery3.jpeg" />
            <div className="overlay"></div>
          </div>
          <div className="card" style={{ "--position": 2 }}>
            <img src="./services-gallery2.jpeg" />
            <div className="overlay"></div>
          </div>
          <div className="card" style={{ "--position": 3 }}>
            <img src="./services-gallery1.jpeg" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="slider">
          <div className="card" style={{ "--position": 1 }}>
            <img src="./services-gallery4.png" />
            <div className="overlay"></div>
          </div>
          <div className="card" style={{ "--position": 2 }}>
            <img src="./services-gallery5.png" />
            <div className="overlay"></div>
          </div>
          <div className="card" style={{ "--position": 3 }}>
            <img src="./services-gallery6.jpeg" />
            <div className="overlay"></div>
          </div>
          <div className="card" style={{ "--position": 4 }}>
            <img src="./services-gallery7.png" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="slider" style={{ "--position": 1 }}>
          <div className="card">
            <img src="./services-gallery8.jpeg" />
            <div className="overlay"></div>
          </div>
          <div className="card" style={{ "--position": 2 }}>
            <img src="./services-gallery9.png" />
            <div className="overlay"></div>
          </div>
          <div className="card" style={{ "--position": 3 }}>
            <img src="./services-gallery10.jpeg" />
            <div className="overlay"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Gallery;
