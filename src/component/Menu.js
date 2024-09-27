import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product1 from './Product1';

export default function Menu() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home }></Route>
      <Route path="/About" Component={About}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Product/:id" element={<Product1/>}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}
