import React from 'react'
import { Link } from 'react-router-dom'
import HomeCard from '../../Card/HomeCard'
import Ads from '../../Section/Ads/Ads'

const SpeakersDetail = () => {
  return (
    <>
      <div className="wrapper font-Manrope mt-20">
        {/* image container */}
        <div className="Speaker__wrapper h-[724px] mobile:flex mobile:flex-col mobile:gap-10 laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20 ">
            
          <div className="image mobile:bg-speaker-mobile tablet:bg-speaker-tablet tablet:bg-blue-300 laptop:bg-speaker-laptop bg-no-repeat bg-center bg-cover h-[352px] laptop:w-full laptop:h-[560px] ">

          </div>

          {/* text container */}
          <div className="details text-center tablet:mt-10 mobile:flex mobile:flex-col tablet:flex tablet:flex-col gap-8 laptop:text-start laptop:mt-0 laptop:justify-center">
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">ZX9</p>
              <p>SPEAKER</p>
            </div>

            <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0 ">
              <p className=" laptop:pr-20">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
            </div>

            {/* button */}
            <div className="btn">
              <Link>
                <button className="bg-[#D87D4A] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-extrabold">SEE PRODUCT</button>
             </Link>
            </div>

          </div>

        </div>
      </div>

       {/* Second components */}
       
       <div className="wrapper font-Manrope mt-20">
        {/* image container */}
        <div className="Speaker__wrapper h-[724px] mobile:flex mobile:flex-col mobile:gap-10 laptop:flex laptop:flex-row-reverse laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20 ">
          {/* the only property added here is reversing the flex row for laptop and updating images thats all */}
          <div className="image mobile:bg-speaker-2-mobile mobile:bg-blue-300 tablet:bg-speaker-3-tablet laptop:bg-speaker-4-laptop bg-no-repeat bg-center bg-cover h-[352px] laptop:w-full laptop:h-[560px] ">

          </div>

          {/* text container */}
          <div className="details text-center tablet:mt-10 mobile:flex mobile:flex-col tablet:flex tablet:flex-col gap-8 laptop:text-start laptop:mt-0 laptop:justify-center">
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">ZX7 MARK I</p>
              <p>SPEAKERS</p>
            </div>

            <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0 ">
              <p className=" laptop:pr-20">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
            </div>

            {/* button */}
            <div className="btn">
              <Link>
                <button className="bg-[#D87D4A] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-extrabold">SEE PRODUCT</button>
             </Link>
            </div>

          </div>

        </div>
      </div>
      
      {/* called components */}
      <div className="called__component__wrapper">
        <div className="content__wrapper__1 mt-10">
          <HomeCard/>
        </div>
        <div className="content__wrapper__2">
          <Ads/>
        </div> 
      </div>
    </>
  )
}

export default SpeakersDetail