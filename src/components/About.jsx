import React from 'react';

const LANGUAGES = ['Python', 'JavaScript', 'Java', 'SQL', 'C', 'TypeScript' ,'Matlab' ,'Linux'];
const FRONTEND = ['ReactJS', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap'];
const BACKEND = ['NodeJS', 'ExpressJS', 'FastAPI', 'Flask', 'REST APIs', 'MongoDB', 'MySQL' ,'DJANGO'];
const AI_ML = ['TensorFlow', 'Scikit-Learn', 'CNN', 'NLP', 'Deep Learning', 'Explainable AI', 'SHAP', 'LIME'];
const DEVOPS_TOOLS = ['Docker Basics', 'n8n Workflow', 'AWS Basics', 'Git/GitHub', 'Postman', 'Figma'];
const OTHER_TOOLS =['Excel' ,'Latex' , 'Jupyter Notebooks', 'VS Code', 'Google Colab', 'Canva'];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start border-b border-[#1A1814]/12">
      <div>
        <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#1A1814]/12 after:max-w-[80px]">
          Executive Summary
        </div>
        <h2 className="font-sans text-[clamp(32px,4vw,56px)] font-bold leading-[1.05] tracking-tight text-[#1A1814] reveal">
          Engineering<br />
          <em className="font-serif font-light italic">intelligent</em><br />
          systems
        </h2>
        <p className="font-mono text-sm leading-[1.9] text-[#6B6560] mt-8 reveal">
          Computer Science undergraduate skilled in Full Stack Development, Artificial Intelligence, scalable backend systems, and AI-assisted software engineering. Experienced in building production-ready platforms, custom ETL pipelines, and interpretability workflows.
        </p>
        
        <div className="grid grid-cols-2 gap-[1px] bg-[#1A1814]/12 mt-12 border border-[#1A1814]/12 reveal">
          {[
            { metric: '9.05', label: 'B.Tech CGPA' },
            { metric: '10+', label: 'Projects Built' },
            { metric: '02', label: 'Research Papers' },
            { metric: '06', label: 'Certifications' }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-[#FAF7F2] hover:bg-[#E8EEFF] transition-colors duration-200">
              <div className="font-serif text-4xl font-light text-[#0047FF] leading-none data-target" data-count={stat.metric.replace('+', '')}>
                0
              </div>
              <div className="font-mono text-[11px] tracking-wider uppercase text-[#6B6560] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal flex flex-col gap-8">
        {[
          { title: 'Core Programming', tags: LANGUAGES },
          { title: 'AI / Machine Learning / XAI', tags: AI_ML },
          { title: 'Backend / Databases', tags: BACKEND },
          { title: 'Frontend Systems', tags: FRONTEND },
          { title: 'Cloud & Workflow Automation', tags: DEVOPS_TOOLS },
          { title: 'Other Tools & Platforms', tags: OTHER_TOOLS }
        ].map((group, gIdx) => (
          <div key={gIdx}>
            <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6B6560] mb-4 pb-2 border-b border-[#1A1814]/12">
              {group.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag, tIdx) => (
                <div key={tIdx} className="font-mono text-xs px-3.5 py-1.5 border border-[#1A1814]/12 bg-[#F5F0E8] text-[#2D2A26] tracking-wider relative overflow-hidden group select-none transition-colors duration-300 hover:text-white hover:border-[#0047FF]">
                  <span className="absolute inset-0 bg-[#0047FF] translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative z-[1]">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}