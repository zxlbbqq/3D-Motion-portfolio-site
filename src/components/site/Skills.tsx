import { motion } from "framer-motion";
import { Box, Layers, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

const groups = [
  {
    icon: Box,
    title: { ru: "3D", en: "3D" },
    desc: {
      ru: "Моделинг, симуляции, рендер и look dev",
      en: "Modeling, sims, rendering and look dev",
    },
    items: [
      "Cinema 4D",
      "Blender",
      "Redshift",
      "Substance Painter",
      "Unity",
      "Unreal Engine",
    ],
  },
  {
    icon: Layers,
    title: { ru: "Дизайн и моушн", en: "Design & Motion" },
    desc: {
      ru: "Композ, монтаж, графика и UI",
      en: "Compositing, editing, graphics and UI",
    },
    items: [
      "After Effects",
      "Premiere Pro",
      "Photoshop",
      "Illustrator",
      "Figma",
    ],
  },
  {
    icon: Sparkles,
    title: { ru: "AI инструменты", en: "AI Tools" },
    desc: {
      ru: "Генеративное видео, изображения и LLM",
      en: "Generative video, images and LLMs",
    },
    items: [
      "Runway",
      "Kling",
      "Krea",
      "Pika",
      "Stable Diffusion",
      "Midjourney",
      "Kandinsky",
      "Ideogram",
      "ChatGPT",
      "Gemini",
      "Claude",
      "Perplexity",
      "ComfyUI",
      "WAN",
    ],
  },
];

export function Skills() {
  const { t, lang } = useI18n();
  return (
    <section id="skills" className="relative px-6 py-16 md:px-10 md:py-24">
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
            {t.skills.kicker}
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tighter md:text-5xl">
            {t.skills.title1} <span className="italic text-neon">{t.skills.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="group relative flex flex-col bg-surface p-8 transition-colors hover:bg-surface-elevated md:p-10"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-7 text-neon transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  <span className="text-xs text-muted-foreground/60">0{i + 1}</span>
                </div>

                <div className="mt-10">
                  <div className="font-display text-2xl font-medium tracking-tight">
                    {g.title[lang]}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {g.desc[lang]}
                  </div>
                </div>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-neon/40 hover:text-neon"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
