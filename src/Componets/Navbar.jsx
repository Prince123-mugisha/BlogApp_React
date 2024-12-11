import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between font-sans bg-gray-100 p-6 rounded-lg mt-3 pt-3'>
      <h1 className='font-bold text-blue-400'>BLOGS BOOK</h1>
      <nav>
        <ul className='flex space-x-[90px] absolute right-80'>
          <li>
            <Link 
              className='hover:border-b-2 hover:border-blue-400 transition duration-500 ease-in-out' 
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              className='hover:border-b-2 hover:border-blue-400 transition duration-500 ease-in-out' 
              to="/create"
            >
              Add New Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
