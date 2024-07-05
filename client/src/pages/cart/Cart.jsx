import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cartState = useSelector((state) => state.CartReducer);
  const cartItems = cartState.cartItems;

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <div key={item.id || Math.random()}> {/* Use unique identifier or fallback */}
                  <Col md={7}>
                    <h6>{item.name} [{item.varient}]</h6>
                    <h6>
                      Price: {item.quantity} X {item.prices[0][item.varients]} ={" "}
                      {item.price}
                    </h6>
                  </Col>
                  <Col md={5}>
                    {/* Your content for the right column */}
                  </Col>
                </div>
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <h1>Payment Info</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
