import styles from './styles.module.css';
import RentingItem from '../RentingItem';

function RentingList({ houses }) {
  return (
    <main className={styles.container}>
      <div className={styles.list}>
        {houses.map((house, index) => (
          <RentingItem house={house} key={index} />
        ))}
      </div>
    </main>
  );
}

export default RentingList;
