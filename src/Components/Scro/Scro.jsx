import React from "react"
import "./Scro.scss"
import fast from "../../assets/fast.webp"
import crem from "../../assets/crem.webp"
import lix from "../../assets/lix.webp"
import der from "../../assets/der.webp"
import bil from "../../assets/bil.webp"

function Scro() {
    return (  
    <section className="scroll-container  shadow">  
  <div class="cards-wrapper">

    <div class="product-card">
        <div className="img-container shadow">
          <img src={fast}/>
        </div>
        <div className="brand">
        Fast&Up
           </div>
        <div>
        <p className="p-0 m-0">Fortify Calcium Vitamin D3 Tablet</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹49.00</del></p>
          <p className="m-0">₹24.45 <span style={{color:"red"}} >(32%)</span></p>
        </div>
    </div>

    <div class="product-card">
        <div className="img-container shadow">
          <img src={crem} />
        </div>
        <div className="brand">
          Cremadiet duo
           </div>
        <div>
        <p className="p-0 m-0">Mixed Fruit Of 150gm Powder</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>540.00</del></p>
          <p className="m-0">₹500.8 <span style={{color:"red"}} >(15%)</span></p>
        </div>
      </div>

      <div class="product-card">
        <div className="img-container shadow">
          <img src={lix} />
        </div>
        <div className="brand">
        Lizol Lavender
           </div>
        <div>
        <p className="p-0 m-0">Disinfectant Floor Cleaner</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹144.00</del></p>
          <p className="m-0">₹110.5 <span style={{color:"red"}} >(28%)</span></p>
        </div>
      </div>

      <div class="product-card">
        <div className="img-container shadow">
          <img src={der} />
        </div>
        <div className="brand">
        Dermadew
           </div>
        <div>
        <p className="p-0 m-0">Derma Baby Soap 75gm </p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹89.00</del></p>
          <p className="m-0">₹124.45 <span style={{color:"red"}} >(25%)</span></p>
        </div>
      </div>

      <div class="product-card">
        <div className="img-container shadow">
          <img src={bil} />
        </div>
        <div className="brand">
        Biluma 
           </div>
        <div>
        <p className="p-0 m-0">Skin Lightening Of 45gm</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹₹700.00</del></p>
          <p className="m-0">₹640.45 <span style={{color:"red"}} >(20%)</span></p>
        </div>
      </div>

    </div>
  </section>
    );
}

export default Scro;