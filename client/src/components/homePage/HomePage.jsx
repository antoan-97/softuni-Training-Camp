import { Link } from 'react-router-dom';
import styles from '../../styles/Home.module.css'
export default function HomePage() {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <h1 className={styles.homepageTitle}>Welcome to UFC Fighters Training Camp</h1>
                <p className={styles.homepageSubtitle}>Train with the best and become the best.</p>
                <div className={styles.buttonContainer}>
                <Link to={'/fighters-list'} className={styles.getStartedButton}>Get Started!</Link>
                </div>
            </div>
        </div>
    );
}