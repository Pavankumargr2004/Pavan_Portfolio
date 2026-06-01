import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        style={{ boxShadow: hasShadow ? '0 4px 40px rgba(0,0,0,0.06)' : 'none' }}
        className="fixed top-0 left-0 right-0 h-[72px] px-6 md:px-12 z-[1000] flex items-center justify-between bg-[#FAF7F2]/85 backdrop-blur-md border-b border-[#1A1814]/12 transition-all duration-300"
      >
        <a href="#" onClick={(e) => scrollToSection(e, '#hero')} className="font-mono text-[13px] tracking-wider text-[#1A1814]">
          pavan<span className="text-[#0047FF]">.</span>portfolio
        </a>
        
        <ul className="hidden md:flex gap-10 list-none">
          {['About', 'Projects', 'Research', 'Experience', 'Contact','Gallery'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                className="font-mono text-[12px] tracking-widest uppercase text-[#6B6560] hover:text-[#1A1814] relative transition-colors group"
              >
                {item}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#0047FF] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:pavankumargr1904@gmail.com" className="hidden md:block font-mono text-[12px] tracking-widest uppercase text-[#FAF7F2] bg-[#1A1814] px-5 py-2.5 border border-[#1A1814] hover:bg-[#0047FF] hover:border-[#0047FF] transition-all duration-300">
          Get In Touch
        </a>

        <div className="flex md:hidden flex-col gap-[5px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block w-6 h-[1.5px] bg-[#1A1814] transition-transform ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#1A1814] transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#1A1814] transition-transform ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </div>
      </nav>

      <div className={`fixed top-[72px] left-0 right-0 bg-[#FAF7F2] border-b border-[#1A1814]/12 px-6 py-8 flex flex-col gap-6 z-[999] transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
        {['About', 'Projects', 'Research', 'Experience', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)} className="font-mono text-sm tracking-widest uppercase text-[#1A1814]">
            {item}
          </a>
        ))}
        <a href="mailto:pavankumargr1904@gmail.com" className="font-mono text-sm tracking-widest uppercase text-[#1A1814]">
          Hire Me →
        </a>
      </div>
    </>
  );
}