import React from 'react'

const ShippingInfo = () => {
  return (
    <div className="shipping__wrapper mt-5">
      <div className="title text-[13px] font-bold mb-2 text-[#D87D4A] tracking-[0.93px] leading-[25px]">SHIPPING INFO</div>

      <div className="address__wrapper">
        <div className="addresS flex flex-col gap-2">
          <label htmlFor="address" className="text-[12px] font-bold">Your Address</label>
          <div className="">
            <input className=" active:border-[#D87D4A] w-[280px] p-4 border-2 rounded-lg text-[14] tablet:w-full mb-5 border-none"
              required
              id="address"
              type="text"
              placeholder="1137 Williams Avenue"
            />
          </div>
        </div>

        <div className="zip_city__wrapper tablet:flex tablet:gap-2">
          <div className="form-container flex flex-col gap-2 tablet:w-full">
            <label htmlFor="zipCode" className="text-[12px] font-bold">ZIP Code</label>
            <input className=" w-[280px] tablet:w-full p-4 border-2 rounded-lg text-[14] mb-5" required id="zipCode" type="number" placeholder="10001" />
          </div>

          <div className="City flex flex-col gap-2 tablet:w-full">
            <label htmlFor="city" className="text-[12px] font-bold">City</label>
            <input className=" w-[280px] tablet:w-full p-4 border-2 rounded-lg text-[14] mb-5" required id="city" type="text" placeholder="New York" />
          </div>
        </div>

        <div className="country flex flex-col tablet:w-full gap-2">
          <label htmlFor="country" className="text-[12px] font-bold">Country</label>
          <input className=" w-[280px] tablet:w-[50%] p-4 border-2 rounded-lg text-[14] mb-5"
            required
            id="country"
            type="text"
            placeholder="United States"
          />
        </div>
      </div>
    </div>
  )
}

export default ShippingInfo