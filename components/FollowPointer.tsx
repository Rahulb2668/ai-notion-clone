import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FollowPointer = ({
  info,
  x,
  y,
}: {
  info: {
    name: string;
    email: string;
    avatar: string;
  };
  x: number;
  y: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const color = stringToHexColor(info.email || "1");
  const displayName = info.name || info.email.split("@")[0];

  // Trigger pulse animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom cursor with pulsing effect */}
      <motion.div
        key={animationKey}
        initial={{ scale: 1, opacity: 0.9 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.9, 0.7, 0.9],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.6, 1],
        }}
        className="relative"
      >
        {/* SVG Cursor */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="absolute"
          style={{ top: -10, left: -10 }}
        >
          {/* Outer ring */}
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
          />

          {/* Inner dot */}
          <circle cx="12" cy="12" r="4" fill={color} />

          {/* Decorative elements */}
          <path
            d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* User info tooltip */}
        <motion.div
          className="absolute rounded-lg px-3 py-1 text-xs font-medium whitespace-nowrap shadow-lg"
          style={{
            backgroundColor: `${color}22` /* Color with 22 opacity */,
            borderLeft: `3px solid ${color}`,
            color: color,
            left: 20,
            top: -10,
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
        >
          {displayName}
        </motion.div>
      </motion.div>

      {/* Ripple effect (appears periodically) */}
      <motion.div
        key={`ripple-${animationKey}`}
        className="absolute rounded-full"
        style={{
          border: `2px solid ${color}`,
          top: 2,
          left: 2,
        }}
        initial={{ width: 0, height: 0, opacity: 0.7 }}
        animate={{
          width: 40,
          height: 40,
          opacity: 0,
          top: -18,
          left: -18,
        }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default FollowPointer;
