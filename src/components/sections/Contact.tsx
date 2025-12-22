"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative circles - subtler for dark mode */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full translate-x-1/2 translate-y-1/2 blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Unlock the potential of your data. Let's discuss how I can help your team.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a 
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-full bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 border border-white/10 shadow-lg"
                title="Email"
            >
                <FaEnvelope size={24} />
            </a>
            <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 text-slate-400 hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300 border border-white/10 shadow-lg"
                title="LinkedIn"
            >
                <FaLinkedin size={24} />
            </a>
            <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 text-slate-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 border border-white/10 shadow-lg"
                title="GitHub"
            >
                <FaGithub size={24} />
            </a>
          </div>

          <a 
            href={`mailto:${personalInfo.email}`} 
            className="inline-block px-12 py-4 rounded-xl bg-[#2997ff] text-white font-bold text-lg hover:bg-[#0077ed] hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
