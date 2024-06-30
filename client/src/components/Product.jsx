import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Product = ({ product }) => {
    const [varients,setVarients] = useState("small")
    const [quantity,setQuantity] = useState(10)
  return (
    <Card className="mt-3 mb-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Row>
          <Col md={6}>
            <Card.Text>
              <strong>Vardents:</strong>
            </Card.Text>
            <select className="form-select" value={varients} onChange={(e) => setVarients(e.target.value)}>
              {product.varients.map(vardent => (
                <option key={vardent} >
                  {vardent}
                </option>
              ))}
            </select>
          </Col>
          <Col md={6}>
            <Card.Text>
              <strong>Quantity:</strong>
            </Card.Text>
            <select className="form-select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {Array.from({ length: 91 }, (_, i) => i + 9).map(i => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </Col>
        </Row>
            <Card.Text>
                <Col  md={6}> price: {product.prices[0][varients] * quantity}
                </Col>
            </Card.Text>
      </Card.Body>
    </Card>
  );
};
