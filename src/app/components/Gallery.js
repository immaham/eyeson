import React from "react";
import ViewMoreBtn from "./ViewMoreBtn";
import ViewMoreBtnTransparent from "./ViewMoreBtnTransparent";

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
            <ViewMoreBtnTransparent />
          </div>
          <div className="card" style={{ "--position": 2 }}>
            <img src="./services-gallery2.jpeg" />
            <ViewMoreBtnTransparent />
          </div>
          <div className="card" style={{ "--position": 3 }}>
            <img src="./services-gallery1.jpeg" />
            <ViewMoreBtnTransparent />
          </div>
        </div>
        <div className="slider">
          <div className="card" style={{ "--position": 1 }}>
            <img src="./services-gallery4.png" />
            {/* <ViewMoreBtnTransparent /> */}
          </div>
          <div className="card" style={{ "--position": 2 }}>
            <img src="./services-gallery5.png" />
            <ViewMoreBtnTransparent />
          </div>
          <div className="card" style={{ "--position": 3 }}>
            <img src="./services-gallery6.jpeg" />
            <ViewMoreBtnTransparent />
          </div>
          <div className="card" style={{ "--position": 4 }}>
            <img src="./services-gallery7.png" />
            {/* <ViewMoreBtnTransparent /> */}
          </div>
        </div>
        <div className="slider" style={{ "--position": 1 }}>
          <div className="card">
            <img src="./services-gallery8.jpeg" />
            <ViewMoreBtnTransparent />
          </div>
          <div className="card" style={{ "--position": 2 }}>
            <img src="./services-gallery9.png" />
            <ViewMoreBtnTransparent />
          </div>
          <div className="card" style={{ "--position": 3 }}>
            <img src="./services-gallery10.jpeg" />
            <ViewMoreBtnTransparent />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Gallery;
