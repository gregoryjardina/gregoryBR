import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Cog, Compass, ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n/context";

const icons = [Server, Cog, Compass, ShieldCheck];
const colors = ["#39FF14", "#00F0FF", "#00F0FF", "#39FF14"];
const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function SkillsSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="servicos" data-testid="skills-section" ref={ref} className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-neon-green/60 text-xs tracking-[0.25em] uppercase mb-3 font-body">{t.skills.label}</p>
          <h2 data-testid="skills-title" className="font-heading font-bold text-2xl sm:text-3xl text-white">{t.skills.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {t.skills.items.map((s, i) => {
            const Icon = icons[i];
            const c = colors[i];
            return (
              <motion.div
                key={i}
                data-testid={`skill-card-${i}`}
                variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="group p-6 rounded border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded mb-4" style={{ backgroundColor: `${c}0d`, border: `1px solid ${c}1a` }}>
                  <Icon size={17} style={{ color: c }} />
                </div>
                <h3 className="font-heading font-semibold text-base text-white mb-2 group-hover:text-neon-green transition-colors">{s.title}</h3>
                <p className="font-body text-white/45 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
