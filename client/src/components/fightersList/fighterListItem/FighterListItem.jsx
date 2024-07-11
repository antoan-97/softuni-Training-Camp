import styles from '../../../styles/Collection.module.css'

export default function FighterListItem({
    title,
    category,
    image,
    description
}

) {
    return (
        <div className={`${styles.flip} ${styles.flipVertical}`}>
            <div className={styles.flipContainerFront}>
                <img src={image} alt="fighter" className={styles.frontImage} />
            </div>
            <div className={styles.flipContainerBack}>
                <h1 className={styles.frontHeading}>Name: {title}</h1>
                <h2 className={styles.flipContainerBackHeading}>Category: {category} </h2>
                <p className={styles.flipContainerBackDescription}>Description: {description}  </p>
                <a href="/fighters/{{_id}}/details" className={styles.detailsButton}>Details</a>
            </div>
        </div>
    );
}