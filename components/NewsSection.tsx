/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NEWS_DATA = {
  الاخبار: [
    {
      id: 1,
      title: "أخبار مكتب الفقيه",
      description:
        "مشروع متكامل لتطوير مركز حضري مستدام يجمع بين العمارة الحديثة والتراث المحلي، مع التركيز على الاستدامة البيئية وتعزيز جودة الحياة. يشمل المشروع مساحات خضراء واسعة ومرافق مجتمعية متطورة.",
      image: "/images/news/news1.png",
    },
    {
      id: 2,
      title: "افتتاح مشروع جديد",
      description:
        "تصميم مجتمع سكني متكامل في قلب الصحراء، يدمج العمارة التقليدية مع التقنيات الحديثة. يوفر المشروع بيئة معيشية فريدة تحترم الطبيعة وتحافظ على الموارد من خلال أنظمة الطاقة المتجددة وإدارة المياه المبتكرة.",
      image: "/images/news/news2.png",
    },
  ],
  الانشطة: [
    {
      id: 3,
      title: "ورشة عمل ميدانية",
      description:
        "تصميم مجتمع سكني متكامل في قلب الصحراء، يدمج العمارة التقليدية مع التقنيات الحديثة. يوفر المشروع بيئة معيشية فريدة تحترم الطبيعة وتحافظ على الموارد من خلال أنظمة الطاقة المتجددة وإدارة المياه المبتكرة.",
      image: "/images/news/news2.png",
    },
    {
      id: 4,
      title: "إطلاق فيديو توعوي",
      description:
        "إعادة تطوير شاملة لمنطقة الواجهة البحرية، تشمل ممشى عصري، مساحات ترفيهية، ومناطق تجارية مستدامة. يهدف المشروع إلى تعزيز السياحة المحلية وخلق وجهة عالمية تحتفي بالثقافة البحرية للمنطقة.",
      image: "/images/news/news3.png",
    },
  ],
};

// ✔ Type-safe keys
type CategoryKey = keyof typeof NEWS_DATA;

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("الاخبار");
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const currentItems = NEWS_DATA[activeCategory];
  const currentItem = currentItems[activeIndex];

  // Handle category switching
  const handleCategoryChange = (category: CategoryKey) => {
    if (category !== activeCategory && !isAnimating) {
      setIsAnimating(true);
      setAnimationDirection("right");

      setTimeout(() => {
        setActiveCategory(category);
        setActiveIndex(0);

        setTimeout(() => setIsAnimating(false), 50);
      }, 400);
    }
  };

  // Navigation left & right
  const handleNavigation = (direction: "right" | "left") => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimationDirection(direction);

    setTimeout(() => {
      if (direction === "right") {
        setActiveIndex((prev) => (prev + 1) % currentItems.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length);
      }

      setTimeout(() => setIsAnimating(false), 50);
    }, 400);
  };

  return (
    <section className="news-section" id="news">
      <div className="featured-projects__container">
        <div className="featured-projects__header">
          <h2 className="partners-title">الاخبار & <br />الانشطة الفعلية</h2>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-row justify-center items-center mb-8">
          <nav className="projects-nav">
            {Object.keys(NEWS_DATA).map((category) => (
              <button
                key={category}
                className={`projects-nav__item ${
                  activeCategory === category ? "projects-nav__item--active" : ""
                }`}
                onClick={() => handleCategoryChange(category as CategoryKey)}
              >
                <span className="projects-nav__title">{category}</span>
              </button>
            ))}
          </nav>
        </div>

{/* Main Content */}
        <div className="project-showcase" style={{ overflow: 'hidden', position: 'relative' }}>
          <div
            className={`project-showcase__content ${
              isAnimating
                ? animationDirection === "right"
                  ? "slide-out-right"
                  : "slide-out-left"
                : "slide-in"
            }`}
            style={{ display: 'flex', gap: '0' }}
          >
   {/* Next Card Preview (20%) - On the right with margin */}
            <div 
              className="next-card-preview-inline project-showcase__image"
              onClick={() => handleNavigation("right")}
              style={{ cursor: "pointer", flex: '0 0 20%', position: 'relative', overflow: 'hidden', marginLeft: '20px' }}
            >
              <img 
                src={currentItems[(activeIndex + 1) % currentItems.length].image} 
                alt="Next preview"
                style={{ 
                  width: '100%',
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'left center',
                  marginLeft: '0'
                }}
              />
            </div>
            <div className="project-showcase__text">
              <h3 className="project-showcase__title">{currentItem.title}</h3>

              <p className="project-showcase__description">
                {currentItem.description}
              </p>

              <Link href="/services" className="news_button">
                <Image
                  src="/images/news/arrow.svg"
                  alt="Newsletter Icon"
                  width={100}
                  height={100}
                  style={{ marginRight: "8px" }}
                />
              </Link>
              <br />
              <Link href="/services" className="news_button">
                <span> تعليمي </span>
              </Link>

            </div>

            <div
              className="project-showcase__image"
              onClick={() => handleNavigation("right")}
              style={{ cursor: "pointer", flex: '0 0 50%', position: 'relative', marginLeft: '20px' }}
            >
              <img src={currentItem.image} alt={currentItem.title} />
              <div className="project-showcase__image-overlay">
                <span>الخبر التالي →</span>
              </div>
            </div>


          </div>
        </div>
        {/* Arrows */}

  <span className="flex items-end gap-0 mt-8 justify-end">
    
          <button
            onClick={() => handleNavigation("left")}
            className="arrow-button"
            disabled={isAnimating}
          >
            <Image
              src="/images/news/f1.svg"
              alt="Previous"
              width={100}
              height={100}
              className="arrow-icon"
            />
          </button>

          <button
            onClick={() => handleNavigation("right")}
            className="arrow-button"
            disabled={isAnimating}
          >
            <Image
              src="/images/news/f2.svg"
              alt="Next"
              width={100}
              height={100}
              className="arrow-icon"
            />
          </button>

  </span>
    
        </div>


      {/* Animations */}
      <style jsx>{`
        .arrow-button {
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease, opacity 0.3s ease;
          padding: 8px;
        }

        .arrow-button:hover:not(:disabled) {
          transform: scale(1.1);
        }

        .arrow-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .arrow-icon {
          transition: filter 0.3s ease;
        }

        .arrow-button:hover:not(:disabled) .arrow-icon {
          filter: brightness(1.2);
        }

        .slide-out-right {
          animation: slideOutRight 0.4s ease-in-out forwards;
        }

        .slide-out-left {
          animation: slideOutLeft 0.4s ease-in-out forwards;
        }

        .slide-in {
          animation: slideIn 0.4s ease-in-out forwards;
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
