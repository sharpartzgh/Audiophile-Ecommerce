import React from 'react';
import { Link } from 'react-router-dom';


const HomeCard = () => {
  
  // this info code here is just acting as a data.json which am mapping through to mount it on the card component.
  // there are several ways you can handle it though but i find this simple to me.
  const info = [
    {
      "id": 1,
      "name": "HEADPHONES",
      "image": "../headphones.png"
    },
    {
      "id": 2,
      "name": "SPEAKERS",
      "image": "./speakers.png"
    },
    {
      "id": 3,
      "name": "EARPHONES",
      "image": "./earphones.png"
    }
  ];

  return (
    <>
    <div className=" mobile:flex mobile:flex-col tablet:flex w-full">
      {info.map(item => (
        <div key={item.id} className="card__wrapper relative mobile:text-center py-20 px-10 font-Manrope mobile:flex mobile:flex-col w-full">
          <div className={`${item.name.toLowerCase()} bg-[#F1F1F1] rounded-lg mobile:flex mobile:flex-col mobile:items-center justify-center  mobile:h-[217px] tablet:flex tablet:h-[204px]`}>
            <img src={item.image} alt={item.name} className="mobile:h-44 mobile:w-44 tablet:h-44 tablet:w-44 absolute mt-5 top-0 " />
            <div className="text mobile:pt-16 tablet:pt-24">
              <p className="font-bold tracking-[1.07px]">{item.name}</p>
              <div className="shoptext">
                <Link className="justify-center flex items-center gap-3">Shop<span className="text-[#d87d4a] text-[20px]"> &gt;</span></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default HomeCard;
