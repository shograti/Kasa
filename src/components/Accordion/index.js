import styles from './styles.module.css';
import dropdown from '../../assets/dropdown.png';
import { useState } from 'react';

function Accordion({ title, data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(data);
  return (
    <div className={styles.accordion}>
      <div className={styles.head}>
        <h3>{title}</h3>
        <img
          onClick={() => setIsExpanded(!isExpanded)}
          src={dropdown}
          className={isExpanded ? styles.icon_expanded : styles.icon_collapsed}
          alt=""
        />
      </div>
      {isExpanded && (
        <div className={styles.body}>
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Accordion;
