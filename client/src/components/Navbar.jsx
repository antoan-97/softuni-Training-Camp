import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['nav-menu']}>
                <li><a href="/">Home</a></li>
                <li><a href="/collection">Collection</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
}