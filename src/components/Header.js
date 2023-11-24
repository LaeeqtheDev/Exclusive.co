import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import { AiOutlineShoppingCart, AiOutlineStar, AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { IoExitOutline } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import UserPlaceholder from '../assets/icons/user.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      // You can redirect the user or perform other actions after signing out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isCurrentPage = (path) => {
    return window.location.pathname === path;
  };

  return (
    <div className='flex md:flex-row m-6 px-6 container mx-auto justify-between items-center relative'>
      <h1 className='text-black text-2xl font-bold leading-normal tracking-wide'>Exclusive</h1>

      <div className={`absolute top-0 right-0 w-64 bg-white transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'scale-y-100' : 'scale-y-0'} md:static md:flex md:scale-y-100`}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='absolute top-0 right-0 mt-2 mr-2 md:hidden'>
          {isSidebarOpen ? <AiOutlineCloseCircle size={20} /> : '☰'}
        </button>
        <ul className='flex flex-col gap-4 p-4 md:flex-row md:gap-4 md:p-0'>
          <li className={`hover:underline hover:underline-offset-4 ${isCurrentPage('/') && 'underline underline-offset-4'}`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`hover:underline hover:underline-offset-4 ${isCurrentPage('/contact') && 'underline underline-offset-4'}`}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className={`hover:underline hover:underline-offset-4 ${isCurrentPage('/about') && 'underline underline-offset-4'}`}>
            <Link to='/about'>About</Link>
          </li>
          <li className={`hover:underline hover:underline-offset-4 ${isCurrentPage('/signup') && 'underline underline-offset-4'}`}>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </div>

      <div className='justify-center items-center gap-3 inline-flex relative'>
        <div className='flex gap-2'>
          <AiOutlineHeart size={25} className='text-black' />
          <AiOutlineShoppingCart size={25} className='text-black' />
        </div>

        {user ? (
          <div className='relative'>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img src={user.photoURL || UserPlaceholder} alt='user-profile' className='w-6 h-6 rounded-full cursor-pointer' />
            </button>

            {isDropdownOpen && (
              <ul className='absolute justify-center right-0 mt-2 backdrop-blur-lg border border-black rounded-lg gap-3 flex flex-col w-[250px] text-white '>
                <li className='flex items-center p-3 gap-2 hover:bg-red-500 text-white'>
                  <RxAvatar size={20} className='text-white ' />
                  <Link to='/profile' style={{ flex: '1' }}>
                    Manage my Account
                  </Link>
                </li>
                <li className='hover:bg-red-500 p-3 flex items-center gap-2 text-white'>
                  <BsBag size={20} className='text-white' />
                  <Link to='/dashboard'>My Order</Link>
                </li>
                <li className='hover:bg-red-500 p-3 flex items-center gap-2 text-white'>
                  <GiCancel size={20} className='text-white' />
                  <Link to='/dashboard'>My Cancellations</Link>
                </li>
                <li className='hover:bg-red-500 p-3 flex items-center gap-2 text-white'>
                  <AiOutlineStar size={20} className='text-white' />
                  <Link to='/dashboard'>My Reviews</Link>
                </li>
                <li className='hover:bg-red-500 p-3 flex cursor-pointer items-center gap-2 text-white' onClick={handleSignOut}>
                  <IoExitOutline size={20} className='text-white' />
                  Sign Out
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div>
            <img src={UserPlaceholder} alt='user' />
          </div>
        )}

        {!isSidebarOpen && (
          <button onClick={() => setIsSidebarOpen(true)} className='w-6 h-6 md:hidden'>
            ☰
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
