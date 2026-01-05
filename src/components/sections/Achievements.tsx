"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { FaTrophy } from "react-icons/fa";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="p-3 bg-[#2997ff]/10 rounded-xl">
             <FaTrophy className="text-3xl text-[#2997ff]" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Key <span className="text-[#2997ff]">Achievements.</span>
            </h2>
            <p className="text-white/60 mt-2 font-light">
                Measurable impact delivered through data engineering and analytics.
            </p>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
             // Split for bold text formatting
             const parts = achievement.split(/(\*\*.*?\*\*)/g);
             
             return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[#2997ff]/30 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-white/5 group-hover:text-[#2997ff]/20 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white/80 leading-relaxed">
                        {parts.map((part, idx) => {
                            if (part.startsWith("**") && part.endsWith("**")) {
                                return <span key={idx} className="text-[#2997ff] font-semibold">{part.replace(/\*\*/g, "")}</span>;
                            }
                            return part;
                        })}
                    </p>
                  </div>
                </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
