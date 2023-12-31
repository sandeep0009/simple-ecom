import axios from "axios";

import { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const Home = () => {
  const [products, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [cart, setCart] = useState([]);
  const [show, setshow] = useState(false);
  console.log(cart);

  const handleFetch = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const addtoCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleClick = () => {
    setshow(true);
  };
  return (
    <div className="container ">
      <div className="container flex justify-between bg-slate-800 text-white">
        <div className="heading">
          <h1 className="text-3xl font-bold mb-4">Product List</h1>
        </div>

        <div className="search-input mt-2 ">
          <input
            type="text"
            className="rounded-md w-full text-black"
            placeholder="search for the product"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <div className="cart mt-2 mr-4 cursor-pointer" onClick={handleClick}>
          <strong>
            Cart
            <sup>{cart.length}</sup>
          </strong>
        </div>
      </div>
      <div className="container">
      {show ? (
        <Cart cartItems={cart}  />
      ) : (
        <Product search={search} products={products} addtoCart={addtoCart} />
      )}

      </div>
   
    </div>
  );
};

export default Home;
