// AboutSection.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ABOUT_HIGHLIGHTS = [
  {
    title: "خبرة واسعة",
    description: "أكثر من 15 عاماً من الخبرة في تقديم الحلول الهندسية المتكاملة",
    icon: "/images/about/f1.svg"
  },
  {
    title: "فريق محترف",
    description: "نخبة من المهندسين والفنيين المؤهلين لتنفيذ المشاريع بأعلى جودة",
    icon: "/images/about/f2.svg"
  },
  {
    title: "معايير عالمية",
    description: "نلتزم بأعلى المعايير العالمية في جميع مراحل التنفيذ",
    icon: "/images/about/f3.svg"
  }
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0); // default: first card

  return (
    <section id="about-us" className="about-section" dir="rtl">
      <div className="about-container">

        {/* Section Title */}
        <div className="about-section-header">
          <h2 className="about-section-title">معلومات عنا</h2>
        </div>

        {/* Main Content Grid */}
        <div className="about-main-grid">

          {/* Right Side - Text Content */}
          <div className="about-text-content">
            <h3 className="about-main-title">
              متخصصة في تقديم الخدمات الفنية والهندسية للمشاريع والبنى التحتية منذ عام 2010
            </h3>
            <p className="about-main-description">
              نعمل على توفير حلول مبتكرة تضمن نجاح المشاريع وتلبي احتياجات عملائنا من الجهات الحكومية
              والخاصة بكفاءة واحترافية، بدعم من فريق متمرس يستخدم أحدث التقنيات ويطبق أعلى المعايير
              العالمية.
            </p>

            <Link href="#services" className="see-more-button">
             <span className="flex items-center gap-2">
                 شاهد المزيد
                 <i className="fa-solid fa-angles-left"></i>
              </span>
            </Link>
          </div>

          {/* Left Side - Image */}
          <div className="about-image-wrapper">
            <Image
              width={650}
              height={500}
              src="/images/about/about1.png"
              alt="مشاريع هندسية"
              className="about-main-image"
            />

            <div className="about-image-overlay"></div>

            <div className="about-image-badge">
              <p className="about-badge-year">منذ عام 2010</p>
              <p className="about-badge-text">خبرة ممتدة في المملكة</p>
            </div>
          </div>
        </div>

        {/* Three Cards */}
        <div className="about-cards-grid">
          {ABOUT_HIGHLIGHTS.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`about-card ${isActive ? "about-card-hover" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)} // revert to first card
              >
                <div className="about-card-content">

                  {/* Icon */}
                  <div className="about-card-icon-wrapper">
                    <div className="about-card-icon">
                      <Image src={item.icon} alt={item.title} width={150} height={150} className="about-icon" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="about-card-text">
                    <h4 className="about-card-title">{item.title}</h4>
                    <p className="about-card-description">{item.description}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
