import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

interface Card {
  image: string;
  name: string;
  size: string;
}

const Card: React.FC<Card> = ({ image, name, size }) => {
  const navigate = useNavigate();

  const prod = () => {
    if (name === 'WPC Sheets') {
      navigate('/product');
    }
  };

  const isWPCSheets = name === 'WPC Sheets';

  return (
    <div className="card-container">
      <div className="card shadow-lg">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-dark">Size: {size}</p>

          <Link
            to={isWPCSheets ? '/product' : '#'}
            onClick={(e) => !isWPCSheets && e.preventDefault()}
          >
            <button
              className={`btn ${isWPCSheets ? 'btn-dark' : 'btn-secondary disabled'}`}
              disabled={!isWPCSheets}
              onClick={prod}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
