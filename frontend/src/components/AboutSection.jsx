import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/i18n/context";

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function AboutSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sobre" data-testid="about-section" ref={ref} className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }}>
            <p className="text-neon-blue/60 text-xs tracking-[0.25em] uppercase mb-4 font-body">
              {t.about.visionLabel}
            </p>
            <h2 data-testid="about-title" className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug mb-6">
              {t.about.visionTitle}
              <span className="text-neon-blue">{t.about.visionTitleAccent}</span>
            </h2>
            <p data-testid="about-text" className="font-body text-white/50 text-base leading-relaxed mb-6 max-w-xl">
              {t.about.visionText}
            </p>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xl">
              {t.about.visionFootnote}
              <span className="text-white/70">{t.about.visionFootnoteAccent}</span>
            </p>
          </motion.div>

          <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.15 }}>
            <p className="text-neon-green/60 text-xs tracking-[0.25em] uppercase mb-4 font-body">
              {t.about.approachLabel}
            </p>
            <h3 data-testid="approach-title" className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug mb-5">
              {t.about.approachTitle}
            </h3>
            <p className="font-body text-white/50 text-base leading-relaxed mb-8 max-w-xl">
              {t.about.approachText}
            </p>
            <div className="space-y-3">
              {t.about.principles.map((p, i) => (
                <div key={i} className="flex items-center gap-3" data-testid={`about-principle-${i}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green/70 flex-shrink-0" />
                  <p className="font-body text-white/70 text-sm">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
