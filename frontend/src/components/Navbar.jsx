import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import { useI18n } from "@/i18n/context";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
  { label: t.nav.about, href: "#sobre" },
  { label: t.nav.services, href: "#servicos" },
  { label: t.nav.projects, href: "#trabalhos" },
  { label: t.nav.contact, href: "#contato" }];


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
      scrolled ? "bg-bg-primary/90 backdrop-blur-lg border-b border-white/5" : ""}`
      }>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          data-testid="logo-link"
          onClick={() => go("#hero")}
          className="flex items-center gap-2.5">

          <span className="font-heading text-xl font-bold text-neon-green">GI</span>
          <span className="hidden sm:block text-white/50 text-xs tracking-[0.2em] uppercase font-body">GREGORY INSIGHTS

          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) =>
          <button
            key={l.href}
            data-testid={`nav-${l.href.slice(1)}`}
            onClick={() => go(l.href)}
            className="text-white/50 hover:text-white text-sm font-body transition-colors">

              {l.label}
            </button>
          )}

          {/* Language switcher */}
          <button
            data-testid="lang-switcher"
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-body font-semibold border border-white/10 rounded px-2 py-1 hover:border-white/20 transition-colors">

            <span className={lang === "en" ? "text-neon-green" : "text-white/40"}>EN</span>
            <span className="text-white/20">|</span>
            <span className={lang === "pt" ? "text-neon-green" : "text-white/40"}>PT</span>
          </button>

          <a
            data-testid="nav-linkedin"
            href="https://linkedin.com/in/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-neon-blue transition-colors">

            <Linkedin size={16} />
          </a>
          <a
            data-testid="nav-instagram"
            href="https://instagram.com/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-neon-blue transition-colors">

            <Instagram size={16} />
          </a>
          <button
            data-testid="nav-cta-button"
            onClick={() => go("#contato")}
            className="px-4 py-1.5 text-sm font-body font-semibold bg-neon-green text-black rounded hover:brightness-110 transition-all">

            {t.nav.cta}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <button
            data-testid="lang-switcher-mobile"
            onClick={toggleLang}
            className="text-xs font-body font-semibold border border-white/10 rounded px-2 py-1">

            <span className={lang === "en" ? "text-neon-green" : "text-white/40"}>EN</span>
            <span className="text-white/20"> | </span>
            <span className={lang === "pt" ? "text-neon-green" : "text-white/40"}>PT</span>
          </button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="text-white/60">

            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open &&
      <div
        data-testid="mobile-menu"
        className="md:hidden fixed inset-0 top-16 bg-bg-primary/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-7">

          {links.map((l) =>
        <button
          key={l.href}
          data-testid={`mobile-nav-${l.href.slice(1)}`}
          onClick={() => go(l.href)}
          className="text-white text-xl font-heading font-semibold hover:text-neon-green transition-colors">

              {l.label}
            </button>
        )}
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
          className="px-6 py-2.5 bg-neon-green text-black font-body font-semibold rounded">

            {t.nav.cta}
          </button>
        </div>
      }
    </nav>);

}