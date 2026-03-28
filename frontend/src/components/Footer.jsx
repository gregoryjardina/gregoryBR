import { Linkedin, Instagram, Github, Youtube } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/gregoryporto/", testId: "footer-linkedin" },
  { icon: Github, href: "https://github.com/gregoryjardina-dev", testId: "footer-github" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UClgMa08_T8rA0qt82lwnzjA", testId: "footer-youtube" },
  { icon: Instagram, href: "https://www.instagram.com/gregory.jardina/", testId: "footer-instagram" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/[0.04] py-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-base font-bold text-neon-green">GP</span>
          <span className="text-white/20 text-[11px] tracking-[0.12em] uppercase font-body">Gregory Porto</span>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.testId} data-testid={s.testId} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-neon-green transition-colors">
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        <p className="text-white/20 text-[11px] font-body text-center">
          &copy; 2026 Gregory Porto &mdash; structuring systems, one layer at a time.
        </p>
        <p className="text-white/10 text-[10px] font-body">
          Powered by Cloudflare Pages
        </p>
      </div>
    </footer>
  );
}
