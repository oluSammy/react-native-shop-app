export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cartItems, totalAmount) => {
  console.log("I GOT HERE");
  return {
    type: ADD_ORDER,
    order: {
      cartItems,
      totalAmount,
    },
  };
};
