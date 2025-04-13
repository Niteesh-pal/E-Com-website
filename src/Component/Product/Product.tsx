// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import './Product.css';

// const thicknessOptions = [6, 8, 10, 11, 12, 15, 17, 18]; // Thickness in MM

// const productDetails: {
//   [key: string]: {
//     description: string;
//     images: string[];
//     size: string;
//     density: string;
//     colors: string[];
//     features: string[];
//   };
// } = {
//   '6': {
//     description: '6mm WPC Sheet',
//     images: ['/media/6mm_0.5_1.jpg', '/media/6mm_0.5_2.jpg'],
//     size: '6mm',
//     density: '0.5',
//     colors: ['White'],
//     features: ['Durable', 'Waterproof'],
//   },
//   '8': {
//     description: '8mm WPC Sheet',
//     images: [
//       '/media/8mm_0.5_1.jpg',
//       '/media/8mm_0.55_1.jpg',
//       '/media/8mm_0.6_1.jpg',
//     ],
//     size: '8mm',
//     density: '0.5 / 0.55 / 0.6',
//     colors: ['White', 'Beige'],
//     features: ['Eco-friendly', 'Termite Resistant'],
//   },
//   '10': {
//     description: '10mm WPC Sheet',
//     images: ['/media/10mm_0.5_1.jpg', '/media/10mm_0.55_1.jpg'],
//     size: '10mm',
//     density: '0.5 / 0.55',
//     colors: ['White'],
//     features: ['Strong Build', 'Easy to Install'],
//   },
//   '11': {
//     description: '11mm WPC Sheet',
//     images: ['/media/11mm_0.5_1.jpg'],
//     size: '11mm',
//     density: '0.5',
//     colors: ['White'],
//     features: ['Durable', 'Lightweight'],
//   },
//   '12': {
//     description: '12mm WPC Sheet',
//     images: [
//       '/media/12mm_0.5_1.jpg',
//       '/media/12mm_0.55_1.jpg',
//       '/media/12mm_0.6_1.jpg',
//     ],
//     size: '12mm',
//     density: '0.5 / 0.55 / 0.6',
//     colors: ['White', 'Grey'],
//     features: ['High Density', 'Scratch Resistant'],
//   },
//   '15': {
//     description: '15mm WPC Sheet',
//     images: ['/media/15mm_0.5_1.jpg'],
//     size: '15mm',
//     density: '0.5',
//     colors: ['White'],
//     features: ['Impact Resistant', 'Waterproof'],
//   },
//   '17': {
//     description: '17mm WPC Sheet',
//     images: ['/media/17mm_0.45_1.jpg'],
//     size: '17mm',
//     density: '0.45',
//     colors: ['White'],
//     features: ['Cost Effective', 'Lightweight'],
//   },
//   '18': {
//     description: '18mm WPC Sheet',
//     images: [
//       '/media/18mm_0.5_1.jpg',
//       '/media/18mm_0.55_1.jpg',
//       '/media/18mm_0.6_1.jpg',
//     ],
//     size: '18mm',
//     density: '0.5 / 0.55 / 0.6',
//     colors: ['White', 'Ivory'],
//     features: ['Premium Quality', 'Anti-fungal'],
//   },
// };

// const product = {
//   name: 'Premium WPC Sheets',
//   description:
//     'High-quality iron sheet with corrosion resistance, perfect for construction & industrial use.',
//   images: ['/media/chatter1.jpg', '/media/chatter2.jpg', '/media/chatter3.jpg'],
//   measurements: 'Thickness: 2mm, Width: 4ft, Length: 8ft',
//   Size: '8ft x 4ft',
//   colors: ['#ffffff'],
//   features: [
//     'Rust Resistant Coating',
//     'High Durability',
//     'Perfect for Industrial & Commercial Use',
//   ],
// };

// const Product = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const [selectedThickness, setSelectedThickness] = useState<number | null>(
//     null,
//   );
//   const [selectedDensity, setSelectedDensity] = useState<number | null>(null);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % product.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage(
//       (prev) => (prev - 1 + product.images.length) % product.images.length,
//     );
//   };

