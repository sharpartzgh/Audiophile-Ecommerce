import React, { useState } from 'react'
import { MdMenu, MdClose, MdHome, MdHeadphones, MdSpeaker, } from "react-icons/md";
import { BsEarbuds } from "react-icons/bs";
import logo from '../Header/audiophile.png'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {

    //using this function to trigger the hamburger menu to open
    const [ openMenu, setOpenMenu ] = useState(false)

    const handleOpenMenu = () => {
      setOpenMenu(!openMenu)
    }

  return (
  <>
    <div className="container__wrapper">
          {/* header section */}
          <header className="header__wrapper bg-[#0E0E0E] px-10 pt-5 pb-5 border-b-[1px] border-gray-700 flex items-center justify-between font-Manrope">
            <div className="logo_menu_wrapper flex items-center justify-between tablet:gap-6 ">
              <div className="menu laptop:hidden" onClick={handleOpenMenu}>
              {
                openMenu ?
                (<MdClose className=" h-10 w-10 text-white" />)
                :
                (<MdMenu className=" h-10 w-10 text-white" />)
              }

              {/* for mobile display when you click on the hamburger menu */}
                { openMenu &&
                  ( <nav className="list-items absolute text-white top-[81px] left-0 min-h-screen bg-[#0E0E0E] w-full font-light">
                   <ul className=" w-full flex flex-col items-center text-2xl gap-8 py-10 tablet:items-start tablet:pl-10">
                    <Link to='/Home'className=" flex items-center gap-5"><span className="mobile:hidden"><MdHome className="w-8 h-8"/></span>HOME</Link>
                    <Link to='/Headphones' className=" flex items-center gap-5"><span className="mobile:hidden"><MdHeadphones className="w-8 h-8"/></span>HEADPHONES</Link>
                    <Link to='/Speakers' className=" flex items-center gap-5"><span className="mobile:hidden"><MdSpeaker className="w-8 h-8"/></span>SPEAKERS</Link>
                    <Link to='/Earphones' className=" flex items-center gap-5"><span className="mobile:hidden"><BsEarbuds className="w-8 h-8"/></span>EARPHONES</Link>
                   </ul>
                 </nav>
                 )}
                
              </div>
              <div className="logo mobile:hidden">
                <img src={logo} alt="audiophile-logo" />
              </div>
            </div>
            {/* just for mobile display */}
            <div className="tablet tablet:hidden">
              <div className="logo">
                <img src={logo} alt="audiophile-logo" />
              </div>
            </div>
            {/* Nav items */}
            <nav className="list-items text-white mobile:hidden tablet:hidden laptop:contents">
              <ul className=" flex gap-4 cursor-pointer">
               <Link to='/Home' className="hover:text-[#D87D4A]">HOME</Link>
               <Link to='/Headphones' className="hover:text-[#D87D4A]" >HEADPHONES</Link>
               <Link to='/Speakers' className="hover:text-[#D87D4A]">SPEAKERS</Link>
               <Link to='/Earphones' className="hover:text-[#D87D4A]">EARPHONES</Link>
              </ul>
            </nav>
            {/* Cart Icon */}
            <div>
            <IoCartOutline className="cart h-10 w-10 text-white" />
            </div>
          </header>
      </div>
  </>
  )
}

export default Header
