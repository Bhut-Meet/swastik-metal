import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../action/Productaction';
import { useAuth } from '../store/auth';
import { Col, Container, Row, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import Product from '../components/Product';
import { Link } from 'react-router-dom';

function ProductList() {
  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.CartReducer);
  const { API } = useAuth();
  const { products, loading, error } = productState;

  useEffect(() => {
    dispatch(getAllProducts(API));
  }, [dispatch, API]);

  return (
    <Container className='mt-3'>
      <h3>Popular Products</h3>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error fetching data</h1>
      ) : (
        <Row>
          {products.map((product,index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Link to="/cart">
        <Button
        variant="none"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            // marginRight:"220px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"#fdfdff",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Badge
            bg="danger"
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cartState.cartItems.length}
          </Badge>
          <FaShoppingCart size={24} />
        </Button>
      </Link>
    </Container>
  );
}

export default ProductList;
