const Cart = ({ cartItems }) => {
  console.log('cartItems:', cartItems);
  return (
    <div className="container rounded shadow w-96">
      { cartItems != undefined? (
        cartItems.map((product) => (
          <div key={product.id}>
            <h1>title: {product.title}</h1>
            <p>description :{product.description}</p>
            <img src={product.thumbnail} alt="" />
            <p>price:{product.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
