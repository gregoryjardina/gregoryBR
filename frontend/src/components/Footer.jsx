import { Linkedin, Instagram } from "lucide-react";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer data-testid="footer" className="border-t border-white/[0.04] py-6 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-heading text-base font-bold text-neon-green">GP</span>
          <span className="text-white/20 text-[11px] tracking-[0.12em] uppercase font-body">{t.footer.copy}</span>
        </div>
        <div className="flex items-center gap-4">
          <a data-testid="footer-linkedin" href="https://linkedin.com/in/gregoinfortech" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-neon-green transition-colors"><Linkedin size={14} /></a>
          <a data-testid="footer-instagram" href="https://instagram.com/gregoinfortech" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-neon-green transition-colors"><Instagram size={14} /></a>
        </div>
        <p className="text-white/12 text-[11px] font-body">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
