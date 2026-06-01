import React, { useState } from 'react';

// Replace these placeholder items with your actual image paths and details
const GALLERY_IMAGES = [
  {
    id: 1,
    title: "NASA Space Apps Hackathon",
    category: "Events",
    location: "DSU Campus",
    date: "Oct 2025",
    src: "/images/gallery/space-apps.jpg", // Path to your image file
    aspect: "aspect-[4/3]" // Can be aspect-square, aspect-[4/3], aspect-[16/10] etc.
  },
  {
    id: 2,
    title: "System Design Sprint",
    category: "Work Sessions",
    location: "Tech Lab 3",
    date: "Feb 2026",
    src: "/images/gallery/sprint.jpg",
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "TechFest 2.0 Platform Launch",
    category: "Presentations",
    location: "Main Auditorium",
    date: "2024",
    src: "/images/gallery/techfest.jpg",
    aspect: "aspect-[3/4]" // Vertical layout
  },
  {
    id: 4,
    title: "Deep Learning Model Sandbox",
    category: "Research",
    location: "Local Machine Node",
    date: "Dec 2025",
    src: "/images/gallery/sandbox.jpg",
    aspect: "aspect-[16/10]"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="px-6 md:px-12 py-20 md:py-32 border-b border-[#1A1814]/12 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-2">
              Visual Log
            </div>
            <h2 className="font-sans text-[clamp(32px,4vw,48px)] font-extrabold tracking-tight leading-[1.1] text-[#1A1814]">
              Captured <br />
              <em className="font-serif font-light italic text-[#0047FF]">Moments.</em>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#6B6560] max-w-sm leading-relaxed">
            A chronological window into built prototypes, collaborative hackathons, active engineering frames, and academic milestones.
          </p>
        </div>

        {/* Gallery Grid (Supports masonry-like variant feel using flexible aspects) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="break-inside-avoid bg-[#FAF7F2] border border-[#1A1814]/12 p-3 rounded-sm group cursor-zoom-in transition-all duration-300 hover:border-[#0047FF] shadow-sm hover:shadow-md"
            >
              {/* Image Frame Wrapper */}
              <div className={`w-full overflow-hidden bg-[#1A1814]/4 relative ${img.aspect}`}>
                {/* Fallback pattern graphic asset overlay if image fails or loads */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(26,24,20,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,24,20,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-102 filter grayscale-[20%] group-hover:grayscale-0"
                  loading="lazy"
                  onError={(e) => {
                    // Graceful broken path handler for development
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Meta Structural Specs */}
              <div className="mt-4 pt-2 border-t border-[#1A1814]/6">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-mono text-[9px] text-[#0047FF] uppercase tracking-widest font-semibold">
                    {img.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#6B6560]">
                    {img.date}
                  </span>
                </div>
                
                <h3 className="font-sans text-sm font-bold text-[#1A1814] mt-1 group-hover:text-[#0047FF] transition-colors duration-200">
                  {img.title}
                </h3>
                
                <div className="font-mono text-[11px] text-[#6B6560] mt-0.5">
                  @{img.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Overlay (Triggers on click) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-[#1A1814]/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Esc Handle Button */}
            <button className="absolute top-6 right-6 font-mono text-[11px] tracking-widest text-[#FAF7F2] uppercase bg-black/40 px-3 py-1.5 border border-[#FAF7F2]/20 rounded-sm">
              [ Close ]
            </button>

            <div 
              className="max-w-4xl max-h-[85vh] bg-[#FAF7F2] p-3 border border-[#FAF7F2]/10 rounded-sm relative shadow-2xl flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain bg-[#1A1814]/5"
              />
              <div className="mt-4 px-2 pb-1 flex justify-between items-end gap-6">
                <div>
                  <div className="font-mono text-[10px] text-[#0047FF] uppercase tracking-widest font-semibold">
                    {selectedImage.category} &bull; {selectedImage.location}
                  </div>
                  <h3 className="font-sans text-base font-bold text-[#1A1814] mt-0.5">
                    {selectedImage.title}
                  </h3>
                </div>
                <div className="font-mono text-xs font-bold text-[#0047FF]">
                  {selectedImage.date}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}