import React from 'react'
import Footer from '../components/Footer/Footer'
import SpeakersDetail from '../components/Categories/Speaker/SpeakersDetail'

const Speakers = () => {
  return (
    <>
      <div className="container__wrapper font-Manrope text-white bg-black text-center py-6">
        <header className="leading-[44px] tablet:text-[40px] mobile:text-[28px] tracking-[1.43px]">SPEAKERS</header>
      </div>
      <div className="component__wrapper px-10">
        <SpeakersDetail/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}

export default Speakers
