import React, { useState } from 'react'

const BillingSection = () => {
  
  const [isMessage, setIsMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setIsMessage(event.target.value);
  };


  //  no styling yet please will style it as soon as possible 
    return (
      <div className="Billing__Wrapper font-Manrope">
        <div className="title text-[13px] font-bold mb-2 text-[#D87D4A] tracking-[0.93px] leading-[25px]">BILLING DETAILS</div>
        
        <fieldset className="form__wrapper">
          <div className="fortablet tablet:flex tablet:w-full gap-2">
            <div className="name__wrapper flex flex-col gap-2 tablet:w-full">
              <label htmlFor="name" className="text-[12px] font-bold">Name</label>
              <div className="content tablet:w-full">
                <input className=" w-[280px] tablet:w-full p-4 border-2 rounded-lg text-[14] mb-5"
                required 
                id="name" 
                type="text" 
                placeholder="Alexei Ward" />
              </div>
            </div>
  
            <div className="Emailaddress__wrapper flex flex-col gap-2 tablet:w-full ">
              <label htmlFor="email" className="text-[12px] font-bold" >
                Email Address
              </label>
              <input className="tablet:w-full w-[280px] p-4 border-2 rounded-lg text-[14] mb-5 "
                required
                onChange={handleChange}
                id="email"
                type="email"
                value={isMessage}
                placeholder="alexei@mail.com"
              />
            </div>
          </div>

          <div className="PhoneNumber__wrapper flex flex-col gap-2 tablet:w-full">
            <label htmlFor="PhoneNumber" className="text-[12px] font-bold">Phone Number</label>
            <input className=" w-[280px] p-4 border-2 rounded-lg text-[14] tablet:w-[50%]"
              required
              id="phoneNumber"
              type="number"
              placeholder="+1 202-555-0136"
            />
          </div>
        </fieldset>
      </div>
  )
}

export default BillingSection