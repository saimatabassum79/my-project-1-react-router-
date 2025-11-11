
import useData from '../../Hooks/useData';
import { Link } from 'react-router';



const HomeCategory = () => {
    const {categorys}=useData();
    
    return (
         <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 mt-24 '>
           <div className='grid lg:grid-cols-6 grid-cols-2  justify-center gap-3 lg:gap-3 sm:gap-6 md:gap-8 '>
            {categorys.map(category=>(
            <Link to="/shop" >
                <div className='flex hover:scale-110 transition-all hover:duration-500 flex-col items-center text-center bg-gray-100 rounded-md px-6 sm:px-12 md:px-16 py-3 '>
                    <img className='w-10 h-10 mb-3' src={category.image} alt="" />
                    <p className='text-gray-600'>{category.name}</p>
                    <p className='text-sm text-gray-400'>{category.items} Items</p>
                </div>
                </Link>
            ))}
           </div>
        </div>
    );
};

export default HomeCategory;