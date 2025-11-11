import React from 'react';
import Hero from './HomeComponents/Hero';
import HomeCategory from './HomeComponents/HomeCategory';
import ProductCategory from './HomeComponents/ProductCategory';
import LatestExclusive from './HomeComponents/LatestExclusive';
import DealProduct from './HomeComponents/DealProduct';
import Collection from './HomeComponents/Collection';
import Support from './HomeComponents/Support';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <HomeCategory></HomeCategory>
           <ProductCategory></ProductCategory>
           <LatestExclusive></LatestExclusive>
           <DealProduct></DealProduct>
           <Collection></Collection>
           <Support></Support>
        </div>
    );
};

export default Home;