import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div
      className="card mb-3"
      style={{
        width: '18rem',
        position: 'relative', // Position relative to position the pseudo-element
        overflow: 'hidden', // Ensure pseudo-element doesn't overflow the card
        border: '1px solid #ddd',
        borderRadius: '1rem',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '70px',
        marginLeft: '10px',
      }}
    >
      <div
        className="card-background"
        style={{
          position: 'absolute', // Position absolute to cover the entire card
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(http://localhost:8083/images/${product.imageId})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2, // Set the opacity of the background image
          zIndex: -1, // Ensure the background is behind the text
        }}
      />
      <div className="card-body text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h5 className="card-title" style={{ color: '#333' }}>{product.name}</h5>
        <p className="card-text" style={{ fontSize: '0.9rem', color: '#666' }}>
          {product.description}
        </p>
        <p className="card-text" style={{ fontWeight: 'bold' }}>
          Price: <span style={{ color: 'green' }}>${product.price}</span>
        </p>
        <button
          className="btn btn-primary"
          style={{ marginTop: '10px' }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
