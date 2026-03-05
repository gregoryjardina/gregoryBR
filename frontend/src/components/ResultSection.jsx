import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const results = [
  "Processos mais organizados",
  "Redu\u00e7\u00e3o de falhas inesperadas",
  "Maior previsibilidade operacional",
  "Ambiente tecnol\u00f3gico mais confi\u00e1vel",
  "Seguran\u00e7a como base, n\u00e3o como improviso",
];

export default function ResultSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="resultados"
      data-testid="result-section"
      className="relative py-24 sm:py-32"
    >
      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neon-green/70 font-body text-xs tracking-[0.3em] uppercase mb-4">
              Resultado
            </p>
            <h2
              data-testid="result-title"
              className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4"
            >
              O que muda na pr&#225;tica.
            </h2>
            <p className="text-white/40 font-body text-sm leading-relaxed">
              Resultados tang&#237;veis que impactam diretamente a opera&#231;&#227;o do seu neg&#243;cio.
            </p>
          </motion.div>

          {/* Right - List */}
          <div className="space-y-0">
            {results.map((item, i) => (
              <motion.div
                key={i}
                data-testid={`result-item-${i}`}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group flex items-center gap-5 py-5 border-b border-white/5 last:border-0 transition-all duration-300 hover:pl-2"
              >
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(57,255,20,0.08)",
                    border: "1px solid rgba(57,255,20,0.15)",
                  }}
                >
                  <Check
                    size={14}
                    className="text-neon-green transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <span className="font-body text-white/70 text-base group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
