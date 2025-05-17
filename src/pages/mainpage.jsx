// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/logo.png";

function Mainpage() {
  return (
    <div>
      {/* Header with Navbar */}
      <header className="bg-white text-success py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <img src={logo} alt="logo" className="header"  />
  <h2 className="heading">Mom Pharmacy</h2> 
          <nav className="nav mt-3 mt-md-0">
            <a className="nav-link text-black" href="#">What's New</a>
            <a className="nav-link text-black" href="#">Contact Us</a>
            <a className="nav-link text-black" href="#">Login</a>
            <a className="nav-link text-black" href="#">Signup</a>
          </nav>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section className="py-5 text-center" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container">
          <h1>Welcome to Mom Pharmacy</h1>
          <p className="lead">Your trusted partner in health and wellness.</p>
        </div>
      </section>

      {/* Section 2: Services */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2>Our Services</h2>
          <p>
            We provide prescription medications, health consultations, and wellness products tailored to your needs.
          </p>
        </div>
      </section>

      {/* Section 3: Contact */}
      <section className="py-5 text-center" style={{ backgroundColor: '#e0f7fa' }}>
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email: contact@mompharmacy.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 Mom Pharmacy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Mainpage;
