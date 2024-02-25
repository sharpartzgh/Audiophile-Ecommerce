import React from 'react'
import GoBackbtn from '../Button/GoBackbtn'
import BillingSection from './BillingSection'
import ShippingInfo from './ShippingInfo'
import Payment from './Payment'

const CheckoutCard = () => {

  // this card will contain the entire checkout design
  return (
    <div className=" ml-auto mr-auto font-Manrope">
      <GoBackbtn />
      <div className="text mobile:text-[28px] font-bold mx-10 mt-10">CHECKOUT</div>
      <div className="content__wrapper m-10">
        <BillingSection />
        <ShippingInfo/>
        <Payment/>
        {/* summary is next */}
      </div>
    </div>
  )
}

export default CheckoutCard