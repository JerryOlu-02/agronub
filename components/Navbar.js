import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import styles from '@/sass/navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <ul className={styles.middleNav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/faqs">FAQ</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>

      <ul className={styles.lastNav}>
        <li>
          <Link href="/login">Sign In</Link>
        </li>
        <li>
          <Link href="/signup">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
}
