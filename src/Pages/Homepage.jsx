import React from 'react'
import Hero from '../components/HeroSection/Hero'
import HomeCard from '../components/Card/HomeCard'
import SpeakerHero from '../components/Speaker/SpeakerHero'

const Homepage = () => {
  return (
    <>
     <div className="container__wrapper">
      <Hero/>
      <HomeCard/>
      <div className=" px-10 tablet:pb-10">
        <SpeakerHero/>
      </div>
     </div>
    </>
  )
}

export default Homepage
