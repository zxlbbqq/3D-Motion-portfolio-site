import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import blizkopreview from "@/assets/blizkopreview.png";
import blizko from "@/assets/blizko.png";
import Showreel2026preview from "@/assets/Showreel2026preview.png";
import knotlor from "@/assets/knotlor.webp";
import k1 from "@/assets/knotlor/1.jpg";
import k2 from "@/assets/knotlor/2.png";
import k3 from "@/assets/knotlor/3.png";
import k4 from "@/assets/knotlor/4.png";
import k5 from "@/assets/knotlor/5.png";
import k6 from "@/assets/knotlor/6.png";
import k7 from "@/assets/knotlor/7.png";
import k8 from "@/assets/knotlor/8.jpg";
import k9 from "@/assets/knotlor/9.jpg";
import k10 from "@/assets/knotlor/10.png";
import k11 from "@/assets/knotlor/11.png";
import previewepica from "@/assets/previewepica.png";
import aiavatars from "@/assets/aiavatars.png";
import elista from "@/assets/elista.png";
import ed0 from "@/assets/elista-documentation/ed0.jpg";
import ed1 from "@/assets/elista-documentation/ed1.jpg";
import ed2 from "@/assets/elista-documentation/ed2.jpg";
import ed3 from "@/assets/elista-documentation/ed3.jpg";
import ed4 from "@/assets/elista-documentation/ed4.jpg";
import ed5 from "@/assets/elista-documentation/ed5.jpg";
import ed6 from "@/assets/elista-documentation/ed6.jpg";
import ed7 from "@/assets/elista-documentation/ed7.jpg";
import ed8 from "@/assets/elista-documentation/ed8.jpg";
import ed9 from "@/assets/elista-documentation/ed9.jpg";
import ed10 from "@/assets/elista-documentation/ed10.jpg";
import ed11 from "@/assets/elista-documentation/ed11.jpg";
import ed12 from "@/assets/elista-documentation/ed12.jpg";
import ed13 from "@/assets/elista-documentation/ed13.jpg";
import ed14 from "@/assets/elista-documentation/ed14.jpg";
import ed15 from "@/assets/elista-documentation/ed15.jpg";
import ed16 from "@/assets/elista-documentation/ed16.jpg";
import ed17 from "@/assets/elista-documentation/ed17.jpg";
import ed18 from "@/assets/elista-documentation/ed18.jpg";
import ed19 from "@/assets/elista-documentation/ed19.jpg";
import ed20 from "@/assets/elista-documentation/ed20.jpg";
import ed21 from "@/assets/elista-documentation/ed21.jpg";
import eb0 from "@/assets/elista-brandbook/eb0.jpg";
import eb1 from "@/assets/elista-brandbook/eb1.jpg";
import eb2 from "@/assets/elista-brandbook/eb2.jpg";
import eb3 from "@/assets/elista-brandbook/eb3.jpg";
import eb4 from "@/assets/elista-brandbook/eb4.jpg";
import eb5 from "@/assets/elista-brandbook/eb5.jpg";
import eb6 from "@/assets/elista-brandbook/eb6.jpg";
import eb7 from "@/assets/elista-brandbook/eb7.jpg";
import eb8 from "@/assets/elista-brandbook/eb8.jpg";
import eb9 from "@/assets/elista-brandbook/eb9.jpg";
import eb10 from "@/assets/elista-brandbook/eb10.jpg";
import eb11 from "@/assets/elista-brandbook/eb11.jpg";
import eb12 from "@/assets/elista-brandbook/eb12.jpg";
import eb13 from "@/assets/elista-brandbook/eb13.jpg";
import eb14 from "@/assets/elista-brandbook/eb14.jpg";
import eb15 from "@/assets/elista-brandbook/eb15.jpg";
import eb16 from "@/assets/elista-brandbook/eb16.jpg";
import eb17 from "@/assets/elista-brandbook/eb17.jpg";
import eb18 from "@/assets/elista-brandbook/eb18.jpg";
import eb19 from "@/assets/elista-brandbook/eb19.jpg";
import eb20 from "@/assets/elista-brandbook/eb20.jpg";
import eb21 from "@/assets/elista-brandbook/eb21.jpg";
import eb22 from "@/assets/elista-brandbook/eb22.jpg";
import eb23 from "@/assets/elista-brandbook/eb23.jpg";
import eb24 from "@/assets/elista-brandbook/eb24.jpg";
import eb25 from "@/assets/elista-brandbook/eb25.jpg";
import eb26 from "@/assets/elista-brandbook/eb26.jpg";
import eb27 from "@/assets/elista-brandbook/eb27.jpg";
import eb28 from "@/assets/elista-brandbook/eb28.jpg";
import eb29 from "@/assets/elista-brandbook/eb29.jpg";
import eb30 from "@/assets/elista-brandbook/eb30.jpg";
import eb31 from "@/assets/elista-brandbook/eb31.jpg";
import eb32 from "@/assets/elista-brandbook/eb32.jpg";
import eb33 from "@/assets/elista-brandbook/eb33.jpg";
import eb34 from "@/assets/elista-brandbook/eb34.jpg";
import { useI18n } from "@/lib/i18n";
import { ProjectModal, type ProjectDetail } from "./ProjectModal";

