import React from 'react';

export const Home = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="product1.jpg" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h3 className="card-title">Product 1</h3>
                <p className="card-text">Description of product 1</p>
                <p className="card-text price">$19.99</p>
                <button className="btn btn-primary">Get in Touch</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="product2.jpg" className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h3 className="card-title">Product 2</h3>
                <p className="card-text">Description of product 2</p>
                <p className="card-text price">$24.99</p>
                <button className="btn btn-primary">Get in Touch</button>
              </div>
            </div>
          </div>
          {/* Add more product cards here */}
        </div>
      </div>
    </section>
  );
};
