import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Network } from 'lucide-react';
import { Project } from '../../data/projects';

interface ArchitectureModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <div className="flex items-center gap-3">
                <Network className="text-neon-cyan" size={24} />
                <h2 className="text-xl font-bold text-white">{project.title} Architecture</h2>
              </div>
              <button 
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-2">Implementation Notes</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {project.architectureNotes}
                  </p>
                </div>
                
                {/* Simulated Diagram Area */}
                <div className="mt-8 border border-white/5 rounded-xl p-8 bg-black/40 flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <Network className="mx-auto text-zinc-700 mb-4" size={48} />
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">[ SYSTEM_ARCHITECTURE_DIAGRAM ]</p>
                    <p className="text-sm text-zinc-600 mt-2">Diagram placeholder for {project.title}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-white/5 bg-black/20 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ArchitectureModal;
