"use client";

import { motion } from "framer-motion";

interface RestaurantInsightsIconProps {
  width?: number;
  height?: number;
}

export default function RestaurantInsightsIcon({ width = 800, height = 450 }: RestaurantInsightsIconProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5 } },
  };

  const barGrow = {
    hidden: { scaleX: 0, transformOrigin: "left", opacity: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 1.0 + i * 0.1 },
    }),
  };

  const circlePop = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <defs>
        <pattern id="riSmallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" strokeWidth="0.5" />
        </pattern>
        <pattern id="riGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#riSmallGrid)" />
          <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" strokeWidth="1" />
        </pattern>
        <linearGradient id="riFrameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2A" />
          <stop offset="1" stopColor="#0A0A1A" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <rect width="100%" height="100%" fill="url(#riGrid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#riFrameGradient)"
        stroke="#4A4A6A"
        strokeWidth="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />

      {/* Sales Trend Line Chart */}
      <motion.path
        d="M 100 300 Q 200 150 300 250 Q 400 350 500 200 Q 600 100 700 250"
        stroke="#f6ad55" strokeWidth="4" fill="none"
        variants={lineDraw} custom={0}
      />
      <motion.text x="100" y="100" fontFamily="sans-serif" fontSize="24" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1 } }}>Sales Trend</motion.text>
      
      {/* Customer Satisfaction Pie Chart (simplified) */}
      <motion.g transform="translate(600, 150)">
        <motion.circle r="60" fill="#38a169" variants={circlePop} />
        <motion.text x="0" y="10" fontFamily="sans-serif" fontSize="24" fill="white" textAnchor="middle" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1 } }}>8/10</motion.text>
        <motion.text x="0" y="35" fontFamily="sans-serif" fontSize="16" fill="#cbd5e0" textAnchor="middle" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1.2 } }}>Satisfaction</motion.text>
      </motion.g>

      {/* Top 3 Restaurants (Bar Chart) */}
      <g transform="translate(100, 300)">
        <rect width="600" height="100" fill="#1A1A2A" rx="8" />
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={20}
            y={20 + i * 25}
            width="0" height="15"
            fill="#3b82f6"
            initial="hidden"
            whileInView="visible"
            custom={i}
            variants={barGrow}
          />
        ))}
        <motion.text x="20" y="15" fontFamily="sans-serif" fontSize="16" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1.5 } }}>Top Restaurants</motion.text>
      </g>

    </motion.svg>
  );
}
