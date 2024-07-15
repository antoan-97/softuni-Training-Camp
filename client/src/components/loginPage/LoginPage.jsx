import { useState } from 'react';
import styles from '../../styles/Login.module.css'


export default function LoginPage() {


    const initialFormState = {
        email: '',
        password: '',
    };


    const [formState, setFormState] = useState(initialFormState);
    // const [errorState, setErrorState] = useState('')

    const formChangeHandler = (e) => {
        setFormState(state => ({
            ...state,
            [e.target.name]: e.target.value,
        })
        )
    }
   
    // Use it latter for register form
    // const emailValidation = () => {
    //     if (formState.email.length < 4) {
    //         setErrorState({email: 'Email should be at least 4 characters long!'})
    //     } else {
    //         setErrorState({email:''})
    //     }
    // }


    // const passwordValidation = () => {
    //     if (formState.password.length < 6){
    //         setErrorState({password:'Password should be at least 6 characters long!'})
    //     }else{
    //         setErrorState({password:''})
    //     }
    // }


    return (
        <section id="login-page" className={styles.loginSection}>
            <div className={styles.loginContainer}>
                <form className={styles.loginForm}>
                    <h2>Login</h2>
                    <ul className={styles.listNoBullet}>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input onChange={formChangeHandler}
                                // onInput={emailValidation}
                                type="text"
                                className={styles.inputField}
                                id="email"
                                name="email"
                                value={formState.email}
                            />
                            {/* {errorState.email && (
                                <p>{errorState.email}</p>
                            )} */}
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input onChange={formChangeHandler}
                                // onBlur={passwordValidation}
                                type="password"
                                className={styles.inputField}
                                id="password"
                                name="password"
                                value={formState.password}
                            />
                      {/* {errorState.password && (
                                <p>{errorState.password}</p>
                            )} */}
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