import React from 'react'
import HeadphoneDetail from '../components/Categories/Headphones/HeadphoneDetail'
import Footer from '../components/Footer/Footer'


const Headphones = () => {


  return (
    <>
      <div className="container__wrapper font-Manrope text-white bg-black text-center py-6">
        <header className="leading-[44px] tablet:text-[40px] mobile:text-[28px] tracking-[1.43px]">HEADPHONES</header>
      </div>
      <div className="component__wrapper px-10">
        <HeadphoneDetail/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
      
    </>
  )
}

export default Headphones
