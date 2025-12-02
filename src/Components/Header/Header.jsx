import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import logo from '../../assets/image/logo.png';
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { BiCategory } from 'react-icons/bi';
import { LuShoppingCart } from 'react-icons/lu';
import { NavLink, Link } from 'react-router';
import { HiMenu, HiX } from 'react-icons/hi';

// 🟢 Redux import
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🟢 Redux state থেকে cart quantity নেওয়া
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div>
      {/* top header */}
      <div className="bg-[#F8F8FB] py-2">
        <div className="flex flex-wrap justify-between items-center container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
          <div className="flex items-center gap-4 sm:gap-8 md:gap-12 ct">
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk />
              <p className="text-[12px] ct">01753923093</p>
            </div>
            <div className="flex items-center gap-2">
              <BsWhatsapp />
              <p className="text-[12px]">01322840808</p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-[12px] ct">World's Fastest Online Shopping Destination</p>
          </div>
          <div className="hidden md:flex items-center ct text-[12px] gap-5">
            <p>Help?</p>
            <p>Track Order?</p>
            <p>English</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>

      {/* middle header */}
      <div className='flex flex-wrap items-center py-2 justify-between container mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
        <img className='w-16 md:w-22' src={logo} alt="Logo" />

        {/* Search */}
        <div className='w-full md:w-auto order-3 md:order-2 mt-4 md:mt-0'>
          <label className="input w-full relative">
            <svg className="h-[1em] absolute left-2 top-1/2 -translate-y-1/2 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className='w-full lg:w-100 pl-8 py-1  rounded-md' required placeholder="Search . . ." />
          </label>
        </div>

        <div className='flex gap-5 order-2 md:order-3 items-center'>
          {/* Account */}
          <div className='flex items-center gap-1'>
            <CiUser className='text-3xl' />
            <div className='hidden md:block'>
              <p className='ct text-xs'>Account</p>
              <div className="flex gap-2">
                <Link to="/login" className='text-sm text-[#4B5966]'>LOGIN</Link>
                <p>/</p>
                <Link to="/register" className='text-sm text-[#4B5966]'>REGISTER</Link>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className='flex items-center gap-1 relative cursor-pointer'>
            <CiShoppingCart className='text-3xl' />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 left-3 bgp text-white text-xs px-2 py-[2px] rounded-full">
                {totalQuantity}
              </span>
            )}
            <div className='hidden md:block'>
              <p className='ct text-sm'>Cart</p>
              <div className="flex gap-2">
                <span className='text-sm text-[#4B5966]'>View Cart</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* navbar */}
      <div className='border-y py-2 border-gray-200'>
        <div className='flex justify-between items-center container mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
          <div className='flex hover:scale-110 transition-all cursor-pointer hover:duration-500 items-center gap-2 bg-[#5CAF90] text-white py-2 px-6 rounded-md'>
            <BiCategory />
            <p>All Category</p>
          </div>
          <div className='hidden md:flex gap-12'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop Now</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className='hidden md:flex cursor-pointer hover:scale-110 transition-all hover:duration-500 items-center gap-2 bg-[#5CAF90] text-white py-2 px-6 rounded-md'>
            <LuShoppingCart />
            <p>Shop Now</p>
          </div>
          <div className='md:hidden flex items-center'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className='md:hidden mt-4'>
            <div className='flex flex-col items-center gap-4'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop Now</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <div className='flex cursor-pointer hover:scale-110 transition-all hover:duration-500 items-center gap-2 bgp text-white py-2 px-6 rounded-md'>
                <LuShoppingCart />
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
