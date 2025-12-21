"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-4 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
             <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              className="text-2xl font-bold text-[#1273eb] tracking-tight cursor-pointer z-50 flex items-center gap-2"
            >
              <span className="font-extrabold text-3xl">fp</span>
              <span className="text-slate-700 hidden sm:block">portfolio</span>
            </ScrollLink>
            
            {/* Search Bar - Visual Only (Freepik style) */}
            <div className="hidden lg:flex items-center bg-slate-100 rounded-lg px-4 py-2 w-96 border border-slate-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <FaSearch className="text-slate-400 mr-3" />
                <input 
                    type="text" 
                    placeholder="Search for projects, skills..." 
                    className="bg-transparent border-none outline-none text-slate-700 w-full placeholder:text-slate-400"
                    disabled
                />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-100}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#1273eb] transition-colors cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
        <div className="flex items-center gap-4">
             <a
                href="/resume/Sai_Vineeth_Reddy_Suravi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold rounded-lg transition-all shadow-lg hover:shadow-slate-800/30"
             >
                Resume
             </a>
             <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-5 py-2.5 bg-[#1273eb] hover:bg-[#0e61c7] text-white text-sm font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/30"
             >
                Hire Me
             </a>
        </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 focus:outline-none z-50"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-slate-700 hover:text-[#1273eb] cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 text-lg font-bold text-white bg-[#1273eb] rounded-lg shadow-md"
                >
                  Contact Me
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
