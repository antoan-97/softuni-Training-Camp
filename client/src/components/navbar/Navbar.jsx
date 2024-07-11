import { Link } from 'react-router-dom'

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['nav-menu']}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fighters-list">Fighters List</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/create">Add Fighter</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    );
}