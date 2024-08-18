import React, { useState } from 'react';
import { FaCheck, FaStar, FaRegUser } from 'react-icons/fa'; // Importing necessary icons



const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); // Reset animation state after 1 second
  };

  return (
    <div className="border p-4 rounded-lg shadow-md relative">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <div className="flex items-center mb-2">
        <FaStar className="text-yellow-500 mr-1" /> {/* Star icon for rating */}
        <span>{product.rating.rate}</span>
        <FaRegUser className="ml-3 mr-1" /> {/* User icon for count */}
        <span>{product.rating.count}</span>
      </div>
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="relative group">
        <span>{product.description.substr(0, 100)}...</span>
        <span className="absolute bottom-full left-0 w-full bg-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {product.description}
        </span>
      </p>

      <p className="text-lg text-gray-700 mb-4">${product.price.toFixed(2)}</p>
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-300 ${added ? 'transform scale-105' : ''}`}
        onClick={handleAddToCart}
      >
        {added ? <FaCheck className="inline mr-2" /> : 'Add to Cart'}
      </button>

    </div>
  );
};

export default ProductCard;
