import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1614508569207-3295ac89d75f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w7NDk1NzZ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc2VydmVyJTIwcm9vbSUyMGRhdGElMjBjZW50ZXIlMjBuZW9uJTIwbGlnaHRzJTIwZGFya3xlbnwwfHx8fDE3NzI2NzY4NTJ8MA&ixlib=rb-4.1.0&q=85"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-bg-primary/80 to-bg-primary" />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)",
          animationDelay: "1.5s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            data-testid="hero-label"
            className="text-neon-green/80 font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            Presen&#231;a Calma
          </p>
        </motion.div>

        <motion.h1
          data-testid="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-8"
        >
          Estrutura digital s&#243;lida para empresas que valorizam{" "}
          <span
            style={{
              color: "#39FF14",
              textShadow: "0 0 30px rgba(57,255,20,0.25)",
            }}
          >
            organiza&#231;&#227;o e clareza
          </span>
          .
        </motion.h1>

        <motion.p
          data-testid="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-body text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Organizo e aprimoro ambientes tecnol&#243;gicos para que sua opera&#231;&#227;o
          funcione com estabilidade, previsibilidade e seguran&#231;a — de forma simples
          e compreens&#237;vel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <button
            data-testid="hero-cta-button"
            onClick={() => scrollTo("#contato")}
            className="px-8 py-4 bg-neon-green text-black font-bold font-body text-base rounded-sm hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: "0 0 20px rgba(57,255,20,0.3)" }}
          >
            Conversar sobre sua estrutura
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            data-testid="scroll-down-button"
            onClick={() => scrollTo("#visao")}
            className="text-white/20 hover:text-neon-green/50 transition-colors animate-float"
          >
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
