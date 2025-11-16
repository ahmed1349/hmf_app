"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { NAV_LINKS, HERO_STATS } from "@/constants";
import SearchIcon from "./SearchIcon";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayStats, setDisplayStats] = useState<number[]>(
    HERO_STATS.map(() => 0)
  );
  const [heroBackground, setHeroBackground] = useState("/images/hero/Hero2.png");
  const [activeSection, setActiveSection] = useState("hero");
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const frameRefs = useRef<number[]>([]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const changeBackground = (imagePath: string) => {
    setHeroBackground(imagePath);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(targetId);
      closeMenu();
    }
  };

  useEffect(() => {
    const frames = frameRefs.current;
    return () => {
      frames.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div 
          className="hero-background-image"
          style={{ backgroundImage: `url('${heroBackground}')` }}
        />
        <div className="hero-background-overlay" />
        <div className="hero-background-gradient" />
      </div>
      
      <div className="hero-container">
        {/* Fixed Navbar Header */}
        <header className="navbar-header">
          {/* Mobile Logo and Menu Toggle */}
          <div className="mobile-header">
            <div className="mobile-logo-wrapper">
              <Link href="" className="mobile-logo-link">
              <Image
                src="/images/hero/logo white.svg"
                alt="logo"
                width={140}
                height={48}
                className="desktop-logo-image"/>
              </Link>

            </div>
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              className="menu-toggle-button"
            >
              {isMenuOpen ? (
                <CloseIcon className="menu-icon" />
              ) : (
                <MenuIcon className="menu-icon" />
              )}
            </button>
          </div>

          {/* Desktop Contact Buttons */}

          {/* Desktop Contact Buttons */}
          <div className="desktop-contact-buttons">
            <button className="contact-button">
              <span className="contact-icon-wrapper">
                <SearchIcon className="contact-icon" />
              </span>
              <span className="contact-divider" />
              <span className="contact-icon-wrapper">
                <WhatsappIcon className="contact-icon" />
              </span>
              <span className="contact-divider" />
              <span className="contact-icon-wrapper">
                <MailIcon className="contact-icon" />
              </span>
            </button>
          </div>
      

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <div className="nav-container">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop Logo */}
          <div className="desktop-logo">
            <Link href="/" className="desktop-logo-link">
              <Image
                src="/images/hero/logo white.svg"
                alt="logo"
                width={140}
                height={48}
                className="desktop-logo-image"
              />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : "closed"}`}>
            <div className="mobile-menu-content">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-menu-link ${activeSection === link.href.replace('#', '') ? 'mobile-menu-link-active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ArrowLeft className="mobile-menu-arrow" />
                </Link>
              ))}
              <div className="mobile-contact-section">
                <span className="mobile-contact-label">تواصل سريع</span>
                <div className="mobile-contact-icons">
                  <button className="mobile-contact-icon-button">
                    <WhatsappIcon className="contact-icon" />
                  </button>
                  <button className="mobile-contact-icon-button">
                    <MailIcon className="contact-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Content with padding for fixed navbar */}
        <div className="hero-content-wrapper">
          <div className="hero-content">
            {/* Text Section */}
            <div className="hero-text-section">
              <div className="hero-text-content">
                <h1 className="hero-title">نحو مستقبل عمراني متكامل</h1>
                <p className="hero-description">
                  نعمل على تنفيذ المشاريع في منطقة الباحة وخارجها بكفاءة عالية، ونلتزم بتقديم حلول مخصصة
                  تلبي تطلعات عملائنا وتسهم في تحسين البنية التحتية وتحقيق التنمية المستدامة.
                نعمل على تنفيذ المشاريع في منطقة الباحة وخارجها بكفاءة عالية، ونلتزم بتقديم حلول مخصصة
                  تلبي تطلعات عملائنا وتسهم في تحسين البنية التحتية وتحقيق التنمية المستدامة.
                </p>
                <div className="hero-buttons">
                  <button className="hero-button-primary">
                    <span>من نحن  &gt;&gt;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
              <div className="gallery-grid">
                <div
                  className="gallery-item-tall gallery-clickable"
                  style={{ backgroundImage: "url('/images/hero/Hero2.png')" }}
                  onClick={() => changeBackground('/images/hero/Hero2.png')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && changeBackground('/images/hero/Hero2.png')}
                />
                <div
                  className="gallery-item-tall gallery-clickable"
                  style={{ backgroundImage: "url('/images/hero/Hero.png')" }}
                  onClick={() => changeBackground('/images/hero/Hero.png')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && changeBackground('/images/hero/Hero.png')}
                />
                
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="stats-section">
            {HERO_STATS.map((stat, index) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">
                  {`${stat.prefix ?? ""}${displayStats[index]}${stat.suffix ?? ""}`}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Icons */

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
}

export { HeroSection };