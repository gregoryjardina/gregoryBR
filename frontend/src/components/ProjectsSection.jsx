import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/i18n/context";

const images = [
  "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
];

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function ProjectsSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="trabalhos" data-testid="projects-section" ref={ref} className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-neon-green/60 text-xs tracking-[0.25em] uppercase mb-3 font-body">{t.projects.label}</p>
          <h2 data-testid="projects-title" className="font-heading font-bold text-2xl sm:text-3xl text-white">{t.projects.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.projects.items.map((p, i) => (
            <motion.article
              key={i}
              data-testid={`project-card-${i}`}
              variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group rounded border border-white/[0.06] overflow-hidden bg-white/[0.02] hover:border-white/[0.12] transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={images[i]}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[0.55] group-hover:brightness-[0.65] transition-[filter] duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-body text-white/60 bg-black/50 backdrop-blur-sm rounded border border-white/[0.06]">
                  {p.client}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-base text-white mb-1.5 group-hover:text-neon-green transition-colors">{p.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed mb-3">{p.text}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-0.5 text-[11px] font-body text-neon-green/60 bg-neon-green/[0.05] border border-neon-green/[0.08] rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-white/15 text-xs text-center mt-8 font-body italic">{t.projects.note}</p>
      </div>
    </section>
  );
}
