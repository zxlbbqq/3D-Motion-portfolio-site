import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "ru" | "en";

type Dict = typeof translations.ru;

const translations = {
  ru: {
    nav: { name: "Кирилл Куралов", work: "Работы", about: "Обо мне", skills: "Навыки", showreel: "Шоурил", contact: "Контакты", cta: "Написать" },
    hero: {
      badge: "Открыт к проектам · 2026",
      title1: "3D Motion",
      title2: "Дизайнер",
      desc: "3D и motion под любую задачу — от продуктовой визуализации до рекламных роликов и моушн-графики. Полный цикл от концепта до финального рендера.",
      ctaShowreel: "Смотреть шоурил",
      ctaContact: "Связаться",
    },
    about: {
      kicker: "Обо мне",
      title1: "Создаю",
      title2: "кинематографичный",
      title3: "3D и motion, который запоминают.",
      desc: "Привет! Я Кирилл — 3D и motion-дизайнер из Санкт-Петербурга. Работаю с продуктовой визуализацией, рекламными роликами, моушн-графикой. Работаю чисто, в срок и с вниманием к деталям.",
      stats: [
        { value: "5+", label: "Лет в motion" },
        { value: "80+", label: "Проектов" },
        { value: "20+", label: "Брендов и студий" },
      ],
    },
    projects: {
      kicker: "Избранные работы",
      title1: "Избранные",
      title2: "проекты",
      desc: "Избранные проекты из разных индустрий",
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
    { period: "Фев 2026 — сейчас", role: "3D Моушн-дизайнер", company: "мерико", url: "https://maryco.ru",
      duties: [
        "Разработка анимационного контента для рекламных видеороликов и социальных сетей",
        "Создание графических элементов и иллюстраций для интеграции в видеоматериалы",
        "Подготовка и адаптация дизайна под форматы различных медиа",
        "Участие в творческих брифингах и генерация идей для новых проектов",
        "Внесение правок и доработка проектов на основе обратной связи",
      ]
    },
    { period: "Июн 2025 — Фев 2026", role: "3D дизайнер / Моушн-дизайнер", company: "Фриланс", url: "",
      duties: [
        "Разработка 3D-моделей, анимации и визуализаций для рекламных роликов",
        "Создание 2D и 3D motion-графики: анимированные сцены, типографика, визуальные эффекты",
        "Рендеринг в Cinema 4D (Redshift) и Blender, постобработка в After Effects и Photoshop",
        "Полный цикл производства проектов: от брифа и концепта до финального рендера",
        "Взаимодействие с заказчиками: обсуждение задач, правки, соблюдение сроков",
      ]
    },
    { period: "Июн 2024 — Фев 2026", role: "Специалист по видеопроизводству", company: "СПбГУПТД", url: "https://sutd.ru",
      duties: [
        "Организация и проведение мероприятий, съёмка на камеру, работа со звуком",
        "Полный цикл видеопродакшена: от съёмки до монтажа, цветокоррекция, звук, графика",
        "Создание контента для университета: промо-ролики, репортажи, образовательные материалы",
        "Настройка и обслуживание оборудования: камеры, микрофоны, свет",
      ]
    },
    { period: "Май 2025 — Июл 2025", role: "Инженер-дизайнер", company: "R-Pro", badge: "Стажировка", url: "https://r-pro.ru",
      duties: [
        "Разработка дизайна рекламных материалов для социальных сетей с учётом бренд-гайдов",
        "Создание дизайна презентаций для бизнеса и продуктов",
        "Подготовка макетов и графических материалов к печати",
        "Проектирование и визуализация нового оборудования",
        "Разработка логотипов и элементов фирменного стиля",
      ]
    },
    { period: "Авг 2024 — Май 2025", role: "3D дизайнер", company: "Knotlor", url: "https://knotlor.ru",
      duties: [
        "Создание 3D-моделей, анимации и визуализаций для рекламных роликов и промо-материалов",
        "Работа с motion-графикой, разработка динамичных 3D-композиций",
        "Рендеринг сцен в Cinema 4D (Redshift) и Blender, постобработка в After Effects",
        "Полный цикл производства, от концепта до финального рендера",
      ]
    },
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
    nav: { name: "Kirill Kuralov", work: "Work", about: "About", skills: "Skills", showreel: "Showreel", contact: "Contact", cta: "Let's talk" },
    hero: {
      badge: "Available for projects · 2026",
      title1: "3D Motion",
      title2: "Designer",
      desc: "3D and motion for any task — from product visualisation to commercial videos and motion graphics. Full cycle from concept to final render.",
      ctaShowreel: "Watch showreel",
      ctaContact: "Get in touch",
    },
    about: {
      kicker: "About",
      title1: "I craft",
      title2: "cinematic",
      title3: "3D & motion that brands actually remember.",
      desc: "Hi! I'm Kirill — a 3D and motion designer from Saint Petersburg. I work with product visualisation, commercial videos and motion graphics. Clean work, on time, with attention to detail.",
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
      desc: "Selected projects across different industries",
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
    { period: "Feb 2026 — Now", role: "3D Motion Designer", company: "maryco", url: "https://maryco.ru",
      duties: [
        "Developing animation content for commercial videos and social media",
        "Creating graphic elements and illustrations for video integration",
        "Preparing and adapting designs for various media formats",
        "Participating in creative briefings and generating ideas for new projects",
        "Making revisions and refining projects based on feedback",
      ]
    },
    { period: "Jun 2025 — Feb 2026", role: "3D designer / Motion-designer", company: "Freelance", url: "",
      duties: [
        "Developing 3D models, animations and visualizations for commercial videos",
        "Creating 2D and 3D motion graphics: animated scenes, typography, visual effects",
        "Rendering in Cinema 4D (Redshift) and Blender, post-production in After Effects and Photoshop",
        "Full production cycle: from brief and concept to final render",
        "Client communication: discussing tasks, revisions, meeting deadlines",
      ]
    },
    { period: "Jun 2024 — Feb 2026", role: "Video Production Specialist", company: "SPbSUITD", url: "https://sutd.ru",
      duties: [
        "Organizing and conducting events, camera work, sound management",
        "Full video production cycle: shooting to editing, color correction, sound, graphics",
        "Creating university content: promo videos, reports, educational materials",
        "Setting up and maintaining equipment: cameras, microphones, lighting",
      ]
    },
    { period: "May 2025 — Jul 2025", role: "Design Engineer", company: "R-Pro", badge: "Internship", url: "https://r-pro.ru",
      duties: [
        "Developing advertising materials design for social media following brand guidelines",
        "Creating presentation designs for business and products",
        "Preparing layouts and graphic materials for print",
        "Designing and visualizing new equipment",
        "Developing logos and corporate identity elements",
      ]
    },
    { period: "Aug 2024 — May 2025", role: "3D designer", company: "Knotlor", url: "https://knotlor.ru",
      duties: [
        "Creating 3D models, animations and visualizations for commercial and promo materials",
        "Working with motion graphics, developing dynamic 3D compositions",
        "Rendering scenes in Cinema 4D (Redshift) and Blender, post-production in After Effects",
        "Full production cycle, from concept to final render",
      ]
    },
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