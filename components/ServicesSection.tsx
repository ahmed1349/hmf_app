/* eslint-disable @next/next/no-img-element */
import React from 'react';


const SERVICES = [
  {
    id: 1,
    title: 'التصميم المعماري',
    description: 'نقدم حلول تصميمية مبتكرة تجمع بين الجمال والوظيفة، مع مراعاة أحدث المعايير العالمية',
    image: '/images/service/f1.png'
  },
  {
    id: 2,
    title: 'الإشراف على التنفيذ',
    description: 'فريق متخصص لضمان تنفيذ المشاريع وفق أعلى معايير الجودة والسلامة المهنية',
    image: '/images/service/f2.png'
  },
  {
    id: 3,
    title: 'الاستشارات الهندسية',
    description: 'استشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f3.png'
  },


   {
    id: 4,
    title: 'التصميم المعماري',
    description: 'نقدم حلول تصميمية مبتكرة تجمع بين الجمال والوظيفة، مع مراعاة أحدث المعايير العالمية',
    image: '/images/service/f4.png'
  },
  {
    id: 5,
    title: 'الإشراف على التنفيذ',
    description: 'فريق متخصص لضمان تنفيذ المشاريع وفق أعلى معايير الجودة والسلامة المهنية',
    image: '/images/service/f1.png'
  },
  {
    id: 6,
    title: 'الاستشارات الهندسية',
    description: 'استشارات فنية شاملة تغطي جميع مراحل المشروع من الدراسات الأولية حتى التسليم النهائي',
    image: '/images/service/f2.png'
  }
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services" dir="rtl">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <h2 className="services-title">خدماتنا</h2>
          <p className="services-description">
            نقدّم خدمات فنية واستشارية تغطي مراحل المشاريع من الدراسات والتصميم حتى الإشراف والتنفيذ،
            وفق أعلى معايير الجودة والسلامة.
          </p>
          <button className="services-button">
            
              <span> شاهد المزيد    &gt;&gt;</span>
            </button>
        </div>

        {/* Cards Section */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

