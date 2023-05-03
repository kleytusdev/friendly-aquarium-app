import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const addToCart = (sourceImage, productName, productPrice) => {
    let updatedProducts = [...products];
    let found = false;
    updatedProducts.forEach((product) => {
      if (product.name === productName) {
        found = true;
        product.quantity++;
        product.totalPrice += parseFloat(productPrice);
      }
    });
    if (!found) {
      updatedProducts.push({
        id: Date.now(), // añade una id única para cada producto
        name: productName,
        quantity: 1,
        totalPrice: parseFloat(productPrice),
        sourceImage: sourceImage // Nueva propiedad sourceImage
      });
    }
    setCount(count + 1);
    setProducts(updatedProducts);
  };

  const removeFromCart = (productId) => {
    let updatedProducts = [...products];
    let productIndex = updatedProducts.findIndex((product) => product.id === productId);
    if (productIndex >= 0) {
      let product = updatedProducts[productIndex];
      if (product.quantity > 1) {
        product.quantity--;
        product.totalPrice -= parseFloat(product.totalPrice / (product.quantity + 1));
      } else {
        updatedProducts.splice(productIndex, 1);
      }
      setCount(count - 1);
      setProducts(updatedProducts);
    }
  };

  return (
    <CartContext.Provider value={{ count, products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
