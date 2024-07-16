import { useContext, useState } from 'react';
import useForm from '../../hooks/useForm';

import styles from '../../styles/Login.module.css'
import AuthContext from '../../contexts/authContext';


export default function LoginPage() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    });
    console.log('LoginPage values:', values);

    return (
        <section id="login-page" className={styles.loginSection}>
            <div className={styles.loginContainer}>
                <form onSubmit={onSubmit} className={styles.loginForm}>
                    <h2>Login</h2>
                    <ul className={styles.listNoBullet}>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input onChange={onChange}
                                // onInput={emailValidation}
                                type="text"
                                className={styles.inputField}
                                id="email"
                                name="email"
                                value={values.email}
                            />

                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input onChange={onChange}
                                // onBlur={passwordValidation}
                                type="password"
                                className={styles.inputField}
                                id="password"
                                name="password"
                                value={values.password}
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