const ease = [0.22, 1, 0.36, 1] as const;

const projects: (ProjectDetail & { span: string })[] = [
  {
    img: Showreel2026preview,
    gallery: [
      { type: "video", src: "/videos/Showreel2026.mp4" },], 
    title: "Showreel 2026",
    client: "Kirill Kuralov",
    year: "2026",
    tags: ["3D", "Motion"],
    span: "lg:col-span-7",
    role: { ru: "Моушн-дизайнер", en: "Motion-designer" },
    tools: ["Cinema 4D", "Redshift", "Blender", "After Effects", "Photoshop", "Gemini TTS"],
    description: {
      ru: "Шоурил 2026 — видеорассказ о себе и своём пути в 3D и motion-дизайне. Сделан с использованием Cinema 4D, Redshift, Blender и After Effects.",
      en: "Showreel 2026 — a video story about myself and my journey in 3D and motion design. Made with Cinema 4D, Redshift, Blender and After Effects.",
    },
  },
  {
    img: aiavatars,
    gallery: [
      { type: "video", src: "/videos/aiavatars.mp4" },], 
    title: "AI Avatars",
    client: "SPbSUITD",
    year: "2025",
    tags: ["AI", "Motion"],
    span: "lg:col-span-5",
    role: { ru: "AI Моушн-дизайнер", en: "AI Motion-designer" },
    tools: ["HeyGen", "Gemini TTS", "Premiere Pro"],
    description: {
      ru: "Серия AI-аватаров с генеративной озвучкой для онлайн-курсов СПбГУПТД. Аватары сгенерированы через HeyGen, голос синтезирован через Gemini TTS, финальный монтаж в Premiere Pro.",
      en: "A series of AI avatars with generative voiceover for SPbSUITD online courses. Avatars generated via HeyGen, voice synthesized with Gemini TTS, final edit in Premiere Pro.",
    },
  },
  {
    img: previewepica,
    gallery: [],
    layout: [
      {
        caption: { ru: "Голубая упаковка", en: "Blue packaging" },
        align: "left",
        wide: "/videos/1 Horizontal.mp4",
        tall: "/videos/1 Vertical.mp4",
      },
      {
        caption: { ru: "Лавандовая упаковка", en: "Lavender packaging" },
        align: "right",
        wide: "/videos/2 Horizontal.mp4",
        tall: "/videos/2 Vertical.mp4",
      },
      {
        caption: { ru: "Зелёная упаковка", en: "Green packaging" },
        align: "left",
        wide: "/videos/3 Horizontal.mp4",
        tall: "/videos/3 Vertical.mp4",
      },
    ],
    title: "Epica Visuals",
    client: "Epica",
    year: "2025",
    tags: ["3D", "Product"],
    span: "lg:col-span-5",
    role: { ru: "3D Motion-designer", en: "3D Моушн-дизайнер" },
    tools: ["Blender",],
    description: {
      ru: "Серия продуктовых 3D-анимаций для йогуртов EPICA — тестовое задание, где каждый ролик — отдельная визуальная история: динамичная композиция, студийный свет и детальный рендер продукта. Формат адаптирован под соцсети — вертикаль и горизонталь.",
      en: "A series of product 3D animations for EPICA yogurts — a test assignment where each video is a standalone visual story: dynamic composition, studio lighting and detailed product render. Formatted for social media — vertical and horizontal cuts.",
    },
  },
  {
    img: knotlor,
    gallery: [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11],
    title: "Knotlor CGI",
    client: "Knotlor",
    year: "2024",
    tags: ["3D", "Product"],
    span: "lg:col-span-7",
    role: { ru: "3D-художник / 3D-дизайнер", en: "3D Artist / 3D Designer" },
    tools: ["Cinema 4D", "Redshift", "Blender", "Photoshop"],
    description: {
      ru: "Серия продуктовых визуализаций смесителей для бренда Knotlor. Фокус на материалах, отражениях и студийном освещении — каждый рендер передаёт качество и характер продукта.",
      en: "A series of product visualisations for Knotlor faucets. Focus on materials, reflections and studio lighting — each render conveys the quality and character of the product.",
    },
  },
  {
    img: blizkopreview,
    gallery: [blizko],
    title: "Exhibition Space Website",
    client: "Blizko",
    year: "2023",
    tags: ["UX/UI", "Website"],
    span: "lg:col-span-7",
    role: { ru: "Проектный-менеджер / Исследователь", en: "Project-manager / Researcher" },
    tools: ["Figma", "Photoshop", "Illustrator"],
    description: {
      ru: "Концептуальный сайт для выставочного пространства BLIZKO, созданный с акцентом на атмосферу, визуальную подачу и удобную навигацию. Проект помогает представить пространство как современную культурную площадку и делает акцент на событиях, афише и имиджевом восприятии бренда.",
      en: "A concept website for the BLIZKO exhibition space, designed with a focus on atmosphere, visual presentation, and intuitive navigation. The project presents the space as a modern cultural venue and highlights events, programming, and the brand’s overall image.",
    },
  },
    {
    img: elista,
    gallery: [],
     sliders: [
      {
        title: "Брендбук",
        items: [eb0, eb1, eb2, eb3, eb4, eb5, eb6, eb7, eb8, eb9, eb10, eb11, eb12, eb13, eb14, eb15, eb16, eb17, eb18, eb19, eb20, eb21, eb22, eb23, eb24, eb25, eb26, eb27, eb28, eb29, eb30, eb31, eb32, eb33, eb34],
      },
      {
        title: "Документация",
        items: [ed0, ed1, ed2, ed3, ed4, ed5, ed6, ed7, ed8, ed9, ed10, ed11, ed12, ed13, ed14, ed15, ed16, ed17, ed18, ed19, ed20, ed21],
      },
    ],
    title: "Elista Identity",
    client: "Elista",
    year: "2024",
    tags: ["UX/UI", "Branding"],
    span: "lg:col-span-5",
    role: { ru: "Проектный-менеджер / Исследователь", en: "Project-manager / Researcher" },
    tools: ["Figma", "Photoshop", "Illustrator"],
    description: {
      ru: "Комплексный UX/UI и брендинг проект — мобильное приложение для вовлечения жителей в развитие города и полная айдентика Элисты. От персон и wireframes до UI-кита, брендбука и системы носителей.",
      en: "A full-scale UX/UI and branding project — a civic engagement mobile app for city residents alongside a complete visual identity for Elista. From personas and wireframes to UI kit, brand book, and carrier system.",
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
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
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
