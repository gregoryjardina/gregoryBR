import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="visao"
      data-testid="vision-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1614508569207-3295ac89d75f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w7NDk1NzZ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc2VydmVyJTIwcm9vbSUyMGRhdGElMjBjZW50ZXIlMjBuZW9uJTIwbGlnaHRzJTIwZGFya3xlbnwwfHx8fDE3NzI2NzY4NTJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Infraestrutura tecnol&#243;gica"
                className="w-full h-80 object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-transparent to-neon-blue/10" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-neon-green/15 rounded-sm -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-neon-blue/70 font-body text-xs tracking-[0.3em] uppercase mb-4">
              Vis&#227;o
            </p>
            <h2
              data-testid="vision-title"
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8"
            >
              Tecnologia n&#227;o deve gerar d&#250;vida.{" "}
              <span style={{ color: "#00F0FF", textShadow: "0 0 20px rgba(0,240,255,0.2)" }}>
                Deve gerar confian&#231;a.
              </span>
            </h2>

            <p
              data-testid="vision-text"
              className="text-white/50 font-body text-base leading-relaxed mb-8"
            >
              Quando sistemas, redes e processos est&#227;o bem estruturados, tudo flui
              com naturalidade.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Sem improvisos.",
                "Sem depend\u00eancia de solu\u00e7\u00f5es fr\u00e1geis.",
                "Sem surpresas desagrad\u00e1veis.",
              ].map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-white/70 font-body text-sm pl-4 border-l-2 border-neon-green/30"
                >
                  {item}
                </motion.p>
              ))}
            </div>

            <p className="text-white/40 font-body text-sm italic leading-relaxed">
              O objetivo n&#227;o &#233; apenas fazer funcionar.
              <br />
              <span className="text-white/70 not-italic font-medium">
                &#201; fazer funcionar com consist&#234;ncia.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
