import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Product.css';

const thicknessOptions = [6, 8, 10, 11, 12, 15, 17, 18]; // Thickness in MM
const densityOptions = [0.45, 0.5, 0.55, 0.6]; // Density

const product = {
  name: 'Premium Metal Sheet',
  description:
    'High-quality iron sheet with corrosion resistance, perfect for construction & industrial use.',
  images: ['/media/chatter1.jpg', '/media/chatter2.jpg', '/media/chatter3.jpg'],
  measurements: 'Thickness: 2mm, Width: 4ft, Length: 8ft',
  Size: '8ft x 4ft',
  colors: ['#ffffff'],
  features: [
    'Rust Resistant Coating',
    'High Durability',
    'Perfect for Industrial & Commercial Use',
  ],
};

const Product = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const [selectedThickness, setSelectedThickness] = useState<number | null>(
    null,
  );
  const [selectedDensity, setSelectedDensity] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  return (
    <div className="container">
      {/* Image Slider */}
      <div className="imageContainer">
        <motion.img
          key={currentImage}
          src={product.images[currentImage]}
          alt={product.name}
          className="image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button className="navButton left" onClick={prevImage}>
          <ChevronLeft size={24} />
        </button>
        <button className="navButton right" onClick={nextImage}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Product Details */}
      <div className="productCard">
        <h1 className="productTitle">{product.name}</h1>
        <p className="productDescription">{product.description}</p>

        <motion.div
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <strong>
            {' '}
            <label className="block mb-2">Thickness (MM):</label>
          </strong>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setSelectedThickness(Number(e.target.value))}
            value={selectedThickness || ''}
          >
            <option value="" disabled>
              Select Thickness
            </option>
            {thicknessOptions.map((thickness) => (
              <option key={thickness} value={thickness}>
                {thickness} MM
              </option>
            ))}
          </select>
          &nbsp; &nbsp;
          {/* Density Selection */}
          <strong>
            <label className="block mt-4 mb-2">Density:</label>
          </strong>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setSelectedDensity(Number(e.target.value))}
            value={selectedDensity || ''}
          >
            <option value="" disabled>
              Select Density
            </option>
            {densityOptions.map((density) => (
              <option key={density} value={density}>
                {density} g/cm³
              </option>
            ))}
          </select>
          {/* Display Selected Values */}
          {selectedThickness && selectedDensity && (
            <div className="mt-4 p-2 bg-gray-100 rounded">
              <p>
                <strong>Selected Thickness:</strong> {selectedThickness} MM
              </p>
              <p>
                <strong>Selected Density:</strong> {selectedDensity} g/cm³
              </p>
            </div>
          )}
          <p>
            <strong>Available Colors:</strong>
          </p>
          <div className="colorOptions">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="colorCircle"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.ul
          className="featuresList"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {product.features.map((feature, index) => (
            <li key={index} className="featureItem">
              ✅ {feature}
            </li>
          ))}
        </motion.ul>

        {/* Call to Action */}
        <motion.div
          className="ctaButton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="addToCart">Call now</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
