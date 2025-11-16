import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/shopNow/${product.id}`}><div className='relative border border-gray-200  rounded-md'>
            <img src={product.image} alt="" srcset="" />
            {product.discount > 0 && (
                <span className="ml-auto absolute top-3 left-3 bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                    -{product.discount}%
                </span>
            )}
            <div className='p-3 '>
                <p className='text-sm text-gray-400'>{product.categoryName}</p>
                <p className='font-semibold text-gray-700'>{product.name}</p>
                <div className='flex gap-1 py-2 text-sm text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='flex  gap-3 '>
                    <p className='cp flex items-center'>{product.price}<TbCurrencyTaka /></p>
                    <p className='line-through flex items-center text-gray-400'>{product.mrp} <TbCurrencyTaka /></p>
                </div>
               
            </div>

        </div></Link>
    );
};

export default ProductCard;