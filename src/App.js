import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './component/Navbar/Header';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Card from './pages/Card';
import LoginSignup from './pages/LoginSignup';
import Footer from './component/Footer/Footer';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/hair" element={<ShopCategory category="hair" />} />
          <Route path="/skin" element={<ShopCategory category="skin" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productId" element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
