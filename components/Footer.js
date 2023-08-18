import styles from '@/sass/footer.module.scss';
import IconOne from '@/assets/icon-one.svg';
import IconTwo from '@/assets/icon-two.svg';
import IconThree from '@/assets/icon-three.svg';
import Chat from '@/assets/chat.svg';
import Mail from '@/assets/mail.svg';
import Phone from '@/assets/phone.svg';
import Facebook from '@/assets/Facebook.svg';
import Twitter from '@/assets/Twitter.svg';
import Instagram from '@/assets/Instagram.svg';
import Linkedin from '@/assets/Linkedin.svg';
import Github from '@/assets/Github.svg';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <aside className={styles.footer__top}>
        <div className={styles.footer__top_div}>
          <div>
            <IconOne />
          </div>
          <p>Non accumsan vestibulum aliquet cursus aliquet enim.</p>
        </div>

        <div className={styles.footer__top_div}>
          <div>
            <IconTwo />
          </div>
          <p>Non accumsan vestibulum aliquet cursus aliquet enim.</p>
        </div>

        <div className={styles.footer__top_div}>
          <div>
            <IconThree />
          </div>
          <p>Non accumsan vestibulum aliquet cursus aliquet enim.</p>
        </div>
      </aside>

      <aside className={styles.footer__middle}>
        <div>
          <h4>
            Agro<span>Nub</span>
          </h4>

          <p>
            Ut nunc, lorem congue netus diam praesent mattis. Platea ac interdum
            purus, est laoreet porta. Morbi platea amet nunc rhoncus, odio
            varius ullamcorper.
          </p>
        </div>

        <div>
          <h4>
            <span>Subscibe</span> to our Newsletter
          </h4>

          <p>
            Risus volutpat netus amet vitae sollicitudin. Tempus cum tempor
            tortor dui sed.
          </p>

          <input type="text" placeholder="Enter your email address..." />

          <button>Subscribe</button>
        </div>

        <div>
          <p className={styles.footer__middle_contact}>
            <Mail />

            <span>
              <strong>Email Us</strong> <br />
              agronub@gmail.com
            </span>
          </p>

          <p className={styles.footer__middle_contact}>
            <Chat />

            <span>
              <strong>Chat With Us</strong> <br />
              Open Live Chat
            </span>
          </p>

          <p className={styles.footer__middle_contact}>
            <Phone />

            <span>
              <strong>Call Us</strong> <br />
              +23490778812852
            </span>
          </p>
        </div>
      </aside>

      <aside className={styles.footer__bottom}>
        <p>Copyright © AgroNub</p>

        <div>
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
          <Github />
        </div>
      </aside>
    </section>
  );
}
