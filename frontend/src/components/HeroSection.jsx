import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useI18n } from "@/i18n/context.jsx";

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

export default function HeroSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" data-testid="hero-section" ref={ref} className="relative flex items-center justify-center min-h-[100svh] px-5 sm:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] rounded-full bg-neon-green/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p data-testid="hero-label" variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }}
          className="text-neon-green/60 text-[11px] tracking-[0.3em] uppercase mb-5 font-body font-semibold">
          {t.hero.label}
        </motion.p>

        <motion.h1 data-testid="hero-title" variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.08 }}
          className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-tight text-white mb-4">
          {t.hero.title}<span className="text-neon-green">{t.hero.titleAccent}</span>
        </motion.h1>

        <motion.p data-testid="hero-subtitle" variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.16 }}
          className="font-body text-white/60 text-sm sm:text-base font-medium leading-relaxed mb-3">
          {t.hero.subtitle}
        </motion.p>

        <motion.p data-testid="hero-description" variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.22 }}
          className="font-body text-white/40 text-sm leading-relaxed max-w-xl mx-auto mb-8">
          {t.hero.description}
        </motion.p>

        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.28 }}>
          <button data-testid="hero-cta-button" onClick={() => go("#contato")}
            className="px-6 py-2.5 bg-neon-green text-black font-body font-semibold text-sm rounded hover:brightness-110 transition-all">
            {t.hero.cta}
          </button>
        </motion.div>

        <motion.button data-testid="scroll-down-button" onClick={() => go("#sobre")}
          variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15 hover:text-white/35 transition-colors">
          <ArrowDown size={16} />
        </motion.button>
      </div>
    </section>
  );
}
