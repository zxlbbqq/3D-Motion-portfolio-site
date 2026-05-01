import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-neon" />
          {t.about.kicker}
        </motion.div>

        <div className="grid gap-16 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tighter [hyphens:auto] md:text-5xl lg:text-6xl">
              {t.about.title1} <span className="italic text-neon">{t.about.title2}</span>{" "}
              {t.about.title3}
            </h2>
            <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
              {t.about.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="md:col-span-5"
          >
            <div className="flex flex-col gap-6">
              {t.about.stats.map((s) => (
                <div key={s.label} className="border-b border-border pb-6 last:border-0">
                  <div className="font-display text-5xl font-semibold tracking-tighter text-neon md:text-6xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
