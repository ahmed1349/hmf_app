import { PARTNERS } from "@/constants";

export default function PartnersSection() {
  return (
    <section className="section section--alt">
      <div className="section__inner">
        <div className="section__header section__header--center">
          <div className="section__eyebrow">شركاؤنا</div>
          <h2 className="section__title">شركاؤنا في النجاح</h2>
          <p className="section__lead">
            نفخر بتعاوننا مع مؤسسات وشركات رائدة تشاركنا التزامنا بالجودة والابتكار والتميز. معًا، نبني
            قيمة مستدامة وننجز مشاريع ناجحة في مختلف القطاعات.
          </p>
        </div>

        <div className="section__grid section__grid--cards">
          {PARTNERS.map((partner) => (
            <div key={partner} className="partner-card">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
