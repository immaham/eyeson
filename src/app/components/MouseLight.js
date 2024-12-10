"use client";
import { useEffect, useState } from "react";
import styles from "../styles/MouseLight.module.css";

const MouseLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.light}
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    ></div>
  );
};

export default MouseLight;
