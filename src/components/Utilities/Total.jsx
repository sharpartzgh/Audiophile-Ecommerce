import cartData from "../Data/CartData";
import countItemsInCart from "./Count";

const Total = (cartArr) => {
  let total = 0;
  cartData(cartArr).forEach(({ price, slug }) => {
    total += countItemsInCart(cartArr, slug) * price;
  });
  return total;
};

export default Total;
