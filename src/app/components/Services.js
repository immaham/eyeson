"use client";
import Lenis from "@studio-freight/lenis";
import ViewMoreBtn from "./ViewMoreBtn";
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

const Services = () => {
  useEffect(() => {
    const splitText = new SplitType(".services-text1", {
      types: "chars", // You can use 'words' or 'lines' as well
      tagName: "span", // Wraps each split part in a <span> tag
    });
    console.log(splitText);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-text1",
        start: "top 90%",
        end: "bottom center",
        toggleActions: "play play none reverse",
      },
    });

    tl.from(".services-card", {
      opacity: 0,
      y: 100,
      duration: 0.8,
      stagger: 0.3,
    }).from(
      splitText.chars,
      {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.005,
        ease: "power2.out",
      },
      "0.5"
    );
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
          <p className="services-text1">
            Detailed information about our motion graphics and animation
            services, including examples and benefits.
          </p>
        </div>
        <div className="services-card">
          <h1>2D & 3D Animations</h1>
          <p className="services-text1">
            An overview of our 3D video production services, showcasing our
            capabilities and past projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
