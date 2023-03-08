import styles from './styles.module.css';
import TagItem from '../TagItem';

function TagList({ tags }) {
  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <TagItem tag={tag} key={index} />
      ))}
    </div>
  );
}

export default TagList;
