import { Routes, Route } from 'react-router-dom'

import styles from './styles/App.module.css'

import Navbar from "./components/Navbar"
import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import Footer from './components/Footer'


function App() {

  return (
    <div className={styles.background}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
