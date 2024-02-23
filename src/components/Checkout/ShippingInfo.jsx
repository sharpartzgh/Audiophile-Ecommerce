import React from 'react'

const ShippingInfo = () => {
  return (
    <div className="shipping__wrapper">
      <div className="title">shipping info</div>

      <div className="address__wrapper">
        <div className="addres">
          <label htmlFor="address">Your Address</label>
          <input
            required
            id="address"
            type="text"
            placeholder="1137 Williams Avenue"
          />
        </div>

        <div className="form-container">
          <label htmlFor="zipCode">ZIP Code</label>
          <input required id="zipCode" type="number" placeholder="10001" />
        </div>

        <div className="City">
          <label htmlFor="city">City</label>
          <input required id="city" type="text" placeholder="New York" />
        </div>

        <div className="country">
          <label htmlFor="country">Country</label>
          <input
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