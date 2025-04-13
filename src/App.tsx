import React, { useState, useEffect } from 'react';
import About from './Component/Body/About/About';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Loader from './Component/Loader/Loader';
import Product from './Component/Product/Product';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Landpage from './Component/Landpage/Landpage';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer: number = window.setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Landpage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </BrowserRouter>
          <Outlet />
        </div>
      )}
    </>
  );
}

export default App;
