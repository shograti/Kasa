import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.shadow}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Hero;
