import React from 'react';
import { Search, Filter, Menu } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Card from '../Card/Card';

const products = [
  {
    name: 'WPC Sheets',
    size: 'Multiple sizes',
    image: '/media/chatter3.jpg',
  },
  {
    name: 'WPC Decorative Panels',
    size: '36"x72"x30"',
    image: '/media/chatter2.jpg',
  },
  {
    name: 'WPC Wall Panels',
    size: '84"x36"x32"',
    image: '/media/chatter1.jpg',
  },
  {
    name: 'WPC Ceiling Panels',
    size: '48"x24"x72"',
    image: '/media/chatter4.jpg',
  },
  {
    name: 'WPC Flooring Panels',
    size: '48"x24"x72"',
    image: '/media/chatter5.jpg',
  },
  {
    name: 'WPC Cladding Panels',
    size: '48"x24"x72"',
    image: '/media/chatter6.jpg',
  },
];

const Home = () => {
  return (
    <div className="list-container">
      <div className="input-group my-4">
        <span className="input-group-text">
          <Search />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
        />
      </div>

      <div className="d-flex gap-3 mx-4 mb-4">
        <button className="btn btn-dark">Filter</button>
        <button className="btn btn-secondary">Sort by</button>
      </div>

      <div className="allcard">
        {products.map((product, index) => (
          <div key={index}>
            <div className="card shadow-sm">
              <Card
                image={product.image}
                name={product.name}
                size={product.size}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
