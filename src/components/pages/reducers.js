import { ADD_TO_CART } from "./actions";

export const initialState = {
  totalPrice: 0,
  totalProducts: 0,
  products: [],
};

const calcTotalPrice = (products) => {
  return products.reduce((total, item) => total + item.price * item.qty, 0);
};

const calcTotalProducts = (products) => {
  return products.reduce((total, item) => total + item.qty, 0);
};
export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = store.products.find(
        (product) => product.id === action.payload.id
      );

      if (!product) {
        const itemList = [...store.products, { ...action.payload, qty: 1 }];
        return {
          ...store,
          products: itemList,
          totalPrice: calcTotalPrice(itemList),
          totalProducts: calcTotalProducts(itemList),
        };
      }

      const updatedProducts = store.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product;
      });

      return {
        ...store,
        products: updatedProducts,
        totalPrice: calcTotalPrice(updatedProducts),
        totalProducts: calcTotalProducts(updatedProducts),
      };
    case "REMOVE_FROM_CART":
      const filteredProduct = store.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...store,
        products: filteredProduct,
        totalPrice: calcTotalPrice(filteredProduct),
        totalProducts: calcTotalProducts(filteredProduct),
      };
    default:
      return store;
  }
};
