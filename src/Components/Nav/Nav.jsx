import React from 'react';
import '../../App.css';

const Nav = () => {
  return (
    <div>
      <div className='navbar max-w-100% bg-white shadow-sm text-black flex flex-col justify-center  items-center px-10 xl:flex-row lg:justify-between '>
        <div className=' '>
          <a className='btn btn-ghost text-xl'>CS—Ticket System</a>
        </div>
        <div className='navbar-end flex flex-col-reverse xl:flex-row items-center'>
          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <div className='dropdown lg:hidden'>
            <div role='button' className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />{' '}
              </svg>
            </div>
            <ul className='menu menu-sm dropdown-content bg-white text-black  rounded-box z-[1] mt-3 w-52 p-2 shadow'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-0 px-4 py-2 text-white ml-2'>
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
