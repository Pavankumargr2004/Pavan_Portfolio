import React, { useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
// import Gallery from './components/Gallery';

export default function App() {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    if (loading) return;
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from('.title-line', { yPercent: 110, stagger: 0.12, duration: 1, ease: 'power4.out' });

      document.querySelectorAll('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
      });

      document.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-count'));
        ScrollTrigger.create({
          trigger: el, start: 'top 85%',
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: target, duration: 1.5, ease: 'power2.out',
              onUpdate: function () {
                const current = this.targets()[0].val;
                el.textContent = current % 1 === 0 ? Math.floor(current) + '+' : current.toFixed(2);
              }
            });
          }
        });
      });
    });

    return () => ctx.revert();
  }, [loading]);

  return (
    <>
      
<style>{`
  body {
    font-family: var(--font-sans);
  }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(0,71,255,0.2); } 50% { box-shadow: 0 0 0 6px rgba(0,71,255,0); } }
  @keyframes scrollLine { 0%, 100% { transform: scaleY(1); opacity: 1; } 50% { transform: scaleY(0.5); opacity: 0.4; } }
  .reveal { opacity: 0; transform: translateY(30px); }
`}</style>

      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative w-full min-h-screen selection:bg-[#0047FF] selection:text-white">
          
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Education />
            <Projects />
            <Research />
            <Experience />
            <Certifications />
            <Contact />
            {/* <Gallery /> */}
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}