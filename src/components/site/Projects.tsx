import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import { useI18n } from "@/lib/i18n";
import { ProjectModal, type ProjectDetail } from "./ProjectModal";

const ease = [0.22, 1, 0.36, 1] as const;

const projects: (ProjectDetail & { span: string })[] = [
  {
    img: p1,
    gallery: [p1, p4, p2, p6],
    title: "Liquid Chrome",
    client: "Acme Tech",
    year: "2025",
    tags: ["3D", "CGI"],
    span: "lg:col-span-7",
    role: { ru: "3D / Look Dev / Анимация", en: "3D / Look Dev / Animation" },
    tools: ["Cinema 4D", "Redshift", "After Effects"],
    description: {
      ru: "Серия CGI-визуалов с жидким хромом для запуска нового продукта Acme Tech. Исследовали поведение материала, отражения и динамику капель. Финальный ролик использовался в digital-кампании и наружной рекламе.",
      en: "A CGI visual series with liquid chrome for the Acme Tech product launch. Explored material behaviour, reflections and droplet dynamics. The final piece was used across digital and OOH campaigns.",
    },
  },
  {
    img: p2,
    gallery: [p2, p5, p1, p3],
    title: "Neon Sculpt",
    client: "Pulse Studio",
    year: "2025",
    tags: ["Motion", "Brand"],
    span: "lg:col-span-5",
    role: { ru: "Арт-дирекшн / Motion", en: "Art direction / Motion" },
    tools: ["Cinema 4D", "Octane", "After Effects"],
    description: {
      ru: "Брендовая система абстрактных скульптур с неоновой подсветкой. Разработали 6 ключевых визуалов и набор лупов для соцсетей и сайта Pulse Studio.",
      en: "A branded system of abstract sculptures with neon lighting. Built 6 key visuals and a loop pack for Pulse Studio's social and web presence.",
    },
  },
  {
    img: p3,
    gallery: [p3, p6, p2, p1],
    title: "Silk Dreams",
    client: "Maison Atelier",
    year: "2024",
    tags: ["Fashion", "CGI"],
    span: "lg:col-span-5",
    role: { ru: "Симуляция ткани / Рендер", en: "Cloth sim / Rendering" },
    tools: ["Houdini", "Redshift", "Nuke"],
    description: {
      ru: "Кампейн для fashion-бренда Maison Atelier: невесомая ткань, мягкий свет, монохром. Полностью CGI — от симуляции до композитинга.",
      en: "Campaign for fashion brand Maison Atelier: weightless fabric, soft light, monochrome palette. Fully CGI — from sim to compositing.",
    },
  },
  {
    img: p4,
    gallery: [p4, p1, p5, p6],
    title: "Glass Object",
    client: "Voltaic",
    year: "2024",
    tags: ["Product", "3D"],
    span: "lg:col-span-7",
    role: { ru: "Продуктовая визуализация", en: "Product visualisation" },
    tools: ["Cinema 4D", "Redshift"],
    description: {
      ru: "Высокодетальная визуализация стеклянного объекта для лимитированной коллекции Voltaic. Фокус на дисперсии света, преломлении и фактуре поверхности.",
      en: "High-detail visualisation of a glass object for a limited Voltaic collection. Focus on light dispersion, refraction and surface texture.",
    },
  },
  {
    img: p5,
    gallery: [p5, p2, p4, p3],
    title: "Particle Field",
    client: "Orbit Labs",
    year: "2024",
    tags: ["Motion", "Generative"],
    span: "lg:col-span-7",
    role: { ru: "Генеративный motion", en: "Generative motion" },
    tools: ["Houdini", "TouchDesigner", "After Effects"],
    description: {
      ru: "Генеративная система частиц для презентации продукта Orbit Labs. Поведение частиц реагирует на аудио — для живых выступлений собрали интерактивную версию в TouchDesigner.",
      en: "A generative particle system for an Orbit Labs product reveal. Particles react to audio — a TouchDesigner interactive build was used for live performances.",
    },
  },
  {
    img: p6,
    gallery: [p6, p3, p1, p5],
    title: "Golden Splash",
    client: "Aurum",
    year: "2023",
    tags: ["Branding", "CGI"],
    span: "lg:col-span-5",
    role: { ru: "Симуляция жидкости / Рендер", en: "Fluid sim / Rendering" },
    tools: ["Houdini", "Redshift", "Photoshop"],
    description: {
      ru: "Серия кадров с золотыми всплесками для ребрендинга Aurum. Симуляции жидкости с кастомными шейдерами и студийным светом.",
      en: "A series of golden splash shots for the Aurum rebrand. Fluid simulations paired with custom shaders and studio lighting.",
    },
  },
];

export function Projects() {
  const { t } = useI18n();
  const [active, setActive] = useState<ProjectDetail | null>(null);

  return (
    <section id="work" className="relative px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-neon" />
              {t.projects.kicker}
            </div>
            <h2 className="font-display text-4xl font-semibold leading-[1] tracking-tighter md:text-7xl">
              {t.projects.title1} <span className="italic text-neon">{t.projects.title2}</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">{t.projects.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: (i % 2) * 0.1 }}
              className={`group relative block overflow-hidden rounded-3xl bg-surface text-left ${p.span}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.client} · {p.year}
                  </p>
                </div>

                <div className="flex size-12 items-center justify-center rounded-full bg-neon text-background transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
