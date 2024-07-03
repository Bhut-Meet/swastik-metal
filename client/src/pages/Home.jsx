import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../action/Productaction';
import { useAuth } from '../store/auth';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../components/Product'; // Ensure the import is correct

function ProductList() {
  const productState = useSelector((state) => state.products);
  
  const dispatch = useDispatch();
  const { API } = useAuth();
  const { products, loading, error } = productState;

  useEffect(() => {
    dispatch(getAllProducts(API));
  }, [dispatch, API]);

  return (
    <div className='mt-5'>
      Popular products
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductList;
