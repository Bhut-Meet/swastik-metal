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
              <Col md={3} key={product.id}>
                <Product product={product} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
};
