/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Product({ product }) {
  const [varients, setVarients] = useState(product.varients[0] || '');
  const [quantity, setQuantity] = useState(10);

  return (
    <div className="container">
      <Row xs={1} md={2} className="g-4">  {/* Responsive grid for mobile */}
        <ProductCard product={product} varients={varients} quantity={quantity} setVarients={setVarients} setQuantity={setQuantity} />
        {product.id % 2 !== 0 && <ProductCard product={product} varients={varients} quantity={quantity} setVarients={setVarients} setQuantity={setQuantity} />}  {/* Add second product only on odd-numbered product IDs */}
      </Row>
    </div>
  );
}

function ProductCard({ product, varients, quantity, setVarients, setQuantity }) {
  return (
    <Card className="mt-3 mb-5">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Card.Text>
              <strong>{product.name}</strong>
            </Card.Text>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Card.Text>
              <strong>Varients:</strong>
            </Card.Text>
            <select className="form-select" value={varients} onChange={(e) => setVarients(e.target.value)}>
              {product.varients.map((varient) => (
                <option key={varient} value={varient}>
                  {varient}
                </option>
              ))}
            </select>
          </Col>
          <Col xs={12} md={6}>
            <Card.Text>
              <strong>Quantity:</strong>
            </Card.Text>
            <select className="form-select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {Array.from({ length: 91 }, (_, i) => i + 10).map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12}>
            <Card.Text>
              <strong>Price:</strong>{' '}
              {product.prices[0][varients] ? product.prices[0][varients] * quantity : "No price available"}
            </Card.Text>
          </Col>
        </Row>
        <NavLink to="#" className="btn btn-primary mt-3 w-100">
          Add to cart
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default Product;
