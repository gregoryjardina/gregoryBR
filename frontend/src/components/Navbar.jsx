import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram, Github, Youtube } from "lucide-react";
import { useI18n } from "@/i18n/context";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.lab, href: "#lab" },
    { label: t.nav.contact, href: "#contato" },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "en" ? "pt" : "en");

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/90 backdrop-blur-lg border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <button data-testid="logo-link" onClick={() => go("#hero")} className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-neon-green">GP</span>
          <span className="hidden sm:block text-white/40 text-[11px] tracking-[0.15em] uppercase font-body">Gregory Porto</span>
        </button>

        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-${l.href.slice(1)}`}
              onClick={() => go(l.href)}
              className="text-white/45 hover:text-white text-[13px] font-body transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="lang-switcher"
            onClick={toggleLang}
            className="flex items-center gap-1 text-[11px] font-body font-semibold border border-white/10 rounded px-2 py-0.5 hover:border-white/20 transition-colors"
          >
            <span className={lang === "en" ? "text-neon-green" : "text-white/35"}>EN</span>
            <span className="text-white/15">|</span>
            <span className={lang === "pt" ? "text-neon-green" : "text-white/35"}>PT</span>
          </button>
          <a data-testid="nav-linkedin" href="https://www.linkedin.com/in/gregoryporto/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-neon-blue transition-colors">
            <Linkedin size={15} />
          </a>
          <a data-testid="nav-github" href="https://github.com/gregoryjardina-dev" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-neon-blue transition-colors">
            <Github size={15} />
          </a>
          <a data-testid="nav-youtube" href="https://www.youtube.com/channel/UClgMa08_T8rA0qt82lwnzjA" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-neon-blue transition-colors">
            <Youtube size={15} />
          </a>
          <a data-testid="nav-instagram" href="https://www.instagram.com/gregory.jardina/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-neon-blue transition-colors">
            <Instagram size={15} />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button data-testid="lang-switcher-mobile" onClick={toggleLang} className="text-[11px] font-body font-semibold border border-white/10 rounded px-2 py-0.5">
            <span className={lang === "en" ? "text-neon-green" : "text-white/35"}>EN</span>
            <span className="text-white/15"> | </span>
            <span className={lang === "pt" ? "text-neon-green" : "text-white/35"}>PT</span>
          </button>
          <button data-testid="mobile-menu-toggle" onClick={() => setOpen(!open)} className="text-white/50">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="md:hidden fixed inset-0 top-14 bg-bg-primary/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6">
          {links.map((l) => (
            <button key={l.href} data-testid={`mobile-nav-${l.href.slice(1)}`} onClick={() => go(l.href)} className="text-white text-lg font-heading font-semibold hover:text-neon-green transition-colors">
              {l.label}
            </button>
          ))}
          <div className="flex gap-5 mt-2">
            <a href="https://www.linkedin.com/in/gregoryporto/" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-neon-blue"><Linkedin size={18} /></a>
            <a href="https://github.com/gregoryjardina-dev" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-neon-blue"><Github size={18} /></a>
            <a href="https://www.youtube.com/channel/UClgMa08_T8rA0qt82lwnzjA" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-neon-blue"><Youtube size={18} /></a>
            <a href="https://www.instagram.com/gregory.jardina/" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-neon-blue"><Instagram size={18} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
