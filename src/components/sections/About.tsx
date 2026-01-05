"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-[#2997ff] tracking-widest uppercase mb-8">
            The Narrative
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
            "I specialize in turning <span className="text-white/40">messy operational data</span> into <span className="text-[#2997ff]">clear, actionable reporting</span> that leadership can actually use."
          </h3>

          <div className="text-lg md:text-xl text-white/60 font-light leading-relaxed space-y-8">
            <p>
              With experience across finance, payroll, and workforce analytics in both India and the U.S., 
              I bridge the gap between technical data engineering and business decision-making.
            </p>
            <p>
              Currently, I am focused on building end-to-end BI solutions that automate compliance, 
              drive strategic cost management, and eliminate manual reporting workflows.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-12 text-center">
             <div>
                <span className="block text-4xl font-bold text-white mb-2">4+</span>
                <span className="text-sm text-white/40 uppercase tracking-widest">Years Experience</span>
             </div>
             <div>
                <span className="block text-4xl font-bold text-white mb-2">40%</span>
                <span className="text-sm text-white/40 uppercase tracking-widest">Efficiency Gain</span>
             </div>
             <div>
                <span className="block text-4xl font-bold text-white mb-2">$2M+</span>
                <span className="text-sm text-white/40 uppercase tracking-widest">Revenue Tracked</span>
             </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
