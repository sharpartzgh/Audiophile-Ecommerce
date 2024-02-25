import React, { useState } from 'react'


const Payment = () => {
  const [isEMoney, setIsEMoney] = useState(true);

  /*
  this handleChange function is designed to respond to changes in an input element's value. 
  If the element's ID is "cash", it sets the isEMoney state to false, indicating
  that cash is being used. Otherwise, it sets isEMoney to true, indicating that e-money is being used.
  */ 
  const handleChange = (e) => {
    const { id } = e.target;
    if (id === "cash") return setIsEMoney(false);
    return setIsEMoney(true);
  };
  
  return (
    <div className="payment__wrapper">
    <h5 className="title text-[13px] font-bold text-[#D87D4A] tracking-[0.93px] leading-[25px] mb-5">PAYMENT DETAILS</h5>

    <div className="radio__container tablet:flex tablet:justify-between">
      <label htmlFor="payment" className="text-[12px] font-bold">PayMent Method</label>
      
      <div className="wrapper">

     
        <div className="e_money__section mb-5 w-[280px] mt-2 p-4 border-2 rounded-lg text-[14] flex items-center">
          <input className=" mr-3 text-[14px] text-[#D87D4A]"
            required
            id="e-money"
            type="radio"
            value="e-Money"
            name="payment"
            onChange={(e) => handleChange(e)}
          />
          <label className="radio-border" htmlFor="e-money" />
          <label htmlFor="e-money"  className="">e-Money</label>
        </div>

        <div className="cash w-[280px] p-4 border-2 rounded-lg text-[14] ">
          <input  className=" mr-3 text-[14px]"
            required
            id="cash"
            type="radio"
            value="e-Money"
            name="payment"
            onChange={(e) => handleChange(e)}
          />
          <label className="radio-border" htmlFor="cash" />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>

      </div>

    </div>

    {isEMoney && (
      <div className="e-money tablet:flex tablet:w-full tablet:gap-3 tablet:mt-5">
        <div className="form-container flex flex-col mt-5 tablet:mt-0 tablet:w-full">
          <label htmlFor="e-moneyNumber" className="mb-3 text-[12px] font-bold">e-Money Number</label>
          <input className=" w-[280px] tablet:w-full p-4 border-2 rounded-lg text-[14] mb-5 tablet:mt-0"
            required
            id="e-moneyNumber"
            type="number"
            placeholder="238521993"
          />
        </div>

        <div className="form-container flex flex-col tablet:w-full">
          <label htmlFor="e-moneyPin"  className="text-[12px] font-bold mb-3">e-Money PIN</label>
          <input  className=" w-[280px] tablet:w-full p-4 border-2 rounded-lg text-[14] mb-5" required id="e-moneyPin" type="number" placeholder="6891" />
        </div>
      </div>
    )}

    {!isEMoney && (
      <div className="cash ">
        <img src="./assets/checkout/icon-cash-on-delivery.svg" alt="" />
        <p className=" flex-1 p-5">
        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
        </p>
      </div>
    )}
  </div>
  )
}

export default Payment