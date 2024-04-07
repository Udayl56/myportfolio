import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { About } from './components/About';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { Work } from './components/Work';
import { Footer } from "./components/Footer";

export function App() {
  return (

    <div className='container-fluid  bg-dark  p-0' >
      <Header />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <hr className='text-white p-0' style={{ height: '2px' }} />

      <Footer />




    </div>


  );
}


