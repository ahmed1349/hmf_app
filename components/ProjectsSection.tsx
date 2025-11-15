import Link from "next/link";

import { PROJECTS } from "@/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--alt">
      <div className="section__inner">
        <div className="section__header">
          <div className="section__eyebrow">أعمال مختارة</div>
          <h2 className="section__title">نماذج من مشاريعنا الميدانية</h2>
          <p className="section__lead">
            نبتكر حلولًا تعزز ارتباط الإنسان بالمكان، ونصمم مشاريع تراعي الهوية المحلية وتضمن استدامة
            الموارد المستقبلية.
          </p>
        </div>

        <div className="section__grid section__grid--cards">
          {PROJECTS.map((project) => (
            <article key={project.title} className="project-card">
              <div
                className="project-card__media"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden="true"
              />
              <div className="project-card__meta">{project.location}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link href="/services" className="project-card__link">
                طلب دراسة مشابهة
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
