import React, { useState, useEffect } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Log the fetched data to the console
        setCategories(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='mt-5 m-6 p-6 mx-auto container'>
        <div>
          <h1 className='my-2 font-bold text-3xl'>Categories</h1>
        </div>
        <div className='flex flex-wrap mt-12'>
          {categories.map((category, index) => (
            <CategoriesCard key={index} category={category} className='mb-4 mr-4 ' />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
