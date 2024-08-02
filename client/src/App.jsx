import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext'

import styles from './styles/Global.module.css'

import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'

import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'
import Logout from './components/logout/Logout'
import CreatePage from './components/createPage/CreatePage'
import FightersList from './components/fightersList/FightersList'
import Footer from './components/footer/Footer'
import FighterDetails from './components/fighter-details/FighterDetails'
import EditPage from './components/editPage/EditPage'
import ScrollToTop from './components/scrollToTop/ScrollToTop'




function App() {


  return (
    <AuthProvider>
      <div className={styles.global}>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/fighters-list' element={<FightersList />}></Route>
          <Route path='/fighters/:fighterId/details' element={<FighterDetails />}></Route>
          <Route path='/fighters/:fighterId/edit' element={<EditPage />}></Route>


          <Route element={<AuthGuard />}>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/create' element={<CreatePage />}></Route>
          </Route>

          <Route element={<GuestGuard />}>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
          </Route>

          <Route path="*" element={<HomePage />} /> {/* Handles unmatched routes */}
        </Routes>

        <Footer />
      </div>
    </AuthProvider >
  )
}

export default App
