import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plants = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_plant_Sansevieria_trifasciata.jpg/800px-Snake_plant_Sansevieria_trifasciata.jpg", price: 15.00, description: "Great air purifier" },
        { name: "Spider Plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chlorophytum_comosum.jpg/800px-Chlorophytum_comosum.jpg", price: 12.00, description: "Easy to care for" },
        { name: "Peace Lily", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/800px-Spathiphyllum_cochlearispathum_RTBG.jpg", price: 18.00, description: "Beautiful white flowers" },
        { name: "Boston Fern", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Boston_fern_on_display.jpg/800px-Boston_fern_on_display.jpg", price: 20.00, description: "Lush and green" },
        { name: "Rubber Plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_-_Rubber_plant.jpg/800px-Ficus_elastica_-_Rubber_plant.jpg", price: 22.00, description: "Bold and striking" },
        { name: "Aloe Vera", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png", price: 10.00, description: "Medicinal plant" },
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Lavender.jpg/800px-Hapus_Lavender.jpg", price: 14.00, description: "Calming fragrance" },
        { name: "Jasmine", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jasminum_polyanthum.jpg/800px-Jasminum_polyanthum.jpg", price: 16.00, description: "Sweet scent" },
        { name: "Rosemary", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Rosemary_bush.jpg/800px-Rosemary_bush.jpg", price: 11.00, description: "Herb and ornamental" },
        { name: "Mint", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Mint-leaves-2007.jpg/800px-Mint-leaves-2007.jpg", price: 8.00, description: "Fresh and aromatic" },
        { name: "Gardenia", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gardenia_jasminoides.jpg/800px-Gardenia_jasminoides.jpg", price: 25.00, description: "Elegant fragrance" },
        { name: "Eucalyptus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Eucalyptus_leaves.jpg/800px-Eucalyptus_leaves.jpg", price: 13.00, description: "Refreshing scent" },
      ]
    },
    {
      category: "Succulents & Cacti",
      plants: [
        { name: "Echeveria", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Echeveria_-_Garden.jpg/800px-Echeveria_-_Garden.jpg", price: 9.00, description: "Rosette shaped" },
        { name: "Cactus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Biznaga_de_Acitrón_%28Echinocactus_platyacanthus%29.jpg/800px-Biznaga_de_Acitrón_%28Echinocactus_platyacanthus%29.jpg", price: 7.00, description: "Low maintenance" },
        { name: "Jade Plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Crassula_ovata_1.jpg/800px-Crassula_ovata_1.jpg", price: 12.00, description: "Lucky plant" },
        { name: "Haworthia", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Haworthia_attenuata1.jpg/800px-Haworthia_attenuata1.jpg", price: 10.00, description: "Compact and cute" },
        { name: "Zebra Plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Haworthia_fasciata.jpg/800px-Haworthia_fasciata.jpg", price: 11.00, description: "Striped leaves" },
        { name: "Agave", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Agave_americana_3.jpg/800px-Agave_americana_3.jpg", price: 15.00, description: "Desert beauty" },
      ]
    }
  ];

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Paradise Nursery</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" onClick={() => setShowCart(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Home</a>
          <a href="#" onClick={() => setShowCart(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Plants</a>
          <a href="#" onClick={() => setShowCart(true)} style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>
             Cart ({totalCartItems})
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div style={{ padding: '20px' }}>
          <h1 style={{ textAlign: 'center', color: '#4CAF50', marginBottom: '30px' }}>Our Plants</h1>
          {plants.map((category, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px', marginBottom: '20px' }}>
                {category.category}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {category.plants.map((plant, plantIndex) => (
                  <div key={plantIndex} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                    <div style={{ padding: '10px' }}>
                      <h3 style={{ margin: '0 0 5px', color: '#333' }}>{plant.name}</h3>
                      <p style={{ margin: '0 0 5px', color: '#666', fontSize: '0.9rem' }}>{plant.description}</p>
                      <p style={{ margin: '0 0 10px', color: '#4CAF50', fontWeight: 'bold' }}>${plant.price.toFixed(2)}</p>
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                        style={{
                          width: '100%',
                          padding: '8px',
                          backgroundColor: addedToCart[plant.name] ? '#ccc' : '#4CAF50',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer',
                          fontSize: '0.9rem'
                        }}
                      >
                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
