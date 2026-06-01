import React from 'react';

const EDUCATION_DETAILS = {
  degree: {
    institution: "Dayananda Sagar University",
    location: "Bengaluru, Karnataka, India",
    stream: "B.Tech in Computer Science and Engineering",
    timeline: "2023 — Present",
    metric: "9.05 / 10 CGPA",
  },
  preUniversity: {
    institution: "SDC Independent PU College",
    location: "Mulbagal, Karnataka, India",
    stream: "PCMB (Physics, Chemistry, Mathematics, Biology)",
    timeline: "2020 — 2022",
    metric: "93%"
  },
  secondarySchool: {
    institution: "Adarsha Vidyalaya",
    location: "Thathikallu, Mulbagal, Karnataka, India",
    stream: "General Secondary Education (10th Grade)",
    timeline: "2020",
    metric: "90.56%"
  }
};

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-20 md:py-32 border-b border-[#1A1814]/12 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-start w-full">
          
          {/* Left Column: Heading Layout */}
          <div className="lg:sticky lg:top-32 lg:self-start h-fit space-y-4 z-10">
            <div>
              <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-2">
                Foundations
              </div>
              <h2 className="font-sans text-[clamp(32px,4vw,48px)] font-extrabold tracking-tight leading-[1.1] text-[#1A1814]">
                Education &amp; <br />
                <em className="font-serif font-light italic text-[#0047FF]">Theory.</em>
              </h2>
            </div>
            <p className="font-mono text-xs text-[#6B6560] pt-2 max-w-sm leading-relaxed">
              Synthesizing machine learning engineering, algorithmic complexity thresholds, and core theoretical computer science backgrounds.
            </p>
          </div>

          {/* Right Column: Content Blocks with Timeline Spine */}
          <div className="lg:col-span-2 relative pl-8 mt-4 lg:mt-0 w-full">
            
            {/* Continuous Line Track */}
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-[#1A1814]/12" />

            <div className="space-y-16">
              
              {/* Undergraduate Degree Block */}
              <div className="reveal relative border-b border-[#1A1814]/12 pb-12 group transition-all duration-300 hover:pl-2">
                {/* Timeline Anchor Node Indicator */}
                <div className="absolute -left-8 top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1A1814]/24 border-2 border-[#FAF7F2] transition-all duration-300 z-10 group-hover:bg-[#0047FF] group-hover:scale-125" />
                  <div className="absolute w-4 h-4 rounded-full bg-[#0047FF]/0 transition-all duration-300 group-hover:bg-[#0047FF]/10 group-hover:scale-150" />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#0047FF] uppercase tracking-widest block mb-2 font-semibold">
                      Undergraduate Program
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#1A1814] group-hover:text-[#0047FF] transition-colors duration-200 tracking-tight leading-snug">
                      {EDUCATION_DETAILS.degree.institution}
                    </h3>
                    <div className="font-mono text-xs text-[#6B6560] mt-1.5 leading-relaxed">
                      {EDUCATION_DETAILS.degree.stream} &bull; {EDUCATION_DETAILS.degree.location}
                    </div>
                  </div>
                  
                  <div className="w-fit font-mono text-xs font-bold text-[#6B6560] whitespace-nowrap sm:pt-1">
                    {EDUCATION_DETAILS.degree.timeline}
                  </div>
                </div>

                <div className="font-mono text-xs text-[#6B6560]">
                  Cumulative Standing: <strong className="text-[#1A1814] font-bold">{EDUCATION_DETAILS.degree.metric}</strong>
                </div>
              </div>

              {/* Higher Secondary / Pre-University Block */}
              <div className="reveal relative border-b border-[#1A1814]/12 pb-12 group transition-all duration-300 hover:pl-2">
                {/* Timeline Anchor Node Indicator */}
                <div className="absolute -left-8 top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1A1814]/24 border-2 border-[#FAF7F2] transition-all duration-300 z-10 group-hover:bg-[#0047FF] group-hover:scale-125" />
                  <div className="absolute w-4 h-4 rounded-full bg-[#0047FF]/0 transition-all duration-300 group-hover:bg-[#0047FF]/10 group-hover:scale-150" />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#0047FF] uppercase tracking-widest block mb-2 font-semibold">
                      Higher Secondary Education
                    </span>
                    <h3 className="font-sans text-xl font-bold text-[#1A1814] group-hover:text-[#0047FF] transition-colors duration-200 tracking-tight leading-snug">
                      {EDUCATION_DETAILS.preUniversity.institution}
                    </h3>
                    <div className="font-mono text-xs text-[#6B6560] mt-1.5 leading-relaxed">
                      {EDUCATION_DETAILS.preUniversity.stream} &bull; {EDUCATION_DETAILS.preUniversity.location}
                    </div>
                  </div>
                  
                  <div className="font-mono text-xs font-bold text-[#6B6560] whitespace-nowrap sm:pt-1">
                    {EDUCATION_DETAILS.preUniversity.timeline}
                  </div>
                </div>

                <div className="font-mono text-xs text-[#6B6560]">
                  Final Matriculation Score: <strong className="text-[#1A1814] font-bold">{EDUCATION_DETAILS.preUniversity.metric}</strong>
                </div>
              </div>

              {/* Secondary School Block */}
              <div className="reveal relative pb-4 group transition-all duration-300 hover:pl-2">
                {/* Timeline Anchor Node Indicator */}
                <div className="absolute -left-8 top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1A1814]/24 border-2 border-[#FAF7F2] transition-all duration-300 z-10 group-hover:bg-[#0047FF] group-hover:scale-125" />
                  <div className="absolute w-4 h-4 rounded-full bg-[#0047FF]/0 transition-all duration-300 group-hover:bg-[#0047FF]/10 group-hover:scale-150" />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#0047FF] uppercase tracking-widest block mb-2 font-semibold">
                      Secondary Education
                    </span>
                    <h3 className="font-sans text-xl font-bold text-[#1A1814] group-hover:text-[#0047FF] transition-colors duration-200 tracking-tight leading-snug">
                      {EDUCATION_DETAILS.secondarySchool.institution}
                    </h3>
                    <div className="font-mono text-xs text-[#6B6560] mt-1.5 leading-relaxed">
                      {EDUCATION_DETAILS.secondarySchool.stream} &bull; {EDUCATION_DETAILS.secondarySchool.location}
                    </div>
                  </div>
                  
                  <div className="font-mono text-xs font-bold text-[#6B6560] whitespace-nowrap sm:pt-1">
                    {EDUCATION_DETAILS.secondarySchool.timeline}
                  </div>
                </div>
                
                <div className="font-mono text-xs text-[#6B6560]">
                  Final Matriculation Score: <strong className="text-[#1A1814] font-bold">{EDUCATION_DETAILS.secondarySchool.metric}</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}