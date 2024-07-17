import { useContext } from 'react';
import styles from '../../styles/Register.module.css'
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


export default function RegisterPage() {

  const { registerSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    email: '',
    password: '',
    repeatPassword: '',
  })

  return (
    <section id="register-page">
      <div className={styles.signupSection}>
        <form onSubmit={onSubmit} className={styles.signupForm}>
          <h2>Sign Up</h2>
          <ul className={styles.noBullet}>
            <li>
              <label htmlFor="email">Email:</label>
              <input onChange={onChange}
                type="text"
                className={styles.inputFields}
                id="email"
                name="email" 
                value={values.email}
                />
                
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input onChange={onChange}
                type="password"
                className={styles.inputFields}
                id="password"
                name="password"
                value={values.password}
              />
            </li>
            <li>
              <label htmlFor="repeat-password">Repeat-Password:</label>
              <input onChange={onChange}
                type="password"
                className={styles.inputFields}
                id="repeat-password"
                name="repeatPassword"
                value={values.repeatPassword}
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