export type NavLink = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
};

export type Project = {
  title: string;
  location: string;
  description: string;
  image: string;
};

export type NewsItem = {
  title: string;
  summary: string;
  tag: string;
  image: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "الصفحة الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about-us" },
  { label: "خدماتنا", href: "#services" },
  { label: "مشاريعنا", href: "#projects" },
  { label: "الأخبار", href: "#news" },
  { label: "شركاؤنا", href: "#partners" },
  { label: "تواصل معنا", href: "#contact" },

];

export const HERO_STATS: HeroStat[] = [
  { label: "العملاء", value: 120, prefix: "+" },
  { label: "المشاريع", value: 85, prefix: "+" },
  { label: "الموظفون", value: 60, prefix: "+" },
  { label: "سنوات الخبرة", value: 15, prefix: "+" },
];


export const PROJECTS: Project[] = [
  {
    title: "شاطئ الشقيق",
    location: "مدينة جازان",
    description:
      "تطوير تجربة سياحية متكاملة تحافظ على الهوية الساحلية وتوازن الأنشطة مع متطلبات البيئة الطبيعية.",
    image: "/projects/project-1.jpg",
  },
  {
    title: "أمان جازان",
    location: "مدينة جازان",
    description:
      "مجتمع سكني ذكي يمزج بين الطاقة المتجددة والتصميم المعاصر ليخلق بيئة معيشية نابضة بالحياة.",
    image: "/projects/project-2.jpg",
  },
  {
    title: "وادي المالية",
    location: "مدينة الرياض",
    description:
      "تخطيط حضري شامل لمنطقة المال والأعمال مع حلول تنقل مرنة ومساحات عامة تفاعلية.",
    image: "/projects/project-3.jpg",
  },
];



export const PARTNERS: string[] = [
  "الهيئة الملكية للرياض",
  "جامعة الإمام عبدالرحمن",
  "أمانة منطقة الباحة",
  "هيئة تطوير الشرقية",
  "وزارة الشؤون البلدية",
  "شركاء التطوير العمراني",
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "WhatsApp", href: "https://wa.me/+966000000000" },
];



