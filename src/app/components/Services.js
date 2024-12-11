"use client";
import ViewMoreBtn from "./ViewMoreBtn";

const Services = () => {
  return (
    <section className="services">
      <div className="services-info">
        <img
          src="../services-light-left.svg"
          className="services-light-left light-off"
        />
        <img
          src="../services-light-right-1.svg"
          className="services-light-right-1 light-off"
        />
        <img
          src="../services-light-right-2.svg"
          className="services-light-right-2 light-off"
        />
        <img src="./logo-svg.svg" className="services-eye-logo" />
        <h1>Services</h1>
        <p>
          Detailed information about our motion graphics and animation services,
          including examples and benefits.
        </p>
        <div className="services-btn">
          <ViewMoreBtn text="View More" className="services-btn" />
        </div>
      </div>
      <div className="services-cards">
        <div className="services-card">
          <h1>Motion Graphic</h1>
          <p>
            Detailed information about our motion graphics and animation
            services, including examples and benefits.
          </p>
        </div>
        <div className="services-card">
          <h1>2D & 3D Animations</h1>
          <p>
            An overview of our 3D video production services, showcasing our
            capabilities and past projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
