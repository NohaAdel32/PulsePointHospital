import React from 'react';
import { usePharmacy } from '../../store/shoping-cart-context';
import './Cart.css';

export default function Cart({ showCart, setShowCart }) {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = usePharmacy();

  if (!showCart) return null;

  return (
    <div className="cart-overlay" onClick={() => setShowCart(false)}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        {/* Cart Header */}
        <div className="cart-head">
          <h2>Shopping Cart</h2>
          <button className="close-cart-btn" onClick={() => setShowCart(false)}>
            ×
          </button>
        </div>

        {/* Cart Body */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-cart-msg">
              <p>🛒 Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="img-placeholder"></div>
                  )}
                </div>
                
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="item-price">${item.price.toFixed(2)} each</p>
                  
                  <div className="qty-controls">
                    <button 
                      className="qty-btn" 
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      className="qty-btn" 
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button 
                      className="remove-item-btn" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Total:</span>
              <span className="total-amount">${getCartTotal().toFixed(2)}</span>
            </div>
            <button 
              className="checkout-button" 
              onClick={() => alert('Proceeding to checkout!')}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
