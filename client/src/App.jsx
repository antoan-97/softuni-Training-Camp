import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext'

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
import EditPage from './components/editPage/EditPage'




function App() {


  return (
    <AuthProvider>
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
          <Route path='/fighters/:fighterId/edit' element={<EditPage />}></Route>
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
