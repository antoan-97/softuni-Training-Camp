import { Routes, Route } from 'react-router-dom'

import styles from './styles/Home.module.css'

import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'
import CreatePage from './components/createPage/CreatePage'
import FightersList from './components/fightersList/FightersList'
import Footer from './components/footer/Footer'
import FighterDetails from './components/fighter-details/FighterDetails'


function App() {

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <div className={styles.background}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage loginSubmitHandler={loginSubmitHandler} />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
        <Route path='/fighters-list' element={<FightersList />}></Route>
        <Route path='/fighters/:fighterId/details' element={<FighterDetails />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
