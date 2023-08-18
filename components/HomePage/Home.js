import IconOne from '@/assets/icon-one.svg';
import IconTwo from '@/assets/icon-two.svg';
import IconThree from '@/assets/icon-three.svg';
import HowImage from '@/assets/how-img.jpg';
import WhyImage from '@/assets/why-img.jpg';
import Image from 'next/image';
import styles from '@/components/HomePage/Home.module.scss';
import Button from '../Button';
import LastSlider from './LastSlider';

export default function HomePage({ data, sliderData }) {
  return (
    <>
      <HowItWorks />

      <WorkWithUs />

      <WhyChoose data={data} />

      <Stats />

      <LastSlider data={sliderData} />
    </>
  );
}

function FIrstSlider() {
  return;
}

// HOW IT WORKS

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <aside className={styles.howItWorksLeft}>
        <h2>
          How does <span>AgroNub</span> works?
        </h2>

        <p>
          Quam commodo proin pharetra nunc suspendisse eget enim at. At gravida
          fermentum sit a egestas enim malesuada varius. Gravida facilisi at
          suscipit quam leo neque. Ullamcorper arcu condimentum dictum risus
          feugiat non vitae elementum.
        </p>

        <div className={styles.howItWorksContent}>
          <div className={styles.howItWorksContentDiv}>
            <span>
              <IconOne />
            </span>

            <div>
              <h3>Lacus fermentum netus massa at leo dui molestie.</h3>
              <p>
                Faucibus fermentum neque, venenatis dictum auctor. Vel sodales
                gravida a, quis urna, pretium mattis. Habitant sodales libero
                nunc vulputate gravida.
              </p>
            </div>
          </div>

          <div className={styles.howItWorksContentDiv}>
            <span>
              <IconTwo />
            </span>

            <div>
              <h3>Lacus fermentum netus massa at leo dui molestie.</h3>
              <p>
                Faucibus fermentum neque, venenatis dictum auctor. Vel sodales
                gravida a, quis urna, pretium mattis. Habitant sodales libero
                nunc vulputate gravida.
              </p>
            </div>
          </div>

          <div className={styles.howItWorksContentDiv}>
            <span>
              <IconThree />
            </span>

            <div>
              <h3>Lacus fermentum netus massa at leo dui molestie.</h3>
              <p>
                Faucibus fermentum neque, venenatis dictum auctor. Vel sodales
                gravida a, quis urna, pretium mattis. Habitant sodales libero
                nunc vulputate gravida.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <aside className={styles.howItWorksImage}>
        <Image
          src={HowImage}
          alt="How__Image"
          width={400}
          height={400}
          priority
        />
      </aside>
    </section>
  );
}

// WORK WITH US
function WorkWithUs() {
  return (
    <section className={styles.workWithUs}>
      <aside>
        <h3>Are you a farmer looking to work with us? </h3>

        <p>
          Make amazing profits by putting your land out for investment. Why take
          a bank loan when you have AgroNub.
        </p>
      </aside>

      <div>
        <Button solid>Learn More</Button>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}

// WHY CHOOSE
function WhyChoose({ data }) {
  return (
    <section className={styles.whyChoose}>
      <aside>
        <Image
          src={WhyImage}
          alt="why__Image"
          width={500}
          height={500}
          priority
        />
      </aside>

      <aside className={styles.whyChoose__right}>
        <h3>
          Why <span>choose</span> AgroNub?
        </h3>

        <p>
          Quam commodo proin pharetra nunc suspendisse eget enim at. At gravida
          fermentum sit a egestas enim malesuada varius. Gravida facilisi at
          suscipit quam leo neque.
        </p>

        <article>
          {data.map((why) => (
            <div className={styles.whyChoose__div} key={why.number}>
              <p className={styles.whyChoose__number}>
                <span>{why.number}</span>
              </p>
              <p>{why.content}</p>
            </div>
          ))}
        </article>
      </aside>
    </section>
  );
}

function Stats() {
  return (
    <section className={styles.stats}>
      <div>
        <h3>45, 567</h3>
        <p>Investors</p>
      </div>

      <div>
        <h3>8, 705</h3>
        <p>Farmers</p>
      </div>

      <div>
        <h3>₦ 83, 593, 783</h3>
        <p>Profit made</p>
      </div>
    </section>
  );
}
