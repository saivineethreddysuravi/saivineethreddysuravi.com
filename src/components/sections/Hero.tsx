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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Freepik-like Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
        
        {/* Floating Icons Animation - Keeping colors as they pop against black */}
        {floatingIcons.map((item, index) => (
            <motion.div
                key={index}
                className={`absolute ${item.color} text-4xl md:text-6xl opacity-30`}
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

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 text-slate-300 font-medium text-sm tracking-wide border border-white/10 backdrop-blur-sm">
             Available for Freelance & Full-time
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
            High-quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">data solutions</span> <br className="hidden md:block"/> for your business.
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
            {personalInfo.name} — Transforming raw data into clear, actionable strategies. 
            <span className="hidden md:inline"> Explore a library of dashboards, analysis reports, and engineering projects.</span>
          </p>
        </motion.div>

        {/* Big Search Bar Area */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
            className="w-full max-w-4xl bg-white/5 backdrop-blur-xl p-2.5 rounded-2xl shadow-2xl shadow-blue-900/10 border border-white/10 flex flex-col md:flex-row items-center gap-2 relative z-20 group hover:border-white/20 transition-all"
        >
            <div className="hidden md:flex items-center px-5 border-r border-white/10 text-slate-400 gap-2 cursor-pointer hover:text-white transition-colors font-medium h-12">
                <span>Assets</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            
            <div className="flex-1 flex items-center w-full px-4 h-14">
                 <FaSearch className="text-slate-500 text-xl mr-4 group-hover:text-white/50 transition-colors" />
                 <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder={`Search for ${placeholderText}`} 
                    className="w-full h-full text-lg text-white placeholder:text-slate-600 outline-none bg-transparent font-light"
                 />
            </div>

            <button
                onClick={handleSearch}
                className="w-full md:w-auto px-10 py-4 bg-[#2997ff] hover:bg-[#0077ed] text-white font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
                <FaSearch />
                Search
            </button>
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
                    <button 
                        key={i} 
                        onClick={() => { setSearchQuery(tag); handleSearch(); }}
                        className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:border-white/20 hover:text-white cursor-pointer transition-all shadow-sm"
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
