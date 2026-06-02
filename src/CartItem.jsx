import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping with Paradise Nursery 🌿');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>Shopping Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Your cart is empty!</p>
          <button
            onClick={onContinueShopping}
            style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
              
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 5px', color: '#333' }}>{item.name}</h3>
                <p style={{ margin: '0 0 5px', color: '#4CAF50', fontWeight: 'bold' }}>
                  Unit Price: ${item.price.toFixed(2)}
                </p>
                <p style={{ margin: '0 0 10px', color: '#333', fontWeight: 'bold' }}>
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => handleDecrement(item)}
                    style={{ width: '30px', height: '30px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.2rem' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    style={{ width: '30px', height: '30px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.2rem' }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item)}
                    style={{ marginLeft: '10px', padding: '5px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div style={{ borderTop: '2px solid #4CAF50', paddingTop: '20px', marginTop: '20px' }}>
            <h3 style={{ color: '#333', fontSize: '1.5rem' }}>
              Total Amount: <span style={{ color: '#4CAF50' }}>${totalAmount.toFixed(2)}</span>
            </h3>

            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <button
                onClick={onContinueShopping}
                style={{ padding: '12px 25px', backgroundColor: '#607d8b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}
              >
                Continue Shopping
              </button>
              <button
                onClick={handleCheckout}
                style={{ padding: '12px 25px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
