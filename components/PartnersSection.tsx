import React from 'react';
import Image from 'next/image';

const PARTNERS = [
  {
    id: 1,
    image: '/images/partener/p1.png',
    logo: '/images/partener/p1.png',
    name: 'شريك التقنية',
    description: 'نتعاون مع شريكنا التقني لتقديم حلول مبتكرة تدفع التحول الرقمي وتعزز الكفاءة التشغيلية في جميع القطاعات.'
  },
  {
    id: 2,
    image: '/images/partener/p2.png',
    logo: '/images/partener/p2.png',
    name: 'شريك الأعمال',
    description: 'شراكة استراتيجية تجمعنا مع رواد الأعمال لتحقيق النمو المستدام وخلق فرص جديدة في السوق المحلي والعالمي.'
  },
  {
    id: 3,
    image: '/images/partener/p3.png',
    logo: '/images/partener/p3.png',
    name: 'شريك الابتكار',
    description: 'نعمل معًا على تطوير حلول مبتكرة تلبي احتياجات المستقبل وتساهم في بناء اقتصاد قائم على المعرفة والتكنولوجيا.'
  }
];

export default function PartnersSection() {
  return (
    <section className="partners-section" id='partners'>
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">شركاؤنا في النجاح</h2>
          <p className="partners-description">
            نفخر بتعاوننا مع مؤسسات وشركات رائدة تشاركنا التزامنا بالجودة والابتكار والتميز. معًا، نبني
            قيمة مستدامة وننجز مشاريع ناجحة في مختلف القطاعات.
          </p>
        </div>

        <div className="partners-grid">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-card-inner">
                <div className="partner-card-front">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} image`}
                    width={300}
                    height={100}
                    className="partner-image"
                    />
                  
 
                </div>
                <div className="partner-card-back">
                  <div className="partner-content">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="partner-logo"
                    />
                    <h3 className="partner-name">{partner.name}</h3>
                    <p className="partner-text">{partner.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          <br />

      
        <span className='flex items-end gap-0 mt-8  justify-end'>
          
                <button
                  className="arrow-button"                >
                  <Image
                    src="/images/news/f1.svg"
                    alt="Previous"
                    width={100}
                    height={100}
                    className="arrow-icon"
                  />
                </button>
      
                <button
                  className="arrow-button"
                >
                  <Image
                    src="/images/news/f2.svg"
                    alt="Next"
                    width={100}
                    height={100}
                    className="arrow-icon"
                  />
                </button>
      
        </span>
          
              </div>
            
    </section>
  );
}