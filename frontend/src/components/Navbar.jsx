import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Vis\u00e3o", href: "#visao" },
  { label: "Servi\u00e7os", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Resultados", href: "#resultados" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          data-testid="logo-link"
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="flex items-center gap-2"
        >
          <span
            className="font-heading text-2xl font-extrabold tracking-tight"
            style={{
              color: "#39FF14",
              textShadow: "0 0 20px rgba(57,255,20,0.4), 0 0 40px rgba(57,255,20,0.15)",
            }}
          >
            GI
          </span>
          <span className="hidden sm:inline text-white/60 font-body text-sm tracking-widest uppercase">
            Grego Infortech
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-testid={`nav-${link.label.toLowerCase()}`}
              onClick={() => scrollTo(link.href)}
              className="text-white/60 hover:text-neon-green text-sm font-body font-medium tracking-wide transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + Social */}
        <div className="hidden md:flex items-center gap-4">
          <a
            data-testid="nav-linkedin"
            href="https://linkedin.com/in/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-neon-blue transition-colors duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            data-testid="nav-instagram"
            href="https://instagram.com/gregoinfortech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-neon-blue transition-colors duration-300"
          >
            <Instagram size={18} />
          </a>
          <button
            data-testid="nav-cta-button"
            onClick={() => scrollTo("#contato")}
            className="ml-2 px-5 py-2 bg-neon-green text-black text-sm font-bold font-body rounded-sm hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: "0 0 15px rgba(57,255,20,0.3)" }}
          >
            Fale Comigo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/70 hover:text-neon-green transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-bg-primary/95 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => scrollTo(link.href)}
                  className="text-white text-2xl font-heading font-bold hover:text-neon-green transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-6 mt-4">
                <a
                  href="https://linkedin.com/in/gregoinfortech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-neon-blue transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://instagram.com/gregoinfortech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-neon-blue transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
              <button
                data-testid="mobile-cta-button"
                onClick={() => scrollTo("#contato")}
                className="px-8 py-3 bg-neon-green text-black text-lg font-bold font-body rounded-sm"
                style={{ boxShadow: "0 0 15px rgba(57,255,20,0.3)" }}
              >
                Fale Comigo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
