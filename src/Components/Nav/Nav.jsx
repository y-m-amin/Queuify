import { useEffect, useState } from 'react';
import '../../App.css';

const Nav = () => {
  const [theme, setTheme] = useState('fantasy');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'fantasy';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'fantasy' ? 'sunset' : 'fantasy';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <div className='navbar max-w-100% bg-base-100 shadow-sm flex flex-col justify-center items-center px-10 xl:flex-row lg:justify-between'>
        <div className=' '>
          <a className='btn btn-ghost text-xl'>Queuify</a>
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
            <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
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

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className='btn btn-ghost btn-circle ml-2'
            aria-label='Toggle theme'
          >
            {theme === 'fantasy' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            )}
          </button>

          <a className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-0 px-4 py-2 text-white ml-2'>
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
