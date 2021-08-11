import Order from "../../model/order";
import { ADD_ORDER } from "../actions/order.actions";

const initState = {
  orders: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      console.log( "TOTSL",action.order.totalAmount);
      const order = new Order(
        new Date().toString(),
        action.order.cartItems,
        action.order.totalAmount,
        new Date()
      );

      // console.log("NEW ORDER", order);
      // console.log("PREV ORDER", state.orders);

      return { ...state, orders: [...state.orders, order] };
    default:
      return state;
  }
};
