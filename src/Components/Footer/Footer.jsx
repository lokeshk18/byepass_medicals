// import logo from './logo.svg';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer" style={{backgroundColor:"#1f5156"}}>
    <div className='foot'>
    <div className="container">
  <div className="row">
  <div className="col p-5">
      <h6 className='head'>Sections</h6><br/>
      <a href="#">Medicine Cabinet</a><br/>
      <a href="#">Natural Health</a><br/>
      <a href="#">Beauty Products</a><br/>
      <a href="#">Personal Care</a><br/>
      <a href="#"> Special Offers</a>

    </div>
  
    <div className="col p-5">
     <h6 className='head'> Customer Service</h6><br/>
      <a href="#">About Us</a><br/>
      <a href="#">Contact Us</a><br/>
      <a href="#">Pricing</a><br/>
      <a href="#">Payment Information</a><br/>

    </div>
    <div className="col p-5">
      <h6 className='head'>Shopping</h6><br/>
      <a href="#">Browse By Brand</a><br/>
      <a href="#">Browse By Condition</a><br/>
      <a href="#">Delivery Information</a><br/>
      <a href="#">Loyaity Rewards</a><br/>
    </div>
    <div className="col pt-5">
     <h6 className='head'> Stay Updated</h6><br/>
      <div className="input-group">
  <input type="email" className="form-control" style={{width:"100%"}} placeholder="Your Email"/>  
  <div className="input-group-append">
    <button className="btn btn-secondary"  type="button">Send</button>
  </div>
</div>
<br/>
<h6 className="head">Follow us on:</h6>
  <div className='icons'>
    <i class="fa-brands fa-instagram" style={{color:"#e6e6e6"}}></i>
    <i class="fa-brands fa-facebook" style={{color:"#e6e6e6"}}></i>
    <i class="fa-brands fa-twitter" style={{color:"#e6e6e6"}}></i>
    <i class="fa-regular fa-envelope" style={{color:"#e6e6e6"}}></i>
  </div>


    </div>
    </div>
</div></div>
    </div>
  );
}

export default Footer;