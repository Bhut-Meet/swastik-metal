import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Product = ({ product }) => {
  const [varients, setVarients] = useState("small");
  const [quantity, setQuantity] = useState(10);

  return (
    <Card className="mt-3 mb-5" style={{ width: '100%', maxWidth: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Card.Text>
              <strong>Varients:</strong>
            </Card.Text>
            <select
              className="form-select"
              value={varients}
              onChange={(e) => setVarients(e.target.value)}
            >
              {product.varients.map(varient => (
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
            <select
              className="form-select"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {Array.from({ length: 91 }, (_, i) => i + 10).map(i => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card.Text>
              <strong>Price:</strong> {product.prices[0][varients] * quantity}
            </Card.Text>
          </Col>
        </Row>
        <NavLink to="#" className="btn btn-primary mt-3">
          Add to cart
        </NavLink>
      </Card.Body>
    </Card>
  );
};
