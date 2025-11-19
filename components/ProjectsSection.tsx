/* eslint-disable @next/next/no-img-element */
"use client";

import { SetStateAction, useState } from "react";
import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    id: 1,
    logo: "/images/projects/logo1.png",
    location: " مدينة الباحة ",
    title: "المركز الجنوبي",
    description:
      "مشروع متكامل لتطوير مركز حضري مستدام يجمع بين العمارة الحديثة والتراث المحلي، مع التركيز على الاستدامة البيئية وتعزيز جودة الحياة. يشمل المشروع مساحات خضراء واسعة ومرافق مجتمعية متطورة.",
    image: "/images/projects/image1.png",
  },
  {
    id: 2,
    logo: "/images/projects/logo2.png",
    location: "  مدينة جازان ",
    title: "  شاطئ الشقيق",
    description:
      "تصميم مجتمع سكني متكامل في قلب الصحراء، يدمج العمارة التقليدية مع التقنيات الحديثة. يوفر المشروع بيئة معيشية فريدة تحترم الطبيعة وتحافظ على الموارد من خلال أنظمة الطاقة المتجددة وإدارة المياه المبتكرة.",
    image: "/images/projects/image2.png",
  },
  {
    id: 3,
    logo: "/images/projects/logo3.png",
    location: "مدينة العسير",
    title: "أمان جازان",
    description:
      "إعادة تطوير شاملة لمنطقة الواجهة البحرية، تشمل ممشى عصري، مساحات ترفيهية، ومناطق تجارية مستدامة. يهدف المشروع إلى تعزيز السياحة المحلية وخلق وجهة عالمية تحتفي بالثقافة البحرية للمنطقة.",
    image: "/images/projects/image3.png",
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
              <img src={project.logo} alt={project.title} className="projects-nav__logo" />
              <span className="projects-nav__title">{project.title}</span>
            </button>
          ))}
        </nav>

        <div className="project-showcase">
          <div className={`project-showcase__content ${isAnimating ? "project-showcase__content--exit" : "project-showcase__content--enter"}`}>


            <div className="project-showcase__text">
              <img src={currentProject.logo} alt={currentProject.title} className="project-showcase__logo" />
              <div className="project-showcase__location">
                <span> 
                   <LocationIcon /> {currentProject.location}
                </span>
              
              </div>
              <h3 className="project-showcase__title">
                {currentProject.title}
              </h3>
              <p className="project-showcase__description">
                {currentProject.description}
              </p>
              <Link href="/services" className="project-showcase__button">
              <span> شاهد المزيد    &gt;&gt;</span>
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
function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="footer__icon"
    >
      <path d="M12 21s-6-5.8-6-10a6 6 0 1112 0c0 4.2-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}
