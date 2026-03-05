import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="border-t border-white/5 py-12 bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className="font-heading text-xl font-extrabold"
              style={{
                color: "#39FF14",
                textShadow: "0 0 15px rgba(57,255,20,0.3)",
              }}
            >
              GI
            </span>
            <span className="text-white/30 font-body text-xs tracking-widest uppercase">
              Grego Infortech
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <a
              data-testid="footer-linkedin"
              href="https://linkedin.com/in/gregoinfortech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-neon-green transition-colors duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              data-testid="footer-instagram"
              href="https://instagram.com/gregoinfortech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-neon-green transition-colors duration-300"
            >
              <Instagram size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/20 font-body text-xs">
            {new Date().getFullYear()} Grego Infortech. Estrutura com proposito.
          </p>
        </div>
      </div>
    </footer>
  );
}
