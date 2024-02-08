import React from 'react'
import { Link } from 'react-router-dom'
import HomeCard from '../../Card/HomeCard'
import Ads from '../../Section/Ads/Ads'

const HeadphoneDetail = () => {
  return (
    <>
    {/* first components */}

      <div className="wrapper font-Manrope mt-20">
        {/* image container */}
        <div className="headphone__wrapper h-[724px] mobile:flex mobile:flex-col mobile:gap-10 laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20 ">
            
          <div className="image mobile:bg-head-mobile tablet:bg-head-tablet laptop:bg-head-laptop bg-no-repeat bg-center bg-cover h-[352px] laptop:w-full laptop:h-[560px] ">

          </div>

          {/* text container */}
          <div className="details text-center tablet:mt-10 mobile:flex mobile:flex-col tablet:flex tablet:flex-col gap-8 laptop:text-start laptop:mt-0 laptop:justify-center">
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">XX99 MARK II</p>
              <p>HEADPHONES</p>
            </div>

            <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0 ">
              <p className=" laptop:pr-20">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
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
        <div className="headphone__wrapper h-[724px] mobile:flex mobile:flex-col mobile:gap-10 laptop:flex laptop:flex-row-reverse laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20 ">
          {/* the only property added here is reversing the flex row for laptop and updating images thats all */}
          <div className="image mobile:bg-head-2-mobile mobile:bg-blue-300 tablet:bg-head-3-tablet laptop:bg-head-4-laptop bg-no-repeat bg-center bg-cover h-[352px] laptop:w-full laptop:h-[560px] ">

          </div>

          {/* text container */}
          <div className="details text-center tablet:mt-10 mobile:flex mobile:flex-col tablet:flex tablet:flex-col gap-8 laptop:text-start laptop:mt-0 laptop:justify-center">
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">XX99 MARK I</p>
              <p>HEADPHONES</p>
            </div>

            <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0 ">
              <p className=" laptop:pr-20">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
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

      {/* third section */}

      <div className="wrapper font-Manrope mt-20">
        {/* image container */}
        <div className="headphone__wrapper h-[724px] mobile:flex mobile:flex-col mobile:gap-10 laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20 ">
            
          <div className="image mobile:bg-head-5-mobile tablet:bg-head-6-tablet  laptop:bg-head-7-laptop  bg-no-repeat bg-center bg-cover h-[352px] laptop:w-full laptop:h-[560px] ">

          </div>

          {/* text container */}
          <div className="details text-center tablet:mt-10 mobile:flex mobile:flex-col tablet:flex tablet:flex-col gap-8 laptop:text-start laptop:mt-0 laptop:justify-center">
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">XX59 MARK</p>
              <p>HEADPHONES</p>
            </div>

            <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0 ">
              <p className=" laptop:pr-20">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
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

export default HeadphoneDetail