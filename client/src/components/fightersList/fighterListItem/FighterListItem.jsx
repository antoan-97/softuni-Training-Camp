import styles from '../../../styles/Collection.module.css';
import { Link } from 'react-router-dom';

export default function FighterListItem({
  _id,
  title,
  category,
  imageUrl,
  description
}) {
  return (
    <div className={`${styles.flip} ${styles.flipVertical}`}>
      <div className={styles.flipContainerFront}>
        <img src={imageUrl} alt="fighter" className={styles.frontImage} />
      </div>
      <div className={styles.flipContainerBack}>
        <div className={styles.backContent}>
          <h1 className={styles.frontHeading}>Name: {title}</h1>
          <h2 className={styles.flipContainerBackHeading}>Category: {category}</h2>
          <p className={styles.flipContainerBackDescription}>Description: {description}</p>
          <Link to={`/fighters/${_id}/details`} className={styles.detailsButton}>Details</Link>
        </div>
      </div>
    </div>
  );
}
