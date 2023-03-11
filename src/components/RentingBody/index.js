import Accordion from '../Accordion';
import styles from './styles.module.css';

function RentingBody({ description, equipments }) {
  return (
    <div className={styles.container}>
      <Accordion title={'Description'} data={[description]} />
      <Accordion title={'Équipements'} data={equipments} />
    </div>
  );
}

export default RentingBody;
