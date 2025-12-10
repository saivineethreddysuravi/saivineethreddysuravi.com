"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { personalInfo } from "@/data/portfolio";

const MotionScrollLink = motion(ScrollLink);

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Apple-style easing
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-white leading-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-500 mb-6">
            Data driven. <br />
            <span className="text-blue-500">Business focused.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed mb-12 font-light">
            Transforming raw data into clear, actionable strategies. 
            I build the bridges between complex numbers and smart decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <MotionScrollLink
            to="projects"
            smooth={true}
            duration={800}
            className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-gray-200 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(41, 151, 255, 0.6), 0 0 16px rgba(41, 151, 255, 0.4)" }}
            whileTap={{ scale: 1.05, rotate: [0, -1, 1, -1, 0], boxShadow: "0 0 8px rgba(41, 151, 255, 0.8), 0 0 20px rgba(41, 151, 255, 0.6)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            View Projects
          </MotionScrollLink>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(41, 151, 255, 0.6), 0 0 16px rgba(41, 151, 255, 0.4)" }}
            whileTap={{ scale: 1.05, rotate: [0, -1, 1, -1, 0], boxShadow: "0 0 8px rgba(41, 151, 255, 0.8), 0 0 20px rgba(41, 151, 255, 0.6)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}