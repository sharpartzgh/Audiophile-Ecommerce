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
      <div className="Billing__Wrapper">
        <div className="title">BILLING DETAILS</div>
        
        <fieldset className="form__wrapper">
          <div className="name__wrapper">
            <label htmlFor="name">Name</label>
            <input required id="name" type="text" placeholder="Alexei Ward" />
          </div>
  
          <div className="Emailaddress__wrapper">
            <label htmlFor="email">
              Email Address
            </label>
            <input
              required
              onChange={handleChange}
              id="email"
              type="email"
              value={isMessage}
              placeholder="alexei@mail.com"
            />
          </div>
  
          <div className="PhoneNumber__wrapper">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
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