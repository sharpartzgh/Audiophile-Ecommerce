import React from 'react'
import { Link } from 'react-router-dom'



const SpeakerHero = () => {

  const info = [
    {
      "id": 1,
      "slug": "ZX9",
      "name": "SPEAKER",
      "image": "../image-speaker-zx9.png",
      "ads": "Upgrade to premium speakers that are phenomenally built to deliver truely remarkable sound"
    },
  ];

  return (
    <>
      <div className="ad__wrapper  font-Manrope bg-[#D87D4A] mobile:h-[]  tablet:flex tablet:justify-center mb-10 ">
        
        { info.map((item)=>(
          <div key={item.id} className="inner__wrapper mobile:items-center mobile:py-10 flex flex-col tablet:py-8 laptop:flex-row tablet:items-center laptop:items-center laptop:justify-center laptop:gap-20 laptop:px-10 ">
           {/* Speaker image */}
            <div className="speaker__content h-full">
              <img src={item.image} alt={item.name} className="  mobile:w-[172.25px] mobile:mb-5  tablet:w-[197.27px] tablet:mb-5 laptop:w-[410.23px]"/>
            </div>

            {/* text content */}
              <div className="text__content text-white text-center laptop:text-start">
                <div className="text">
                  <div className="top__header mobile:text-[36px] mobile:font-bold mobile:tracking-[1.29px] mobile:leading-9 mobile:mb-5 tablet:text-[56px] tablet:leading-[1em] tablet:font-bold tablet:mb-5 laptop:tracking-[2px]">
                    <div className="p">{item.slug}</div>
                    <div className="p">{item.name}</div>
                  </div>
                <div className=" text-[15px] mobile:mb-8 mobile:px-3 tablet:text-wrap tablet:mb-8 tablet:px-44 laptop:px-0">Upgrade to premium speakers that are <br /> phenomenally built to deliver truely remarkable <br className="mobile:hidden" /> sound</div>
                </div>
                {/* product button */}
                <div className="btn">
                <Link>
                  <button className="bg-[#000000] text-white px-4 py-3 font-extrabold laptop:hover:bg-[#4c4c4c]">SEE PRODUCT</button>
                </Link>
                </div>
            </div>
        </div> 
      ))}   
      </div>
    </>
  )
}

export default SpeakerHero
