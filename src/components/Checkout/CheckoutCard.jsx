import React from 'react'
import GoBackbtn from '../Button/GoBackbtn'
import BillingSection from './BillingSection'
import ShippingInfo from './ShippingInfo'
import Payment from './Payment'
import Summary from './Summary'

const CheckoutCard = () => {

  return (
    <div className=" laptop:flex bg-white font-Manrope">
      <div className=" ml-auto mr-auto laptop:w-full">
        <GoBackbtn />
        <div className="text mobile:text-[28px] font-bold mx-10 mt-10">CHECKOUT</div>
        <div className="content__wrapper m-10">
          <BillingSection />
          <ShippingInfo/>
          <Payment/>
          {/* this summary component is for mobile - tablet */}
          <div className=" laptop:hidden"> 
            <Summary/>
          </div>
        </div>
      </div>
      {/* whiles this below is for laptop and above */}
      <div className="summary__for__laptop mobile:hidden tablet:hidden laptop:contents">
        <div className="mx-10  laptop:w-[350px] laptop:h-[612px] py-4 px-4 bg-white mt-10"> 
           <Summary/>
        </div>
      </div>
  </div>
  )
}

export default CheckoutCard