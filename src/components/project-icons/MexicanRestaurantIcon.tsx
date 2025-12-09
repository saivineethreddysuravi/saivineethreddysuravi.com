"use client";

import { motion } from "framer-motion";

interface MexicanRestaurantIconProps {
  width?: number;
  height?: number;
}

export default function MexicanRestaurantIcon({ width = 800, height = 450 }: MexicanRestaurantIconProps) {
  const mapDotAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const starAnimation = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.4, delay: 1.5 + i * 0.1 },
    }),
  };

  const barAnimation = {
    hidden: { width: 0, opacity: 0 },
    visible: (i: number) => ({
      width: [180, 150, 120][i % 3], // Varying widths
      opacity: 1,
      transition: { duration: 0.7, delay: 2.2 + i * 0.1 },
    }),
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

      {/* Main content area */}
      <rect x="50" y="50" width="700" height="350" rx="10" fill="#1a202c" />

      {/* Map (simplified) */}
      <rect x="80" y="80" width="300" height="200" fill="#38a169" rx="5" />
      <motion.circle cx="150" cy="150" r="8" fill="#e53e3e" variants={mapDotAnimation} custom={0} />
      <motion.circle cx="250" cy="120" r="8" fill="#e53e3e" variants={mapDotAnimation} custom={1} />
      <motion.circle cx="300" cy="200" r="8" fill="#e53e3e" variants={mapDotAnimation} custom={2} />
      <text x="100" y="70" font-family="sans-serif" font-size="16" fill="white">Locations</text>

      {/* Review Stars */}
      <g transform="translate(450, 100)">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d="M 0,-10 L 2,-2 L 10,0 L 2,2 L 0,10 L -2,2 L -10,0 L -2,-2 Z"
            fill="#f6e05e"
            transform={`translate(${i * 25}, 0) scale(1.5)`}
            variants={starAnimation}
            custom={i}
          />
        ))}
        <text x="140" y="5" font-family="sans-serif" font-size="20" fill="white">4.5 Stars</text>
      </g>

      {/* Top Dishes Bar Chart */}
      <rect x="80" y="300" width="600" height="100" fill="#2d3748" rx="8" />
      <text x="100" y="290" font-family="sans-serif" font-size="16" fill="white">Top Dishes</text>
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={100}
          y={310 + i * 25}
          height="15"
          fill="#ecc94b"
          variants={barAnimation}
          custom={i}
        />
      ))}
      <text x="300" y="325" font-family="sans-serif" font-size="14" fill="#cbd5e0">Tacos</text>
      <text x="270" y="350" font-family="sans-serif" font-size="14" fill="#cbd5e0">Burritos</text>
      <text x="240" y="375" font-family="sans-serif" font-size="14" fill="#cbd5e0">Enchiladas</text>

    </motion.svg>
  );
}
