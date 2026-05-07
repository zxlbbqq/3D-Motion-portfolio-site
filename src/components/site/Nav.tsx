import { motion } from "framer-motion";
import { useI18n, type Lang } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useI18n();

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#showreel", label: t.nav.showreel },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggle = () => setLang(lang === "ru" ? "en" : "ru");
  const next: Lang = lang === "ru" ? "en" : "ru";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between glass rounded-full px-5 py-3 backdrop-blur-xl">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          <span className="text-neon">●</span> {t.nav.name}
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${next.toUpperCase()}`}
            className="rounded-full border border-border px-3 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:border-neon hover:text-neon"
          >
            {next}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-neon px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-105"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
