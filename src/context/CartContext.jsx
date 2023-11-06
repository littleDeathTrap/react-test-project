import { createContext, useReducer } from "react";
import { initialState, reducer } from "../components/pages/reducers";
import { decrement, increment } from "../components/pages/actionCreators";

export const Cart = createContext(null);

export const CartContext = ({ children }) => {


    const [store, dispatch] = useReducer(reducer, initialState);

    const handleAddToCart = (product) => {
      dispatch(increment(product));
    };
  
    const handleRemoveFromCart = (id) => {
      dispatch(decrement(id)); 
    };
  
    const value = {
      store,
      handleAddToCart,
      handleRemoveFromCart,
    };
  return (
    <Cart.Provider value={value}>{children}</Cart.Provider>
  );
};

