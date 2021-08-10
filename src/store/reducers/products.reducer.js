import PRODUCTS from "../../data/4.1 dummy-data";

const initState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

export default (state = initState, action) => {
  return state;
};
