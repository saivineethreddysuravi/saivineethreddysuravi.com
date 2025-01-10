"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Let's Connect.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
            Always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="flex justify-center gap-8 mb-16">
            <a 
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-full bg-white/5 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/10"
            >
                <FaEnvelope size={28} />
            </a>
            <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5]/20 hover:scale-110 transition-all duration-300 border border-[#0077b5]/20"
            >
                <FaLinkedin size={28} />
            </a>
            <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/10"
            >
                <FaGithub size={28} />
            </a>
          </div>

          <a 
            href={`mailto:${personalInfo.email}`} 
            className="inline-block px-12 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}