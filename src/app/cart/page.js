"use client"; // Ensure this file is treated as a client component
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import CartItem from '../components/CartItem';

export default function CartPage() {
  const { cart, removeFromCart,updateQuantity } = useCart();

  const [message, setMessage] = useState('');

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Calculate discount (10% of subtotal)
  const discount = 0.10 * subtotal;

  // Calculate total after discount
  const total = subtotal - discount;

  const handleCheckout = () => {
    setMessage('Checkout successful!'); // Display success message
  };


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeFromCart}
          />
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-semibold">Subtotal: ${subtotal.toFixed(2)}</h2>
        <h3 className="text-xl font-semibold text-red-500">Discount (10%): -${discount.toFixed(2)}</h3>
        <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleCheckout}>
          Checkout
        </button>

        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}
