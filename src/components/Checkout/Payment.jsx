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
    <h5 className="title">payment details</h5>

    <div className="radio__container">
      <label htmlFor="payment">Payment Method</label>
      <div className="e_money__section ">
        <input
          required
          id="e-money"
          type="radio"
          value="e-Money"
          name="payment"
          onChange={(e) => handleChange(e)}
        />
        <label className="radio-border" htmlFor="e-money" />
        <label htmlFor="e-money">e-Money</label>
      </div>

      <div className="cash">
        <input
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

    {isEMoney && (
      <div className="e-money">
        <div className="form-container">
          <label htmlFor="e-moneyNumber">e-Money Number</label>
          <input
            required
            id="e-moneyNumber"
            type="number"
            placeholder="238521993"
          />
        </div>

        <div className="form-container">
          <label htmlFor="e-moneyPin">e-Money PIN</label>
          <input required id="e-moneyPin" type="number" placeholder="6891" />
        </div>
      </div>
    )}

    {!isEMoney && (
      <div className="cash">
        <img src="./assets/checkout/icon-cash-on-delivery.svg" alt="" />
        <p>
          The Cash on Delivery option enables you to pay in cash when our
          delivery courier arrives at your residence.
        </p>
      </div>
    )}
  </div>
  )
}

export default Payment