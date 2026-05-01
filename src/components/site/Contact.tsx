import { motion } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="text-center"
        >
          <div className="mb-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-neon" />
            {t.contact.kicker}
            <span className="h-px w-10 bg-neon" />
          </div>

          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.9] tracking-tighter">
            <span className="text-gradient">{t.contact.title1}</span>
            <br />
            <span className="italic text-neon">{t.contact.title2}</span>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-base text-muted-foreground md:text-lg">
            {t.contact.desc}
          </p>

          <div className="mx-auto mt-12 flex max-w-md flex-col gap-3">
            <a
              href="https://t.me/zxlbbqq"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-left transition-all hover:border-neon hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-neon text-background">
                  <Send className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.contact.tg}
                  </div>
                  <div className="font-display text-lg font-medium">@zxlbbqq</div>
                </div>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-neon" />
            </a>

            <a
              href="mailto:zxlbbqq@mail.ru"
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-left transition-all hover:border-neon hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-neon text-background">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.contact.email}
                  </div>
                  <div className="font-display text-lg font-medium">zxlbbqq@mail.ru</div>
                </div>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-neon" />
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 pb-2 text-xs text-muted-foreground md:flex-row">
        <div>{t.contact.footerLeft}</div>
        <div>{t.contact.footerRight}</div>
      </footer>
    </section>
  );
}
