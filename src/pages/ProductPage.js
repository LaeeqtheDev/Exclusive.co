import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

// Product component that renders a product card
const Product = ({ name, price, description, image }) => {
  // ... (unchanged code)
};

// ProductPage component that renders the product catalog
const ProductPage = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.product) {
    // If no state or product data, you can handle it accordingly
    return <div>No product data found</div>;
  }

  const { title, price, description, image } = state.product;

  return (
    <>
      <Header />
      <div className="flex container items-center m-auto px-6">
        <Product name={title} price={price} description={description} image={image} />
      </div>
    </>
  );
};

export default ProductPage;
