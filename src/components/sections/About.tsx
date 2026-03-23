"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaChartLine, FaCogs, FaGraduationCap } from "react-icons/fa";

export default function About() {
  const principles = [
    {
      icon: FaDatabase,
      title: "Data Engineering",
      desc: "Architecting robust ETL pipelines and Snowflake warehouses that ensure data integrity and accessibility."
    },
    {
      icon: FaChartLine,
      title: "Strategic Analytics",
      desc: "Translating complex datasets into intuitive Power BI dashboards that drive high-level executive decision-making."
    },
    {
      icon: FaCogs,
      title: "Process Automation",
      desc: "Replacing manual Excel workflows with automated Python & SQL scripts to reduce error and save hundreds of hours."
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.02]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Me</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white leading-[1.3] tracking-tight">
              I’m a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Senior Data Analyst</span> engineering cloud-based platforms that support executive decision-making.
            </h3>
            
            <p className="text-white/50 text-lg leading-relaxed font-light">
              My work focuses on data warehousing, KPI governance, and financial analytics—helping organizations move from fragmented reporting to trusted, auditable insights at enterprise scale.
            </p>

            {/* Education Micro-Card */}
            <div className="mt-10 p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-5 group hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 text-white/50 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                    <FaGraduationCap size={20} />
                </div>
                <div>
                    <h4 className="text-white font-medium tracking-wide">Master of Science, MIS</h4>
                    <p className="text-white/40 text-sm mt-1">Christian Brothers University • <span className="text-white/80 font-medium">GPA: 3.88</span></p>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Principles Grid */}
          <div className="grid grid-cols-1 gap-4">
            {principles.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 group flex gap-6 items-start"
                >
                    <div className="mt-1 text-white/30 group-hover:text-white transition-colors duration-500">
                        <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 tracking-wide">{item.title}</h4>
                      <p className="text-white/50 font-light leading-relaxed text-sm">
                          {item.desc}
                      </p>
                    </div>
                </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
