import bolt from "../assets/bolt.jpg";

export const Home = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={bolt} className="card-img-top img-fluid" alt="Product 1" style={{ minHeight: '200px' }} />
              <div className="card-body">
                <h3 className="card-title">Product 1</h3>
                <p className="card-text">Description of product 1</p>
                <p className="card-text price">$19.99</p>
                <button className="btn btn-primary">Get in Touch</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={bolt} className="card-img-top img-fluid" alt="Product 2" style={{ minHeight: '200px' }} />
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
