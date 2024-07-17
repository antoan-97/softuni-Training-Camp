import { Routes, Route, useNavigate } from 'react-router-dom'

import AuthContext from './contexts/authContext'
import * as authServices from '../src/services/authService'

import styles from './styles/Home.module.css'

import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'
import CreatePage from './components/createPage/CreatePage'
import FightersList from './components/fightersList/FightersList'
import Footer from './components/footer/Footer'
import FighterDetails from './components/fighter-details/FighterDetails'
import { useState } from 'react'



function App() {
  const navigate = useNavigate()
  const [auth, setAutch] = useState({})

  const loginSubmitHandler = async (values) => {

    const result = await authServices.login(values.email, values.password);

    setAutch(result);

    navigate('/')
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div className={styles.background}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
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
