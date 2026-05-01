import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

export type ProjectDetail = {
  img: string;
  gallery: string[];
  title: string;
  client: string;
  year: string;
  tags: string[];
  role: { ru: string; en: string };
  tools: string[];
  description: { ru: string; en: string };
};

const ease = [0.22, 1, 0.36, 1] as const;

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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {project.gallery.map((src, i) => (
                    <div
                      key={i}
                      className={`overflow-hidden rounded-2xl bg-background ${
                        i === 0 ? "md:col-span-2" : ""
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${project.title} ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="mt-14 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
              >
                {lang === "ru" ? "Обсудить похожий проект" : "Discuss a similar project"}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
