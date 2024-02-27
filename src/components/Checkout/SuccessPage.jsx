import React from 'react'
import  { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../Cart/CartProvider';
import cartData from '../Data/CartData';
import countItemsInCart from '../Utilities/Count';
import Total from '../Utilities/Total';
// import CheckoutCard from './CheckoutCard';
//import UserDetails from '../../UserDetails/UserDetails';


const SuccessPage = () => {
  const { cartArr, removeCartItems } = useContext(CartContext);
  // Check if cart array is empty
  if (cartArr.length === 0) {
    // Render a message or redirect to a different page
   return <p className=" text-center mt-5 font-Manrope font-bold"> Please Your cart is <span className=" text-red-500">empty</span>!</p>;
 }

  // Accessing the first item in the cart array safely
  const firstCartItem = cartData(cartArr)[0];


  return (
    <>
    {/* i turned these tags off just to  so i can work on the success card design */}
    
      {/* <UserDetails
       isOpen={true}
       close={false}
       ClassName="success__modal"
       overlayClassName="success__overlay"

      > */}
        <div className="success   mx-10 font-Manrope flex flex-col justify-center items-center h-screen">
          <div className="wrappper py-4 px-4  mobile:w-[327px] mobile:h-[600px]">
            <img
              src="./checkout-icon.png"
              alt="success-icon"
              className=" w-[64px] h-[64px]"
            />

            <h4 className="success__title mt-2 laptop:text-[32px] font-bold ">
              THANK YOU <br />
              FOR YOUR ORDER
            </h4>

            <p className=" text-[15px] flex flex-end mt-4">You will receive an email confirmation shortly.</p>

            <div className="success__containers flex justify-center items-center mt-4 mobile:flex-col ">
              
              <div className="jildy mobile:w-full w-[246px] h-[140px] bg-[#979797] mobile:rounded-t-lg tablet:rounded-s-lg flex flex-col items-center">
              
                <div className="success__container flex h-[92px] w-[192px]  justify-between items-center">
                  <img
                    // src={`./assets/cart/image-${cartData(cartArr)[0].slug}.jpg`}
                    src="./assets/cart/image"
                    alt=""
                    className=" w-[44px] aspect-square bg-black"
                  />
                  <div className="success_item__overview_wrapper">
                    {/* <p className=" font-bold text-[15px]">{cartData(cartArr)[0].name}</p> */}
                    <p className=" font-bold text-[15px]">Headphones</p>
                    <p className="text-[14px]">$500</p>
                    {/* <p>$ {cartData(cartArr)[0].price.toLocaleString()}</p> */}
                  </div>
                  <p className="success__count">
                    {/* x{countItemsInCart(cartArr, cartArr[0])} */}
                    x
                  </p>
                  {/* {cartData(cartArr).length > 1 && ( */}  
                </div>
                  <>
                    <hr className="w-[198px]" />
                    <p className="success__count-others">
                      {/* and {cartData(cartArr).length - 1} other item(s) */}
                      and other item(s)
                    </p>
                  </>
                {/* )} */}
              
              </div>

              <div className="success__container-bottom bg-black w-[198px] mobile:w-full h-[140px] px-10 py-4 flex flex-col  justify-center text-[#FFFFFF] mobile:rounded-b-lg leading-8 tablet:rounded-e-lg">
                <p className="">Grand Total</p>
                <p>$5000 </p>
                {/* <p>$ {Total(cartArr).toLocaleString()}</p> */}
              </div>
            </div>

            <Link type="button"
              to={"/"}
              className=" text-[13px] tracking-[1px] text-center flex items-center justify-center uppercase  font-bold h-[48px] text-white bg-[#D87D4A] mt-10"
              onClick={() => removeCartItems()}
            >
              back to home
            </Link>
          </div>
        </div>

      {/* </UserDetails> */}
    </>
  )
}

export default SuccessPage

