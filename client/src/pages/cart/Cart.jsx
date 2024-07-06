import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import {AddToCart, deleteFromCart} from '../../action/CartAction'

export const Cart = () => {
  const cartState = useSelector(state => state.CartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();

  const subTotal = cartItems.reduce((x,item) => x + item.price,0)
  // const calculateSubtotal = () => {
  //   let subtotal = 0;
  //   cartItems.forEach(item => {
  //     subtotal += item.price * item.quantity;
  //   });
  //   return subtotal; // Assuming prices are in cents, divide by 100
  // };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <Col key={item.id} xs={12} md={6} lg={6} sm={6}  className="mb-3">
                  <Card className="shadow-sm rounded-5"> {/* Box shadow and border radius */}
                    <Card.Img className='rounded-5' variant="top" src={item.image} alt={item.name} style={{ maxWidth: '70%' }} />
                    <Card.Body>
                      <h4>
                        {item.name} 
                      </h4>
                      <h6>Size: [{item.varient}]</h6>
                      <h6>
                        Price: {item.quantity} x {item.prices[0][item.varient]} = {' '}
                        {item.price}
                      </h6>
                      <h6>Qty: <FaCircleMinus  className='text-danger' onClick={()=>{dispatch(AddToCart(item,item.quantity-1, item.varient))}} /> {item.quantity} <FaPlusCircle className='text-success' onClick={()=>{dispatch(AddToCart(item,item.quantity+1, item.varient))}}  /></h6>
                      <FaTrash className='text-danger' onClick={()=>{dispatch(deleteFromCart(item))}} />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <h1>Payment Info</h1>
            <hr />
            {/* Subtotal section  ₹ */}
            <h2>Subtotal: Rs:-  {subTotal}</h2>
            <Button>CheckOut</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
