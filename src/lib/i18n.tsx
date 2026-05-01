import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "ru" | "en";

type Dict = typeof translations.ru;

const translations = {
  ru: {
    nav: { work: "Работы", about: "Обо мне", skills: "Навыки", showreel: "Шоурил", contact: "Контакты", cta: "Написать" },
    hero: {
      badge: "Открыт к проектам · 2026",
      title1: "3D Motion",
      title2: "Дизайнер",
      desc: "Премиальные 3D и motion-визуалы для tech, fashion и digital брендов. Полный цикл — от концепта до финального рендера.",
      ctaShowreel: "Смотреть шоурил",
      ctaContact: "Связаться",
    },
    about: {
      kicker: "Обо мне",
      title1: "Создаю",
      title2: "кинематографичный",
      title3: "3D и motion, который запоминают.",
      desc: "Привет! Я Кирилл - Motion и 3D дизайнер с фокусом на рекламные и digital ролики. Веду проекты от первого концепта до финального рендера — лично или в команде. Ценю сроки, детали и насмотренный визуал.",
      stats: [
        { value: "5+", label: "Лет в motion" },
        { value: "80+", label: "Проектов" },
        { value: "20+", label: "Брендов и студий" },
      ],
    },
    projects: {
      kicker: "Избранные работы",
      title1: "Featured",
      title2: "проекты",
      desc: "Подборка свежих коллабораций в tech, fashion и digital продуктах.",
      viewProject: "Открыть проект",
      close: "Закрыть",
      client: "Клиент",
      year: "Год",
      role: "Роль",
      tools: "Инструменты",
      gallery: "Галерея",
    },
    skills: {
      kicker: "Стек",
      title1: "",
      title2: "Инструменты",
    },
    showreel: { kicker: "Шоурил · 2025", title: "Reel 2025" },
    experience: { kicker: "Опыт",
      items: [
        { period: "2026 — сейчас", role: "3D Motion Designer", company: "maryco" },
        { period: "2025 — 2026", role: "3D designer / Motion-designer", company: "Фриланс" },
        { period: "2024 — 2026", role: "Специалист по видеопроизводству", company: "СПбГУПТД" },
        { period: "2025 — 2025", role: "Стажировка · Инженер-дизайнер", company: "R-Pro" },
        { period: "2024 — 2025", role: "3D designer", company: "Knotlor" },
      ],
    },
    contact: {
      kicker: "Контакты",
      title1: "Поработаем",
      title2: "вместе",
      desc: "Открыт к коммерческим проектам, full-time и креативным коллаборациям. Напишите — обычно отвечаю в течение дня.",
      tg: "Telegram",
      email: "Email",
      footerLeft: "© 2026 Кирилл Куралов · Сделано с любовью",
      footerRight: "Удалённо · По всему миру",
    },
  },
  en: {
    nav: { work: "Work", about: "About", skills: "Skills", showreel: "Showreel", contact: "Contact", cta: "Let's talk" },
    hero: {
      badge: "Available for projects · 2026",
      title1: "3D Motion",
      title2: "Designer",
      desc: "High-end 3D & motion visuals for tech, fashion and digital brands. Full-cycle production — from concept to final render.",
      ctaShowreel: "Watch showreel",
      ctaContact: "Get in touch",
    },
    about: {
      kicker: "About",
      title1: "I craft",
      title2: "cinematic",
      title3: "3D & motion that brands actually remember.",
      desc: "Hi! I'm Kirill, a Motion & 3D designer focused on commercial and digital pieces. I lead projects from first concept to final render — solo or in a team. I care about deadlines, details and a sharp visual eye.",
      stats: [
        { value: "5+", label: "Years in motion" },
        { value: "80+", label: "Projects shipped" },
        { value: "20+", label: "Brands & studios" },
      ],
    },
    projects: {
      kicker: "Selected Work",
      title1: "Featured",
      title2: "projects",
      desc: "A curated set of recent collaborations across tech, fashion and digital products.",
      viewProject: "Open project",
      close: "Close",
      client: "Client",
      year: "Year",
      role: "Role",
      tools: "Tools",
      gallery: "Gallery",
    },
    skills: {
      kicker: "Stack",
      title1: "",
      title2: "Tools",
    },
    showreel: { kicker: "Showreel · 2025", title: "Reel 2025" },
    experience: { kicker: "Experience",
      items: [
        { period: "2026 — Now", role: "3D Motion Designer", company: "maryco" },
        { period: "2025 — 2026", role: "3D designer / Motion-designer", company: "Freelance" },
        { period: "2024 — 2026", role: "Video Production Specialist", company: "SPbSUITD" },
        { period: "2025 — 2025", role: "Internship · Design Engineer", company: "R-Pro" },
        { period: "2024 — 2025", role: "3D designer", company: "Knotlor" },
      ],
    },
    contact: {
      kicker: "Contact",
      title1: "Let's work",
      title2: "together",
      desc: "Open to commissions, full-time roles and creative collabs. Drop a line — I usually reply within a day.",
      tg: "Telegram",
      email: "Email",
      footerLeft: "© 2026 Kirill Kuralov · Crafted with care",
      footerRight: "Based remote · Available worldwide",
    },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "ru" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}