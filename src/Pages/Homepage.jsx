import React from 'react'
import Hero from '../components/HeroSection/Hero'
import HomeCard from '../components/Card/HomeCard'
import SpeakerHero from '../components/Speaker/SpeakerHero'
import Speaker2 from '../components/Section/Speaker2'
import EarphoneAds from '../components/Section/Earphone/EarphoneAds'
import Ads from '../components/Section/Ads/Ads'

const Homepage = () => {
  return (
    <>
     <div className="container__wrapper">
      <Hero/>
      <HomeCard/>
      <div className=" px-10 tablet:pb-10">
        <SpeakerHero/>
        <Speaker2/>
        <EarphoneAds/>
        <Ads/>
      </div>
     </div>
    </>
  )
}

export default Homepage
