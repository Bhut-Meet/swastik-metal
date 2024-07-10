// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import {Header} from './components/Header';
// import {Footer} from './components/Footer';
import Home from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { UserProfile } from './pages/profile/UserProfile';
import { Logout } from './pages/Logout';
import { UserProfileEdit } from './pages/profile/UserProfileEdit';
import { ProductPage } from './pages/Product';
import {Cart}  from './pages/cart/Cart';
// import AdminScreen from './pages/Admin/AdminScreen';
import {UserList} from './components/Admin/UserList';
import AllProducts from './components/Admin/AllProducts';
import OrderList from './components/Admin/OrderList';
import AddProduct from './components/Admin/AddProduct';
import { AdminNavbar } from './components/Admin/AdminNavbar';
import {Error} from './pages/Error';
import {Protected} from './components/Protected';

function App() {

  return (
    <>
            <BrowserRouter>
                <Header></Header>
              <Routes>
                {/* pblic route */}
              <Route path='*' element={<Error></Error>} />
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
                

                {/* protected route start */}
                <Route path='/' element={<Protected ></Protected>}>
                  <Route path='profile' element={<UserProfile/>}/>
                  <Route path='allproducts' element={<ProductPage/>}/>
                  <Route path='productdetails' element={<ProductDetails/>}/>
                  <Route path='logout' element={<Logout/>}/>
                  <Route path='Profile/user/:id/edit' element={<UserProfileEdit/>}/>
                  <Route path='cart' element={<Cart  />}/>
                </Route>
                {/* protected route ed */}


                {/* admin routs start */}
              <Route path="/admin/" element={<AdminNavbar></AdminNavbar>}>
                  <Route index element={<UserList />} /> 
                  <Route path="userlist" element={<UserList />} />
                  <Route path="products" element={<AllProducts />} />
                  <Route path="orders" element={<OrderList />} />
                  <Route path="addproduct" element={<AddProduct />} />
              </Route>
                {/* admin routs end */}
              </Routes>
                {/* <Footer></Footer> */}
            </BrowserRouter>
    </>
  )
}

export default App
