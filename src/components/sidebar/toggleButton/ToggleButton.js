import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Top Line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        {/* Middle Line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          d="M 2 9.423 L 20 9.423"
        />
        {/* Bottom Line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.5 L 20 16.5" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
