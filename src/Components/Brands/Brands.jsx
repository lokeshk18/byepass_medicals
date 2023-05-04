import React from "react";
import './Brands.scss'
function Brands(){
    const arr= [1,2,3,4,1]
    return (
    <section className="scroll-container  shadow">
    <div class="cards-wrapper ">
    
    <div class="product-card" >
        <div className="img-container shadow">
          <img  className="image-brand" src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ea8e4d7c-3d03-4e6e-8365-85624b874c80.png" />
        </div>
        <div className="brand">
          Optinumn Nutrition
        </div> 
      </div>
      <div class="product-card" >
        <div className="img-container shadow">
          <img  className="image-brand" src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fcc05fb2-b04f-412f-9cc4-d4b07a3cb609.png" />
        </div>
        <div className="brand">
        Mamaeearth
        </div>
      </div>
      <div class="product-card" >
        <div className="img-container shadow">
          <img  className="image-brand" src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d318d3d6-447f-45ca-bb6a-a81e06c84b8b.png" />
        </div>
        <div className="brand">
         Mr.Morepen
        </div>
      </div>
      <div class="product-card" >
        <div className="img-container shadow">
          <img  className="image-brand" src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/94ec99ab-9b49-4b2f-baf9-37abfb40b37e.png" />
        </div>
        <div className="brand">
         Hanasplat
        </div>
      </div>
      <div class="product-card" >
        <div className="img-container shadow">
          <img className="image-brand" src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/546d21fb-6c20-4adb-b4dc-4f7ffca65e02.png" />
        </div>
        <div className="brand">
         Contour
        </div>
      </div>
      <div class="product-card" >
        <div className="img-container shadow">
          <img  className="image-brand" src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/db74c8e2-cc74-4fa9-af8b-f38424eae479.png" />
        </div>
        <div className="brand">
          Dr.Willmar Schwabe
        </div>
      </div>
      <div class="product-card" >
        <div className="img-container shadow">
          <img className="image-brand" src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/7e9ca3f3-9ac4-4b45-acda-c3402fa439da.png" />
        </div>
        <div className="brand">
          Dabur
        </div>
      </div>
    
  </div>
</section>
     );
   
}
export default  Brands;
