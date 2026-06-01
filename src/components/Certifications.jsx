import React from 'react';

const CERTS = [
  { 
    title: 'Oracle Cloud Infrastructure DevOps Professional', 
    issuer: 'Oracle',
    link: 'https://drive.google.com/file/d/1cFAYfwpwMgEAj2Yt0sqdyekYJO2KmNo8/view'
  },
  { 
    title: 'Oracle Cloud Infrastructure Generative AI Professional', 
    issuer: 'Oracle',
    link: 'https://drive.google.com/file/d/1DKXM-E6m4azh2Mg-G1_W8urXAURZE4fO/view'
  },
  { 
    title: 'AWS Cloud Practitioner', 
    issuer: 'Amazon Web Services',
    link: 'https://drive.google.com/file/d/1gSixWdWnUOgMYFoTOX31TDDV2tqFO2Av/view'
  },
  { 
    title: 'IBM SkillsBuild – AI + Sustainability Internship', 
    issuer: 'IBM',
    link: 'https://drive.google.com/file/d/1HAfflNgIgEfYFb8LJsJ0sVcCa6mSsrMo/view'
  },
  { 
    title: 'Networking Basics', 
    issuer: 'CISCO Networking Academy',
    link: 'https://drive.google.com/file/d/1e_dI7mz0FA-4-30rxRD6E79APeODBYBd/view'
  }, 
   { 
    title: 'Access More Certificates Here', 
    link: 'https://drive.google.com/drive/folders/1-T79sJNMjVFecMfo28mCG1N31aSB7coq?usp=sharing'
  },


];

export default function Certifications() {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#1A1814] text-[#FAF7F2]">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-[11px] tracking-wider uppercase text-white/40 mb-2">Cloud Credentials</div>
        <h2 className="font-sans text-3xl font-extrabold tracking-tight mb-12">Verified Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTS.map((cert, idx) => (
            <a 
              key={idx} 
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-[#0047FF]/10 hover:border-[#0047FF] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="font-sans text-base font-semibold tracking-tight group-hover:text-white transition-colors">
                  {cert.title}
                </div>
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14" 
                  fill="none" 
                  className="text-white/40 group-hover:text-[#0047FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1"
                >
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="font-mono text-xs text-white/40 mt-6 tracking-wide">
                {cert.issuer}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}