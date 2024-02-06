import React from 'react'

const Ads = () => {
  return (
    <>
    <div className="container__wrapper font-Manrope mobile:h-[698px] mobile:flex mobile:flex-col tablet:h-[633px] mobile:gap-10 tablet:flex tablet:flex-col tablet:text-center tablet:gap-10 laptop:h-[588px] laptop:w-full laptop:hidden">
      <div className="image mobile:h-[300px] mobile:bg-bestgear1 mobile:bg-no-repeat mobile:bg-cover mobile:bg-center tablet:h-[300px] tablet:bg-bestgear2 tablet:bg-no-repeat tablet:bg-cover tablet:bg-center  laptop:hidden rounded-lg ">
        
      </div>
      <div className="text mobile:text-center mobile:flex mobile:flex-col gap-8 tablet:flex tablet:flex-col laptop:w-[540px] laptop:h-[588px]">
        <div className="top__text mobile:text-[28px] tablet:text-[40px] tablet:px-11 tab font-bold mobile:px-2">
          <p className="mobile:tracking-[1px] tablet:tracking-[1.43pxpx]">BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR</p>
        </div>
        <div className="bottom__text text-[15px] font-medium tablet:px-16 ">
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </div>
    </div>

    {/* was having issue for the laptop diplay so am using this means will surely come back and fix this bug */}

    <div className="laptop mobile:hidden tablet:hidden laptop:flex justify-between  laptop:h-[588px] w-full gap-11 font-Manrope">
      <div className="text__wrapper  gap-10 w-[445px]  flex flex-col justify-center ">
        <div className="top__text laptop:text-[40px]">
        <p className="laptop:tracking-[1.43pxpx] leading-[44px] font-bold">BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR</p>
        </div>
        <div className="bottom__text laptop:text-[15px] leading-[25px] text-wrap">
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </div>
      <div className="laptop__image__wrapper w-[540px] laptop:bg-bestgear3 laptop:bg-cover laptop:bg-no-repeat laptop:bg-center rounded-lg">
      </div>
    </div>
  </>
  )
}

export default Ads