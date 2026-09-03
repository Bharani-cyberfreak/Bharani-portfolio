import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ShieldAlert } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => setFormStatus('success'))
      .catch(() => setFormStatus('error'));
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-surface/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Handshake</h2>
          <div className="h-1 w-20 bg-neon-cyan/50 rounded mb-8"></div>
          
          <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
            Whether you are looking for advanced security solutions, consulting on architecture, or just want to discuss the latest in cybersecurity. 
            Initiate a secure handshake below.
          </p>

          <div className="flex items-center gap-4 text-zinc-300">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Mail size={20} className="text-neon-cyan" />
            </div>
            <div>
              <p className="text-sm font-mono text-zinc-500">EMAIL_ADDRESS</p>
              <p className="font-medium">cyberfreak833@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 flex flex-col gap-4 relative"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Identity [Name]</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Return Address [Email]</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                placeholder="Security Consultation"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Payload [Message]</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none custom-scrollbar"
                placeholder="Transmit your message..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="mt-2 w-full py-3 px-4 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'submitting' ? 'Transmitting...' : (
                <>Transmit Payload <Send size={18} /></>
              )}
            </button>

            {formStatus === 'success' && (
              <div className="absolute inset-0 bg-surface/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-neon-emerald/30">
                <div className="w-16 h-16 rounded-full bg-neon-emerald/10 flex items-center justify-center text-neon-emerald mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Transmission Successful</h3>
                <p className="text-zinc-400">Your message has been securely delivered. I will respond shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  Send Another
                </button>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3 text-red-400 text-sm">
                <ShieldAlert size={20} className="shrink-0" />
                <p>Transmission failed. Please try again or contact me directly via email.</p>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
