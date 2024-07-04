// import { useState } from 'react';
// import { Card, Row, Col } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

// function Product({ product }) {
//   const [varients, setVarients] = useState(product.varients[0] || '');
//   const [quantity, setQuantity] = useState(10);

//   return (
//     <div className="product-container d-flex flex-wrap justify-content-center">
//       <Card className="mb-3">
//         <Card.Img variant="top" src={product.image} alt={product.name} />
//         <Card.Body>
//         <Row className='mb-3'>
//           <Col xs={12} md={6}>
//             <Card.Text>
//               <strong>{product.name}</strong>
//             </Card.Text>
//           </Col>
//         </Row>
//         <Row className='mb-3'>
//           <Col xs={12} md={6}>
//             <Card.Text>
//               <strong>Varients:</strong>
//             </Card.Text>
//             <select
//               className='form-select'
//               value={varients}
//               onChange={(e) => setVarients(e.target.value)}
//             >
//               {product.varients.map((varient) => (
//                 <option key={varient} value={varient}>
//                   {varient}
//                 </option>
//               ))}
//             </select>
//           </Col>
//           <Col xs={12} md={6}>
//             <Card.Text>
//               <strong>Quantity:</strong>
//             </Card.Text>
//             <select
//               className='form-select'
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//             >
//               {Array.from({ length: 91 }, (_, i) => i + 10).map((i) => (
//                 <option key={i} value={i}>
//                   {i}
//                 </option>
//               ))}
//             </select>
//           </Col>
//         </Row>
//         <Row className='text-center'>
//           <Col xs={12}>
//             <Card.Text>
//               <strong>Price:</strong>{' '}
//               {product.prices[0][varients]
//                 ? product.prices[0][varients] * quantity
//                 : 'No price available'}
//             </Card.Text>
//           </Col>
//         </Row>
//         <NavLink to='#' className='btn btn-primary mt-3 w-100'>
//           Add to cart
//         </NavLink>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default Product;










/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";

function Product({ product }) {
  // Remove unnecessary state variables: quantity and varients
  // These can be handled externally if needed
    const [varients, setVarients] = useState(product.varients[0] || '');
  const [quantity, setQuantity] = useState(10);

  return (
    <div className="product-container d-flex flex-wrap justify-content-center">
      {/* Card with product details */}
      <Card className="mb-3 border shadow" style={{borderRadius:"20px"}}> {/* Add card styles */}
        <div className=''>
          <div className='m-2 rounded-4' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",}}>
          <Card.Img className='rounded-4' variant="top" src={product.image} alt={product.name} />
          </div>
        </div>
        <Card.Body className="p-3"> {/* Add padding for content */}
          <Row>
            <Col xs={12} md={6}>
              <Card.Title>{product.name}</Card.Title>
              {/* {product.description && <Card.Text>{product.description}</Card.Text>} Display description if available */}
            </Col>
            <Col xs={12} md={12} className="d-flex justify-content-between align-items-center"> {/* Align price and button */}
              <div>
                {/* Display price if available */}
                {product.prices && (
                  <span className="mr-2">
                    <strong>Price:</strong> {product.prices[0][varients]
                ? product.prices[0][varients] * quantity
                : 'No price available'}
                  </span>
                )}
              </div>
              <div>
                <NavLink to="#" className="btn btn-primary p-1 rounded-3.9" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}> {/* Style button */}
                  <CiShoppingCart style={{ fontSize: "1.5rem", color: "#fff",}} /> {/* Adjust icon style */}
                </NavLink>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;

