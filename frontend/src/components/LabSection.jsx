import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, Cloud, Server, GitBranch, X, Play } from "lucide-react";
import { useI18n } from "@/i18n/context.jsx";

const icons = [Cloud, Server, GitBranch, Server];
const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function LabSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expandedImage, setExpandedImage] = useState(null);

  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?/]+)/);
    return match ? match[1] : null;
  };

  return (
    <section id="lab" data-testid="lab-section" ref={ref} className="py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="mb-3">
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical size={14} className="text-neon-blue/50" />
            <p className="text-neon-blue/50 text-[11px] tracking-[0.25em] uppercase font-body">{t.lab.label}</p>
          </div>
          <h2 data-testid="lab-title" className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">{t.lab.title}</h2>
          <p className="font-body text-white/35 text-sm max-w-xl">{t.lab.subtitle}</p>
        </motion.div>

        <div className="flex flex-col gap-6 mt-8">
          {t.lab.items.map((item, i) => {
            const Icon = icons[i] || Cloud;
            const hasImages = item.images && item.images.length > 0;
            const hasVideo = item.video;
            const hasSkills = item.skills && item.skills.length > 0;
            const hasSpecs = item.specs && item.specs.length > 0;
            
            // Determine layout based on content
            const hasMedia = hasImages || hasVideo;
            const mediaOnSide = hasMedia && (hasSkills || hasSpecs);
            
            return (
              <motion.div key={i} data-testid={`lab-card-${i}`}
                variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.35, delay: 0.06 * i }}
                className="group p-6 rounded border border-dashed border-white/[0.06] bg-white/[0.01] hover:border-neon-blue/20 transition-colors">
                <div className={`flex gap-6 ${mediaOnSide ? 'flex-row' : 'flex-col'}`}>
                  <div className={`flex-1 ${mediaOnSide ? '' : 'w-full'}`}>
                    <div className="flex items-start gap-3 mb-4">
                      <Icon size={18} className="text-neon-blue/40 mt-0.5 flex-shrink-0" />
                      <h3 className="font-heading font-semibold text-base text-white group-hover:text-neon-blue transition-colors">{item.title}</h3>
                    </div>
                    <p className="font-body text-white/40 text-sm leading-relaxed mb-4">{item.description}</p>
                    
                    {hasSkills && (
                      <div className="mb-4">
                        <p className="font-heading font-semibold text-xs text-white/60 mb-2 uppercase tracking-wider">Competências Utilizadas:</p>
                        <ul className="space-y-1">
                          {item.skills.map((skill, idx) => (
                            <li key={idx} className="font-body text-white/40 text-xs flex items-start gap-2">
                              <span className="text-neon-blue/40 mt-1">•</span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {hasSpecs && (
                      <div className="mb-4">
                        <p className="font-heading font-semibold text-xs text-white/60 mb-2 uppercase tracking-wider">Especificações Técnicas:</p>
                        <ul className="space-y-1">
                          {item.specs.map((spec, idx) => (
                            <li key={idx} className="font-body text-white/40 text-xs flex items-start gap-2">
                              <span className="text-neon-blue/40 mt-1">•</span>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {hasMedia && (
                    <div className={`${mediaOnSide ? 'w-1/2 min-w-[300px]' : 'w-full'}`}>
                      {hasImages && (
                        <div className={`grid gap-3 ${item.images.length === 1 ? 'grid-cols-1' : item.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                          {item.images.map((img, idx) => (
                            <div key={idx} className="relative group/img cursor-pointer overflow-hidden rounded border border-white/[0.06]">
                              <img
                                src={img}
                                alt={`${item.title} - Imagem ${idx + 1}`}
                                className="w-full h-32 object-cover transition-transform group-hover/img:scale-105"
                                onClick={() => setExpandedImage(img)}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-32 text-white/20 text-xs">Imagem não encontrada</div>';
                                }}
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white/80 text-xs">Clique para expandir</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {hasVideo && (
                        <div className="relative rounded border border-white/[0.06] overflow-hidden">
                          <div className="aspect-video">
                            <iframe
                              src={`https://www.youtube.com/embed/${getYouTubeId(item.video)}`}
                              title={item.title}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Image Expansion Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setExpandedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <img
            src={expandedImage}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
