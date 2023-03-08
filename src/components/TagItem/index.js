import styles from './styles.module.css';

function TagItem({ tag }) {
  return <p className={styles.tag}>{tag}</p>;
}

export default TagItem;
