import { useContext } from "react";
import { Cart } from "../../context/CartContext";

const CartPage = () => {
  const {store, handleRemoveFromCart} = useContext(Cart);
  return (
    <div>
      <div>
        <h1>Total price: {store.totalPrice}$</h1>
        <h1>Total products: {store.totalProducts}</h1>
      </div>
      {store?.products?.length > 0 &&
        store.products.map((product) => {
          return (
            <div className="product" key={product.id}>
                {product.qty}
              <h2>{product.title}</h2>
              <h3>{product.price}$</h3>
              <button onClick={() => handleRemoveFromCart(product.id)}>Remove from cart</button>
            </div>
          );
        })}
    </div>
  );
};
export default CartPage;
