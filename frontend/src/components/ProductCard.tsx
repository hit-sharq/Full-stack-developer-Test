import React from 'react';
import './ProductCard.css';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  variants: string[];
  available: boolean;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      {product.imageUrl && (
        <div className="product-image-container">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <div className="product-image-overlay"></div>
        </div>
      )}
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
        </div>
        <div className="product-details">
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="availability-indicator">
            <span className={`availability-dot ${product.available ? 'available' : 'unavailable'}`}></span>
            <span className="availability-text">{product.available ? 'In Stock' : 'Out of Stock'}</span>
          </div>
        </div>
        {product.variants.length > 0 && (
          <div className="variants-section">
            <p className="variants-label">Variants:</p>
            <div className="variants-list">
              {product.variants.map((variant, index) => (
                <span key={index} className="variant-tag">
                  {variant}
                </span>
              ))}
            </div>
          </div>
        )}
        <button
          className={`add-to-cart-btn ${product.available ? 'available' : 'unavailable'}`}
          disabled={!product.available}
        >
          {product.available ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
