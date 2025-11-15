"use client";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <NewsSection />
      <PartnersSection />
      <FooterSection />
    </div>
  );
}
/*

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayStats, setDisplayStats] = useState<number[]>(
    HERO_STATS.map(() => 0)
  );
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const frameRefs = useRef<number[]>([]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const frames = frameRefs.current;
    return () => {
      frames.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;

    const animateCount = (index: number, target: number) => {
      const duration = 1600;
      const start = performance.now();

      const step = (timestamp: number) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);

        setDisplayStats((prev) => {
          if (prev[index] === value) return prev;
          const next = [...prev];
          next[index] = value;
          return next;
        });

        if (progress < 1) {
          frameRefs.current[index] = requestAnimationFrame(step);
        }
      };

      frameRefs.current[index] = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            HERO_STATS.forEach((stat, index) => animateCount(index, stat.value));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero/Hero2.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1200px] flex-col gap-12 px-5 pb-20 pt-8 sm:px-6 md:px-10 lg:min-h-[860px]">
        <header className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-center justify-between md:hidden">
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-9 text-white" />
              <div className="text-xs font-bold leading-5 text-white/80">
                <p>Consulting</p>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white hover:text-black"
            >
              {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4 md:order-3 md:justify-end">
            <button className="group flex h-14 min-w-[200px] items-center justify-between rounded-full border border-white/40 bg-white/5 px-5 text-xs font-medium tracking-wide backdrop-blur transition hover:bg-white/10">
              <span className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                  <WhatsappIcon className="h-5 w-5" />
                </span>
                <span className="text-white/80">واتساب</span>
              </span>
              <span className="h-9 w-px bg-white/40" />
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                <MailIcon className="h-5 w-5" />
              </span>
            </button>
          </div>

          <nav className="hidden flex-1 items-center justify-center md:flex md:order-2">
            <div className="flex h-14 w-full max-w-3xl items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 backdrop-blur">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex md:items-center md:gap-4 md:order-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/hero/logo white.svg"
                alt="logo"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-3 flex flex-col gap-3 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <span>{link.label}</span>
                  <ArrowLeft className="h-4 w-4 text-white/70" />
                </Link>
              ))}
              <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3">
                <span className="text-sm font-medium text-white/80">تواصل سريع</span>
                <div className="flex items-center gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                    <WhatsappIcon className="h-5 w-5" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                    <MailIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-14">
          <div className="max-w-2xl space-y-6 text-right">
            <h1 className="text-4xl font-extrabold leading-[1.4] sm:text-5xl lg:text-[56px]">
            نحو مستقبل عمراني متكامل
            </h1>
            <p className="text-lg text-white/80">
              نعمل على تنفيذ المشاريع في منطقة الباحة وخارجها بكفاءة عالية، ونلتزم بتقديم حلول مخصصة
              تلبي تطلعات عملائنا وتسهم في تحسين البنية التحتية وتحقيق التنمية المستدامة.
            </p>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90">
                <ArrowLeftFilled className="h-5 w-5 text-black" />
                <span>من نحن</span>
              </button>
              <button className="flex items-center gap-3 rounded-xl border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">
                <span>مشاريعنا</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end gap-6 md:max-w-sm">
            <div className="flex w-full items-center justify-between rounded-3xl border border-white/30 bg-white/5 p-6 backdrop-blur">
              <div className="text-right">
                <p className="text-sm text-white/70">زاوية من مشاريعنا</p>
                <p className="text-2xl font-extrabold">رؤى معمارية</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40">
                <ArrowUp className="h-6 w-6" />
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-2xl border border-white/30 bg-[url('/gallery/gallery-1.jpg')] bg-cover bg-center" />
              <div className="aspect-[4/5] rounded-2xl border border-white/30 bg-[url('/gallery/gallery-2.jpg')] bg-cover bg-center" />
              <div className="col-span-2 aspect-[7/3] rounded-2xl border border-white/30 bg-[url('/gallery/gallery-3.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid gap-4 rounded-3xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur sm:grid-cols-2 md:text-right lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-6"
        >
          {HERO_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="flex min-w-[150px] flex-col items-center gap-2 rounded-2xl border border-white/10 px-5 py-4 text-white/80 transition hover:bg-white/10 md:items-end"
            >
              <span className="text-4xl font-extrabold">
                {`${stat.prefix ?? ""}${displayStats[index]}${stat.suffix ?? ""}`}
              </span>
              <span className="text-sm text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/

/* Icons 

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 20l1.1-4.1A8 8 0 1112 20a8.1 8.1 0 01-3.9-1" />
      <path d="M16 17c-.6.3-1.4.5-2.3.5a4.5 4.5 0 01-2.7-.9l-.5-.4a9.5 9.5 0 01-3-4.3c-.4-1.1-.4-2 .1-2.7l.3-.4c.3-.5.7-.8 1.1-.7.4.1 1 .6 1.1.9l.3.6c.2.3.2.5.1.7l-.4.6a.6.6 0 000 .6 6.6 6.6 0 003 2.6c.3.1.5.1.7 0l.7-.4c.2-.1.4-.1.6 0l.7.3c.3.2.8.5.9.9.1.3-.1.8-.3 1.1z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

function ArrowUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 50V14l20-6 20 6v36" />
      <path d="M12 26h40" />
      <path d="M32 8v44" />
      <path d="M20 32h24" />
      <path d="M20 40h24" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function ArrowLeftFilled({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 11H9.83l3.58-3.59L12 6l-6 6 6 6 1.41-1.41L9.83 13H19z" />
    </svg>
  );
}*/

export { Home };

