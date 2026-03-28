import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/i18n/context";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };
const labelEn = { problem: "Problem", action: "What was done", result: "Result" };
const labelPt = { problem: "Problema", action: "O que foi feito", result: "Resultado" };

export default function ProjectsSection() {
  const { t, lang } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const l = lang === "pt" ? labelPt : labelEn;

  return (
    <section id="projetos" data-testid="projects-section" ref={ref} className="py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="mb-10">
          <p className="text-neon-green/50 text-[11px] tracking-[0.25em] uppercase mb-3 font-body">{t.projects.label}</p>
          <h2 data-testid="projects-title" className="font-heading font-bold text-2xl sm:text-3xl text-white">{t.projects.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.projects.items.map((p, i) => (
            <motion.article key={i} data-testid={`project-card-${i}`}
              variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.35, delay: 0.07 * i }}
              className="group p-5 rounded border border-white/[0.06] bg-white/[0.015] hover:border-white/[0.1] transition-colors">

              <h3 className="font-heading font-semibold text-base text-white mb-3 group-hover:text-neon-green transition-colors">{p.title}</h3>

              <div className="space-y-2.5 mb-4">
                <div>
                  <p className="text-neon-blue/50 text-[11px] uppercase tracking-wider font-body mb-0.5">{l.problem}</p>
                  <p className="font-body text-white/45 text-[13px] leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <p className="text-neon-green/50 text-[11px] uppercase tracking-wider font-body mb-0.5">{l.action}</p>
                  <p className="font-body text-white/45 text-[13px] leading-relaxed">{p.action}</p>
                </div>
                <div>
                  <p className="text-white/30 text-[11px] uppercase tracking-wider font-body mb-0.5">{l.result}</p>
                  <p className="font-body text-white/60 text-[13px] leading-relaxed font-medium">{p.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-0.5 text-[10px] font-body text-neon-green/50 bg-neon-green/[0.04] border border-neon-green/[0.07] rounded">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
