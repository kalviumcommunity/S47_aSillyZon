import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetail from "./pages/Productdetail"
import Product from "./Components/Product"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Product/>
      <Routes>
        <Route path="/product/:id" element={<Productdetail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  )
}

export default App
