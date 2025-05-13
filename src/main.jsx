import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import About from './pages/AboutUsPage';
import Menu from './pages/MenuPage';
import Contact from './pages/ContactUsPage';
createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "" element= {< Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
