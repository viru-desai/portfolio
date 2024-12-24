import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Variants for individual items
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div
      className="links"
      variants={variants}
      initial="closed" // Initial animation state
      animate="open" // Active animation state
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1}} // Hover effect
          whileTap={{ scale: 0.95 }} // Tap effect
          style={{
            textDecoration: "none",
            fontSize: "24px",
            color: "black",
            margin: "10px 0",
          }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
