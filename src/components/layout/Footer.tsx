import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { profile } from '../../data/profile';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded bg-surface border border-white/10 flex items-center justify-center">
              <span className="font-mono font-bold text-xs text-gradient-neon">B</span>
            </div>
            <span className="font-mono font-semibold text-zinc-200 tracking-wide text-sm">
              {profile.name.toUpperCase()}
            </span>
          </div>
          <p className="text-zinc-500 text-sm">{profile.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all" aria-label="Twitter">
            <Twitter size={18} />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 text-xs font-mono">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-neon-emerald"></span>
          SYSTEM STATUS: OPERATIONAL
        </div>
      </div>
    </footer>
  );
};

export default Footer;
