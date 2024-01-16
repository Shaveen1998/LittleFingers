import React from 'react'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import Contact from './ContactPage'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className="App">
    <Hero />
    <Work />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home
