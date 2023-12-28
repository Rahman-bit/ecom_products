import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const heroTitle = {
    name : 'About Possible'
  }
  return (
    <div>
      <HeroSection heroTitle={heroTitle} />
    </div>
  )
}

export default About
