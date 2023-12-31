

const Product = ({products ,search, addtoCart}) => {
  return (
    <div>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.filter((product)=>{
          return search.toLowerCase()===''?product: product.title.toLowerCase().includes(search)

        }).map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Name: {product.title}</h2>
            <p className="text-gray-600">Description: {product.description}</p>
            <div className="mt-4">
              <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover" />
            </div>
            <div className="mt-4">Rating :{product.rating}</div>
            <div className="mt-4">Price:{product.price}</div>

            <div className="container">
              <button className="w-full text-center text-white bg-slate-700  h-12 rounded-md cursor-pointer mt-6 hover:bg-slate-400" onClick={()=>addtoCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product