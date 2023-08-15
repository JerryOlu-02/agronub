import styles from '@/sass/button.module.scss';

export default function Button({ children, solid, ...rest }) {
  const btnStyle = solid ? `${styles.btn} ${styles.solid}` : styles.btn;

  return (
    <button className={btnStyle} {...rest}>
      {children}
    </button>
  );
}
