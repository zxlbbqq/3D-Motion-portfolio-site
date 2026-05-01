import { motion } from "framer-motion";
import { Play } from "lucide-react";
import p2 from "@/public/Previewshowreel.png";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function Showreel() {
  const { t } = useI18n();
  return (
    <section id="showreel" className="relative px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex items-center justify-between"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-neon" />
            {t.showreel.kicker}
          </div>
          <span className="text-xs text-muted-foreground">02:14</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="group relative aspect-video overflow-hidden rounded-3xl bg-surface"
        >
          <video
            src="/Showreel.mp4"        // либо import из src/assets
            poster={p2}                  // превью-кадр
            controls
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className="flex size-24 items-center justify-center rounded-full bg-neon text-background transition-transform duration-500 hover:scale-110 md:size-32"
              style={{ boxShadow: "var(--shadow-neon)" }}
              aria-label="Play showreel"
            >
              <Play className="size-8 fill-current md:size-10" />
            </button>
          </div>
          <div className="absolute bottom-6 left-6 font-display text-lg font-medium md:bottom-8 md:left-8 md:text-2xl">
            {t.showreel.title}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
