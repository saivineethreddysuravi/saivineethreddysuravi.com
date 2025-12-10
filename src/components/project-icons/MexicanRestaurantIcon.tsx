"use client";

import { motion } from "framer-motion";

interface MexicanRestaurantIconProps {
  width?: number;
  height?: number;
}

export default function MexicanRestaurantIcon({ width = 800, height = 450 }: MexicanRestaurantIconProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

  const barGrow = {
    hidden: { width: 0, opacity: 0 },
    visible: (i: number) => ({
      width: [180, 150, 120][i % 3], // Varying widths
      opacity: 1,
      transition: { duration: 0.7, delay: 2.2 + i * 0.1 },
    }),
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
        <pattern id="mrSmallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" strokeWidth="0.5" />
        </pattern>
        <pattern id="mrGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#mrSmallGrid)" />
          <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" strokeWidth="1" />
        </pattern>
        <linearGradient id="mrFrameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2A" />
          <stop offset="1" stopColor="#0A0A1A" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <rect width="100%" height="100%" fill="url(#mrGrid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#mrFrameGradient)"
        stroke="#4A4A6A"
        strokeWidth="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />

      {/* Map (simplified) */}
      <motion.rect x="80" y="80" width="300" height="200" fill="#38a169" rx="5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }} />
      <motion.circle cx="150" cy="150" r="8" fill="#e53e3e" variants={mapDotAnimation} custom={0} />
      <motion.circle cx="250" cy="120" r="8" fill="#e53e3e" variants={mapDotAnimation} custom={1} />
      <motion.circle cx="300" cy="200" r="8" fill="#e53e3e" variants={mapDotAnimation} custom={2} />
      <motion.text x="100" y="70" fontFamily="sans-serif" fontSize="16" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.8 } }}>Locations</motion.text>

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
        <motion.text x="140" y="5" fontFamily="sans-serif" fontSize="20" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 2 } }}>4.5 Stars</motion.text>
      </g>

      {/* Top Dishes Bar Chart */}
      <motion.rect x="80" y="300" width="600" height="100" fill="#1A1A2A" rx="8" initial={{ scaleX: 0, transformOrigin: "left" }} whileInView={{ scaleX: 1, opacity: 1, transition: { duration: 0.8, delay: 2.5 } }} />
      <motion.text x="100" y="290" fontFamily="sans-serif" fontSize="16" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 2.7 } }}>Top Dishes</motion.text>
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={100}
          y={310 + i * 25}
          height="15"
          fill="#ecc94b"
          variants={barGrow}
          custom={i}
        />
      ))}
      <motion.text x="300" y="325" fontFamily="sans-serif" fontSize="14" fill="#cbd5e0" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 3.2 } }}>Tacos</motion.text>
      <motion.text x="270" y="350" fontFamily="sans-serif" fontSize="14" fill="#cbd5e0" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 3.4 } }}>Burritos</motion.text>
      <motion.text x="240" y="375" fontFamily="sans-serif" fontSize="14" fill="#cbd5e0" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 3.6 } }}>Enchiladas</motion.text>

    </motion.svg>
  );
}
