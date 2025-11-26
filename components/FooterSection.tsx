import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NAV_LINKS, PROJECTS, } from "@/constants";

export default function FooterSection() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h2>مكتب حسن محمد فقيه للاستشارات الهندسية</h2>
          <p>
            نقدم حلولًا هندسية متكاملة في التصميم المعماري، التخطيط الحضري، الإشراف وإدارة المشاريع من
            خلال فريق متخصص يعتمد على أفضل الممارسات العالمية.
          </p>
          <div className="footer__social">

            <Link href="https://x.com" className="footer__social-link">
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
             <Link href="https://x.com" className="footer__social-link">
             <i className="fa-brands fa-facebook-f"></i>
            </Link>
             <Link href="https://x.com" className="footer__social-link">
             <i className="fa-brands fa-instagram"></i>
            </Link>
             <Link href="https://x.com" className="footer__social-link">
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>

        <div className="footer__columns">
          <div>
            <h3>روابط سريعة</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}> 
                  <i className="fas fa-chevron-left"></i>
                  <Link href={link.href}>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>مشاريع مختارة</h3>
            <ul>
              {PROJECTS.slice(0, 3).map((project) => (
                <li key={project.title}>     
                <i className="fas fa-chevron-left">
                </i>{project.title}</li>
              ))}
            </ul>
          </div>
          <br />

          <div>
            <h3>تواصل معنا</h3>
            <ul>
              <li className="footer__contact-item">
                <LocationIcon />
                <span>جازان - حي الصفا - شارع الملك فيصل</span>
              </li>
              <li className="footer__contact-item">
                <MailIcon />
                <Link href="mailto:info@faqih-engineering.com">
                  info@faqih-engineering.com
                </Link>
              </li>
              <li className="footer__contact-item">
                <PhoneIcon />
                <Link href="tel:+966550000000">+966 55 000 0000</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__newsletter">
        <div>
          <h3>اشترك في القائمة البريدية</h3>
          <p>نشارك أحدث الأخبار والمشاريع بشكل دوري مع مجتمعنا الهندسي.</p>
        </div>
        <form className="footer__newsletter-form">
          <input type="email" placeholder="البريد الإلكتروني" aria-label="البريد الإلكتروني" />
          <button type="submit">اشترك الآن</button>
        </form>
      </div>

      <div className="footer__bottom">
        <span>© 2025 مكتب حسن محمد فقيه للاستشارات الهندسية. جميع الحقوق محفوظة.</span>
        <span>تم التطوير بواسطة AL Master</span>
      </div>
    </footer>
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

function MailIcon() {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.9 19.9 0 01-8.7-3.1 19.6 19.6 0 01-6-6A19.9 19.9 0 012 4.3 2 2 0 014 2h3a2 2 0 012 1.7 12.6 12.6 0 00.7 2.7 2 2 0 01-.5 2l-1.3 1.3a16 16 0 006 6l1.3-1.3a2 2 0 012-.5 12.6 12.6 0 002.7.7A2 2 0 0122 16.9z" />
    </svg>
  );
}
