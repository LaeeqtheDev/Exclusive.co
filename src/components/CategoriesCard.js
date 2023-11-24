import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesCard({ category }) {
  const capitalizedCategory = category.toUpperCase();

  return (
    <Link
      to={{
        pathname: `/category/${category}`,
        state: { category: category }
      }}
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4 no-underline text-black"
    >
      <div className="bg-white border-2 hover:bg-red-500 hover:text-white overflow-hidden max-w-xs mx-2 md:mx-4">
        <div className="p-6">
          <h2 className="font-bold text-xl md:text-2xl items-center whitespace-nowrap">{capitalizedCategory}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CategoriesCard;
