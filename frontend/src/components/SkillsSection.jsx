import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Network, Monitor, ShieldCheck, Container, Briefcase } from "lucide-react";
import { useI18n } from "@/i18n/context";

const icons = [Cloud, Network, Monitor, ShieldCheck, Container, Briefcase];
const colors = ["#39FF14", "#00F0FF", "#39FF14", "#00F0FF", "#39FF14", "#00F0FF"];
const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function SkillsSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" data-testid="skills-section" ref={ref} className="py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="mb-10">
          <p className="text-neon-green/50 text-[11px] tracking-[0.25em] uppercase mb-3 font-body">{t.skills.label}</p>
          <h2 data-testid="skills-title" className="font-heading font-bold text-2xl sm:text-3xl text-white">{t.skills.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.skills.items.map((s, i) => {
            const Icon = icons[i] || Cloud;
            const c = colors[i] || "#39FF14";
            return (
              <motion.div key={i} data-testid={`skill-card-${i}`}
                variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.35, delay: 0.06 * i }}
                className="group p-5 rounded border border-white/[0.06] bg-white/[0.015] hover:border-white/[0.1] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center rounded mb-3" style={{ backgroundColor: `${c}0a`, border: `1px solid ${c}15` }}>
                  <Icon size={15} style={{ color: c }} />
                </div>
                <h3 className="font-heading font-semibold text-sm text-white mb-1.5 group-hover:text-neon-green transition-colors">{s.title}</h3>
                <p className="font-body text-white/40 text-[13px] leading-relaxed">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
