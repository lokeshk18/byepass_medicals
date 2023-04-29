import React from "react";
import './Brands.scss'
function Brands(){
  
        const arr= [1,2,3,4,1]
    return (
    
    <section className="scroll-container  shadow">
  
  <div class="cards-wrapper ">
    {arr.map((a,idx)=>(
    <div class="product-card" key={idx}>
        <div className="img-container shadow">
          <img src="https://cms-contents.pharmeasy.in/carousel_item/7a381fcb6e9-App_dettol-min.png?dim=1440x0" />
        </div>
        <div className="brand">
          Dettol
           </div>
        {/* <div>
        <p className="p-0 m-0">Hairbless Strip Of 10 Tablets</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹299.00</del></p>
          <p className="m-0">₹164.45 <span style={{color:"red"}} >(45%)</span></p>
        </div> */}
      </div>
    ))}
    
  </div>
</section>
     );
   
}
export default  Brands;