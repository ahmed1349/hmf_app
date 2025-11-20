/* eslint-disable @next/next/no-img-element */
"use client";

import { SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "أخبار مكتب الفقيه",
    description:
      "مشروع متكامل لتطوير مركز حضري مستدام يجمع بين العمارة الحديثة والتراث المحلي، مع التركيز على الاستدامة البيئية وتعزيز جودة الحياة. يشمل المشروع مساحات خضراء واسعة ومرافق مجتمعية متطورة.",
    image: "/images/news/news1.png",
  },
  {
    id: 2,
    title: "ورشة عمل ميدانية",
    description:
      "تصميم مجتمع سكني متكامل في قلب الصحراء، يدمج العمارة التقليدية مع التقنيات الحديثة. يوفر المشروع بيئة معيشية فريدة تحترم الطبيعة وتحافظ على الموارد من خلال أنظمة الطاقة المتجددة وإدارة المياه المبتكرة.",
    image: "/images/news/news2.png",
  },
  {
    id: 3,
    title: "إطلاق فيديو توعوي",
    description:
      "إعادة تطوير شاملة لمنطقة الواجهة البحرية، تشمل ممشى عصري، مساحات ترفيهية، ومناطق تجارية مستدامة. يهدف المشروع إلى تعزيز السياحة المحلية وخلق وجهة عالمية تحتفي بالثقافة البحرية للمنطقة.",
    image: "/images/news/news3.png",
  },
];

export default function NewsSection() {
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
    <section className="section" id="news">
      <div className="featured-projects__container">
        <div className="featured-projects__header">
          <h2 className="section__title">   الاخبار & <br />الانشطة الفعلية</h2>
        </div>
        <div className="flex flex-row justify-center items-center">
        <nav className="projects-nav">
          {FEATURED_PROJECTS.map((project, index) => (
            <button
              key={project.id}
              className={`projects-nav__item ${
                activeProject === index ? "projects-nav__item--active" : ""
              }`}
              onClick={() => handleProjectChange(index)}
            >
              <span className="projects-nav__title">{project.title}</span>
            </button>
          ))}
        </nav>

          </div>

        <div className="project-showcase">
          <div className={`project-showcase__content ${isAnimating ? "project-showcase__content--exit" : "project-showcase__content--enter"}`}>


            <div className="project-showcase__text">
              <h3 className="project-showcase__title">
                {currentProject.title}
              </h3>
              <p className="project-showcase__description">
                {currentProject.description}
              </p>
              <Link href="/services" className="news_button">
              <span> شاهد المزيد    &gt;&gt;</span>
              </Link>

              <br />

               <Link href="/services" className="news_button">
              <span>   
              <Image
                src="/images/news/arrow.svg"
                alt="Newsletter Icon"
                width={70}
                height={70}
                style={{ marginRight: '8px' }}
              />


              </span>
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
                <span>الخبر التالي →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}