import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';


const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); // Reset animation state after 1 second
  };

  return (
    <div className="border p-4 rounded-lg shadow-md relative">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
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
