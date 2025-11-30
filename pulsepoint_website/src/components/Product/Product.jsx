import React from 'react';
import { usePharmacy } from '../../store/shoping-cart-context';
import './Product.css';

export default function Product({ product }) {
  const { addToCart } = usePharmacy();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`✅ ${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <div className="product-img">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="img-placeholder"></div>
        )}
      </div>
      
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      
      <button className="add-cart-btn" onClick={handleAddToCart}>
        Add to Cart 🛒
      </button>
    </div>
  );
}
