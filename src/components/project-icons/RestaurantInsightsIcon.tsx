"use client";

import { motion } from "framer-motion";

interface RestaurantInsightsIconProps {
  width?: number;
  height?: number;
}

export default function RestaurantInsightsIcon({ width = 800, height = 450 }: RestaurantInsightsIconProps) {
  const chartAnimation = {
    hidden: { scaleY: 0, transformOrigin: "bottom" },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1, delay: i * 0.1 },
    }),
  };

  const lineAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, delay: 0.5 } },
  };

  const textAnimation = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
  };

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <rect width="800" height="450" fill="#2d3748" />

      {/* Main dashboard area */}
      <rect x="50" y="50" width="700" height="350" rx="10" fill="#1a202c" />

      {/* Sales Trend Line Chart */}
      <motion.path d="M80 300 L180 250 L280 280 L380 200 L480 230 L580 180 L680 210" stroke="#f6ad55" stroke-width="4" fill="none" variants={lineAnimation} />
      <motion.text x="100" y="100" font-family="sans-serif" font-size="24" fill="white" variants={textAnimation}>Sales Trend</motion.text>
      
      {/* Customer Satisfaction Pie Chart (simplified) */}
      <motion.circle cx="600" cy="150" r="60" fill="#38a169" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true, amount: 0.5 }} />
      <motion.text x="600" y="160" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle" variants={textAnimation} custom={0.1}>8/10</motion.text>
      <motion.text x="600" y="190" font-family="sans-serif" font-size="16" fill="#cbd5e0" text-anchor="middle" variants={textAnimation} custom={0.2}>Satisfaction</motion.text>

      {/* Top 3 Restaurants (Bar Chart) */}
      <rect x="80" y="300" width="300" height="80" fill="#2d3748" rx="8" />
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={100}
          y={320 + i * 25}
          width={250 - i * 50} // Varying widths
          height="15"
          fill="#3b82f6"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 250 - i * 50, opacity: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
      ))}
      <motion.text x="100" y="310" font-family="sans-serif" font-size="16" fill="white" variants={textAnimation} custom={0.3}>Top Restaurants</motion.text>

    </motion.svg>
  );
}
