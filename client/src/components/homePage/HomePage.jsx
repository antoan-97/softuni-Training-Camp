import styles from '../../styles/Home.module.css'

export default function HomePage() {
    return (
        <div className={styles.background}>
            <h1 className={styles.homepageTitle}> Welcome to the UFC Fighters Training Camp</h1>
            <h2 className={styles.homepageSubtitle}>Get ready to train like a champion!</h2>
        </div>
    );
}