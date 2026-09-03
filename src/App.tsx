import React from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/hero/Hero';
import Expertise from './components/expertise/Expertise';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import CanvasBackground from './components/ui/CanvasBackground';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <CustomCursor />
      <CanvasBackground />
      
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <Hero />
          <Expertise />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
