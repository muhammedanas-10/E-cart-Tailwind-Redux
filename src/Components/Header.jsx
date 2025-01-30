import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ insideHome }) => {
  const userWishlist = useSelector(state => state.wishlistReducer);
  const userCart = useSelector(state => state.cartReducer); // Assuming you have a cartReducer

  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
      <Link className='text-2xl font-bold' to={'/'}>
        <i className='fa-solid fa-truck-fast me-2' aria-label='Home'></i> Daily Cart
      </Link>
      <ul className='flex-1 text-right'>
        {insideHome && (
          <li className='list-none inline-block px-5'>
            <input
              style={{ width: '300px' }}
              className='rounded p-2'
              type='text'
              placeholder='Search for product'
              aria-label='Search'
            />
          </li>
        )}
        <Link to={'/wishlist'}>
          <li className='list-none inline-block px-5'>
            <i className='fa-solid fa-heart text-red-600' aria-label='Wishlist'></i> Wishlist{' '}
            <span className='bg-black text-white rounded p-1'>{userWishlist?.length}</span>
          </li>
        </Link>
        <Link to={'/cart'}>
          <li className='list-none inline-block px-5'>
            <i className='fa-solid fa-cart-plus text-green-600' aria-label='Cart'></i> Cart{' '}
            <span className='bg-black text-white rounded p-1'>{userCart?.length || 0}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;