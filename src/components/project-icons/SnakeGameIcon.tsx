"use client";

import { motion } from "framer-motion";

interface SnakeGameIconProps {
  width?: number;
  height?: number;
}

export default function SnakeGameIcon({ width = 800, height = 450 }: SnakeGameIconProps) {
  const snakeSegments = [
    { x: 200, y: 200 },
    { x: 240, y: 200 },
    { x: 280, y: 200 },
    { x: 320, y: 200 },
  ];

  const foodPosition = { x: 520, y: 120 };

  const segmentVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const headVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: snakeSegments.length * 0.1,
        duration: 0.3,
      },
    },
  };

  const foodVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: [0, 10, -10, 0],
      transition: {
        delay: (snakeSegments.length + 1) * 0.1,
        duration: 0.5,
      },
    },
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
      <rect width="800" height="450" fill="#09090b" />

      {/* Grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="800" height="450" fill="url(#grid)" />

      {/* Snake Body */}
      {snakeSegments.map((segment, i) => (
        <motion.rect
          key={i}
          x={segment.x}
          y={segment.y}
          width="38"
          height="38"
          rx="4"
          fill="#22c55e"
          variants={segmentVariants}
          custom={i}
        />
      ))}

      {/* Snake Head */}
      <motion.rect
        x="360"
        y="200"
        width="38"
        height="38"
        rx="8"
        fill="#4ade80"
        variants={headVariants}
      >
        <circle cx="372" cy="212" r="3" fill="#000" />
        <circle cx="372" cy="228" r="3" fill="#000" />
      </motion.rect>

      {/* Food */}
      <motion.rect
        x={foodPosition.x}
        y={foodPosition.y}
        width="38"
        height="38"
        rx="8"
        fill="#ef4444"
        variants={foodVariants}
      >
        <motion.path d="M539 116V120M539 120H542" stroke="#166534" stroke-width="2" stroke-linecap="round" />
      </motion.rect>
    </motion.svg>
  );
}
