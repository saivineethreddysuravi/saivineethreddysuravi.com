"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink, scroller } from "react-scroll";
import { personalInfo } from "@/data/portfolio";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const handleScroll = (target: string) => {
    scroller.scrollTo(target, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: -50,
    });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black selection:bg-[#2997ff] selection:text-white">
      
      {/* Cinematic Background Glows */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#2997ff]/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-[#9d00ff]/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-white/60">Available for Hire</span>
          </div>
        </motion.div>

        {/* Massive Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
        >
          Data Intelligence.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            Engineered.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10"
        >
          Hi, I'm <span className="text-white font-medium">{personalInfo.name}</span>. 
          <br className="hidden md:block" />
          A <span className="text-[#2997ff]">Data Analyst</span> turning complex datasets into strategic decisions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 items-center"
        >
          <button
            onClick={() => handleScroll("projects")}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors backdrop-blur-md font-medium flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>

    </section>
  );
}
