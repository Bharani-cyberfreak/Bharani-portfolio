import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Fingerprint, Cloud, TerminalSquare } from 'lucide-react';

const Expertise = () => {
  const cards = [
    {
      title: "Offensive & Defensive Security",
      description: "Red Team & Blue Team Operations. Conducting advanced VAPT and securing infrastructure against modern threats.",
      icon: <Shield size={24} className="text-neon-emerald" />,
      colSpan: "md:col-span-2 md:row-span-2",
      delay: 0.1
    },
    {
      title: "Identity-First Security",
      description: "Implementing robust IAM, governing Non-Human Identities, and securing access pipelines.",
      icon: <Fingerprint size={24} className="text-neon-cyan" />,
      colSpan: "md:col-span-1 md:row-span-1",
      delay: 0.2
    },
    {
      title: "Cloud & Mobile Security",
      description: "Hardening cloud environments and protecting mobile applications from reverse engineering.",
      icon: <Cloud size={24} className="text-neon-violet" />,
      colSpan: "md:col-span-1 md:row-span-1",
      delay: 0.3
    },
    {
      title: "Python & Algorithmic Engineering",
      description: "Building automated security tools, complex logic solvers, and scalable APIs using Python.",
      icon: <TerminalSquare size={24} className="text-zinc-300" />,
      colSpan: "md:col-span-2 md:row-span-1",
      delay: 0.4
    }
  ];

  return (
    <section id="expertise" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Expertise</h2>
          <div className="h-1 w-20 bg-neon-cyan/50 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: card.delay, duration: 0.5 }}
              className={`glass-card rounded-2xl p-8 flex flex-col justify-between group ${card.colSpan}`}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
