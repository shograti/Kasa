import styles from './styles.module.css';

function RentingItem({ house }) {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${house.cover}) no-repeat center center/cover`,
      }}
    >
      <div className={styles.shadow}>
        <h2>{house.title}</h2>
      </div>
    </div>
  );
}

export default RentingItem;
