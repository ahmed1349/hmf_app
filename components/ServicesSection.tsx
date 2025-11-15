import Link from "next/link";

import { SERVICES } from "@/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <div className="section__header">
          <div className="section__eyebrow">خدماتنا</div>
          <h2 className="section__title">خدماتنا الهندسية المتكاملة</h2>
          <p className="section__lead">
            نقدّم خدمات فنية واستشارية تغطي مراحل المشاريع من الدراسات والتصميم حتى الإشراف والتنفيذ،
            وفق أعلى معايير الجودة والسلامة.
          </p>
        </div>

        <div className="section__grid section__grid--cards">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <div
                className="service-card__media"
                style={{ backgroundImage: `url(${service.image})` }}
                aria-hidden="true"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/recent-work" className="service-card__link">
                استعرض المشاريع المرتبطة
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
