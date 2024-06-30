import { Routes, Route } from 'react-router-dom'

import styles from './styles/App.module.css'

import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'
import Footer from './components/footer/Footer'


function App() {

  return (
    <div className={styles.background}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
