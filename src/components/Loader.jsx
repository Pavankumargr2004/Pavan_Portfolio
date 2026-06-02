import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FastWideBlueLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  // Geometric loader configurations
  const size = 10; 
  const time = 0.7;  // Speed up the blinking rhythm of the core grid to match the faster loading

  const rows = [
    { type: 'outer', ids: [18, 17, 16, 15, 14] },
    { type: 'mixed', items: [
      { type: 'outer', id: 1 }, { type: 'outer', id: 2 },
      { type: 'inner', id: 6 }, { type: 'inner', id: 5 }, { type: 'inner', id: 4 },
      { type: 'outer', id: 13 }, { type: 'outer', id: 12 }
    ]},
    { type: 'mixed', items: [
      { type: 'outer', id: 3 }, { type: 'outer', id: 4 },
      { type: 'inner', id: 1 }, { type: 'inner', id: 2 }, { type: 'inner', id: 3 },
      { type: 'outer', id: 11 }, { type: 'outer', id: 10 }
    ]},
    { type: 'outer', ids: [5, 6, 7, 8, 9] }
  ];

  const getDelay = (type, id) => {
    const totalSteps = type === 'outer' ? 18 : 6;
    return -((time / totalSteps) * id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial character stagger in (slightly snappier)
      gsap.fromTo('.loader-char', 
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.025, ease: 'power4.out', delay: 0.1 }
      );

      // 2. Smooth fade & pop for core and telemetry lines
      gsap.fromTo('.loader-telemetry, .core-wrapper',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.3, stagger: 0.1 }
      );
    }, containerRef);

    // 3. Overclocked Asynchronous Loading Simulation Engine
    let currentProgress = 0;
    let timeoutId;

    const simulateLoading = () => {
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        triggerExitSequence();
        return;
      }

      let increment = 0;
      let nextDelay = 30;

      // Significantly boosted steps and shortened timing delays for high-velocity playback
      if (currentProgress < 30) {
        increment = Math.random() * 20 + 10;
        nextDelay = Math.random() * 60 + 20;
      } else if (currentProgress >= 30 && currentProgress < 70) {
        increment = Math.random() * 8 + 3;
        nextDelay = Math.random() * 40 + 15;
      } else if (currentProgress >= 70 && currentProgress < 90) {
        // Micro-bottleneck remains for a split second to preserve realism, but resolves rapidly
        increment = Math.random() > 0.4 ? Math.random() * 4 : 1; 
        nextDelay = Math.random() * 120 + 40; 
      } else {
        increment = Math.random() * 15 + 8;
        nextDelay = Math.random() * 30 + 10;
      }

      currentProgress += increment;
      if (currentProgress > 100) currentProgress = 100;

      setProgress(currentProgress);
      timeoutId = setTimeout(simulateLoading, nextDelay);
    };

    timeoutId = setTimeout(simulateLoading, 250);

    // 4. Clean snappy exit sequence
    const triggerExitSequence = () => {
      const tl = gsap.timeline({ onComplete });

      tl.to('.loader-char', {
        yPercent: -105,
        duration: 0.45,
        stagger: 0.01,
        ease: 'power4.in'
      })
      .to('.core-wrapper', {
        scale: 0.85,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in'
      }, '-=0.35')
      .to('.loader-telemetry', {
        opacity: 0,
        y: -15,
        duration: 0.35,
        ease: 'power3.in'
      }, '-=0.35')
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.75,
        ease: 'power4.inOut'
      }, '-=0.25');
    };

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, [onComplete]);

  const nameArray = "Pavan Kumar G R".split("");

  return (
    <div 
      ref={containerRef}
      id="loader" 
      className="fixed inset-0 bg-[#07070A] z-[100000] flex flex-col items-center justify-between p-12 overflow-hidden select-none"
    >
      <style>{`
        @keyframes coreBlink {
          0%, 100% { opacity: 0.08; }
          30% { opacity: 1; }
        }
        .core-arrow {
          animation: coreBlink ${time}s infinite;
          filter: drop-shadow(0 0 ${size * 1.4}px #0047FF);
        }
      `}</style>

      {/* Top Telemetry Header */}
      <div className="loader-telemetry opacity-0 w-full flex justify-between items-center font-mono text-[9px] tracking-[0.3em] text-[#FAF7F2]/20 uppercase">
        <span>sys_init // core_sync_v4.0.0</span>
        <span>bengaluru_in</span>
      </div>

      {/* Main Core Center Container */}
      <div className="flex flex-col items-center justify-center gap-10">
        
        {/* Integrated Geometric Core Component */}
        <div className="core-wrapper opacity-0 flex flex-col items-center scale-90 md:scale-100">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.ids && row.ids.map((id) => {
                const isDown = id % 2 === (rowIndex === 0 ? 1 : 0);
                return (
                  <div
                    key={`outer-${id}`}
                    className={`w-0 h-0 core-arrow ${isDown ? 'rotate-180' : ''}`}
                    style={{
                      margin: `0 ${-size / 2}px`,
                      borderLeft: `${size}px solid transparent`,
                      borderRight: `${size}px solid transparent`,
                      borderBottom: `${size * 1.8}px solid #0047FF`,
                      animationDelay: `${getDelay('outer', id)}s`,
                    }}
                  />
                );
              })}

              {row.items && row.items.map((item, index) => {
                const isDown = index % 2 === 1;
                return (
                  <div
                    key={`${item.type}-${item.id}`}
                    className={`w-0 h-0 core-arrow ${isDown ? 'rotate-180' : ''}`}
                    style={{
                      margin: `0 ${-size / 2}px`,
                      borderLeft: `${size}px solid transparent`,
                      borderRight: `${size}px solid transparent`,
                      borderBottom: `${size * 1.8}px solid #0047FF`,
                      animationDelay: `${getDelay(item.type, item.id)}s`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Text/Name Header */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="overflow-hidden py-1 flex">
            {nameArray.map((char, index) => (
              <span
                key={index}
                className="loader-char inline-block font-sans text-[clamp(28px,5vw,64px)] font-extrabold text-[#FAF7F2] tracking-tight leading-none"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </span>
            ))}
            <span className="loader-char inline-block font-sans text-[clamp(28px,5vw,64px)] font-extrabold text-[#0047FF] leading-none">.</span>
          </div>

          {/* Expanded & Widened Progress Loading Line */}
          <div className="loader-telemetry opacity-0 flex items-center gap-4 mt-1">
            <div className="w-[280px] h-[3px] bg-white/5 relative overflow-hidden rounded-full">
              <div 
                className="absolute top-0 left-0 h-full bg-[#0047FF] transition-all duration-700 cubic-bezier(0.1, 0.8, 0.1, 1)" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Telemetry Metrics Footer */}
      <div className="loader-telemetry opacity-0 w-full flex justify-between items-end font-mono text-xs tracking-widest text-[#FAF7F2]/40">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0047FF] animate-pulse" />
          <span className="text-[9px] text-[#FAF7F2]/20 uppercase tracking-[0.2em]">loading system clusters</span>
        </div>
        <div className="text-sm font-medium tabular-nums text-[#FAF7F2]/60">
          {String(Math.floor(progress)).padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
}