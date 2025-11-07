'use client';

import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './page.css';

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

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const fetchProducts = async (category?: string) => {
    try {
      setLoading(true);
      const url = category ? `/api/products?category=${encodeURIComponent(category)}` : '/api/products';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    fetchProducts(category || undefined);
  };

  const categories = [...new Set(products.map(p => p.category))];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading amazing products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <div className="error-icon">😵</div>
          <div className="error-title">Oops! Something went wrong</div>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">E-commerce Products</h1>
          <p className="page-subtitle">
            Discover our curated collection of premium products across various categories
          </p>
        </div>

        <div className="filter-section">
          <div className="filter-container">
            <label htmlFor="category" className="filter-label">
              Filter by Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="filter-select"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🛒</div>
            <div className="empty-title">No products found in this category.</div>
            <div className="empty-subtitle">Try selecting a different category or check back later!</div>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
