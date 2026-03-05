import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Reestrutura\u00e7\u00e3o de Rede Corporativa",
    client: "Empresa de Log\u00edstica",
    description: "Reorganiza\u00e7\u00e3o completa do cabeamento estruturado e configura\u00e7\u00e3o de switches gerenci\u00e1veis. Redu\u00e7\u00e3o de 80% nas quedas de conex\u00e3o.",
    tags: ["Rede", "Cabeamento", "Switches"],
  },
  {
    image: "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Montagem e Configura\u00e7\u00e3o de Servidor",
    client: "Escrit\u00f3rio de Contabilidade",
    description: "Instala\u00e7\u00e3o de servidor local para compartilhamento de arquivos, backup autom\u00e1tico e controle de acesso por usu\u00e1rio.",
    tags: ["Servidor", "Backup", "Seguran\u00e7a"],
  },
  {
    image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Organiza\u00e7\u00e3o de Infraestrutura de TI",
    client: "Cl\u00ednica M\u00e9dica",
    description: "Organiza\u00e7\u00e3o do rack de rede, identifica\u00e7\u00e3o de pontos, configura\u00e7\u00e3o de Wi-Fi segmentado para equipe e pacientes.",
    tags: ["Rack", "Wi-Fi", "Infraestrutura"],
  },
  {
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Manuten\u00e7\u00e3o Preventiva e Otimiza\u00e7\u00e3o",
    client: "Com\u00e9rcio Varejista",
    description: "Diagn\u00f3stico completo de equipamentos, limpeza, atualiza\u00e7\u00e3o de sistemas e cria\u00e7\u00e3o de rotina de manuten\u00e7\u00e3o preventiva.",
    tags: ["Manuten\u00e7\u00e3o", "Otimiza\u00e7\u00e3o", "Processos"],
  },
];

function ProjectCard({ project, index, isInView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      data-testid={`project-card-${index}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.12 * index, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-sm overflow-hidden border border-white/5 transition-all duration-500"
      style={{
        borderColor: hovered ? "rgba(57,255,20,0.25)" : "rgba(255,255,255,0.05)",
        boxShadow: hovered ? "0 0 40px rgba(57,255,20,0.06)" : "none",
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "brightness(0.6) saturate(0.8)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />

        {/* Client badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-block px-3 py-1 text-xs font-body font-medium rounded-sm"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              color: "#A3A3A3",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {project.client}
          </span>
        </div>

        {/* Hover overlay icon */}
        <div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: "rgba(57,255,20,0.15)",
              border: "1px solid rgba(57,255,20,0.3)",
            }}
          >
            <ExternalLink size={14} className="text-neon-green" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6" style={{ backgroundColor: "#0A0A0A" }}>
        <h3
          className="font-heading font-bold text-lg text-white mb-2 transition-colors duration-300 group-hover:text-neon-green"
        >
          {project.title}
        </h3>
        <p className="font-body text-white/45 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-body font-medium rounded-sm"
              style={{
                backgroundColor: "rgba(57,255,20,0.06)",
                color: "rgba(57,255,20,0.7)",
                border: "1px solid rgba(57,255,20,0.1)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 380;
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section
      id="trabalhos"
      data-testid="projects-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neon-green/70 font-body text-xs tracking-[0.3em] uppercase mb-4">
              Trabalhos Realizados
            </p>
            <h2
              data-testid="projects-title"
              className="font-heading font-bold text-3xl sm:text-4xl text-white"
            >
              Na pr&#225;tica, &#233; assim que funciona.
            </h2>
          </motion.div>

          {/* Desktop scroll arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2"
          >
            <button
              data-testid="projects-scroll-left"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-white/10 text-white/40 hover:text-neon-green hover:border-neon-green/30 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              data-testid="projects-scroll-right"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-white/10 text-white/40 hover:text-neon-green hover:border-neon-green/30 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Cards - Horizontal scroll on large, grid on small */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, i) => (
              <div key={i} className="flex-shrink-0 w-[350px]">
                <ProjectCard project={project} index={i} isInView={isInView} />
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/20 font-body text-xs text-center mt-10 italic"
        >
          Imagens ilustrativas — substitua pelas fotos reais dos seus projetos.
        </motion.p>
      </div>
    </section>
  );
}
