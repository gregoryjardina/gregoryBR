import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/i18n/context.jsx";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function AboutSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sobre" data-testid="about-section" ref={ref} className="py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Main content — 3 cols */}
          <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="lg:col-span-3">
            <p className="text-neon-blue/50 text-[11px] tracking-[0.25em] uppercase mb-3 font-body">{t.about.label}</p>
            <h2 data-testid="about-title" className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug mb-6">{t.about.title}</h2>
            <div className="space-y-4">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} data-testid={`about-paragraph-${i}`} className="font-body text-white/50 text-sm leading-[1.7] max-w-2xl">{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Focus sidebar — 2 cols */}
          <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.12 }} className="lg:col-span-2">
            <div className="lg:mt-12 p-5 rounded border border-white/[0.06] bg-white/[0.015]">
              {/* Image */}
              <div className="mb-6">
                <img
                  src="/grego.png"
                  alt="Gregory Porto"
                  className="w-full rounded-lg border-2 border-neon-green/30"
                />
              </div>
              <p className="text-neon-green/50 text-[11px] tracking-[0.25em] uppercase mb-4 font-body">{t.about.focusLabel}</p>
              <div className="space-y-2.5">
                {t.about.focusItems.map((item, i) => (
                  <div key={i} data-testid={`about-focus-${i}`} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-neon-green/60 flex-shrink-0" />
                    <p className="font-body text-white/65 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
