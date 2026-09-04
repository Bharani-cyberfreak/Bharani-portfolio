import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, ArrowRight } from 'lucide-react';
import { profile } from '../../data/profile';
import TerminalSandbox from '../terminal/TerminalSandbox';

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!<>-_\\\\/[]{}—=+*^?#________';

  useEffect(() => {
    let iteration = 0;
    let interval: number;

    const animate = () => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    };

    // Delay start slightly
    setTimeout(() => {
      interval = setInterval(animate, 30) as unknown as number;
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
};

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col items-start gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm font-mono text-neon-emerald bg-neon-emerald/10 px-4 py-2 rounded-full border border-neon-emerald/20"
          >
            <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse"></span>
            {profile.status}
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] min-h-[140px] md:min-h-[120px]">
              <ScrambleText text={profile.tagline} />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg text-zinc-400 max-w-xl leading-relaxed"
            >
              {profile.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Explore Architecture <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 text-white font-semibold rounded-lg hover:border-neon-cyan/50 hover:text-neon-cyan transition-all"
            >
              Initiate Handshake
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 lg:h-[500px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square lg:aspect-auto lg:h-full lg:w-[90%] group">
            {/* Ambient glow behind headshot */}
            <div className="absolute inset-0 bg-neon-cyan/20 blur-[100px] rounded-full group-hover:bg-neon-cyan/30 transition-colors duration-700"></div>
            
            {/* The Headshot Container */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-surface/80 overflow-hidden glass-panel flex flex-col items-center justify-center">
              <img 
                src="/headshot.jpg" 
                alt="Bharani" 
                className="w-full h-full object-cover opacity-100 contrast-[1.05]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 pointer-events-none"></div>
              <div className="absolute inset-0 bg-neon-cyan/5 mix-blend-screen pointer-events-none"></div>
              <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none z-10">
                <p className="font-mono text-sm text-neon-cyan uppercase tracking-widest drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">[ IDENTITY_VERIFIED ]</p>
              </div>
            </div>
            
            {/* Decorative tech corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-cyan/50"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/50"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-cyan/50"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-cyan/50"></div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-24 z-10">
        <TerminalSandbox />
      </div>
    </section>
  );
};

export default Hero;
