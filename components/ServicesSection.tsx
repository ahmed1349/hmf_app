/* eslint-disable @next/next/no-img-element */
import React from 'react';

const SERVICES = [
  {
    id: 1,
    title: 'التصميم المعماري',
    description: 'جميع ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى   ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f1.png'
  },
  {
    id: 2,
    title: 'الإشراف على التنفيذ',
    description: 'جميع ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى   ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f2.png'
  },
  {
    id: 3,
    title: 'الاستشارات الهندسية',
    description: 'جميع ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى   ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f3.png'
  },
  {
    id: 4,
    title: 'التصميم المعماري',
    description: 'جميع ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى   ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f4.png'
  },
  {
    id: 5,
    title: 'الإشراف على التنفيذ',
    description: 'جميع ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى   ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f1.png'
  },
  {
    id: 6,
    title: 'الاستشارات الهندسية',
    description: 'جميع ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى   ستشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f2.png'
  }
];

export default function ServicesSection() {
  return (
    <>
      <section className="services-section" id="services">
        <div className="services-container">
          <div className="services-layout">
            {/* Sidebar with title, description, and button */}
            <div className="services-sidebar">
                  {/* Section Title */}
                 <div className="about-section-header">
                   <h2 className="about-section-title">خدماتنا</h2><br />
                 </div>
              <h2 className="services-title">خدماتناالهندسة المتكاملة</h2>
              <p className="services-description">
                نقدّم خدمات فنية واستشارية تغطي مراحل المشاريع من الدراسات والتصميم حتى الإشراف والتنفيذ،
                وفق أعلى معايير الجودة والسلامة.
              </p>
              <a href="#services" className="see-more-button">
                <span className="flex items-center gap-2">
                 شاهد المزيد
                 <i className="fa-solid fa-angles-left"></i>
              </span>
              </a>
            </div>

            {/* Cards Grid */}
            <div className="services-grid">
              {SERVICES.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-card__image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-card__image"
                    />
                  </div>
                  <div className="service-card__content">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__text">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}