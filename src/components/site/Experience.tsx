import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
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
              className="border-b border-border"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group grid w-full grid-cols-12 items-center gap-4 py-8 text-left transition-colors hover:bg-surface/40 md:py-10"
              >
                <div className="col-span-12 text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
                  {it.period}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-center gap-3">
                    <div className="font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-neon md:text-4xl">
                      {it.role}
                    </div>
                    {it.badge && (
                      <span className="hidden md:inline-flex items-center rounded-full border border-neon/40 px-3 py-1 text-xs text-neon uppercase tracking-widest">
                        {it.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-12 flex items-center justify-between md:col-span-3 md:justify-end md:gap-4">
                  {it.url ? (
                    <a
                      href={it.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-neon hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {it.company}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{it.company}</span>
                  )}
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-300 ${openIndex === i ? "rotate-180 text-neon" : ""}`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-8 pl-0 md:pl-[25%] space-y-2">
                      {it.duties.map((duty, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-neon" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}