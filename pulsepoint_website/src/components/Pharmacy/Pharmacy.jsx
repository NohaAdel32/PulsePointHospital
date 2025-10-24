import React from 'react';
import '../Pharmacy/styles/Pharmacy.css';
import Foley_Catheter from '../../assets/Foley Catheter.png';
import Thermometer from '../../assets/Thermometer.png';
import Non_rebreather_mask from '../../assets/Non-rebreather mask.png';
import Wound_Dressing from '../../assets/Wound Dressing.png';
import Oxygen_Mask from '../../assets/Oxygen Mask.png';
import Surgical_Gloves from '../../assets/Surgical Gloves.png';
import Medical_Mask from '../../assets/Medical Mask.png';
import Hand_Sanitizer from '../../assets/Hand Sanitizer.png';
const Pharmacy = () => {
  const newProducts = [
    {
      id: 1,
      name: 'Foley Catheter',
      price: '$5.35',
      image: Foley_Catheter
    },
    {
      id: 2,
      name: 'Thermometer',
      price: '$3.50',
      image: Thermometer
    },
    {
      id: 3,
      name: 'Non-rebreather mask',
      price: '$2.00',
      image: Non_rebreather_mask
    },
    {
      id: 4,
      name: 'Wound Dressing',
      price: '$4.20',
      image: Wound_Dressing
    }
  ];

  const popularProducts = [
    {
      id: 1,
      name: 'Oxygen Mask',
      price: '$12.50',
      image: Oxygen_Mask
    },
    {
      id: 2,
      name: 'Surgical Gloves',
      price: '$7.30',
      image: Surgical_Gloves
    },
    {
      id: 3,
      name: 'Medical Mask',
      price: '$1.80',
      image: Medical_Mask
    },
    {
      id: 4,
      name: 'Hand Sanitizer',
      price: '$3.99',
      image: Hand_Sanitizer
    }
  ];

  return (
    <section className="pharmacy-section">
      <div className="pharmacy-container">
        {/* Header */}
        <div className="pharmacy-header">
          <h1 className="pharmacy-title">Pharmacy</h1>
          <p className="pharmacy-subtitle">
            We are dedicated to serving you with quality pharmacy products and care
          </p>
        </div>

        {/* New Products Section */}
        <div className="products-section">
          <div className="section-header">
            <h2 className="section-title">New Products</h2>
            <a href="#" className="view-all-link">View All →</a>
          </div>
          
          <div className="products-grid">
            {newProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="placeholder-product"></div>
                  )}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-btn">
                  Add to Cart <span className="cart-icon">🛒</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Products Section */}
        <div className="products-section">
          <div className="section-header">
            <h2 className="section-title">Popular Products</h2>
            <a href="#" className="view-all-link">View All →</a>
          </div>
          
          <div className="products-grid">
            {popularProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="placeholder-product"></div>
                  )}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-btn">
                  Add to Cart <span className="cart-icon">🛒</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* View Pharmacy Button */}
        <div className="pharmacy-footer">
          <button className="view-pharmacy-btn">View Pharmacy</button>
        </div>
      </div>
    </section>
  );
};

export default Pharmacy;