import React from 'react';
import './card.css';
import { Button } from 'react-bootstrap';
 
const Card = (props) => {
    const card = props.card;
     
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + Number(product.price);
    }
 
    let shipping = 0;
    if(total > 10){
        shipping = 0;
    }
    else if (total > 5) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2); 
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div className="summary-box shadow-sm" style={{marginTop:"100px"}}>
            <h3 className="summary-title">Order Summary</h3> <hr/>
            <h5>Items Ordered: {card.length}</h5>
            <h5>Product Price: ${total}</h5>
            <h5><small>Shipping Cost: ${shipping}</small></h5>
            <h5><small>Tax + vat: ${tax}</small></h5>
            <h5>Total Price: ${grandTotal}</h5>
            <Button variant="success mt-2" style={{marginLeft:"80px"}}>Buy Now</Button>
        </div>
    );
};
 
export default Card;