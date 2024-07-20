import { Routes, Route, useNavigate } from 'react-router-dom'

import AuthContext from './contexts/authContext'
import * as authServices from '../src/services/authService'
import { useState } from 'react'

import styles from './styles/Home.module.css'

import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'
import Logout from './components/Logout'
import CreatePage from './components/createPage/CreatePage'
import FightersList from './components/fightersList/FightersList'
import Footer from './components/footer/Footer'
import FighterDetails from './components/fighter-details/FighterDetails'




function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  })

  const loginSubmitHandler = async (values) => {
    // Basic validation
    if (!values.email || !values.password) {
      alert('Please enter both email and password.');
      return;
    }

    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const result = await authServices.login(values.email, values.password);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken)
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed: ' + error.message);
    }
  };

  const registerSubmitHandler = async (values) => {

    // Basic validation
    if (!values.email || !values.password || !values.repeatPassword) {
      alert('Please enter all fields.');
      return;
    }

    // Password match validation
    if (values.password !== values.repeatPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Call register service function
    try {
      const result = await authServices.register(values.email, values.password)

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken)

      navigate('/');

      console.log('Registration successful:', result);
    } catch (error) {
      console.error('Registration failed:', error.message);
      alert('Registration failed: ' + error.message);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    console.log('Token before logout:', localStorage.getItem('accessToken'));
    localStorage.removeItem('accessToken');
    console.log('Token after logout:', localStorage.getItem('accessToken'));

    navigate('/')
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth ? auth.email : null,
    isAuthenticated: !!auth.email
  };

  return (
    <AuthContext.Provider value={values}>
      <div className={styles.background}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
          <Route path='/fighters-list' element={<FightersList />}></Route>
          <Route path='/fighters/:fighterId/details' element={<FighterDetails />}></Route>
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App
