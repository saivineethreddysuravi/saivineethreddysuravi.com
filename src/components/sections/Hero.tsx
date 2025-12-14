"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { personalInfo } from "@/data/portfolio";
import { FaSearch, FaImage, FaCode, FaChartBar, FaDatabase, FaPython, FaChartPie, FaFileExcel } from "react-icons/fa";
import { useState, useEffect } from "react";

const floatingIcons = [
    { Icon: FaDatabase, color: "text-blue-400", top: "15%", left: "10%", delay: 0 },
    { Icon: FaChartPie, color: "text-purple-400", top: "25%", right: "15%", delay: 1 },
    { Icon: FaPython, color: "text-yellow-400", bottom: "20%", left: "15%", delay: 2 },
    { Icon: FaCode, color: "text-green-400", bottom: "30%", right: "10%", delay: 3 },
    { Icon: FaFileExcel, color: "text-emerald-500", top: "10%", right: "30%", delay: 1.5 },
];

const useTypewriter = (words: string[], speed = 100, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

export default function Hero() {
  const placeholderText = useTypewriter(
    ["Power BI Dashboards", "Python Automation", "SQL Analysis", "Data Visualization", "Machine Learning Models"],
    100,
    2000
  );

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#EBF5FF]">
      {/* Freepik-like Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#1273eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-300/30 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-300/30 blur-[100px]" />
        
        {/* Floating Icons Animation */}
        {floatingIcons.map((item, index) => (
            <motion.div
                key={index}
                className={`absolute ${item.color} text-4xl md:text-6xl opacity-20`}
                style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: item.delay 
                }}
            >
                <item.Icon />
            </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm tracking-wide border border-blue-200">
             Available for Freelance & Full-time
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-800 leading-tight">
            High-quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1273eb] to-cyan-500">data solutions</span> <br className="hidden md:block"/> for your business.
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed mb-10 font-light">
            {personalInfo.name} — Transforming raw data into clear, actionable strategies. 
            <span className="hidden md:inline"> Explore a library of dashboards, analysis reports, and engineering projects.</span>
          </p>
        </motion.div>

        {/* Big Search Bar Area */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
            className="w-full max-w-4xl bg-white p-2.5 rounded-2xl shadow-2xl shadow-blue-900/10 border border-white/50 flex flex-col md:flex-row items-center gap-2 relative z-20"
        >
            <div className="hidden md:flex items-center px-5 border-r border-slate-100 text-slate-500 gap-2 cursor-pointer hover:text-[#1273eb] transition-colors font-medium h-12">
                <span>Assets</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            
            <div className="flex-1 flex items-center w-full px-4 h-14">
                 <FaSearch className="text-slate-400 text-xl mr-4" />
                 <input 
                    type="text" 
                    placeholder={`Search for ${placeholderText}`} 
                    className="w-full h-full text-lg text-slate-700 placeholder:text-slate-400 outline-none bg-transparent"
                    disabled
                 />
            </div>

            <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                className="w-full md:w-auto px-10 py-4 bg-[#1273eb] hover:bg-[#0e61c7] text-white font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
                <FaSearch />
                Search
            </ScrollLink>
        </motion.div>

        {/* Quick Categories */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-500 font-medium"
        >
            <span className="opacity-60 py-1">Popular keywords:</span>
            <div className="flex flex-wrap gap-2 justify-center">
                {["Data Analysis", "Engineering", "Python", "Visualization", "Power BI"].map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full border border-slate-200 bg-white/60 hover:bg-white hover:border-[#1273eb] hover:text-[#1273eb] cursor-pointer transition-all shadow-sm hover:shadow-md">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
