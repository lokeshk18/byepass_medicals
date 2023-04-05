import React from 'react';
import './product.css';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Product2 = (props) => {
    const {name, image, price, categories} = props.product;   
    return (
        <div className="container">
            <div className="product-card shadow-sm">
            <img className="product-img img-fluid" src={image} alt=""/>
            <h5 className="categories">{categories}</h5>
            <h5 className="product-title">{name}</h5>
            <h5>Price: Rs.{price}</h5>
 
            <Button onClick={() => props.addProduct(props.product)}
                className="btn btn-success"> <Link to="/cart" style={{color:"whitesmoke"}}>Buy Now</Link>
            </Button> 
            </div>
        </div>
    );
};
 
export default Product2;