import React from "react";
import ViewMoreBtn from "./../components/ViewMoreBtn";

const KeyProject = () => {
  return (
    <section className="key-projects">
      <div className="key-projects-heading">
        <h1 className="key-projects-h1">Key Projects & Case Studies</h1>
        <h1 className="key-projects-h2">Case Studies</h1>
        {/* <img src="./ellipse158.svg" className="ellipse-158 light" />
        <img src="./ellipse158.svg" className="ellipse-159 light" /> */}
        <ViewMoreBtn text="View More" />
      </div>
      <div className="key-projects-project-mobile">
        <div className="key-projects-project-left-2">
          <div className="key-projects-project-mobile-label">
            <div>
              <p className="key-projects-project-mobile-label-tag">3D Design</p>
              <img src="./play-logo.svg" />
            </div>
            <h1>A brand 3d Design Characteristic for growth</h1>
            <p className="key-projects-project-mobile-label-text">
              Detailed information about our motion graphics and animation
              services, including examples and benefits.
            </p>
          </div>
        </div>
        <div className="key-projects-project-right-second-2">
          <div className="key-projects-project-mobile-label">
            <div>
              <p className="key-projects-project-mobile-label-tag">3D Design</p>
              <img src="./play-logo.svg" />
            </div>
            <h1>A brand 3d Design Characteristic for growth</h1>
            <p className="key-projects-project-mobile-label-text">
              Detailed information about our motion graphics and animation
              services, including examples and benefits.
            </p>
          </div>
        </div>
      </div>
      <div className="key-projects-project">
        <div className="key-projects-project-right"></div>
        <div className="key-projects-project-left">
          <div className="key-projects-project-left-overlay">
            <p>3D Design</p>
            <h1>A brand 3d Design Characteristic for growth</h1>
            <p>
              Detailed information about our motion graphics and animation
              services, including examples and benefits.
            </p>
            <ViewMoreBtn text="View Project" />
          </div>
        </div>
      </div>
      <div className="key-projects-project-second">
        <div className="key-projects-project-left-second">
          <div className="key-projects-project-left-overlay-second">
            <p>3D Design</p>
            <h1>A brand 3d Design Characteristic for growth</h1>
            <p>
              Detailed information about our motion graphics and animation
              services, including examples and benefits.
            </p>
            <ViewMoreBtn text="View Project" />
          </div>
        </div>
        <div className="key-projects-project-right-second"></div>
      </div>
    </section>
  );
};

export default KeyProject;
