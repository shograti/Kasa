import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import slugify from '../../utils/slugify';

function RentingItem({ house }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${slugify(house.title)}`)}
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
