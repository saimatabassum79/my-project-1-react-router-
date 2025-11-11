import React from 'react';
import Heading from '../../Shared/Heading';
import useData from '../../Hooks/useData';
import ProductCard from '../../Shared/ProductCard';

const DealProduct = () => {
    const {products} = useData();
    return (
        <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 '>
             <div>
                    <Heading heading="Day of " colorHeading="The deal" description="Don't wait. The time will never be just right." ></Heading>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  my-6 justify-center'>
                    {
                        products.slice(-5).map(product=><ProductCard key={product} product={product}></ProductCard>)
                    }
                </div>
        </div>
    );
};

export default DealProduct;