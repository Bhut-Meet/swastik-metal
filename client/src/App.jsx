// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { Register } from './Register';


function App() {

  return (
    <>
            <BrowserRouter>
                <Header></Header>
              <Routes>
                <Route path='/register' element={<Register/>}/>
              </Routes>
                <Footer></Footer>
            </BrowserRouter>
    </>
  )
}

export default App
