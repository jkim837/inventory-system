import React, { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    fragile: false,
    expiryDate: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to backend
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    .then(res => {
      if (res.ok) {
        alert('Product added!');
        setProduct({
          name: '',
          description: '',
          price: '',
          quantity: '',
          fragile: false,
          expiryDate: ''
        });
      } else {
        alert('Failed to add product');
      }
    })
    .catch(err => {
      alert('Error: ' + err.message);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Quantity: </label>
        <input
          name="quantity"
          type="number"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Fragile: </label>
        <input
          name="fragile"
          type="checkbox"
          checked={product.fragile}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Expiry Date: </label>
        <input
          name="expiryDate"
          type="date"
          value={product.expiryDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;