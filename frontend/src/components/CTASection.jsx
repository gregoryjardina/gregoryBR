import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contato"
      data-testid="cta-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(0,240,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              data-testid="cta-title"
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
            >
              Se sua estrutura pode evoluir,{" "}
              <span
                style={{
                  color: "#00F0FF",
                  textShadow: "0 0 20px rgba(0,240,255,0.2)",
                }}
              >
                podemos conversar.
              </span>
            </h2>
          </motion.div>

          <motion.p
            data-testid="cta-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/40 font-body text-base leading-relaxed mb-12"
          >
            Uma an&#225;lise clara pode revelar ajustes simples que trazem estabilidade e
            organiza&#231;&#227;o ao seu ambiente.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              data-testid="cta-linkedin-button"
              href="https://linkedin.com/in/gregoinfortech"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-neon-green text-black font-bold font-body text-base rounded-sm hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: "0 0 20px rgba(57,255,20,0.3)" }}
            >
              <Linkedin size={18} />
              Iniciar conversa
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              data-testid="cta-instagram-button"
              href="https://instagram.com/gregoinfortech"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 border border-neon-blue/40 text-neon-blue font-body text-base font-medium rounded-sm hover:bg-neon-blue/10 transition-all duration-300"
            >
              <Instagram size={18} />
              Instagram
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
