'use client';

import styles from './Faq.module.scss';
import FaqSvg from '@/assets/faq-svg.svg';
import AngleUp from '@/assets/angle-up.svg';
import { useDropdown } from '@/hooks/use-dropdown';

export default function Faqs({ data }) {
  return (
    <section className={styles.faq}>
      <FirstFaq />

      <FaqList data={data} />
    </section>
  );
}

function FirstFaq() {
  const { isVisible, toggleVisibility } = useDropdown();

  return (
    <div className={styles.firstFaq}>
      <aside>
        <FaqSvg />
      </aside>

      <aside className={styles.faqText}>
        <h3>Frequently Asked Questions</h3>
        <p>
          Velit convallis pretium sed sit mattis interdum non turpis tellus.
          Ultrices molestie sed dapibus rhoncus egestas odio. In eros adipiscing
          vestibulum phasellus malesuada et ultrices. Leo, pellentesque a
          pretium scelerisque. Tincidunt etiam nulla dolor consectetur
          elementum.
        </p>

        <div className={styles.faqDropdown}>
          <p>
            How does AgroNub sustain itself?
            <span
              className={`${isVisible && styles.activeDropdown}`}
              onClick={() => toggleVisibility()}
            >
              <AngleUp />
            </span>
          </p>

          <div className={`${isVisible && styles.activeText}`}>
            Lobortis mattis commodo mollis pellentesque tristique aenean. Nibh
            ultricies odio ut id. Dignissim faucibus fermentum vitae nam.
            Praesent risus nisl in amet sociis lacus amet. Viverra enim, nisi
            arcu massa vitae at vulputate luctus.
          </div>
        </div>
      </aside>
    </div>
  );
}

function FaqList({ data }) {
  return (
    <div className={styles.faqList}>
      {data.map((faq, index) => (
        <FaqShow key={index} question={faq.text} answer={faq.answer} />
      ))}
    </div>
  );
}

function FaqShow({ question, answer }) {
  const { isVisible, toggleVisibility } = useDropdown();

  return (
    <div className={styles.faqDropdown}>
      <p>
        {question}

        <span
          className={`${isVisible && styles.activeDropdown}`}
          onClick={() => toggleVisibility()}
        >
          <AngleUp />
        </span>
      </p>

      <div className={`${isVisible && styles.activeText}`}>{answer}</div>
    </div>
  );
}
