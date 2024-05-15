import { useState } from "react";
import bolt from "../assets/bolt.jpg";
import { ProductDetails } from "./ProductDetails";

export const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { title: 'Product 1', image: bolt, description: 'Description of product 1', price: 19.99 },
    { title: 'Product 2', image: bolt, description: 'Description of product 2', price: 24.99 },
    { title: 'Product 2', image: bolt, description: 'Description of product 2', price: 24.99 },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="products py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100" onClick={() => handleProductClick(product)}>
                <img src={product.image} className="card-img-top img-fluid" alt={product.title} style={{ minHeight: '200px' }} />
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text price">${product.price}</p>
                  <button className="btn btn-primary">Get in Touch</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={handleCloseDetails} />}
    </section>
  );
};
