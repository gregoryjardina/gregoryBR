import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, Cloud, Server, GitBranch } from "lucide-react";
import { useI18n } from "@/i18n/context.jsx";

const icons = [Cloud, Server, Server, GitBranch];
const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function LabSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="lab" data-testid="lab-section" ref={ref} className="py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="mb-3">
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical size={14} className="text-neon-blue/50" />
            <p className="text-neon-blue/50 text-[11px] tracking-[0.25em] uppercase font-body">{t.lab.label}</p>
          </div>
          <h2 data-testid="lab-title" className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">{t.lab.title}</h2>
          <p className="font-body text-white/35 text-sm max-w-xl">{t.lab.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {t.lab.items.map((item, i) => {
            const Icon = icons[i] || Cloud;
            return (
              <motion.div key={i} data-testid={`lab-card-${i}`}
                variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.35, delay: 0.06 * i }}
                className="group p-5 rounded border border-dashed border-white/[0.06] bg-white/[0.01] hover:border-neon-blue/20 transition-colors">
                <div className="flex items-start gap-3">
                  <Icon size={15} className="text-neon-blue/40 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-white mb-1 group-hover:text-neon-blue transition-colors">{item.title}</h3>
                    <p className="font-body text-white/40 text-[13px] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
