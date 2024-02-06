import React from 'react'
import logo from '../Header/audiophile.png'
import { Link } from 'react-router-dom';
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer__wrapper bg-black font-Manrope text-white px-10 py-10 mt-10 mobile:text-center mobile:flex mobile:flex-col items-center">
      {/* logo and menu  */}
      <div className="logo_menu__wrapper tablet: laptop:flex laptop:justify-between laptop:mb-5">
        <div className="logo mb-5 mobile:flex mobile:items-center">
          <img src={logo} alt="audiophile-logo" />
        </div>
        <nav className=" mobile:mb-5 tablet:mb-5">
          <ul className=" mobile:flex mobile:flex-col tablet:flex gap-4 cursor-pointer">
             <Link to='/Home' className="hover:text-[#D87D4A]">HOME</Link>
             <Link to='/Headphones' className="hover:text-[#D87D4A]">HEADPHONES</Link>
             <Link to='/Speakers' className="hover:text-[#D87D4A]">SPEAKERS</Link>
             <Link to='/Earphones' className="hover:text-[#D87D4A]">EARPHONES</Link>
          </ul>
        </nav>
      </div>

      {/* audiophile info and smn icons for laptop */}
      <div className=" mb-5 laptop:flex laptop:justify-between ">
        <div className="info">
            <p  className="laptop:w-[540px] tablet:leading-[25px]">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        </div>
        <div className=" laptop:flex mobile:hidden tablet:hidden laptop:h-full laptop:mt-16 laptop:gap-3">
          <div><AiFillFacebook className="hover:text-[#D87D4A] cursor-pointer w-[24px] h-[24px]"/></div>
          <div><FaTwitter className="w-[24px] h-[24px] cursor-pointer  hover:text-[#D87D4A]"/></div>
          <div><FaInstagram  className="w-[24px] h-[24px] cursor-pointer hover:text-[#D87D4A]"/></div>
        </div>
      </div>
      {/* copyright and smn for mobile and tablets */}
      <div className="copyright__wrapper mobile:flex mobile:flex-col mobile:items-center mobile:gap-5 tablet:flex tablet:justify-between">
        <div className="copyright">
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="smn mobile:flex mobile:gap-3 tablet:flex tablet:gap-3 laptop:hidden">
          <span><AiFillFacebook className=" w-[24px] h-[24px]"/></span>
          <span><FaTwitter className="w-[24px] h-[24px]"/></span>
          <span><FaInstagram  className="w-[24px] h-[24px]"/></span>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer