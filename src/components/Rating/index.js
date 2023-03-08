import styles from './styles.module.css';
import ratingActive from '../../assets/rating-active.png';
import ratingInactive from '../../assets/rating-inactive.png';

function Rating({ rating }) {
  console.log(rating)
  return (
    <div className={styles.container}>
      <img src={rating >= 1 ? ratingActive : ratingInactive} alt="" />
      <img src={rating >= 2 ? ratingActive : ratingInactive} alt="" />
      <img src={rating >= 3 ? ratingActive : ratingInactive} alt="" />
      <img src={rating >= 4 ? ratingActive : ratingInactive} alt="" />
      <img src={rating >= 5 ? ratingActive : ratingInactive} alt="" />
    </div>
  );
}

export default Rating;
