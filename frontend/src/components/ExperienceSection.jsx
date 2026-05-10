import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/i18n/context.jsx";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function ExperienceSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experiencia" data-testid="experience-section" ref={ref} className="py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }} className="mb-10">
          <p className="text-neon-blue/50 text-[11px] tracking-[0.25em] uppercase mb-3 font-body">{t.experience.label}</p>
          <h2 data-testid="experience-title" className="font-heading font-bold text-2xl sm:text-3xl text-white">{t.experience.title}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-white/[0.06]" />

          <div className="space-y-8">
            {t.experience.roles.map((role, i) => (
              <motion.div
                key={i}
                data-testid={`experience-role-${i}`}
                variants={fade}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: role.current ? "#39FF14" : "rgba(255,255,255,0.12)",
                    backgroundColor: role.current ? "#39FF1415" : "transparent",
                  }}
                >
                  {role.current && <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                    <h3 className="font-heading font-semibold text-base text-white">{role.role}</h3>
                    <span className="text-white/25 text-[13px] font-body">{role.company}</span>
                  </div>
                  <p className="text-[12px] font-body mb-3" style={{ color: role.current ? "#39FF14aa" : "rgba(255,255,255,0.3)" }}>
                    {role.period}
                  </p>
                  <ul className="space-y-1.5">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-white/45 text-[13px] font-body leading-relaxed">
                        <span className="text-white/15 mt-0.5 flex-shrink-0">&bull;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
