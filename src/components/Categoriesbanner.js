import React, { useState } from 'react';
import Banner from '../assets/banner.png';

const Categoriesbanner = () => {
  const [menDropdown, setMenDropdown] = useState(false);
  const [womenDropdown, setWomenDropdown] = useState(false);

  const handleWomenClick = () => {
    setWomenDropdown(!womenDropdown);
    setMenDropdown(false); // Close the Men's Fashion dropdown
  };

  const handleMenClick = () => {
    setMenDropdown(!menDropdown);
    setWomenDropdown(false); // Close the Women's Fashion dropdown
  };

  return (
    <div className='mx-auto flex flex-col md:flex-row lg:flex-row justify-between container m-6 px-6'>
      <ul className='lg:flex flex-col lg:gap-4 sm:text-sm sm:gap-2 sm:flex md:mr-4 lg:mr-4'>
        <li className='relative'>
          <span
            onClick={handleWomenClick}
            className={`cursor-pointer ${womenDropdown && 'rotate-90'}`}
          >
            Women's Fashion <span>&gt;</span>
          </span>
          {womenDropdown && (
            <ul className='text-sm border rounded-lg bg-red-500 px-10 absolute z-10 text-white'>
              <li>Dresses</li>
              <li>Shoes</li>
              {/* Add more relevant text here */}
            </ul>
          )}
        </li>
        <li className='relative'>
          <span
            onClick={handleMenClick}
            className={`cursor-pointer ${menDropdown && 'rotate-90'}`}
          >
            Men's Fashion <span>&gt;</span>
          </span>
          {menDropdown && (
            <ul className='text-sm border rounded-lg bg-red-500 px-10 absolute z-10 text-white'>
              <li>Shirts</li>
              <li>Pants</li>
              {/* Add more relevant text here */}
            </ul>
          )}
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
      <div className='mt-4 md:mt-0 lg:mt-0'>
        <img className='object-contain w-full md:w-auto lg:w-auto' src={Banner} alt='banner' />
      </div>
    </div>
  );
};

export default Categoriesbanner;
