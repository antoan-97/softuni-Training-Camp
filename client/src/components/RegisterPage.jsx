import styles from '../styles/Register.module.css'


export default function RegisterPage() {
    return (
        <section id="register-page">
        <div className={styles.signupSection}>
          <form className={styles.signupForm}>
            <h2>Sign Up</h2>
            <ul className={styles.noBullet}>
              <li>
                <label htmlFor="email">Email:</label>
                <input type="text" className={styles.inputFields} id="email" name="email" />
              </li>
              <li>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className={styles.inputFields}
                  id="password"
                  name="password"
                />
              </li>
              <li>
                <label htmlFor="repeat-password">Repeat-Password:</label>
                <input
                  type="password"
                  className={styles.inputFields}
                  id="repeat-password"
                  name="repeatPassword"
                />
              </li>
              <li id="center-btn">
                <button id={styles['join-btn']}>JOIN</button>
              </li>
            </ul>
          </form>
        </div>
      </section>
      
    );
}