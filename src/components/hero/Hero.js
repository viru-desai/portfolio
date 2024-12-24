import { motion } from "framer-motion";
import "./hero.css";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const buttonVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const scrollButtonVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Hero = () => {
  const scrollToNext = () => {
    document
      .getElementById("Services") // Replace 'Services' with the ID of the next section
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Virupakshi DESAI</motion.h2>
          <motion.h1 variants={textVariants}>WEB DEVELOPER AND UI DESIGNER</motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.div
              className="button"
              variants={buttonVariants}
              onClick={() => alert("See the Latest Works")}
            >
              See the Latest Works
            </motion.div>
            <motion.div
              className="button"
              variants={buttonVariants}
              onClick={() => alert("Contact Me")}
            >
              Contact Me
            </motion.div>
          </motion.div>

          <motion.img
            className="scroll"
            variants={scrollButtonVariants}
            initial="initial"
            animate="animate"
            src="/scroll.png"
            alt="Scroll Down"
            onClick={scrollToNext}
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
