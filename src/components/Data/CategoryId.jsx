import data from "./data.json";

/*
this code imports JSON data, extracts the categories from the data, 
ensures that only unique categories are retained, reorders 
the categories by moving the first category to the end, 
and then exports the modified array of categories. 
*/

const categories = data.map(({ category }) => category);
const categoriesArr = [...new Set(categories)];
categoriesArr.push(categoriesArr.splice(0, 1)[0]);

export default categoriesArr;