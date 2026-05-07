import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SliderGallery({ items, title }: { items: ProjectDetail["gallery"]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  const item = items[current];
  const isVideo = typeof item === "object" && item.type === "video";
  const src = typeof item === "string" ? item : item.src;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-background">
      <div className="aspect-[16/9] w-full">
        {isVideo ? (
          <video src={src} controls loop className="h-full w-full object-cover" />
        ) : (
          <img src={src} alt={`${title} ${current + 1}`} className="h-full w-full object-cover" />
        )}
      </div>

      {/* Кнопки */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-neon hover:text-background"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-neon hover:text-background"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Точки */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`size-1.5 rounded-full transition-all ${i === current ? "bg-neon w-4" : "bg-white/40"}`}
          />
        ))}
      </div>

      {/* Счётчик */}
      <div className="absolute right-4 bottom-4 text-xs text-white/60">
        {current + 1} / {items.length}
      </div>
    </div>
  );
}

export type ProjectDetail = {
  img: string;
  gallery: (string | { type: "video"; src: string })[];
  slider?: boolean;
  sliders?: { title: string; items: (string | { type: "video"; src: string })[] }[];
  layout?: {
    caption: { ru: string; en: string };
    align: "left" | "right";
    wide: string;   // путь к видео 16x9
    tall: string;   // путь к видео 9x16
  }[];
  title: string;
  client: string;
  year: string;
  tags: string[];
  role: { ru: string; en: string };
  tools: string[];
  description: { ru: string; en: string };
};

const ease = [0.22, 1, 0.36, 1] as const;

function LayoutGallery({ items, isVisible, lang }: { 
  items: NonNullable<ProjectDetail["layout"]>; 
  isVisible: boolean;
  lang: "ru" | "en";
}) {
  return (
    <div className="flex flex-col gap-16">
      {items.map((item, i) => (
        <div key={i}>
          <p className={`mb-4 text-sm uppercase tracking-widest text-muted-foreground ${item.align === "right" ? "text-right" : ""}`}>
            {item.caption[lang]}
          </p>
          <div
            className={`flex gap-4 ${item.align === "right" ? "flex-row-reverse" : "flex-row"}`}
            style={{ height: "500px", width: "100%" }}
          >
            <div className="overflow-hidden rounded-2xl bg-background" style={{ flex: 1 }}>
              <video
                src={isVisible ? item.wide : undefined}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-background flex-shrink-0" style={{ width: `calc(500px * 9 / 16)` }}>
              <video
                src={isVisible ? item.tall : undefined}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectDetail | null;
  onClose: () => void;
}) {
  const { t, lang } = useI18n();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.5, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-[min(1200px,94vw)] overflow-hidden rounded-3xl border border-border bg-surface"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t.projects.close}
              className="fixed right-6 top-6 z-10 flex size-11 items-center justify-center rounded-full bg-neon text-background transition-transform hover:scale-110 md:absolute md:right-6 md:top-6"
            >
              <X className="size-5" />
            </button>

            {/* Hero image */}
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-2.5 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-4xl font-semibold leading-[1] tracking-tighter md:text-7xl">
                {project.title}
              </h2>

              <div className="mt-10 grid gap-10 md:grid-cols-12">
                <p className="text-base text-muted-foreground md:col-span-7 md:text-lg">
                  {project.description[lang]}
                </p>

                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:col-span-5 md:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.projects.client}
                    </dt>
                    <dd className="mt-1 font-display text-base font-medium">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.projects.year}
                    </dt>
                    <dd className="mt-1 font-display text-base font-medium">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.projects.role}
                    </dt>
                    <dd className="mt-1 font-display text-base font-medium">
                      {project.role[lang]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.projects.tools}
                    </dt>
                    <dd className="mt-1 font-display text-base font-medium">
                      {project.tools.join(", ")}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Gallery */}
              <div className="mt-14">
                <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span className="h-px w-10 bg-neon" />
                  {t.projects.gallery}
                </div>

                {project.layout ? (
                  <LayoutGallery items={project.layout} isVisible={!!project} lang={lang} />
                ) : project.sliders ? (
                  // Несколько слайдеров
                  <div className="flex flex-col gap-10">
                    {project.sliders.map((slider, i) => (
                      <div key={i}>
                        <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">{slider.title}</p>
                        <SliderGallery items={slider.items} title={project.title} />
                      </div>
                    ))}
                  </div>
                ) : project.slider ? (
                  // Один слайдер
                  <SliderGallery items={project.gallery} title={project.title} />
                ) : (
                  // Обычная сетка
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {project.gallery.map((item, i) => {
                      const isVideo = typeof item === "object" && item.type === "video";
                      const src = typeof item === "string" ? item : item.src;
                      return (
                        <div key={i} className={`overflow-hidden rounded-2xl bg-background ${i === 0 ? "md:col-span-2" : ""}`}>
                          {isVideo ? (
                            <video src={src} controls loop className="h-full w-full object-cover" />
                          ) : (
                            <img src={src} alt={`${project.title} ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-14 flex justify-center">
                <a            
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
                >
                  {lang === "ru" ? "Обсудить похожий проект" : "Discuss a similar project"}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
