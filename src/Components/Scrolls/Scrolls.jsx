import React from "react"
import "./Scrolls.scss"
function Scrolls() {
  const arr= [1,2,3,4,1,1]
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
      </div>
    ))}
    
  </div>
</section>
     );
    }
export default Scrolls;