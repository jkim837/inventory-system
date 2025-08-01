import React, { useEffect, useState } from 'react';
import AddProduct from './AddProduct';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch products on component load
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Inventory System</h1>

      {/* Add Product Form */}
      <AddProduct />

      <hr />

      {/* Product List */}
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> — ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
