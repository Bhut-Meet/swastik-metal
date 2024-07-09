// import React from 'react';
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../store/auth";

const AdminScreen = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user.isAdmin) {
    return <Navigate to='/' />;
  }

  return (
    <Container fluid className="mt-3">
      <Row className="bg-dark text-light justify-content-center">
        <Col md={8} className="p-2 text-center">
          <h1>Admin Panel</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={4} lg={3} xl={2} className="mb-3">
          <ButtonGroup vertical className="w-100">
            <Button variant="outline-dark" className="mb-2" onClick={() => navigate('/admin/users')}>
              All Users
            </Button>
            <Button variant="outline-dark" className="mb-2" onClick={() => navigate('/admin/products')}>
              All Products
            </Button>
            <Button variant="outline-dark" className="mb-2" onClick={() => navigate('/admin/orders')}>
              All Orders
            </Button>
            <Button variant="outline-dark" className="mb-2" onClick={() => navigate('/admin/add-product')}>
              Add Product
            </Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={8} lg={9} xl={10} className="bg-light p-3 rounded">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;




// import React from 'react';
// import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
// import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
// import UserList from "../../components/Admin/UserList";
// import AllProducts from "../../components/Admin/AllProducts";
// import OrderList from "../../components/Admin/OrderList";
// import AddProduct from "../../components/Admin/AddProduct";

// const AdminScreen = () => {
//   const navigate = useNavigate();

//   return (
//     <Container className="mt-3">
//       <Row>
//         <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
//         <Col md={4}>
//           <ButtonGroup vertical style={{ minHeight: "400px" }}>
//             <Button onClick={() => navigate("/admin/userlist")}>All users</Button>
//             <Button onClick={() => navigate("/admin/productlist")}>All products</Button>
//             <Button onClick={() => navigate("/admin/orderList")}>All Orders</Button>
//             <Button onClick={() => navigate("/admin/addproduct")}>Add Product</Button>
//           </ButtonGroup>
//         </Col>
//         <Col md={8} className="bg-dak">
//           <Routes>
//             <Route path="/admin/*" Component={Outlet}>
//               <Route path="" Component={UserList} /> {/* Removed leading slash */}
//               <Route path="userlist" Component={UserList} />
//               <Route path="productlist" element={<AllProducts />} />
//               <Route path="orderList" element={<OrderList />} />
//               <Route path="addproduct" element={<AddProduct />} />
//             </Route>
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminScreen;
