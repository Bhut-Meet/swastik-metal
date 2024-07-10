
import { Container, Row, Col, Card, Button, Form, ListGroup} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FaCircleMinus } from 'react-icons/fa6';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { AddToCart, deleteFromCart } from '../../action/CartAction';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const cartState = useSelector((state) => state.CartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();

  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  const handleVariantChange = (item, newVariant) => {
    dispatch(AddToCart(item, item.quantity, newVariant));
  };

  return (
    <>
    
    <Container className='py-4'>
      <h1 className='mb-4 text-center'>My Cart</h1>

      {cartItems.length === 0 ? (
        <div className='text-center'>
          <p className='lead'>Your cart is empty.</p>
          <Link to='/'>
            <Button variant='primary' size='lg'>
              Go to Home
            </Button>
          </Link>
        </div>
      ) : (
        <Row>
          <Col lg={8}>
            <ListGroup variant='flush' className='mb-4 rounded-5'>
              {cartItems.map((item, id) => (
                <ListGroup.Item
                  key={id}
                  className='py-3 my-2 px-0 border-bottom'
                >
                  <Row className='align-items-center'>
                    <Col xs={3} md={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='img-fluid rounded'
                      />
                    </Col>
                    <Col xs={9} md={10}>
                      <h5>{item.name}</h5>
                      <Form.Group className='mb-2'>
                        <Form.Label className='me-2'>Size:</Form.Label>
                        <Form.Select
                          size='sm'
                          style={{ width: 'auto', display: 'inline-block' }}
                          value={item.varient}
                          onChange={(e) =>
                            handleVariantChange(item, e.target.value)
                          }
                        >
                          {Object.keys(item.prices[0]).map((variant) => (
                            <option key={variant} value={variant}>
                              {variant}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <p className='mb-2'>
                        Price: {item.quantity} x ₹{item.prices[0][item.varient]}{' '}
                        = ₹{item.price}
                      </p>
                      <div className='d-flex align-items-center mt-2'>
                        <span className='me-2'>Qty:</span>
                        <Button
                          variant='outline-secondary'
                          size='sm'
                          onClick={() =>
                            dispatch(
                              AddToCart(
                                item,
                                Math.max(1, item.quantity - 1),
                                item.varient
                              )
                            )
                          }
                        >
                          <FaCircleMinus />
                        </Button>
                        <Form.Control
                          type='number'
                          min='1'
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              AddToCart(
                                item,
                                parseInt(e.target.value) || 1,
                                item.varient
                              )
                            )
                          }
                          // Set a custom width for responsiveness
                          style={{ width: '80px', textAlign: 'center' }}
                          className='mx-2'
                          // Remove arrows (optional)
                          appearance='textfield'
                        />
                        <Button
                          variant='outline-secondary'
                          size='sm'
                          onClick={() =>
                            dispatch(
                              AddToCart(item, item.quantity + 1, item.varient)
                            )
                          }
                        >
                          <FaPlusCircle />
                        </Button>
                      </div>
                      <div className='d-flex justify-content-between align-items-start mt-2'>
                        <Button
                          variant='link'
                          style={{ textDecoration: 'none', padding: '0' }}
                          className='text-danger'
                          onClick={() => dispatch(deleteFromCart(item))}
                        >
                          <FaTrash /> <span>Remove</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={4}>
            <Card className='mt-4 mt-lg-0 sticky-top' style={{ top: '20px' }}>
              <Card.Header>
                <h4 className='mb-0'>Order Summary</h4>
              </Card.Header>
              <Card.Body>
                <ListGroup variant='flush'>
                  <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <span>Subtotal</span>
                    <strong>₹{subTotal}</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <span>Shipping</span>
                    <strong>Free</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <span>Total</span>
                    <strong>₹{subTotal}</strong>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer>
                <Button variant='primary' size='md' block='true'>
                  Proceed to Checkout
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
    </>
  );
};
