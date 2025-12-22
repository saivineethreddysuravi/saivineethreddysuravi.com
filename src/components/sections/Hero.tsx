"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink, scroller } from "react-scroll";
import { personalInfo } from "@/data/portfolio";
import { FaSearch, FaImage, FaCode, FaChartBar, FaDatabase, FaPython, FaChartPie, FaFileExcel } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSearch } from "@/context/SearchContext";

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
  const { searchQuery, setSearchQuery } = useSearch();
  const placeholderText = useTypewriter(
    ["Power BI Dashboards", "Python Automation", "SQL Analysis", "Data Visualization", "Machine Learning Models"],
    100,
    2000
  );

  const handleSearch = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Solar System / Earth Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[100px] z-0 animate-pulse" />
      <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-t from-blue-900 via-[#000000] to-transparent opacity-50 blur-3xl z-0" />
      
      {/* Orbiting Icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-[spin_60s_linear_infinite] pointer-events-none z-0">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#030014] p-2 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            <FaDatabase className="text-cyan-400 text-2xl" />
         </div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#030014] p-2 rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <FaPython className="text-purple-400 text-2xl" />
         </div>
      </div>
      
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5 animate-[spin_90s_linear_infinite_reverse] pointer-events-none z-0">
         <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#030014] p-2 rounded-full border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            <FaChartPie className="text-yellow-400 text-2xl" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-950/30 text-cyan-300 font-medium text-sm tracking-wide border border-cyan-500/30 backdrop-blur-md shadow-[0_0_10px_rgba(0,240,255,0.2)]">
             🚀 Mission Ready: Available for Hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight drop-shadow-lg">
            Navigating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Data Universe</span>
          </h1>
          <p className="max-w-2xl mx-auto text-blue-200/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
            {personalInfo.name} — Exploring vast datasets to discover actionable insights. 
            <span className="hidden md:inline"> Your co-pilot for data analysis, visualization, and engineering missions.</span>
          </p>
        </motion.div>

        {/* HUD Search Bar */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
            className="w-full max-w-4xl bg-[#0a0a20]/80 backdrop-blur-xl p-1.5 rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.15)] border border-cyan-500/30 flex flex-col md:flex-row items-center gap-2 relative z-20 group hover:border-cyan-500/60 transition-all"
        >
            <div className="hidden md:flex items-center px-5 border-r border-cyan-500/20 text-cyan-500/70 gap-2 cursor-pointer hover:text-cyan-400 transition-colors font-mono text-sm h-12 tracking-widest uppercase">
                <span>Scan</span>
            </div>
            
            <div className="flex-1 flex items-center w-full px-4 h-14">
                 <FaSearch className="text-cyan-500/50 text-xl mr-4 group-hover:text-cyan-400 transition-colors" />
                 <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder={`Locate ${placeholderText}`} 
                    className="w-full h-full text-lg text-cyan-50 placeholder:text-cyan-900/50 outline-none bg-transparent font-light tracking-wide"
                 />
            </div>

            <button
                onClick={handleSearch}
                className="w-full md:w-auto px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] uppercase tracking-wider"
            >
                Launch
            </button>
        </motion.div>

        {/* Quick Categories */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-cyan-200/60 font-medium"
        >
            <span className="opacity-60 py-1">Quick Coordinates:</span>
            <div className="flex flex-wrap gap-2 justify-center">
                {["Data Analysis", "Engineering", "Python", "Visualization", "Power BI"].map((tag, i) => (
                    <button 
                        key={i} 
                        onClick={() => { setSearchQuery(tag); handleSearch(); }}
                        className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 cursor-pointer transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
