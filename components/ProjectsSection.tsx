"use client";

import { SetStateAction, useState } from "react";
import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    id: 1,
    logo: "🏛️",
    location: "الرياض، المملكة العربية السعودية",
    title: "مركز الابتكار الحضري",
    description:
      "مشروع متكامل لتطوير مركز حضري مستدام يجمع بين العمارة الحديثة والتراث المحلي، مع التركيز على الاستدامة البيئية وتعزيز جودة الحياة. يشمل المشروع مساحات خضراء واسعة ومرافق مجتمعية متطورة.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    id: 2,
    logo: "🌳",
    location: "دبي، الإمارات العربية المتحدة",
    title: "واحة الصحراء السكنية",
    description:
      "تصميم مجتمع سكني متكامل في قلب الصحراء، يدمج العمارة التقليدية مع التقنيات الحديثة. يوفر المشروع بيئة معيشية فريدة تحترم الطبيعة وتحافظ على الموارد من خلال أنظمة الطاقة المتجددة وإدارة المياه المبتكرة.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
  },
  {
    id: 3,
    logo: "🏖️",
    location: "جدة، المملكة العربية السعودية",
    title: "كورنيش البحر الأحمر",
    description:
      "إعادة تطوير شاملة لمنطقة الواجهة البحرية، تشمل ممشى عصري، مساحات ترفيهية، ومناطق تجارية مستدامة. يهدف المشروع إلى تعزيز السياحة المحلية وخلق وجهة عالمية تحتفي بالثقافة البحرية للمنطقة.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProjectChange = (index: SetStateAction<number>) => {
    if (index !== activeProject && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveProject(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 400);
    }
  };

  const handleNext = () => {
    const nextIndex = (activeProject + 1) % FEATURED_PROJECTS.length;
    handleProjectChange(nextIndex);
  };

  const currentProject = FEATURED_PROJECTS[activeProject];

  return (
    <section id="projects" className="featured-projects">
      <div className="featured-projects__container">
        <div className="featured-projects__header">
          <div className="section__eyebrow">أعمال مختارة</div>
          <h2 className="section__title">نماذج من مشاريعنا الميدانية</h2>
        </div>

        <nav className="projects-nav">
          {FEATURED_PROJECTS.map((project, index) => (
            <button
              key={project.id}
              className={`projects-nav__item ${
                activeProject === index ? "projects-nav__item--active" : ""
              }`}
              onClick={() => handleProjectChange(index)}
            >
              <span className="projects-nav__logo">{project.logo}</span>
              <span className="projects-nav__title">{project.title}</span>
            </button>
          ))}
        </nav>

        <div className="project-showcase">
          <div className={`project-showcase__content ${isAnimating ? "project-showcase__content--exit" : "project-showcase__content--enter"}`}>
    

            <div className="project-showcase__text">
              <div className="project-showcase__logo">{currentProject.logo}</div>
              <div className="project-showcase__location">
                📍 {currentProject.location}
              </div>
              <h3 className="project-showcase__title">
                {currentProject.title}
              </h3>
              <p className="project-showcase__description">
                {currentProject.description}
              </p>
              <Link href="/services" className="project-showcase__button">
                طلب دراسة مشابهة
              </Link>
            </div>

                    <div
              className="project-showcase__image"
              onClick={handleNext}
              style={{ cursor: "pointer" }}
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
              />
              <div className="project-showcase__image-overlay">
                <span>المشروع التالي →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}