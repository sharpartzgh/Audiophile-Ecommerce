import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="container__wrapper text-white font-Manrope py-10 px-10 mobile:bg-hero-mobile mobile:bg-center mobile:bg-no-repeat mobile:bg-cover mobile:h-[600px] tablet:bg-hero-tablet tablet:bg-center tablet:bg-no-repeat tablet:bg-cover tablet:h-[720px] laptop:bg-hero-desktop laptop:bg-no-repeat laptop:bg-cover">
        {/* text content */}
        <div className="text__wrapper mobile:text-center mobile:flex mobile:flex-col mobile:gap-5 tablet:text-center tablet:flex tablet:flex-col tablet:gap-6 laptop:text-start">
          <div className=" mt-40 mobile:flex mobile:flex-col mobile:gap-5 tablet:flex tablet:flex-col tablet:gap-8">      
            <p className=" text-sm font-light mobile:-tracking-[-5px] tablet:-tracking-[-10px]">NEW PRODUCTS</p>
              <div className=" font-bold mobile:text-4xl mobile:-tracking-[1.29px] tablet:text-[56px] tablet:-tracking-[-2px] leading-none">
              <p>XX99 MARK II</p>
              <p>HEADPHONES</p>
              </div>
              <p className=" text-[15px] text-wrap leading-6 mobile:px-3 tablet:px-44 laptop:px-0" >Experience natural, lifelike audio and exceptional <br className=" mobile:hidden"/> build quality made for the passionate music <br className=" mobile:hidden"/>enthusiast.</p>
          </div>
          <div className="button tablet:mt-7">
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