//   return (
//     <div className="prod-container">
//       {/* Image Slider */}
//       <div className="imageContainer">
//         <motion.img
//           key={currentImage}
//           src={product.images[currentImage]}
//           alt={product.name}
//           className="image"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//         <button className="navButton left" onClick={prevImage}>
//           <ChevronLeft size={24} />
//         </button>
//         <button className="navButton right" onClick={nextImage}>
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* Product Details */}
//       <div className="productCard">
//         <center>
//           <h1 className="productTitle">{product.name}</h1>
//         </center>
//         <p className="productDescription">{product.description}</p>

//         <motion.div
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <strong>
//             {' '}
//             <label className="block mb-2">Thickness (MM) :</label>
//           </strong>{' '}
//           &nbsp;
//           <select
//             className="w-full p-2 border rounded"
//             onChange={(e) => setSelectedThickness(Number(e.target.value))}
//             value={selectedThickness || ''}
//           >
//             <option value="" disabled>
//               Select Thickness
//             </option>
//             {thicknessOptions.map((thickness) => (
//               <option key={thickness} value={thickness}>
//                 {thickness} MM
//               </option>
//             ))}
//           </select>
//           &nbsp; &nbsp; &nbsp;
//           {/* Density Selection */}
//           <strong>
//             <label className="block mt-4 mb-2">Density :</label>
//           </strong>{' '}
//           &nbsp;
//           {/* Display Selected Values */}
//           {selectedThickness && (
//             <div className="mt-4 p-2 bg-gray-100 rounded">
//               <p>
//                 <strong>Selected Thickness:</strong> {selectedThickness} MM
//               </p>
//               <p>
//                 <strong>Density Available:</strong> {selectedDensity} g/cm³
//               </p>
//             </div>
//           )}
//           <p style={{ marginTop: '20px' }}>
//             <strong>Size Available:</strong> &nbsp; 8*4 ft
//           </p>
//           <p>
//             <strong>Available Colors:</strong>
//           </p>
//           <div className="colorOptions">
//             {product.colors.map((color, index) => (
//               <div
//                 key={index}
//                 className="colorCircle"
//                 style={{ backgroundColor: color }}
//               ></div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Features */}
//         <motion.ul
//           className="featuresList"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           {product.features.map((feature, index) => (
//             <li key={index} className="featureItem">
//               ✅ {feature}
//             </li>
//           ))}
//         </motion.ul>

//         {/* Call to Action */}
//         <motion.div
//           className="ctaButton"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <button className="addToCart">Call now</button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Product.css';

const thicknessOptions = [
  '5',
  '6',
  '8',
  '10',
  '11',
  '12',
  '15',
  '17',
  '18',
] as const;
type Thickness = (typeof thicknessOptions)[number];

type ProductDetail = {
  description: string;
  images: string[];
  size: string;
  density: string;
  colors: string[];
  features: string[];
};

