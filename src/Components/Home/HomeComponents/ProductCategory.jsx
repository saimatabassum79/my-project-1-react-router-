import React, { useState } from 'react';
import useData from '../../Hooks/useData';
import Heading from '../../Shared/Heading';
import ProductCard from '../../Shared/ProductCard';
import { TbCategory } from 'react-icons/tb';
import { Link } from 'react-router';

const ProductCategory = () => {
    const {categorys,products} = useData();
      const [select, SetSelect] = useState(null)
    const handleSelectCategoryId = (id) => {
        SetSelect(id)
    }
  const filterProduct = select? products.filter(product=>product.categoryId==select):products
    return (
        <div  className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24 '>
          <div className='flex items-center justify-between'>
                <Heading heading="Popular" colorHeading="Products" description="Shop online for new arrivals and get free shipping!"></Heading>
                <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4 md:mt-0'>
                   <div>
                    <p onClick={()=>handleSelectCategoryId(null)} className={`cursor-pointer ${!select ? 'cp font-bold' : ''}`}>All</p>
                   </div>
                  
                    {
                        categorys?.map(c=>(
                            <div key={c?.id}>
                               <p onClick={()=>handleSelectCategoryId(c.id)}  className={`cursor-pointer text-sm ${select===c.id ? 'cp font-bold' : ''}`}>{c?.name}</p>
                            </div>
                        ))
                    }
                   
                </div>
          </div>
          <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mb-4 mt-12'>
            {
              filterProduct 
              .sort((a, b) => b.rating - a.rating)
              .slice(0,10)
              .map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
          </div>
           <div className='flex justify-center'>
                <Link to="/shop">
                    <div className='flex cursor-pointer justify-center items-center bgp  py-4 px-8 rounded-md w-full sm:w-auto text-white font-semibold gap-3 '>
                        <p>View All Products</p>
                        <TbCategory />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCategory;