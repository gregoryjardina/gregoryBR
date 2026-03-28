import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/[0.05] py-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-neon-green">GI</span>
          <span className="text-white/25 text-xs tracking-[0.15em] uppercase font-body">Grego Infortech</span>
        </div>
        <div className="flex items-center gap-4">
          <a data-testid="footer-linkedin" href="https://linkedin.com/in/gregoinfortech" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-neon-green transition-colors">
            <Linkedin size={15} />
          </a>
          <a data-testid="footer-instagram" href="https://instagram.com/gregoinfortech" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-neon-green transition-colors">
            <Instagram size={15} />
          </a>
        </div>
        <p className="text-white/15 text-xs font-body">{new Date().getFullYear()} Grego Infortech</p>
      </div>
    </footer>
  );
}
