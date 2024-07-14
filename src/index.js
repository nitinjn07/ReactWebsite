import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Language from './pages/Language';
import Services from './pages/Services';
import Layout from './pages/Layout';
import Event from './pages/Event';
import Contact from './pages/Contact';
import EnquiryList from './pages/EnquiryList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />}></Route>
        <Route path="/language" element={<Language />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/enquiry" element={<EnquiryList/>}></Route>
      </Route>
      
    </Routes>
  </BrowserRouter>
);
