import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Server, Cog, Compass, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Organiza\u00e7\u00e3o de Infraestrutura",
    description:
      "Estruturo servidores, redes e sistemas para que sua base digital seja confi\u00e1vel e est\u00e1vel.",
    accent: "neon-green",
  },
  {
    icon: Cog,
    title: "Otimiza\u00e7\u00e3o de Processos",
    description:
      "Transformo rotinas manuais em fluxos mais eficientes e previs\u00edveis.",
    accent: "neon-blue",
  },
  {
    icon: Compass,
    title: "Consultoria T\u00e9cnica Estrat\u00e9gica",
    description:
      "Avalio sua estrutura atual e proponho melhorias coerentes com sua realidade.",
    accent: "neon-blue",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade e Seguran\u00e7a",
    description:
      "Implementa\u00e7\u00e3o de boas pr\u00e1ticas que reduzem riscos e aumentam controle.",
    accent: "neon-green",
  },
];

function ServiceCard({ service, index, isInView }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  const isGreen = service.accent === "neon-green";
  const accentColor = isGreen ? "#39FF14" : "#00F0FF";

  return (
    <motion.div
      data-testid={`service-card-${index}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group p-8 rounded-sm border transition-all duration-500 cursor-default overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        borderColor: hovered ? `${accentColor}50` : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 0 30px ${accentColor}10` : "none",
      }}
    >
      {/* Tracing beam on hover */}
      <div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${accentColor}20, transparent, ${accentColor}20, transparent)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div
        className="w-10 h-10 flex items-center justify-center rounded-sm mb-6 transition-all duration-300"
        style={{
          backgroundColor: `${accentColor}10`,
          border: `1px solid ${accentColor}20`,
        }}
      >
        <Icon
          size={20}
          style={{ color: accentColor }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3
        className="font-heading font-bold text-xl text-white mb-3 transition-colors duration-300"
        style={{ color: hovered ? accentColor : "#FFFFFF" }}
      >
        {service.title}
      </h3>

      <p className="font-body text-white/50 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      data-testid="services-section"
      className="relative py-24 sm:py-32"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-neon-green/70 font-body text-xs tracking-[0.3em] uppercase mb-4">
            Servi&#231;os
          </p>
          <h2
            data-testid="services-title"
            className="font-heading font-bold text-3xl sm:text-4xl text-white"
          >
            O que eu fa&#231;o
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
