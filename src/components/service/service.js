import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./service.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Service = ({ type }) => {
  const ref = useRef();

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform values for parallax effect
  const yMountains = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Background gradient and heading text
  const backgroundStyle =
    type === "services"
      ? "linear-gradient(180deg, #111132, #0c01d)"
      : "linear-gradient(180deg, #111132, #505064)";
  const headingText = type === "services" ? "What We Do?" : "What We Did?";

  return (
    <div
      className="service"
      ref={ref}
      style={{
        background: backgroundStyle,
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Centered Heading Text */}
      <motion.h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "3rem",
          textAlign: "center",
          fontWeight: "bold",
          zIndex: 5,
        }}
      >
        {headingText}
      </motion.h1>

      {/* Background Layers */}
      <motion.img
        src="/stars.png"
        style={{
          y: yStars,
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
        alt="Stars"
      />
      <motion.img
        src="/planets.png"
        
        style={{
          y: yPlanets,
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          zIndex: 2,
        }}
        alt="Planets"
      />
      <motion.img
        src="/mountains.png"
        style={{
          y: yMountains,
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          zIndex: 3,
        }}
        alt="Mountains"
      />
    </div>
  );
};

Service.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Service;
