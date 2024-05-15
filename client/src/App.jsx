// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';


function App() {

  return (
    <>
            <BrowserRouter>
                <Header></Header>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
              </Routes>
                <Footer></Footer>
            </BrowserRouter>
    </>
  )
}

export default App
