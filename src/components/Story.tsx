
"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const StorySection: React.FC<StorySectionProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h2
          className="text-6xl font-black tracking-wider uppercase text-glow"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-2xl font-light mt-4 text-cyan-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Story: React.FC = () => {
  const stories = [
    {
      title: "The Professional",
      description: "Driven by data, passionate about technology.",
      imageUrl: "https://i.ibb.co/yYgKA0H/professional.png",
    },
    {
      title: "The Sportsman",
      description: "In the zone, on and off the field.",
      imageUrl: "https://i.ibb.co/9N2xY5B/sportsman.png",
    },
    {
      title: "The Team Player",
      description: "Stronger together, succeeding as one.",
      imageUrl: "https://i.ibb.co/yYgKA0H/professional.png",
    },
  ];

  return (
    <section id="story">
      {stories.map((story, index) => (
        <StorySection key={index} {...story} />
      ))}
    </section>
  );
};

export default Story;
