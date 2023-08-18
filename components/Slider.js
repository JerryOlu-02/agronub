'use client';

import SliderItem from './SliderItem';
import styles from '@/sass/slider.module.scss';
import ArrowLeft from '@/assets/arrow-left.svg';
import ArrowRight from '@/assets/arrow-right.svg';
import { useSlider } from '@/hooks/use-slider';

export default function Slider({ data }) {
  const { currentSlide, nextSlide, prevSlide } = useSlider();

  const renderedData = data.map((slide, index) => {
    return (
      <aside
        style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
        className={styles.slide}
        key={index}
      >
        <SliderItem
          title={slide.title}
          content={slide.content}
          image={slide.image}
        />
      </aside>
    );
  });

  return (
    <section className={styles.slider}>
      <div onClick={() => prevSlide(data.length)} className={styles.arrowLeft}>
        <ArrowLeft />
      </div>

      {renderedData}

      <div onClick={() => nextSlide(data.length)} className={styles.arrowRight}>
        <ArrowRight />
      </div>
    </section>
  );
}
