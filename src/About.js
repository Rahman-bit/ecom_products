import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const heroTitle = {
    name : 'Rahman S',
    img : 'images/Sayyed.jpeg'
  }
  return (
    <div>
      <HeroSection heroTitle={heroTitle} />
    </div>
  )
}

export default About
