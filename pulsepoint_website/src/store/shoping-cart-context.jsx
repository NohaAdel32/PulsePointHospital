import React, { createContext, useContext, useState, useEffect } from 'react';
import { DummyNewProducts } from '../components/Pharmacy/dummy-new-products';
import { DummyPopularProducts } from '../components/Pharmacy/dummy-popular-products';

// Create Context
const PharmacyContext = createContext();

// Custom Hook to use the Pharmacy Context
export const usePharmacy = () => {
  const context = useContext(PharmacyContext);
  if (!context) {
    throw new Error('usePharmacy must be used within a PharmacyProvider');
  }
  return context;
};


export const PharmacyProvider = ({ children }) => {

const [products] = useState([
    // New Products
    { id: 1, name: 'Foley Catheter', price: 5.35, category: 'medical', image: '/images/foley-catheter.jpg', isNew: true },
    { id: 2, name: 'Thermometer', price: 3.50, category: 'medical', image: '/images/thermometer.jpg', isNew: true },
    { id: 3, name: 'Non-rebreather mask', price: 2.00, category: 'medical', image: '/images/mask.jpg', isNew: true },
    { id: 4, name: 'Wound Dressing', price: 4.20, category: 'medical', image: '/images/wound-dressing.jpg', isNew: true },
    // Popular Products
    { id: 5, name: 'Oxygen Mask', price: 12.50, category: 'respiratory', image: '/images/oxygen-mask.jpg', isPopular: true },
    { id: 6, name: 'Surgical Gloves', price: 7.30, category: 'safety', image: '/images/gloves.jpg', isPopular: true },
    { id: 7, name: 'Medical Mask', price: 1.80, category: 'safety', image: '/images/medical-mask.jpg', isPopular: true },
    { id: 8, name: 'Hand Sanitizer', price: 3.99, category: 'hygiene', image: '/images/sanitizer.jpg', isPopular: true }
  ]);


  const [cart, setCart] = useState([]);
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pharmacyCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pharmacyCart', JSON.stringify(cart));
  }, [cart]);

  // Add to Cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update Quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Increase Quantity
  const increaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.id === productId);
      if (item && item.quantity <= 1) {
        return prevCart.filter(item => item.id !== productId);
      }
      return prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Get Cart Total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get Cart Count
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Check if item is in cart
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  // Get item quantity from cart
  const getItemQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Filter Products by Category
  const getProductsByCategory = (category) => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  };

  // Get New Products
  const getNewProducts = () => {
    return products.filter(product => product.isNew);
  };

  // Get Popular Products
  const getPopularProducts = () => {
    return products.filter(product => product.isPopular);
  };

  // Search Products
  const searchProducts = (query) => {
    if (!query) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const value = {
    cart,
    products,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isInCart,
    getItemQuantity,
    getProductsByCategory,
    getNewProducts,
    getPopularProducts,
    searchProducts
  };

  return (
    <PharmacyContext.Provider value={value}>
      {children}
    </PharmacyContext.Provider>
  );
};