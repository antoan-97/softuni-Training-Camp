import styles from '../../styles/Login.module.css'

export default function LoginPage() {
    return (
        <section id="login-page" className={styles.loginSection}>
        <div className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <h2>Login</h2>
                <ul className={styles.listNoBullet}>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            className={styles.inputField}
                            id="email"
                            name="email"
                        />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className={styles.inputField}
                            id="password"
                            name="password"
                        />
                    </li>
                    <li className={styles.centeredBtn}>
                        <button className={styles.loginButton}>Login</button>
                    </li>
                </ul>
            </form>
        </div>
    </section>

    );

}