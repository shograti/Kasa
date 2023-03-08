import Rating from '../Rating';
import TagList from '../TagList';
import styles from './styles.module.css';

function RentingHeader({ title, tags, location, rating, host }) {
  return (
    <div className={styles.container}>
      <div className={styles.left_column}>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <TagList tags={tags} />
      </div>
      <div className={styles.right_column}>
        <div className={styles.host_container}>
          <p>{host.name}</p>
          <img src={host.picture} alt="" />
        </div>
        <Rating rating={rating}/>
      </div>
    </div>
  );
}

export default RentingHeader;
