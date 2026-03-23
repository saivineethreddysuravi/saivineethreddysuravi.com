"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        {/* Floating Dock */}
        <div 
          className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-4xl ${
            scrolled ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent border border-transparent"
          }`}
        >
          <div className="flex items-center gap-4">
             <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              className="font-bold text-white tracking-tight cursor-pointer flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2997ff] to-[#9d00ff] flex items-center justify-center text-sm group-hover:scale-105 transition-transform">
                V
              </div>
              <span className="hidden sm:block font-medium tracking-wide text-sm">{personalInfo.name}</span>
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-100}
                className="px-4 py-1.5 text-xs font-medium text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer tracking-wide"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
             <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black hover:bg-slate-200 text-xs font-semibold rounded-full transition-all active:scale-95"
             >
                Let's Connect
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white focus:outline-none p-2"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-6 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  className="w-full"
                >
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-4 text-3xl font-light text-white/70 hover:text-white border-b border-white/5 cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-4 w-full text-center text-lg font-medium text-black bg-white rounded-full active:scale-95 transition-transform"
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
