import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { Briefcase, GraduationCap, Award, Zap } from 'lucide-react';

const getIcon = (category: string) => {
  switch (category) {
    case 'Experience': return <Briefcase size={16} />;
    case 'Education': return <GraduationCap size={16} />;
    case 'Certification': return <Award size={16} />;
    case 'Milestone': return <Zap size={16} />;
    default: return <Briefcase size={16} />;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Timeline</h2>
          <div className="h-1 w-20 bg-neon-emerald/50 rounded"></div>
        </motion.div>

        <div className="relative">
          {/* Fiber Optic Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-emerald/50 via-neon-cyan/20 to-transparent"></div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Node */}
                <div className="absolute left-[20px] md:left-[28px] top-1 w-2 h-2 rounded-full bg-neon-emerald shadow-[0_0_10px_#00ff9d] ring-4 ring-[#040508]"></div>
                
                <div className="glass-card rounded-xl p-6 relative overflow-hidden group">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-neon-emerald flex items-center justify-center p-1 bg-neon-emerald/10 rounded">
                          {getIcon(item.category)}
                        </span>
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{item.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-zinc-400 font-medium">{item.organization}</p>
                    </div>
                    <div className="text-sm font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded self-start">
                      {item.date}
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
