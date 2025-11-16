import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import logo from '../../assets/image/logo.png'
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { BiCategory } from 'react-icons/bi';
import { LuShoppingCart } from 'react-icons/lu';
import { NavLink } from 'react-router';
import { HiMenu, HiX } from 'react-icons/hi';

import { Link } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* top header */}
            <div className="bg-[#F8F8FB] py-2 ">

                <div className="flex flex-wrap justify-between items-center container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 ">
                    <div className="flex items-center gap-4 sm:gap-8 md:gap-12 ct ">
                        <div className="flex items-center gap-2">
                            <MdOutlinePhoneInTalk />
                            <p className="text-[12px] ct ">01753923093</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsWhatsapp />
                            <p className="text-[12px] ">01322840808</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-[12px] ct">World's Fastest Online Shopping Destination</p>
                    </div>
                    <div className="hidden md:flex items-center ct text-[12px] gap-5">
                        <p>Help?</p>
                        <p>Trac Order?</p>
                        <p>English</p>
                        <p>Contact Us</p>
                    </div>
                </div>

            </div>
            {/* middle header */}
            <div className='flex flex-wrap items-center py-2 justify-between container  mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
                <img className='w-16 md:w-22' src={logo} alt="" />
                <div className='w-full md:w-auto order-3 md:order-2 mt-4 md:mt-0'>
                    <label className="input w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className='w-full lg:w-100' required placeholder="Search . . ." />
                    </label>
                </div>
                <div className='flex gap-5 order-2 md:order-3'>
                    <div className='flex items-center gap-1'>

                        <CiUser className='text-3xl' />
                        <div className='hidden md:block'>
                            <p className='ct text-xs'>Account</p>
                            <div className="flex gap-2">
                                <Link to="/login" className='text-sm text-[#4B5966]'>LOGIN</Link>
                                <p className="ts">/</p>
                                <Link to="/register" className='text-sm text-[#4B5966]'>REGISTER</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>

                        <CiShoppingCart className='text-3xl' />
                        <div className='hidden md:block'>
                            <p className='ct text-sm'>Cart</p>
                            <div className="flex gap-2">

                                <Link to="/register" className='text-sm text-[#4B5966]'>Login</Link>
                            </div>
                        </div>
                    </div>

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
                        <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/shop">Shop Now</NavLink>
                        <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/about">About</NavLink>
                        
                        <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/contact">Contact</NavLink>
                    </div>
                    <div className='hidden md:flex  cursor-pointer hover:scale-110 transition-all hover:duration-500 items-center gap-2 bg-[#5CAF90] text-white py-2 px-6 rounded-md'>
                        <LuShoppingCart />
                        <p>Shop Now</p>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
                            {isOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className='md:hidden mt-4'>
                        <div className='flex flex-col items-center gap-4'>
                            <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/shop">Shop Now</NavLink>
                            <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/blog">Blog</NavLink>
                            <NavLink className={({ isActive }) => isActive ? `cp` : ``} to="/contact">Contact</NavLink>
                            <div className='flex  cursor-pointer hover:scale-110 transition-all hover:duration-500 items-center gap-2 bgp text-white py-2 px-6 rounded-md'>
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