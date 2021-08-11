import CartItem from "../../model/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart.actions";

const initState = {
  items: {},
  totalAmount: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        // item already in cart
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: updatedCartItem },
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );

        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: newCartItem },
          totalAmount: state.totalAmount + productPrice,
        };
      }
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.id];
      const currentQty = selectedCartItem.quantity

      if (currentQty > 1) {
        // reduce it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        return {
          ...state,
          items: { ...state.items, [action.id]: updatedCartItem },
          totalAmount: state.totalAmount - selectedCartItem.productPrice,
        };
      } else {
        // erase it
        const updatedCartItem = { ...state.items };
        delete updatedCartItem[action.id];

        // console.log(action.id);

        return {
          ...state,
          items: updatedCartItem,
          totalAmount: state.totalAmount - selectedCartItem.productPrice,
        };
      }
    default:
      return state;
  }
};
