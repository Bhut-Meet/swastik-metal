import AllProducts from "../product-dummy-data";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          {
            AllProducts.map(product => (
              <Col key={product.id} xs={6} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
};
