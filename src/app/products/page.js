"use client"; // Ensure this file is treated as a client component

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../contexts/CartContext'; // Adjust the import path if needed
import ProductCard from '../components/ProductCard';
import ProductsHeader from '../components/ProductHeader';



export default function Home() {
  const { cart,addToCart } = useCart(); // Use the context hook to get addToCart function
  const [products, setProducts] = useState([]);
  const itemsToFetch = 20; // Number of items you want to fetch

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${itemsToFetch}`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [itemsToFetch]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ProductsHeader cart={cart} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={() => addToCart({ ...product, quantity: 1 })} // Use addToCart from context
          />
        ))}
      </div>
    </div>
  );
}
