"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
        >
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">About.</h2>
             <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                 {personalInfo.summary}
             </p>
             <p className="mt-12 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                I have completed my Master's in Management Information Systems at Christian Brothers University. 
                My passion lies in bridging the gap between raw data and strategic decision-making.
             </p>
        </motion.div>
      </div>
    </section>
  );
}