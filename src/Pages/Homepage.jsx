import React from 'react'
import Hero from '../components/HeroSection/Hero'
import HomeCard from '../components/Card/HomeCard'

const Homepage = () => {
  return (
    <>
     <div className="container__wrapper">
      <Hero/>
      <HomeCard/>
     </div>
    </>
  )
}

export default Homepage
