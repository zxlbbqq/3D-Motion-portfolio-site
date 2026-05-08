import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative flex min-h-[57vh] items-end overflow-hidden pb-16 pt-22 md:pb-20 md:pt-24">
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-neon" />
          {t.hero.badge}
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] font-semibold leading-[0.9] tracking-tighter">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="block text-gradient"
          >
            {t.hero.title1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.25 }}
            className="block italic text-neon"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.hero.title2}
          </motion.span>
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="max-w-md text-base text-muted-foreground md:text-lg"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#showreel"
              className="group inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-medium text-background transition-all hover:scale-105 hover:shadow-[var(--shadow-neon)]"
            >
              <Play className="size-4 fill-current" />
              {t.hero.ctaShowreel}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="size-4" />
      </motion.div>
    </section>
  );
}