import React from "react";

const HeroSectionCenter = () => {
  return (
    <section className="hero-section-center">
      <img src="../hero-light-1.svg" className="hero-light-1" />
      <img src="../hero-light-2.svg" className="hero-light-2" />
      {/* <div className="hero-dark-container"></div>
      <div className="hero-light-left-container">
        <svg
          className="hero-light-left light"
          xmlns="http://www.w3.org/2000/svg"
          width="1037"
          height="667"
          viewBox="0 0 1037 667"
          fill="none"
        >
          <g filter="url(#filter0_f_1_10895)">
            <path
              d="M469.245 198.363C581.316 196.589 495.823 439.5 810.4 339.567C782.789 446.509 775.5 512.5 657.5 512.5C642.5 608.689 540.085 628.175 476.064 629.189C527.323 315.5 203.706 499.969 201.823 381C484.745 320.5 357.174 200.136 469.245 198.363Z"
              fill="#71C3D0"
              fillOpacity="0.23"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_10895"
              x="-24.1772"
              y="-27.647"
              width="1060.58"
              height="882.836"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="113"
                result="effect1_foregroundBlur_1_10895"
              />
            </filter>
          </defs>
        </svg>
      </div> */}
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
