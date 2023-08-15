import Button from './Button';
import styles from '@/sass/slider.module.scss';
import Image from 'next/image';

export default function SliderItem({ title, content, image }) {
  return (
    <>
      <Image src={image} alt={title} priority />

      <div className={styles.sliderItem}>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
          <Button solid>Learn More</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
}
