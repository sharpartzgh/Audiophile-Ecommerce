import data from './data.json'
/*
this function (cartData) takes an array of product slugs, 
retrieves the corresponding product information from the imported data, 
modifies the product names based on certain conditions,
and returns an array of filtered product objects
containing the modified product names, prices, and images.
*/
const cartData = (arr) =>
  data
    .map((item) => {
      let productName = item.name.split(" ").shift();
      if (item.slug === "xx99-mark-two-headphones") {
        productName = "XX99 MK II";
      }
      if (item.slug === "xx99-mark-one-headphones") {
        productName = "XX99 MK I";
      }
      return {
        slug: item.slug,
        name: productName,
        price: item.price,
        image: item.image.mobile,
      };
    })
    .filter(({ slug }) => arr.includes(slug));

export default cartData;