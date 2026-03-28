import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Reestrutura\u00e7\u00e3o de Rede Corporativa",
    client: "Empresa de Log\u00edstica",
    text: "Reorganiza\u00e7\u00e3o completa do cabeamento estruturado e configura\u00e7\u00e3o de switches gerenci\u00e1veis. Redu\u00e7\u00e3o de 80% nas quedas de conex\u00e3o.",
    tags: ["Rede", "Cabeamento", "Switches"],
  },
  {
    image: "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Montagem e Configura\u00e7\u00e3o de Servidor",
    client: "Escrit\u00f3rio de Contabilidade",
    text: "Instala\u00e7\u00e3o de servidor local para compartilhamento de arquivos, backup autom\u00e1tico e controle de acesso por usu\u00e1rio.",
    tags: ["Servidor", "Backup", "Seguran\u00e7a"],
  },
  {
    image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Organiza\u00e7\u00e3o de Infraestrutura de TI",
    client: "Cl\u00ednica M\u00e9dica",
    text: "Organiza\u00e7\u00e3o do rack de rede, identifica\u00e7\u00e3o de pontos, configura\u00e7\u00e3o de Wi-Fi segmentado para equipe e pacientes.",
    tags: ["Rack", "Wi-Fi", "Infraestrutura"],
  },
  {
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMGluZnJhc3RydWN0dXJlJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzcyNjc3ODkzfDA&ixlib=rb-4.1.0&q=85",
    title: "Manuten\u00e7\u00e3o Preventiva e Otimiza\u00e7\u00e3o",
    client: "Com\u00e9rcio Varejista",
    text: "Diagn\u00f3stico completo de equipamentos, limpeza, atualiza\u00e7\u00e3o de sistemas e cria\u00e7\u00e3o de rotina de manuten\u00e7\u00e3o preventiva.",
    tags: ["Manuten\u00e7\u00e3o", "Otimiza\u00e7\u00e3o", "Processos"],
  },
];

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="trabalhos"
      data-testid="projects-section"
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
            Trabalhos Realizados
          </p>
          <h2
            data-testid="projects-title"
            className="font-heading font-bold text-2xl sm:text-3xl text-white"
          >
            Na pr&#225;tica, &#233; assim que funciona.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              data-testid={`project-card-${i}`}
              variants={fade}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group rounded border border-white/[0.06] overflow-hidden bg-white/[0.02] hover:border-white/[0.12] transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[0.55] group-hover:brightness-[0.65] transition-[filter] duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-body text-white/60 bg-black/50 backdrop-blur-sm rounded border border-white/[0.06]">
                  {p.client}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-semibold text-base text-white mb-1.5 group-hover:text-neon-green transition-colors">
                  {p.title}
                </h3>
                <p className="font-body text-white/40 text-sm leading-relaxed mb-3">{p.text}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-[11px] font-body text-neon-green/60 bg-neon-green/[0.05] border border-neon-green/[0.08] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-white/15 text-xs text-center mt-8 font-body italic">
          Imagens ilustrativas — substitua pelas fotos reais dos seus projetos.
        </p>
      </div>
    </section>
  );
}
