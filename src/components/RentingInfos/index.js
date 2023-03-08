import RentingHeader from '../RentingHeader';
import styles from './styles.module.css';

function RentingInfos({
  title,
  location,
  tags,
  host,
  rating,
  description,
  equipments,
}) {
  return (
    <div className={styles.container}>
      <RentingHeader
        title={title}
        location={location}
        tags={tags}
        host={host}
        rating={rating}
      />
    </div>
  );
}

export default RentingInfos;
