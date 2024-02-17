import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetail from "./pages/Productdetail"
import Feedback from "./pages/Feedback";
import Product from "./Components/Product"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import UpdateFeedback from "./pages/UpdateFeedback";
import Form from "./pages/Form";
function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/product/:id" element={<Productdetail/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/update/:id" element={<UpdateFeedback/>}/>
        <Route path="/login" element={<Form/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  )
}

export default App
