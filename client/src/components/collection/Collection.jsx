import styles from '../../styles/Collection.module.css';

export default function Collection() {
    return (
        <div className={`${styles.flip} ${styles.flipVertical}`}>
            <div className={styles.flipContainerFront}>
                <img src="" alt="fighter" className={styles.frontImage} />
            </div>
            <div className={styles.flipContainerBack}>
                <h1 className={styles.frontHeading}>Fighter Name</h1>
                <h2 className={styles.flipContainerBackHeading}>Category: </h2>
                <p className={styles.flipContainerBackDescription}>Description:  </p>
                <a href="/fighters/{{_id}}/details" className={styles.detailsButton}>Details</a>
            </div>
        </div>
    );
}
