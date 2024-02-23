import data from '../Data/data.json'

const categoryProducts = (categoryId) => {
  data.find((item) => item.category === categoryId);
};

export { categoryProducts };
