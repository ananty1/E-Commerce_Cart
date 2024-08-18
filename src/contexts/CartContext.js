"use client";
import React,{ createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

  

  const [cart, setCart] = useState([]);
  const [ids, setIds] = useState(new Set());
  
  const addToCart = (item) => {
    // Check if item ID is already in the Set
    if (ids.has(item.id)) return;

    // Add item ID to the Set
    setIds(prevIds => new Set(prevIds).add(item.id));

    // Add item to the cart
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (item, quantity) => {
    // Ensure quantity is not less than 1
    if (quantity < 1) return;

    // Update quantity logic
    const updatedCart = cart.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
    );
    // Update cart in the context (or you may use a setCart function if available)
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
