"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
        >
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who is Sai Vineeth?</h2>
             <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-8">
                 {personalInfo.summary}
             </p>
             <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-lg text-slate-400 leading-relaxed">
                    I have completed my Master's in Management Information Systems at Christian Brothers University. 
                    My passion lies in bridging the gap between raw data and strategic decision-making.
                </p>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
