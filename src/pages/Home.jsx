import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import VisionMission from '../components/VisionMission'
import Services from '../components/Services'
import Projects from '../components/Projects'

function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <VisionMission/>
    <Services/>
    <Projects/>
    </>
  )
}

export default Home