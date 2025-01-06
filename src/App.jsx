import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
    <div className="container">
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App