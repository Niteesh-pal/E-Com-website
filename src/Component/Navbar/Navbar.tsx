import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is loaded
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="/">
        <span className="logo-text">PlyWood</span>
      </a>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links & Buttons */}
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/testimonial">
              Testimonial
            </a>
          </li>
        </ul>

        {/* Login & Register Buttons - Visible on all screen sizes */}
        <div className="d-flex gap-2 mt-3 mt-lg-0 justify-content-center">
          <button className="btn btn-light w-100">Login</button>
          <button className="btn btn-outline-light w-100">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
