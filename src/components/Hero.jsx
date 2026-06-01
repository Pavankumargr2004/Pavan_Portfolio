import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen px-6 md:px-12 flex flex-col justify-end pb-24 relative overflow-hidden">
      {/* Structural Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,24,20,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(26,24,20,0.12)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
      
      {/* Background Subtle Type Accent */}
      <div className="hidden md:block absolute right-12 top-1/3 font-serif text-[clamp(120px,20vw,280px)] font-thin text-transparent opacity-5 select-none pointer-events-none leading-none tracking-tighter" style={{ WebkitTextStroke: '1px rgba(0,71,255,0.08)' }}>
        AI
      </div>
      
      {/* Interactive Hero Content Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] items-end relative z-[1] gap-12 w-full">
        
        {/* LEFT COLUMN: Typography and Core Pitch */}
        <div className="flex flex-col justify-end pb-4">
          <div className="hero-index reveal font-mono text-[11px] tracking-[0.2em] text-[#6B6560] uppercase mb-8 flex items-center gap-4 before:content-[''] before:block before:w-10 before:h-[1px] before:bg-[#0047FF]">
            <span>Full Stack &amp; Machine Learning Enthusiast</span>
          </div>

          <h1 className="font-sans text-[clamp(48px,8vw,110px)] font-extrabold leading-[0.95] tracking-tight text-[#1A1814]">
            <div className="overflow-hidden"><span className="title-line block">Pavan Kumar</span></div>
            <div className="overflow-hidden"><span className="title-line block"><em className="font-serif font-light italic text-[#0047FF]">G R</em></span></div>
          </h1>
             <div className="hero-bottom reveal mt-12">
               <div className="font-mono text-[13px] leading-relaxed text-[#6B6560] max-w-[360px]">
                 Passionate Computer Science student building modern web applications, exploring Artificial Intelligence, and creating innovative solutions using <strong className="text-[#1A1814]">React.js, Full-Stack Development &amp; AI Technologies.</strong>
                   </div>
            
            {/* CTA & Status Container */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              {/* University Status */}
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-[#1A1814] px-4 py-2 border border-[#1A1814]/12 bg-[#F5F0E8]">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-[pulse_2s_infinite]" />
                Dayananda Sagar University — B.Tech CSE
              </div>

              {/* View CV Button */}
              <a 
                href="https://drive.google.com/drive/folders/14nTc1cUdjfLuhDBF6-uLm1Gku-go8g5r?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#F5F0E8] bg-[#1A1814] px-5 py-2 transition-all duration-300 hover:bg-[#0047FF]"
              >
                View CV
                <svg 
                  className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Just the Minimal Scroll Assembly */}
        <div className="reveal hidden md:flex flex-col items-center justify-end h-full pb-4">
          <div className="flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[#6B6560]">
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#0047FF] to-transparent animate-[scrollLine_2s_ease-in-out_infinite]" />
            <span>Scroll</span>
          </div>
        </div>

      </div>
    </section>
  );
}