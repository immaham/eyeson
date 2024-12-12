"use client";
import SplitType from "split-type";
import ViewMoreBtn from "./../components/ViewMoreBtn";
import { gsap } from "gsap";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const KeyProject = () => {
  useEffect(() => {
    const splitText = new SplitType(".key-projects-motion", {
      types: "chars", // You can use 'words' or 'lines' as well
      tagName: "span", // Wraps each split part in a <span> tag
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".key-projects",
        start: "top 90%",
        end: "bottom center",
        toggleActions: "play play reverse reverse",
      },
    });

    tl.from(splitText.chars, {
      duration: 1,
      opacity: 0,
      x: -10,
      stagger: 0.015,
      ease: "power2.out",
    });
    return () => {
      // Cleanup on component unmount
      split.revert();
    };
  }, []);

  useEffect(() => {
    // Initialize Lenis after the component mounts
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // The smooth scroll easing factor
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time); // Update Lenis on each frame
      requestAnimationFrame(raf); // Keep the animation loop running
    }

    requestAnimationFrame(raf); // Start the animation loop

    return () => {
      // Clean up Lenis when the component unmounts
      lenis.destroy();
    };
  }, []);

  return (
    <section className="key-projects">
      <div className="key-projects-heading">
        <h1 className="key-projects-h1">Key Projects & Case Studies</h1>
        <h1 className="key-projects-h2">Case Studies</h1>
        <img
          src="../project-light-left-1.svg"
          className="project-light-left-1 light-off"
        />
        <img
          src="../project-light-left-1.svg"
          className="project-light-left-2 light-off"
        />
        <img
          src="../project-light-left-1.svg"
          className="project-light-right-1 light-off"
        />
        <img
          src="../project-light-left-2.svg"
          className="project-light-right-2 light-off"
        />
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
            <p className="key-projects-project-mobile-label-text key-projects-motion">
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
            <p className="key-projects-project-mobile-label-text key-projects-motion">
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
            <p className="key-projects-motion">
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
            <p className="key-projects-motion">
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
