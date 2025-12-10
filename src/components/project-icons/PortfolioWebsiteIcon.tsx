"use client";

import { motion } from "framer-motion";

interface PortfolioWebsiteIconProps {
  width?: number;
  height?: number;
}

export default function PortfolioWebsiteIcon({ width = 800, height = 450 }: PortfolioWebsiteIconProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const browserAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const lineDraw = {
    hidden: { scaleX: 0, transformOrigin: "left", opacity: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1, duration: 0.6 },
    }),
  };
  
  const buttonAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.2 } },
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
        <pattern id="pwSmallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" strokeWidth="0.5" />
        </pattern>
        <pattern id="pwGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#pwSmallGrid)" />
          <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" strokeWidth="1" />
        </pattern>
        <linearGradient id="pwFrameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2A" />
          <stop offset="1" stopColor="#0A0A1A" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <rect width="100%" height="100%" fill="url(#pwGrid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#pwFrameGradient)"
        stroke="#4A4A6A"
        strokeWidth="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />

      {/* Animated Browser Window */}
      <motion.g initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={browserAnimation}>
        <rect x="100" y="80" width="600" height="300" rx="8" fill="#1A1A2A" />
        <rect x="100" y="80" width="600" height="30" fill="#2C2C3A" rx="8" />
        <circle cx="115" cy="95" r="5" fill="#FF5F56" />
        <circle cx="135" cy="95" r="5" fill="#FFBD2E" />
        <circle cx="155" cy="95" r="5" fill="#27C93F" />

        {/* Hero Section Placeholder */}
        <motion.rect x="150" y="140" width="400" height="20" rx="4" fill="#00BFFF" variants={lineDraw} custom={0} />
        <motion.rect x="150" y="180" width="350" height="15" rx="4" fill="#64748B" variants={lineDraw} custom={1} />
        <motion.rect x="150" y="205" width="300" height="15" rx="4" fill="#64748B" variants={lineDraw} custom={2} />

        {/* Call to Action Buttons */}
        <motion.rect x="150" y="250" width="100" height="30" rx="15" fill="#8AFF8A" variants={buttonAnimation} custom={0} />
        <motion.rect x="270" y="250" width="100" height="30" rx="15" fill="#7B68EE" variants={buttonAnimation} custom={1} />
      </motion.g>

    </motion.svg>
  );
}
