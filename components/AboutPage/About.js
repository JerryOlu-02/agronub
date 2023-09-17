import Carbon from '@/assets/carbon.svg';
import Growth from '@/assets/arrow-growth.svg';
import AboutFirstScreenImage from '@/assets/about-screen-one-bg.jpg';
import AboutSecondScreenImage from '@/assets/about-screen-two-bg.jpg';
import Image from 'next/image';
import styles from './About.module.scss';
import { Stats } from '../HomePage/Home';
import Clock from '@/assets/clock.svg';
import AngleRight from '@/assets/angle-right.svg';

export default function About({ blogs }) {
  return (
    <>
      <AboutFirstScreen />

      <AboutSecondScreen />

      <Stats />

      <BlogPosts blogs={blogs} />
    </>
  );
}

function AboutFirstScreen() {
  return (
    <section className={styles.about__screen}>
      <aside className={styles.about__screen_left}>
        <Carbon />

        <h2>
          Urna imperdiet urna sollicitudin rutrum <br /> suspendisse eleifend
          adipiscing faucibus.
        </h2>

        <p>
          Aliquet sed elit id felis, facilisi pellentesque. Nunc vitae dui eget
          venenatis nisi, sit euismod. Sit etiam id arcu et mattis non ipsum
          orci vulputate. Morbi tortor enim augue ultrices ipsum. Auctor lectus
          vitae aenean parturient. Arcu quis posuere venenatis nullam auctor
          placerat cras aenean semper. Donec sollicitudin odio eget nibh
          molestie at ornare. Scelerisque eu semper diam ut. Proin pretium
          interdum in quis pellentesque risus diam leo leo.
        </p>

        <div className={styles.about__screen_div}>
          <div>
            <h3>Who we are</h3>
            <p>
              Cursus varius laoreet tincidunt sollicitudin tortor. Parturient
              iaculis vitae aenean et ultricies sed at tempus morbi. Sed varius
              molestie magna bibendum ut egestas sed urna. Amet, ut risus at ut
              sollicitudin nam pharetra aenean nisl. Ut adipiscing odio proin
              nunc congue.
            </p>
          </div>

          <div>
            <h3>What we do</h3>
            <p>
              Cursus varius laoreet tincidunt sollicitudin tortor. Parturient
              iaculis vitae aenean et ultricies sed at tempus morbi. Sed varius
              molestie magna bibendum ut egestas sed urna. Amet, ut risus at ut
              sollicitudin nam pharetra aenean nisl. Ut adipiscing odio proin
              nunc congue.
            </p>
          </div>
        </div>
      </aside>

      <aside className={styles.about__screen_right}>
        <Image
          src={AboutFirstScreenImage}
          alt="about-screen-one-bg"
          width={600}
          height={600}
          priority
        />
      </aside>
    </section>
  );
}

function AboutSecondScreen() {
  return (
    <section className={styles.about__screen_two}>
      <aside className={styles.about__screen_left}>
        <Growth />

        <h2>
          Feugiat ullamcorper sem integer feugiat <br /> quisque facilisis sem
          convallis non.
        </h2>

        <p>
          Ac convallis sit justo nisl a nulla risus. Elementum pellentesque
          rhoncus aenean viverra auctor rutrum. Vitae vitae morbi tristique
          nullam tortor proin. Eleifend vulputate nibh tincidunt ipsum dolor id
          id tristique. Justo, id netus sapien sollicitudin feugiat pulvinar ac.
          Arcu id eu pulvinar quis molestie lorem. Enim, senectus amet, placerat
          urna. Sed magna vivamus tellus dignissim justo, et faucibus magna
          volutpat. Arcu vestibulum potenti nibh consequat tristique aliquam
          morbi pulvinar sit.
        </p>

        <div className={styles.about__screen_div}>
          <div>
            <h3>Our Vision</h3>
            <p>
              Cursus varius laoreet tincidunt sollicitudin tortor. Parturient
              iaculis vitae aenean et ultricies sed at tempus morbi. Sed varius
              molestie magna bibendum ut egestas sed urna. Amet, ut risus at ut
              sollicitudin nam pharetra aenean nisl. Ut adipiscing odio proin
              nunc congue.
            </p>
          </div>

          <div>
            <h3>Our Mission</h3>
            <p>
              Cursus varius laoreet tincidunt sollicitudin tortor. Parturient
              iaculis vitae aenean et ultricies sed at tempus morbi. Sed varius
              molestie magna bibendum ut egestas sed urna. Amet, ut risus at ut
              sollicitudin nam pharetra aenean nisl. Ut adipiscing odio proin
              nunc congue.
            </p>
          </div>
        </div>
      </aside>

      <aside className={styles.about__screen_right}>
        <Image
          src={AboutSecondScreenImage}
          alt="about-screen-one-bg"
          width={600}
          height={600}
          priority
        />
      </aside>
    </section>
  );
}

function BlogPosts({ blogs }) {
  const renderBlogs = blogs.map((blog, index) => (
    <BlogCard
      key={index}
      title={blog.title}
      content={blog.content}
      date={blog.date}
      image={blog.image}
    />
  ));

  return (
    <section className={styles.blog__posts}>
      <div className={styles.blog__posts_header}>
        <h3>Here are a few of our blogposts that say more about us</h3>

        <p>
          Et a tellus volutpat nisi, blandit risus arcu, volutpat rhoncus.
          Phasellus urna, sodales feugiat viverra.
        </p>
      </div>

      <aside className={styles.blog__posts_cards}>{renderBlogs}</aside>
    </section>
  );
}

function BlogCard({ title, content, date, image }) {
  return (
    <div className={styles.blog__card}>
      <Image src={image} alt={title} />

      <div className={styles.blog__card_bottom}>
        <h3>{title}</h3>

        <p>{content}</p>

        <aside>
          <p>
            <Clock />
            {date}
          </p>
          <p>
            Read More <AngleRight />
          </p>
        </aside>
      </div>
    </div>
  );
}
