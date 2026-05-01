import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const { t } = useI18n();
  return (
    <section className="relative px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-neon" />
          {t.experience.kicker}
        </motion.div>

        <div className="grid gap-2">
          {t.experience.items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-center gap-4 border-b border-border py-8 transition-colors hover:bg-surface/40 md:py-10"
            >
              <div className="col-span-12 text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
                {it.period}
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-neon md:text-4xl">
                  {it.role}
                </div>
              </div>
              <div className="col-span-12 text-sm text-muted-foreground md:col-span-3 md:text-right">
                {it.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
