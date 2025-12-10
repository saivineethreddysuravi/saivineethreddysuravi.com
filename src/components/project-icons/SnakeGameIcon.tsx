"use client";

import { motion } from "framer-motion";

interface SnakeGameIconProps {
  width?: number;
  height?: number;
}

export default function SnakeGameIcon({ width = 800, height = 450 }: SnakeGameIconProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const segmentPop = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
  };

  const headPop = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
  };

  const foodPulse = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
      },
    },
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
        <pattern id="sgSmallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" strokeWidth="0.5" />
        </pattern>
        <pattern id="sgGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#sgSmallGrid)" />
          <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" strokeWidth="1" />
        </pattern>
        <linearGradient id="sgFrameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2A" />
          <stop offset="1" stopColor="#0A0A1A" />
        </linearGradient>
        <pattern id="sgGameGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="none" stroke="#3A3A4C" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <rect width="100%" height="100%" fill="url(#sgGrid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#sgFrameGradient)"
        stroke="#4A4A6A"
        strokeWidth="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />

      {/* Game Grid */}
      <rect x="100" y="80" width="600" height="300" fill="#1A1A2A" rx="5" />
      <rect x="100" y="80" width="600" height="300" fill="url(#sgGameGrid)" />


      {/* Snake Body Segments */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={200 + i * 20}
          y="200"
          width="18"
          height="18"
          rx="2"
          fill="#00FF00"
          variants={segmentPop}
          custom={i}
        />
      ))}

      {/* Snake Head */}
      <motion.rect
        x="280"
        y="200"
        width="18"
        height="18"
        rx="4"
        fill="#00FFFF"
        variants={headPop}
      />

      {/* Food */}
      <motion.rect
        x="500"
        y="150"
        width="18"
        height="18"
        rx="4"
        fill="#FF0000"
        variants={foodPulse}
      />
    </motion.svg>
  );
}
