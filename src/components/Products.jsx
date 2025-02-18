import { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products?sort=desc').then((res) => {
      if(!res.ok) {
        throw new Error('Error fetching products');
      }
      return res.json();
    }).then((response) => {
      setProducts(response);
      console.log(response);
    }).catch((error) => {
      console.error("Error while fetching products", error);
    })

  }, [])

  return (
    <div className="products-container">
      {
        products.map((product) => {
          return (
            <div className="product-item">
              <div className="image-container">
                <img src={product.image} alt="Product image" />
              </div>
              <div className="product-description">
                <div className="price">$ {product.price}</div>
                <p className="category">{product.category}</p>
                <h3 className="product-title">{product.title}</h3>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products;