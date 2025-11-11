import React, { useEffect, useState } from 'react';

const useData = () => {
     const [categorys, setCategory] = useState([])
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch("/Category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        fetch("/Products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return {categorys,products}
};

export default useData;