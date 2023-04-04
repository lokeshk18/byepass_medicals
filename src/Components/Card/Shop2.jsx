import React, { useEffect, useState } from 'react';
import JsonData from './data2.json';
import Product from './Product';
import Card from './Card';

 
const Shop2 = () => {
    const [product, setProduct] = useState([]);
 
    const [card, setCard] = useState([]);
 
    useEffect(() => {
        setProduct(JsonData);
    }, []);
 
    const addProduct = (product) => {
        const newCard = [...card, product]
        setCard(newCard);
    }
    return (
        <div className="container-fluid d-flex">
            <div className="col product-area border-right">
 
                {
                    product.map(pd => <Product product={pd} addProduct={addProduct}></Product>)
                }
 
            </div>

        </div>
    );
};
 
export default Shop2;