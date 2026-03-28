import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Servi\u00e7os", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/90 backdrop-blur-lg border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          data-testid="logo-link"
          onClick={() => go("#hero")}
          className="flex items-center gap-2.5"
        >
          <span className="font-heading text-xl font-bold text-neon-green">GI</span>
          <span className="hidden sm:block text-white/50 text-xs tracking-[0.2em] uppercase font-body">
            Grego Infortech
          </span>
        </button>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              onClick={() => go(l.href)}
              className="text-white/50 hover:text-white text-sm font-body transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            data-testid="nav-linkedin"
            href="https://linkedin.com/in/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-neon-blue transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            data-testid="nav-instagram"
            href="https://instagram.com/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-neon-blue transition-colors"
          >
            <Instagram size={16} />
          </a>
          <button
            data-testid="nav-cta-button"
            onClick={() => go("#contato")}
            className="px-4 py-1.5 text-sm font-body font-semibold bg-neon-green text-black rounded hover:brightness-110 transition-all"
          >
            Fale Comigo
          </button>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden fixed inset-0 top-16 bg-bg-primary/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-7"
        >
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`mobile-nav-${l.label.toLowerCase()}`}
              onClick={() => go(l.href)}
              className="text-white text-xl font-heading font-semibold hover:text-neon-green transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-5 mt-2">
            <a href="https://linkedin.com/in/gregoinfortech" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/gregoinfortech" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-blue transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          <button
            data-testid="mobile-cta-button"
            onClick={() => go("#contato")}
            className="px-6 py-2.5 bg-neon-green text-black font-body font-semibold rounded"
          >
            Fale Comigo
          </button>
        </div>
      )}
    </nav>
  );
}
