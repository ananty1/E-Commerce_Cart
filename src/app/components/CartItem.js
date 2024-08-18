import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-gray-700">${item.price}</p>
        <div className="flex items-center mt-2">
          <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
          <input 
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item, Number(e.target.value))}
            className="w-12 text-center mx-2"
            min="1" // Ensure quantity cannot go below 1
          />
          <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
        </div>
      </div>
      <button className="ml-4 bg-red-500 text-white py-1 px-2 rounded flex items-center" onClick={() => removeItem(item.id)}>
        <FaTrashAlt className="mr-1" /> Remove
      </button>
    </div>
  );
};

export default CartItem;
