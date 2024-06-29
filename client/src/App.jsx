import styles from './styles/App.module.css'

import Navbar from "./components/Navbar"
import HomePage from './components/HomePage'
import Footer from './components/Footer'


function App() {

  return (
    <div className={styles.background}>
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
