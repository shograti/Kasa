import styles from './styles.module.css';

function Hero({ image, text, hasShadow }) {
  return (
    <div
      className={styles.hero}
      style={{ background: `url(${image}) no-repeat center center/cover` }}
    >
      {hasShadow && (
        <div className={styles.shadow}>{text && <h1>{text}</h1>}</div>
      )}
    </div>
  );
}

export default Hero;
