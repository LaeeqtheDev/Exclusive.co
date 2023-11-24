import React from 'react';
import { Link } from 'react-router-dom';

function Card({ product }) {
  const handleClick = () => {
    console.log('Clicked on product with ID:', product.id);
  };

  return (
    <Link
    to={`/product/${product.id}`}
   
      className="w-1/3 md:w-1/3 px-4 mb-4 md:mb-0 no-underline text-black"
      onClick={handleClick}
    >
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-xs mx-10">
        <img className="w-full h-64 object-contain" src={product.image} alt={product.name} />
        <div className="p-6">
          <h2 className="text-2xl font-semibold whitespace-nowrap">{product.title}</h2>
          <p className="mb-2 font-semibold"><span className='text-red-500'>Category:</span> {product.category}</p>
          <p className="text-gray-700 mb-2 font-semibold"><span className='text-red-500'>Price:</span> ${product.price}</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Add to Wishlist
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
