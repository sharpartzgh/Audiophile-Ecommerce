import React, { useState } from 'react';
import jsonData from '../Data/data.json';

function Cart() {
  const [quantity, setQuantity] = useState(1); // Initial state with an empty array

  // Fetch initial price from data.json
  const initialPrice = jsonData.price;
  console.log("Initial Price:", initialPrice);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeAllItems = () => {
    setQuantity(0); // Reset quantity to 0
  };

  return (
    <>
      {jsonData.map((item, id) => {
        // Calculate current price for each item
        const currentPrice = item.price * quantity;

        return (
          <div key={id} className="flex flex-col p-8 text-black bg-white rounded-lg max-w-[377px] absolute right-0 top-[140px] mr-10">
            <div className="flex gap-5 justify-between">
              <div className="text-lg font-bold tracking-widest uppercase">
                cart ({quantity})
              </div>
              <div className="my-auto text-base leading-6 underline cursor-pointer" onClick={removeAllItems}>Remove all</div>
            </div>
          
            <div className="flex gap-5 justify-between mt-9">
              <div className="my-auto text-base leading-6">TOTAL</div>
              <div className="text-lg font-bold text-center uppercase">${currentPrice}</div>
            </div>
            <div className="flex flex-col justify-center mt-7 text-sm font-bold tracking-wider text-center text-white uppercase whitespace-nowrap">
              <div className="justify-center items-center px-16 py-5 bg-orange-400">
                checkout
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
