"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(157,0,255,0.03)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Certifications</span>
          </h2>
          <p className="text-lg text-white/50 font-light">
            Industry-recognized validations of expertise in data analytics, cloud architecture, and business intelligence.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <cert.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#2997ff] transition-colors">
                {cert.name}
              </h3>
              
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-sm font-medium tracking-widest uppercase">
                  {cert.issuer}
                </span>
                <span className="text-white/20 text-xs font-mono">
                  Issued {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
