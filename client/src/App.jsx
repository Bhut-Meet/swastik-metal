// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { ProductDetails } from './pages/ProductDetails';


function App() {

  return (
    <>
            <BrowserRouter>
                <Header></Header>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/productdetails' element={<ProductDetails/>}/>
              </Routes>
                <Footer></Footer>
            </BrowserRouter>
    </>
  )
}

export default App
