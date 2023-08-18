'use client';

import ArrowLeft from '@/assets/arrow-left.svg';
import ArrowRight from '@/assets/arrow-right.svg';
import { useSlider } from '@/hooks/use-slider';
import sliderStyles from '@/sass/slider.module.scss';
import styles from '@/components/HomePage/Home.module.scss';
import Image from 'next/image';

export default function LastSlider({ data }) {
  const { currentSlide, prevSlide, nextSlide } = useSlider();

  return (
    <section className={styles.last__slider}>
      <div
        onClick={() => prevSlide(data.length)}
        className={sliderStyles.arrowLeft}
      >
        <ArrowLeft />
      </div>

      {data.map((slide, index) => (
        <aside
          style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          key={index}
          className={styles.last__slider_content}
        >
          <div className={styles.last__slider_div}>
            <Image
              src={slide.imageOne}
              alt="image_one"
              width={250}
              height={250}
              priority
            />

            <div>
              <p>{slide.content}</p>
              {slide.investorsName}
            </div>
          </div>

          <div className={styles.last__slider_div}>
            <Image
              src={slide.imageTwo}
              alt="image_one"
              width={250}
              height={250}
              priority
            />

            <div>
              <p>{slide.content}</p>
              {slide.farmersName}
            </div>
          </div>
        </aside>
      ))}

      <div
        onClick={() => nextSlide(data.length)}
        className={sliderStyles.arrowRight}
      >
        <ArrowRight />
      </div>
    </section>
  );
}
