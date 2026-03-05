import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    "Voc\u00ea entende o que est\u00e1 sendo feito.",
    "Voc\u00ea participa das decis\u00f5es.",
    "Voc\u00ea mant\u00e9m o controle.",
  ];

  return (
    <section
      id="abordagem"
      data-testid="approach-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neon-blue/70 font-body text-xs tracking-[0.3em] uppercase mb-4">
              Abordagem
            </p>
            <h2
              data-testid="approach-title"
              className="font-heading font-bold text-3xl sm:text-4xl text-white mb-8"
            >
              Clareza antes de qualquer decis&#227;o.
            </h2>
          </motion.div>

          <motion.p
            data-testid="approach-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/50 font-body text-base leading-relaxed mb-6"
          >
            Cada ambiente possui sua pr&#243;pria din&#226;mica.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/50 font-body text-base leading-relaxed mb-12"
          >
            Antes de qualquer ajuste, analiso o cen&#225;rio atual, identifico pontos
            cr&#237;ticos e explico, de forma objetiva, o que pode ser aprimorado.
          </motion.p>

          {/* Principles */}
          <div className="space-y-4">
            {principles.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                  style={{
                    backgroundColor: "#39FF14",
                    boxShadow: "0 0 8px rgba(57,255,20,0.4)",
                  }}
                />
                <p
                  data-testid={`approach-principle-${i}`}
                  className="font-body text-white/80 text-base font-medium"
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
