import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Instagram, Github, Youtube, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n/context.jsx";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function ContactSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contato" data-testid="contact-section" ref={ref} className="py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2 data-testid="contact-title" variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5 }}
          className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug mb-3">
          {t.contact.title}<span className="text-neon-blue">{t.contact.titleAccent}</span>
        </motion.h2>

        <motion.p data-testid="contact-text" variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.08 }}
          className="font-body text-white/35 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          {t.contact.text}
        </motion.p>

        <motion.div variants={fade} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.5, delay: 0.16 }}
          className="flex flex-wrap items-center justify-center gap-3">
          <a data-testid="contact-linkedin-button" href="https://www.linkedin.com/in/gregoryporto/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon-green text-black font-body font-semibold text-sm rounded hover:brightness-110 transition-all">
            <Linkedin size={15} />{t.contact.linkedinCta}<ArrowUpRight size={13} />
          </a>
          <a data-testid="contact-github-button" href="https://github.com/gregoryporto007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/70 font-body font-medium text-sm rounded hover:bg-white/[0.04] transition-colors">
            <Github size={15} />{t.contact.githubCta}<ArrowUpRight size={13} />
          </a>
          <a data-testid="contact-youtube-button" href="https://www.youtube.com/@cafecomotio" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-red-500/25 text-red-400/80 font-body font-medium text-sm rounded hover:bg-red-500/[0.05] transition-colors">
            <Youtube size={15} />{t.contact.youtubeCta}<ArrowUpRight size={13} />
          </a>
          <a data-testid="contact-instagram-button" href="https://www.instagram.com/gregoryporto.dev/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-neon-blue/25 text-neon-blue font-body font-medium text-sm rounded hover:bg-neon-blue/[0.05] transition-colors">
            <Instagram size={15} />{t.contact.instagramCta}<ArrowUpRight size={13} />
          </a>
          <a data-testid="contact-tiktok-button" href="https://www.tiktok.com/@cafecomotio" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/70 font-body font-medium text-sm rounded hover:bg-white/[0.04] transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            {t.contact.tiktokCta}<ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
