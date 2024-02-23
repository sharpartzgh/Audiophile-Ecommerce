import React from 'react'

const CartCard = () => {
  return (
    <>
      <div className="flex gap-5 justify-between mt-9 w-full font-bold whitespace-nowrap">
              <div className="flex gap-4 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b867a9e1503486b41e5fea82ccf804d5611b064bcf827e28fad3b2e38ac85d6?apiKey=cfa142d2f8ea48cc91e92f2ec5c1face&width=100"
                  className="w-16 aspect-square"
                  alt="Product"
                />
                <div className="flex flex-col flex-1 justify-center my-auto">
                  <div className="text-base leading-6">{item.name}</div>
                  <div className="mt-1 text-sm leading-3">${item.price}</div>
                </div>
              </div>
              <div className="flex flex-col justify-center my-auto text-sm tracking-wider text-center uppercase">
                <div className="flex gap-5 justify-between px-5 py-3 bg-zinc-100 items-center">
                  <div className="self-start cursor-pointer" onClick={decrementQuantity}>-</div>
                  <div>{quantity}</div>
                  <div onClick={incrementQuantity} className="cursor-pointer">+</div>
                </div>
              </div>
            </div>
    </>
  )
}

export default CartCard