const productDetails: Record<Thickness, ProductDetail> = {
  '5': {
    description: '5mm WPC Sheet',
    images: [
      '/media/5mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '6mm',
    density: '0.5',
    colors: ['White'],
    features: ['Durable', 'Waterproof'],
  },
  '6': {
    description: '6mm WPC Sheet',
    images: [
      '/media/6mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '6mm',
    density: '0.5',
    colors: ['White'],
    features: [
      'Lightweight doors or cupboards',
      'Waterproof and termite-proof',
      'Bathroom or kitchen cabinet back panels',
    ],
  },
  '8': {
    description: '8mm WPC Sheet',
    images: [
      '/media/8mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '8mm',
    density: '0.5 / 0.55 / 0.6',
    colors: ['White', 'Beige'],
    features: [
      'Interior panelling and decor',
      'Partitions and wall cladding',
      'Better structural strength while still being lightweight',
    ],
  },
  '10': {
    description: '10mm WPC Sheet',
    images: [
      '/media/10mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '10mm',
    density: '0.5 / 0.55',
    colors: ['White'],
    features: [
      'Shelves and wardrobes',
      'Office or shop partitions',
      'Wall décor or cladding in commercial spaces',
    ],
  },
  '11': {
    description: '11mm WPC Sheet',
    images: [
      '/media/11mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '11mm',
    density: '0.5',
    colors: ['White'],
    features: [
      'Good for higher-load surfaces',
      'Kitchen racks and supports',
      'Decorative panels with increased strength',
    ],
  },
  '12': {
    description: '12mm WPC Sheet',
    images: [
      '/media/12mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '12mm',
    density: '0.5 / 0.55 / 0.6',
    colors: ['White', 'Grey'],
    features: [
      'TV unit structures',
      'Scratch and moisture resistant',
      'False ceilings and wall mountings',
    ],
  },
  '15': {
    description: '15mm WPC Sheet',
    images: [
      '/media/15mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '15mm',
    density: '0.5',
    colors: ['White'],
    features: [
      'Better impact resistance',
      'Storage cabinets and lofts',
      'Flooring base in dry areas',
    ],
  },
  '17': {
    description: '17mm WPC Sheet',
    images: [
      '/media/17mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '17mm',
    density: '0.45',
    colors: ['White'],
    features: [
      'Thicker and more rigid',
      'Folding table tops',
      'Panel doors and partitions',
    ],
  },
  '18': {
    description: '18mm WPC Sheet',
    images: [
      '/media/18mm.jpeg',
      '/media/chatter3.jpg',
      '/media/wpc1.jpg',
      '/media/chatter1.jpg',
    ],
    size: '18mm',
    density: '0.5 / 0.55 / 0.6',
    colors: ['White', 'Ivory'],
    features: [
      'Structural base for heavy furniture',
      'Anti-fungal, waterproof, long-lasting',
      'Premium strength and density options',
    ],
  },
};

const Product = () => {
  const [selectedThickness, setSelectedThickness] = useState<Thickness>('5');
  const selectedProduct = selectedThickness
    ? productDetails[selectedThickness]
    : null;
  const [currentImage, setCurrentImage] = useState(0);

  const currentImages = selectedProduct?.images || [];

  const nextImage = () => {
    if (!currentImages.length) return;
    setCurrentImage((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    if (!currentImages.length) return;
    setCurrentImage(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length,
    );
  };

  return (
    <div className="prod-container">
      {/* Image Slider */}
      <div className="imageContainer">
        {currentImages.length > 0 && (
          <motion.img
            key={currentImage}
            src={currentImages[currentImage]}
            alt={`WPC Sheet - ${selectedThickness}mm`}
            className="image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        {currentImages.length > 1 && (
          <>
            <button className="navButton left" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className="navButton right" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Product Details */}
      <div className="productCard">
        <center>
          <h1 className="productTitle">Premium WPC Sheets</h1>
        </center>

        <p className="productDescription">
          High-quality WPC sheet with corrosion resistance, perfect for
          construction & industrial use.
        </p>

        {/* Dropdowns */}
        <div className="details">
          <strong>
            <label className="block mb-2">Thickness (MM):</label>
          </strong>
          &nbsp;
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => {
              setSelectedThickness(e.target.value as Thickness);
              setCurrentImage(0); // Reset slider when thickness changes
            }}
            value={selectedThickness || ''}
          >
            <option value="" disabled>
              Select Thickness
            </option>
            {thicknessOptions.map((t) => (
              <option key={t} value={t}>
                {t} MM
              </option>
            ))}
          </select>
          {/* Dynamic Section */}
          {selectedProduct && (
            <>
              <div className="mt-4 p-0 bg-gray-100 rounded">
                <p>
                  <strong>Selected Thickness:</strong> {selectedThickness} MM
                </p>
                <p>
                  <strong>Density Available:</strong> {selectedProduct.density}{' '}
                  g/cm³
                </p>
              </div>
              <p>
                <strong>Size Available:</strong> {selectedProduct.size}
              </p>
              <p>
                <strong>Available Colors:</strong>
              </p>
              <div className="colorOptions">
                {selectedProduct.colors.map((color, index) => (
                  <div
                    key={index}
                    className="colorCircle"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>

              {/* Features */}
              <motion.ul
                className="featuresList"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="featureItem">
                    ✅ {feature}
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </div>

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
