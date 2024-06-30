import styles from '../../styles/App.module.css'

export default function HomePage() {
    return (
        <div className={styles.background}>
        <div className={styles.heading}>
            <div className={styles.homepageTitle}>Welcome to the UFC Fighters Training Camp</div>
            <div className={styles.homepageSubtitle}>Get ready to train like a champion!</div>
        </div>
    </div>
    );
}