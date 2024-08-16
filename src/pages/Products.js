import React, { useEffect, useState } from 'react';
import Product from '../components/Product'; // Assuming a Product component exists
import { getProducts } from '../Api'; // Import the getProducts function from your API module
import './Products.css'; // Add custom styles here

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(); // Fetching products from the API
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
