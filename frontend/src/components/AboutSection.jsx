import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="sobre"
      data-testid="about-section"
      ref={ref}
      className="py-20 sm:py-28 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — manifesto */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.5 }}
          >
            <p className="text-neon-blue/60 text-xs tracking-[0.25em] uppercase mb-4 font-body">
              Vis&#227;o
            </p>
            <h2
              data-testid="about-title"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug mb-6"
            >
              Tecnologia n&#227;o deve gerar d&#250;vida.{" "}
              <span className="text-neon-blue">Deve gerar confian&#231;a.</span>
            </h2>
            <p
              data-testid="about-text"
              className="font-body text-white/50 text-base leading-relaxed mb-6 max-w-xl"
            >
              Quando sistemas, redes e processos est&#227;o bem estruturados, tudo flui
              com naturalidade. Sem improvisos. Sem depend&#234;ncia de solu&#231;&#245;es fr&#225;geis.
              Sem surpresas desagrad&#225;veis.
            </p>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xl">
              O objetivo n&#227;o &#233; apenas fazer funcionar —{" "}
              <span className="text-white/70">&#233; fazer funcionar com consist&#234;ncia.</span>
            </p>
          </motion.div>

          {/* Right — approach */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-neon-green/60 text-xs tracking-[0.25em] uppercase mb-4 font-body">
              Abordagem
            </p>
            <h3
              data-testid="approach-title"
              className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug mb-5"
            >
              Clareza antes de qualquer decis&#227;o.
            </h3>
            <p className="font-body text-white/50 text-base leading-relaxed mb-8 max-w-xl">
              Antes de qualquer ajuste, analiso o cen&#225;rio atual, identifico pontos
              cr&#237;ticos e explico, de forma objetiva, o que pode ser aprimorado.
            </p>
            <div className="space-y-3">
              {[
                "Voc\u00ea entende o que est\u00e1 sendo feito.",
                "Voc\u00ea participa das decis\u00f5es.",
                "Voc\u00ea mant\u00e9m o controle.",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3" data-testid={`about-principle-${i}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green/70 flex-shrink-0" />
                  <p className="font-body text-white/70 text-sm">{t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
