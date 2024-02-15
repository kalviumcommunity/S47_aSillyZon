// ProductContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
  // State to store the products
  const [products, setProducts] = useState([]);

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://s47-asillyzon.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Provide the context value to its children
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
