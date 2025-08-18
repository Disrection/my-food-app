import React, { createContext, useState } from 'react';

// Create CartContext to share cart state across the app
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // Add item to cart, or increment quantity if exists
  const addToCart = (item) => {
    setCartItems(prev => {
      const exists = prev.find(ci => ci.id === item.id);
      if (exists) {
        return prev.map(ci =>
          ci.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Remove item completely
  const removeFromCart = (id) =>
    setCartItems(prev => prev.filter(ci => ci.id !== id));

  // Update quantity
  const updateQty = (id, qty) =>
    setCartItems(prev => prev.map(ci =>
      ci.id === id ? { ...ci, qty } : ci
    ));

  // Compute total price
  const totalPrice = cartItems.reduce(
    (sum, ci) => sum + ci.price * ci.qty, 0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};