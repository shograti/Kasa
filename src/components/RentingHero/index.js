import { useState } from 'react';
import styles from './styles.module.css';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';

function RentingHero({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageChange = (direction) => {
    const currentIndex = images.indexOf(currentImage);
    if (direction === 'left') {
      if (currentIndex === 0) {
        setCurrentImage(images[images.length - 1]);
      } else {
        setCurrentImage(images[currentIndex - 1]);
      }
    } else {
      if (currentIndex === images.length - 1) {
        setCurrentImage(images[0]);
      } else {
        setCurrentImage(images[currentIndex + 1]);
      }
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        background: `url(${currentImage}) no-repeat center center/cover`,
      }}
    >
      <img src={arrowLeft} alt="" onClick={() => handleImageChange('left')} />
      <img src={arrowRight} alt="" onClick={() => handleImageChange('right')} />
    </div>
  );
}

export default RentingHero;
