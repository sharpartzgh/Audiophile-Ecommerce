import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="container__wrapper text-white font-Manrope py-10 px-10 mobile:mt-20 tablet:mt-24">
        {/* text content */}
        <div className="text__wrapper mobile:text-center mobile:flex mobile:flex-col mobile:gap-5 tablet:text-center tablet:flex tablet:flex-col tablet:gap-6 laptop:text-start">
          <div className="mobile:flex mobile:flex-col mobile:gap-5 tablet:flex tablet:flex-col tablet:gap-5">      
            <p className=" text-sm font-light">NEW PRODUCTS</p>
              <div className=" font-bold mobile:text-4xl tablet:text-[56px] leading-none">
              <p>XX99 MARK II</p>
              <p>HEADPHONES</p>
              </div>
              <p className=" text-[15px] text-wrap leading-6 mobile:px-3 tablet:px-44 laptop:px-0" >Experience natural, lifelike audio and exceptional <br className=" mobile:hidden"/> build quality made for the passionate music <br className=" mobile:hidden"/>enthusiast.</p>
          </div>
          <div className="button">
            <Link>
              <button className="bg-[#D87D4A] laptop:hover:bg-[#FBAF85]  px-4 py-3 font-extrabold">SEE PRODUCT</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
