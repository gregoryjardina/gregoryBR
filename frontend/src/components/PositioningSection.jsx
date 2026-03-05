import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PositioningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="posicionamento"
      data-testid="positioning-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.03) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-neon-green/70 font-body text-xs tracking-[0.3em] uppercase mb-4">
              Posicionamento
            </p>
            <h2
              data-testid="positioning-title"
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-8"
            >
              Estrutura &#233; fundamento.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p
              data-testid="positioning-text-1"
              className="text-white/50 font-body text-base sm:text-lg leading-relaxed"
            >
              Crescimento sustent&#225;vel depende de uma base bem constru&#237;da.
            </p>

            <p
              data-testid="positioning-text-2"
              className="text-white/50 font-body text-base sm:text-lg leading-relaxed"
            >
              Tecnologia bem organizada n&#227;o chama aten&#231;&#227;o —{" "}
              <span className="text-white/90 font-medium">
                ela simplesmente funciona.
              </span>
            </p>

            <p className="text-white/30 font-body text-sm italic mt-4">
              Esse &#233; o objetivo.
            </p>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 h-px w-32 mx-auto"
            style={{
              background: "linear-gradient(to right, transparent, #39FF1440, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
