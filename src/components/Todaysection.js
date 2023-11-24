import React, { useState, useEffect } from 'react';
import Rectangle from '../assets/Rectangle 18.png';
import Card from './Card';

const Todaysection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Log the fetched data to the console
        setProducts(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='mt-5 m-2 p-6 mx-auto container  '>
        <div className='flex items-end gap-1'>
          <img src={Rectangle} alt='' />
          <h1 className='text-red-500 font-semibold'>Today's</h1>
        </div>

        <div>
          <h1 className='my-2 font-bold text-3xl'>Flash Sales</h1>
        </div>
        <div className='flex flex-row container right-0 mr-28 overflow-auto' style={{ overflowX: 'scroll', scrollbarWidth: 'thin' }}>
          {products.map((product) => (
            <Card key={product.id} product={product} className='mr-12' />
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center mx-auto mt-6'>
        <button className='bg-red-500 py-2 px-9 rounded-lg text-white hover:bg-red-600'>
          View All Products
        </button>
      </div>
    </>
  );
};

export default Todaysection;
