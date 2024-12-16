import React from "react";

const ServicesOffer = () => {
  return (
    <div className="services-offer">
      <h1>We offer various services</h1>
      <div className="services-offer-cards">
        <div className="services-offer-card">
          <img src="/offer1.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Motion Graphics</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer2.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>2D & 3D Animation</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer3.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Social Media Content</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer4.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Video Editing</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer5.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>VFX & Effects</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer6.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Graphic Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
