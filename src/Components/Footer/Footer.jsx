import React from 'react';
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <div className='bg-black mt-10 '>
        <footer className='max-w-3/4 footer  lg:footer-horizontal  bg-black text-base-content p-10 justify-between mx-auto border-b-1 border-gray-800'>
          <aside className='max-w-sm'>
            <h6 className=' text-2xl font-bold text-white my-4'>
              CS—Ticket System
            </h6>
            <p className='text-[#A1A1AA] font-regular '>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </aside>
          <nav>
            <h6 className='text-xl font-medium text-white my-4'>Company</h6>
            <a className='link link-hover text-[#A1A1AA]'>About us</a>
            <a className='link link-hover text-[#A1A1AA]'>Our Mission</a>
            <a className='link link-hover text-[#A1A1AA]'>Contact</a>
          </nav>
          <nav>
            <h6 className='text-xl font-medium text-white my-4'>Services</h6>
            <a className='link link-hover text-[#A1A1AA]'>Product & Services</a>
            <a className='link link-hover text-[#A1A1AA]'>Customer Stories</a>
            <a className='link link-hover text-[#A1A1AA]'>Download Apps</a>
          </nav>

          <nav>
            <h6 className='text-xl font-medium text-white my-4'>Information</h6>
            <a className='link link-hover text-[#A1A1AA]'>Privacy Policy</a>
            <a className='link link-hover text-[#A1A1AA]'>Terms & Conditions</a>

            <a className='link link-hover text-[#A1A1AA]'>Join Us</a>
          </nav>
          <nav>
            <h6 className='text-xl font-medium text-white my-4'>
              Social Links
            </h6>
            <a className='flex items-center gap-2 link link-hover text-[#A1A1AA]'>
              <span className='bg-white rounded-full p-1'>
                <FaXTwitter className='text-black w-5 h-5' />
              </span>
              @CS--Ticket System
            </a>
            <a className='flex items-center gap-2 link link-hover text-[#A1A1AA]'>
              <span className='bg-white rounded-full p-1'>
                <FaLinkedinIn className='text-black w-5 h-5' />
              </span>
              @CS--Ticket System
            </a>
            <a className='flex items-center gap-2 link link-hover text-[#A1A1AA]'>
              <span className='bg-white rounded-full p-1'>
                <FaFacebookF className='text-black w-5 h-5' />
              </span>
              @CS--Ticket System
            </a>
            <a className='flex items-center gap-2 link link-hover text-[#A1A1AA]'>
              <span className='bg-white rounded-full p-1'>
                <FaEnvelope className='text-black w-5 h-5' />
              </span>
              support@cst.com
            </a>
          </nav>
        </footer>
      </div>
      <p className='text-white font-regular text-center py-4  bg-black'>
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
