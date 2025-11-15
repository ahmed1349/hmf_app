import Link from "next/link";

import { ABOUT_HIGHLIGHTS } from "@/constants";

export default function AboutSection() {
  return (
    <section id="about" className="section section--about">
      <div className="section__inner section__inner--split">
        <div className="section__media" aria-hidden="true">
          <div className="section__media-card">
            <span>منذ عام 2010</span>
            <p>خبرة ممتدة في تقديم الحلول الهندسية في أنحاء المملكة.</p>
          </div>
        </div>

        <div className="section__content">
          <div className="section__eyebrow">معلومات عنا</div>
          <h2 className="section__title">
            متخصصة في تقديم الخدمات الفنية والهندسية للمشاريع والبنى التحتية منذ عام 2010.
          </h2>
          <p className="section__lead">
            نعمل على توفير حلول مبتكرة تضمن نجاح المشاريع وتلبي احتياجات عملائنا من الجهات الحكومية
            والخاصة بكفاءة واحترافية، بدعم من فريق متمرس يستخدم أحدث التقنيات ويطبق أعلى المعايير
            العالمية.
          </p>

          <div className="section__grid section__grid--stacked">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <div key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="section__cta-group">
            <Link href="/services" className="section__cta section__cta--primary">
              اكتشف خدماتنا
            </Link>
            <Link href="/recent-work" className="section__cta section__cta--ghost">
              عرض المشاريع
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
