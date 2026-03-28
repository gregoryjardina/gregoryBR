import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function ContactSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contato" data-testid="contact-section" ref={ref} className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          data-testid="contact-title"
          variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug mb-4"
        >
          {t.contact.title}
          <span className="text-neon-blue">{t.contact.titleAccent}</span>
        </motion.h2>

        <motion.p
          data-testid="contact-text"
          variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-white/40 text-base leading-relaxed mb-10 max-w-lg mx-auto"
        >
          {t.contact.text}
        </motion.p>

        <motion.div
          variants={fade} initial="hidden" animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            data-testid="contact-linkedin-button"
            href="https://linkedin.com/in/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green text-black font-body font-semibold text-sm rounded hover:brightness-110 transition-all"
          >
            <Linkedin size={16} />
            {t.contact.linkedinCta}
            <ArrowUpRight size={14} />
          </a>
          <a
            data-testid="contact-instagram-button"
            href="https://instagram.com/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neon-blue/30 text-neon-blue font-body font-medium text-sm rounded hover:bg-neon-blue/[0.06] transition-colors"
          >
            <Instagram size={16} />
            {t.contact.instagramCta}
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
