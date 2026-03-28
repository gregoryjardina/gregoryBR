import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Cog, Compass, ShieldCheck } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Organiza\u00e7\u00e3o de Infraestrutura",
    text: "Estruturo servidores, redes e sistemas para que sua base digital seja confi\u00e1vel e est\u00e1vel.",
    color: "#39FF14",
  },
  {
    icon: Cog,
    title: "Otimiza\u00e7\u00e3o de Processos",
    text: "Transformo rotinas manuais em fluxos mais eficientes e previs\u00edveis.",
    color: "#00F0FF",
  },
  {
    icon: Compass,
    title: "Consultoria T\u00e9cnica Estrat\u00e9gica",
    text: "Avalio sua estrutura atual e proponho melhorias coerentes com sua realidade.",
    color: "#00F0FF",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade e Seguran\u00e7a",
    text: "Implementa\u00e7\u00e3o de boas pr\u00e1ticas que reduzem riscos e aumentam controle.",
    color: "#39FF14",
  },
];

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="servicos"
      data-testid="skills-section"
      ref={ref}
      className="py-20 sm:py-28 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-neon-green/60 text-xs tracking-[0.25em] uppercase mb-3 font-body">
            Servi&#231;os
          </p>
          <h2
            data-testid="skills-title"
            className="font-heading font-bold text-2xl sm:text-3xl text-white"
          >
            O que eu fa&#231;o
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                data-testid={`skill-card-${i}`}
                variants={fade}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="group p-6 rounded border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded mb-4"
                  style={{ backgroundColor: `${s.color}0d`, border: `1px solid ${s.color}1a` }}
                >
                  <Icon size={17} style={{ color: s.color }} />
                </div>
                <h3 className="font-heading font-semibold text-base text-white mb-2 group-hover:text-neon-green transition-colors">
                  {s.title}
                </h3>
                <p className="font-body text-white/45 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
