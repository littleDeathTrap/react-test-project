import { useContext, useEffect } from "react";
import { useState } from "react";
import { Cart } from "../../context/CartContext";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { handleAddToCart } = useContext(Cart);


  useEffect(() => {


    const getProducts = async () => {
      const res = await fetch(
        "https://6403253e302b5d671c47e12f.mockapi.io/products"
      );
      const data = await res.json();
      setProducts(data);
    };

    getProducts();


  }, []);
  return (
    <div>
      <div>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <h2>{product.title}</h2>
                <h3>{product.price}$</h3>
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default HomePage;
