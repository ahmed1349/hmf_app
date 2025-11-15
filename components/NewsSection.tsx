import Link from "next/link";

import { NEWS_ITEMS } from "@/constants";

export default function NewsSection() {
  return (
    <section className="section">
      <div className="section__inner">
        <div className="section__header">
          <div className="section__eyebrow">الأخبار والفعاليات</div>
          <h2 className="section__title">آخر شراكاتنا وإنجازاتنا</h2>
          <p className="section__lead">
            نفخر بتعاوننا مع جهات رائدة تضع الجودة والابتكار ضمن أولوياتها لخدمة التنمية العمرانية في
            المملكة.
          </p>
        </div>

        <div className="section__grid section__grid--cards">
          {NEWS_ITEMS.map((item) => (
            <article key={item.title} className="news-card">
              <div
                className="news-card__media"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-hidden="true"
              />
              <span className="news-card__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href="/news" className="news-card__link">
                قراءة المزيد
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
