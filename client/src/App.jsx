// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import Home from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { UserProfile } from './pages/profile/UserProfile';
import { Logout } from './pages/Logout';
import { UserProfileEdit } from './pages/profile/UserProfileEdit';
import { ProductPage } from './pages/Product';

function App() {

  return (
    <>
            <BrowserRouter>
                <Header></Header>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/productpage' element={<ProductPage/>}/>
                <Route path='/productdetails' element={<ProductDetails/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/profile' element={<UserProfile/>}/>
                <Route path='/Profile/user/:id/edit' element={<UserProfileEdit/>}/>
              </Routes>
                <Footer></Footer>
            </BrowserRouter>
    </>
  )
}

export default App
