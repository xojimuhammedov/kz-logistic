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
import ServicesAbout from './pages/ServicesAbout'
import VehicleShowcase from './components/AutoParc'
import { Image, Link } from '@chakra-ui/react'

import WhatsappIcon from "./assets/whatsapp.png";
import { Box, Phone } from 'lucide-react'


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
        <Route path='/service/:id' element={<ServicesAbout />} />
        <Route path='/autoparc' element={<VehicleShowcase />} />
      </Routes>
      <Footer />
        <Link
          target="_blank"
          className="position-whatsapp" href="https://wa.me/+77710140505">
          <Image src={WhatsappIcon} w={'40px'} />
        </Link>
        <Link className="position-phone" target='_blank' href='tel:+77710140505' {...css.phone}>
          <Phone width='28px' />
        </Link>
    </>
  )
}

export default App

const css = {
  phone: {
    width: "64px",
    display: "flex",
    height: "64px",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    borderRadius: "50%",
    background: "#F70",
    border: "1px solid #F70",
  },
}
