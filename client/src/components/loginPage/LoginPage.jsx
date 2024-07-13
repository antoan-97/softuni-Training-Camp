import { useState } from 'react';
import styles from '../../styles/Login.module.css'


export default function LoginPage() {


    const initialFormState = {
        email: '',
        password: '',
    };


    const [formState,setFormState] = useState(initialFormState);

    const formChangeHandler = (e) =>{
        setFormState(state => ({
            ...state,
            [e.target.name]: e.target.value,
        })
        )
    }


    return (
        <section id="login-page" className={styles.loginSection}>
        <div className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <h2>Login</h2>
                <ul className={styles.listNoBullet}>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input onChange={formChangeHandler}
                            type="text"
                            className={styles.inputField}
                            id="email"
                            name="email"
                            value={formState.email}
                        />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input onChange={formChangeHandler}
                            type="password"
                            className={styles.inputField}
                            id="password"
                            name="password"
                            value={formState.password}
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