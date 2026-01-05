"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Achievements", to: "achievements" },
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
          scrolled || isOpen ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
             <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              className="text-2xl font-bold text-white tracking-tight cursor-pointer z-50 flex items-center gap-2"
            >
              <span className="font-semibold text-lg">{personalInfo.name}</span>
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-100}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer tracking-wide"
              >
                {link.name}
              </ScrollLink>
            ))}
        <div className="flex items-center gap-3 ml-4">
             <a
                href="/resume/Sai_Vineeth_Reddy_Suravi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
             >
                Resume
             </a>
             <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-1.5 bg-white text-black hover:bg-slate-200 text-xs font-semibold rounded-full transition-all"
             >
                Hire Me
             </a>
        </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center md:hidden"
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
                  className="text-2xl font-bold text-slate-300 hover:text-white cursor-pointer"
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
                  className="px-8 py-3 text-lg font-bold text-black bg-white rounded-full shadow-lg"
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
