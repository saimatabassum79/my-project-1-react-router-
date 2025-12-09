import React from 'react';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';

import useData from '../Hooks/useData';
import Heading from '../Shared/Heading';
import ProductCard from '../Shared/ProductCard';

const SingleProductPage = () => {
    const { id } = useParams();
    const { products } = useData();
    const findProducts = products.find(p => p.id == id);

    return (
        <div className="px-4 sm:px-6 lg:px-24">
            {/* Product Detail Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-12">
                {/* Image */}
                <img
                    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-md"
                    src={findProducts?.image}
                    alt={findProducts?.name}
                />

                {/* Product Info */}
                <div className="w-full lg:w-1/2">
                    <p className="text-sm text-gray-500">{findProducts?.categoryName}</p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-1">
                        {findProducts?.name}
                    </h3>

                    {/* Ratings */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-12 mt-2">
                        <div className="flex gap-1 py-2 text-orange-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-sm sm:text-base text-gray-600">
                            Total Rating: {findProducts?.ratings}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-lg sm:text-2xl mt-2">
                        <p>Price: $ {findProducts?.price}</p>
                        <p className="line-through text-gray-400">$ {findProducts?.mrp}</p>
                    </div>

                    {/* Description & Details */}
                    <div className="mt-4">
                        <p className="text-sm sm:text-base mb-2">{findProducts?.description}</p>
                        <p className="font-semibold text-sm sm:text-base">
                            SKU: <span className="font-normal text-gray-600">{findProducts?.sku}</span>
                        </p>
                        <p className="font-semibold text-sm sm:text-base">
                            Stock: <span className="font-normal text-gray-600">{findProducts?.stock}</span>
                        </p>
                        <p className="font-semibold text-sm sm:text-base">
                            Closure: <span className="font-normal text-gray-600">{findProducts?.closure}</span>
                        </p>
                    </div>

                    {/* Weight Options */}
                    <div className="flex flex-wrap gap-2 mt-4 items-center">
                        <p className="font-semibold mr-2">Size:</p>
                        {findProducts?.weightOptions.map((w, index) => (
                            <span key={index} className="btn btn-xs bg-gray-800 text-gray-100">
                                {w}
                            </span>
                        ))}
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-4">
                        <div className="flex gap-4 border border-gray-200 px-4 py-2 rounded-md w-max">
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <button className="btn bgp border-none text-gray-100 mt-2 sm:mt-0">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Rated Products */}
            <div className="container mx-auto mt-16 px-0 sm:px-4 lg:px-0">
                <Heading
                    heading={"Top Rated"}
                    colorHeading={"Selling Products"}
                    description={"High-quality denim jeans for men with a comfortable fit"}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-12">
                    {products.slice(0, 5).map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
