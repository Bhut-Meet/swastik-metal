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
    <Container>
    <h3>Popular Products</h3>
    {loading ? (
      <h1>Loading...</h1>
    ) : error ? (
      <h1>Error fetching data</h1>
    ) : (
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={6} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    )}
  </Container>
  );
}

export default ProductList;
