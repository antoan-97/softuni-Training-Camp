import { Link } from 'react-router-dom'

import styles from '../../styles/Navbar.module.css'
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

export default function Navbar() {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <nav className={styles.navbar}>
            <ul className={styles['nav-menu']}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fighters-list">Fighters List</Link></li>
                {!isAuthenticated && (
                    <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}

                {isAuthenticated && (
                    <>
                        <li><Link to="/create">Add Fighter</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}