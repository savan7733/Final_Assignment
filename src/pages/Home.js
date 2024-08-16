// src/pages/Home.js

import React from 'react';
import './Home.css'; // Add custom styles here

const Home = () => {
  return (
    <div className="page-container" style={{ marginTop: '70px' }}>
      <div className="background-logo" />
      <div className="container">
        <h1>Welcome to Super Store</h1>
        <p>Browse our products and add them to your cart.</p>
      </div>
    </div>
  );
};

export default Home;
