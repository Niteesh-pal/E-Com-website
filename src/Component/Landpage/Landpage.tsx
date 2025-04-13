import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landpage.css';
import { Link } from 'react-router-dom';

const Landpage: React.FC = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/media/s3.jpg" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption">
            <h5 className="animated-text1  text-start fancy-font">
              WPC Sheets
            </h5>
            <p className="animated-text2  text-start fancy-font">
              Best quality product for your needs.
            </p>
            <div className="btn-content">
              <Link to="/home">
                <button className="btn btn-light me-3">Buy Now</button>
              </Link>

              <Link to="/about">
                <button className="btn btn-dark">Know More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/media/s1.jpg" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption">
            <h5 className="animated-text1 fancy-font">Wall Panels</h5>
            <p className="animated-text2 fancy-font">Affordable and durable.</p>
            <div className="btn-content">
              <Link to="/home">
                <button className="btn btn-light me-3">Buy Now</button>
              </Link>

              <Link to="/about">
                <button className="btn btn-dark">Know More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/media/s4.jpg" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption">
            <h5 className="animated-text1 text-end fancy-font">
              Decorative Designs
            </h5>
            <p className="animated-text2 text-end fancy-font">
              Latest design and top features.
            </p>
            <div className="btn-content">
              <Link to="/home">
                <button className="btn btn-light me-3">Buy Now</button>
              </Link>

              <Link to="/about">
                <button className="btn btn-dark">Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Landpage;
