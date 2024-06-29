import { Routes , Route } from 'react-router-dom'

import styles from './styles/App.module.css'

import Navbar from "./components/Navbar"
import HomePage from './components/HomePage'
import Footer from './components/Footer'


function App() {

  return (
    <div className={styles.background}>
      <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
         
      <Footer />
    </div>
  )
}

export default App
