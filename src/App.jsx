import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import TransportHero from './components/Header'
import Question from './components/Questions'
import ServicesGrid from './components/Services'
import LogisticsStatistics from './components/Statistic'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav />
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <TransportHero />
          <LogisticsStatistics />
          <About />
          <ServicesGrid />
          <Question />
        </>} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
