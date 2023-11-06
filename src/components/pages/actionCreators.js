import { ADD_TO_CART } from "./actions";



export const decrement = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});
export const increment = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});