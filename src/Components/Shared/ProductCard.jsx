import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router';
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSilec"; // <-- তোমার ফাইল path অনুযায়ী ঠিক করে নিও

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="relative border border-gray-200 rounded-md hover:shadow-lg duration-300">
            
            <Link to={`/shopNow/${product.id}`}>
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover rounded-t-md"
                />
            </Link>

            {product.discount > 0 && (
                <span className="ml-auto absolute top-3 left-3 bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                    -{product.discount}%
                </span>
            )}

            <div className="p-3">

                <p className="text-sm text-gray-400">{product.categoryName}</p>
                <p className="font-semibold text-gray-700">{product.name}</p>

                <div className="flex gap-1 py-2 text-sm text-orange-500">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <div className="flex gap-3 items-center">
                    <p className="cp flex items-center font-semibold text-gray-700">
                        {product.price}
                        <TbCurrencyTaka />
                    </p>
                    <p className="line-through flex items-center text-gray-400 text-sm">
                        {product.mrp}
                        <TbCurrencyTaka />
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">

                    {/* View Details Button */}
                    <Link
                        to={`/shopNow/${product.id}`}
                        className="flex-1 border border-gray-200 text-gray-800 text-sm py-2 rounded-md text-center hover:bg-gray-200 duration-200"
                    >
                        View Details
                    </Link>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAdd}
                        className="flex items-center justify-center gap-1 bgp cursor-pointer text-white text-sm px-3 rounded-md hover:bg-orange-600 duration-200"
                    >
                        <FaShoppingCart />
                        Add
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
