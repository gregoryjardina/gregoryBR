import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      ref={ref}
      className="relative flex items-center justify-center min-h-[100svh] px-5 sm:px-8"
    >
      {/* Subtle ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-neon-green/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          data-testid="hero-label"
          variants={fade}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-neon-green/70 text-xs tracking-[0.25em] uppercase mb-6 font-body"
        >
          Presen&#231;a Calma
        </motion.p>

        <motion.h1
          data-testid="hero-title"
          variants={fade}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] tracking-tight text-white mb-6"
        >
          Estrutura digital s&#243;lida para empresas que valorizam{" "}
          <span className="text-neon-green">organiza&#231;&#227;o e clareza</span>.
        </motion.h1>

        <motion.p
          data-testid="hero-subtitle"
          variants={fade}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Organizo e aprimoro ambientes tecnol&#243;gicos para que sua opera&#231;&#227;o funcione
          com estabilidade, previsibilidade e seguran&#231;a — de forma simples e compreens&#237;vel.
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            data-testid="hero-cta-button"
            onClick={() => go("#contato")}
            className="px-7 py-3 bg-neon-green text-black font-body font-semibold text-sm rounded hover:brightness-110 transition-all"
          >
            Conversar sobre sua estrutura
          </button>
        </motion.div>

        <motion.button
          data-testid="scroll-down-button"
          onClick={() => go("#sobre")}
          variants={fade}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15 hover:text-white/40 transition-colors"
        >
          <ArrowDown size={18} />
        </motion.button>
      </div>
    </section>
  );
}
