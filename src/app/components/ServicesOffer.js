const ServicesOffer = () => {
  return (
    <div className="services-offer">
      <h1>We offer various services</h1>
      <div className="services-offer-slider">
        <div className="cards">
          <div className="card" style={{ "--position": 6 }}>
            <img src="/offer1.jpg" />
            <div className="overlay">
              <p>Motion Graphics</p>
            </div>
          </div>
          <div className="card" style={{ "--position": 5 }}>
            <img src="/offer2.jpg" />
            <div className="overlay">
              <p>2D & 3D Animation</p>
            </div>
          </div>
          <div className="card" style={{ "--position": 4 }}>
            <img src="/offer3.jpg" />
            <div className="overlay">
              <p>Social Media Content</p>
            </div>
          </div>
          <div className="card" style={{ "--position": 3 }}>
            <img src="/offer4.jpg" />
            <div className="overlay">
              <p>Video Editing</p>
            </div>
          </div>
          <div className="card" style={{ "--position": 2 }}>
            <img src="/offer5.jpg" />
            <div className="overlay">
              <p>VFX & Effects</p>
            </div>
          </div>
          <div className="card" style={{ "--position": 1 }}>
            <img src="/offer6.jpg" />
            <div className="overlay">
              <p>Graphic Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
