import React, { useState } from 'react';
import { usePharmacy } from '../../store/shoping-cart-context.jsx';
import Product from '../Product/Product.jsx';
import Cart from '../Cart/Cart.jsx';
import './Shop.css';

export default function Shop() {
  const {
    getCartCount,
    getNewProducts,
    getPopularProducts,
    searchProducts
  } = usePharmacy();

  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search and category
  const getFilteredProducts = (products) => {
    let filtered = products;

    // Filter by search
    if (searchQuery) {
      const searchResults = searchProducts(searchQuery);
      filtered = filtered.filter(p => 
        searchResults.some(sr => sr.id === p.id)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    return filtered;
  };

  const newProducts = getFilteredProducts(getNewProducts());
  const popularProducts = getFilteredProducts(getPopularProducts());

  return (
    <div className="shop-container">
      {/* Controls Bar */}
      <div className="controls-bar">
        {/* Search Bar */}
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Filters */}
        <div className="category-filters">
          <button
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={`category-btn ${selectedCategory === 'medical' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('medical')}
          >
            Medical
          </button>
          <button
            className={`category-btn ${selectedCategory === 'safety' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('safety')}
          >
            Safety
          </button>
          <button
            className={`category-btn ${selectedCategory === 'hygiene' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('hygiene')}
          >
            Hygiene
          </button>
          <button
            className={`category-btn ${selectedCategory === 'respiratory' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('respiratory')}
          >
            Respiratory
          </button>
        </div>

        {/* Cart Button */}
        <button className="cart-btn" onClick={() => setShowCart(true)}>
          🛒 Cart
          {getCartCount() > 0 && (
            <span className="cart-badge">{getCartCount()}</span>
          )}
        </button>
      </div>

      {/* New Products Section */}
      {newProducts.length > 0 && (
        <section className="products-section">
          <div className="section-header">
            <h2>New Products</h2>
            <a href="#" className="view-all-link">View All →</a>
          </div>
          <div className="products-grid">
            {newProducts.map(product => <Product key={product.id} product={product} />)}
          </div>
        </section>
      )}

      {popularProducts.length > 0 && (
        <section className="products-section">
          <div className="section-header">
            <h2>Popular Products</h2>
            <a href="#" className="view-all-link">View All →</a>
          </div>
          <div className="products-grid">
            {popularProducts.map(product => <Product key={product.id} product={product} />)}
          </div>
        </section>
      )}

      {/* Shopping Cart */}
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
}
