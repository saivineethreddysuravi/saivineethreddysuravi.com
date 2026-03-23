"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink, scroller } from "react-scroll";
import { personalInfo } from "@/data/portfolio";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const handleScroll = (target: string) => {
    scroller.scrollTo(target, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: -100,
    });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] selection:bg-[#2997ff]/30 selection:text-white pt-20">
      
      {/* Refined Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(41,151,255,0.08)_0%,_transparent_60%)] blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(157,0,255,0.08)_0%,_transparent_60%)] blur-[80px]" />
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-inner">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34d399]"></span>
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">Available for Opportunities</span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] text-white mb-8 leading-[1.05] max-w-5xl"
        >
          Senior Data Analyst building
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
            {" "}high-impact enterprise solutions
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg md:text-2xl text-white/50 font-light leading-relaxed mb-12"
        >
          Specializing in cloud architecture, ETL engineering, and strategic BI reporting to drive revenue and operational efficiency.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll("projects")}
            className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-wide">
              View Case Studies <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2 text-sm tracking-wide font-medium"
          >
            <FaLinkedin className="text-white/60 group-hover:text-[#0a66c2] transition-colors" /> Let's Connect
          </a>
        </motion.div>

      </div>

      {/* Decorative Bottom Gradient Line */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
