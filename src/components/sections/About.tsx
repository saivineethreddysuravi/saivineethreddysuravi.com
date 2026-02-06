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
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-[#2997ff]">Me.</span>
          </h2>
          <div className="h-1 w-20 bg-[#2997ff] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-light text-white leading-relaxed">
              I’m a <span className="font-bold text-white">Senior Data Analyst</span> with experience designing cloud-based data platforms and analytics solutions that support executive decision-making.
            </h3>
            
            <p className="text-white/60 text-lg leading-relaxed font-light">
              My work focuses on data warehousing, KPI governance, and financial analytics—helping organizations move from fragmented reporting to trusted, auditable insights.
            </p>

            {/* Education Micro-Card */}
            <div className="mt-8 p-6 bg-[#111] border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-[#2997ff]/30 transition-colors">
                <div className="p-3 bg-[#2997ff]/10 rounded-full text-[#2997ff]">
                    <FaGraduationCap size={24} />
                </div>
                <div>
                    <h4 className="text-white font-bold">Master of Science, MIS</h4>
                    <p className="text-white/50 text-sm">Christian Brothers University • <span className="text-[#2997ff]">GPA: 3.88</span></p>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Principles Grid */}
          <div className="grid grid-cols-1 gap-6">
            {principles.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-[#0f0f11] border border-white/5 rounded-2xl hover:border-[#2997ff]/40 hover:bg-[#15151a] transition-all duration-300 group"
                >
                    <div className="mb-4 text-white/20 group-hover:text-[#2997ff] transition-colors">
                        <item.icon size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-white/60 font-light leading-relaxed text-sm">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}