import React, { useContext } from 'react'
import { CartContext } from "../../Cart/CartProvider";
import cartData from "../Data/cartData";
import countItemsInCart from "../Utilities/Count";
import total from "../Utilities/Total";

const Summary = () => {
  const { cartArr } = useContext(CartContext);
  return (
    <>
      <h4 className="Summary__title tracking-[1.29px] text-[18px] font-Manrope font-bold">SUMMARY</h4>
      {cartArr.length > 0 && (
        <div className="summary__products flex justify-between text-[15px] font-Manrope">
          {cartData(cartArr).map(({ slug, name, price }) => (
            <div key={slug} className="summary__product_image">
              <img
                loading='lazy'
                src={`./assets/cart/image-${slug}.jpg`}
                alt={name}
                className="w-16 aspect-square"
              />
              <div>
                <h5  className=" mb-2">{name}</h5>
                <p className="summary__product_price text-[14px] font-bold">
                  $ {price.toLocaleString()}
                </p>
              </div>
              <p className="summary__count-items text-[14px] font-bold">
                x{countItemsInCart(cartArr, slug)}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="summary__payment__wrapper flex flex-col gap-4 text-[15px] font-Manrope font-normal mt-10">
        <div className=" flex justify-between">
          <p className="summary__label">TOTAL</p>
          <p className="summary__price text-[18px] font-bold">
            $ {total(cartArr).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="summary__label">SHIPPING</p>
          <p className="summary__price text-[18px] font-bold">$ 50</p>
        </div>
        <div className="flex justify-between">
          <p className="summary__label">VAT (INCLUDED)</p>
          <p className="summary__price text-[18px] font-bold">
            ${" "}
            {(total(cartArr) * (1079 / 5396)).toFixed(2).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between mb-10">
          <p className="summary__label">GRAND TOTAL</p>
          <p className="summary__price text-[18px] font-bold">
            $ {(total(cartArr) + 50).toLocaleString()}
          </p>
        </div>
      </div>
      {/* Will update this state to evalute to true when payment is successful so that it displays the success page perhaps using useNavigate */}
      <button className="link-btn w-full text-[13px] tracking-[1px] font-bold h-[48px] text-white bg-[#D87D4A]">
        CONTINUE & PAY
      </button>
    </>
  )
}

export default Summary