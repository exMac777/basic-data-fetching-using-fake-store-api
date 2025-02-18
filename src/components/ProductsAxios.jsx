import customAxios from "../axios";
import { useState, useEffect } from 'react'

function ProductsAxios() {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      customAxios('/products?sort=desc').then((res) => {
        console.log(res);
        setProducts(res.data);
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

export default ProductsAxios;