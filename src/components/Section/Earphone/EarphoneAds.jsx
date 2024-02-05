import React from 'react'
import { Link } from 'react-router-dom';


const EarphoneAds = () => {
  return (
    <>
    <div className="container__wrapper mobile:h-[424px] w-full mobile:flex mobile:flex-col gap-5 mb-10 tablet:h-[320px] tablet:flex">
      <div className="image mobile:h-[200px] mobile:bg-t-mobile mobile:bg-no-repeat mobile:bg-cover mobile:bg-center tablet:bg-t-tablet tablet:bg-cover tablet:bg-no-repeat tablet:bg-center tablet:w-full laptop:bg-t-laptop laptop:bg-cover laptop:bg-no-repeat laptop:bg-center laptop:w-full rounded-lg">
        {/* This div contains the images within the styling for example mobile:bg-t-mobile => { which simply means on mobile the bg should be t-mobile whch is the name i have given to the image}, since am using tailwind have added the images in the tailwind.config file. if you are using normal css its posible to do same using background and url props. well you can equally create 3 divs for each image here as well the only thing is you use the display none for the media queries */}
      </div>
      <div className="text bg-[#F1F1F1] mobile:h-[200px] text flex flex-col justify-center mobile:px-5 gap-5 tablet:px-10  tablet:w-full laptop:pl-20 rounded-lg">
        <div className="text__name text-[28px]  font-bold">
          <p className=" tracking-[-1px]">YX1 EARPHONES</p>
        </div>
          <Link>
              <button className=" px-4 py-3 
              font-extrabold border-2
               border-black mobile:tracking-[1px] 
               tablet:tracking-[2px] laptop:hover:bg-[#000000] 
               laptop:hover:text-[#FFFF]">
                SEE PRODUCTS
              </button>
          </Link>
      </div>
    </div>
    </>
  )
}

export default EarphoneAds