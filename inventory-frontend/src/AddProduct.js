import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price: parseFloat(price), quantity: parseInt(quantity) };
    try {
      const res = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      if (res.ok) {
        alert('Product added!');
        setName('');
        setPrice('');
        setQuantity('');
      } else {
        alert('Error adding product');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required type="number" step="0.01" />
      <input value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" required type="number" />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;