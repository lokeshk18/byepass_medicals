// import logo from './logo.svg';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
    <>
    <div className="container">
  <div className="row">
  <div className="col p-5">
      <h6>Sections</h6><br/>
      <a href="#">Medicine Cabinet</a><br/>
      <a href="#">Natural Health</a><br/>
      <a href="#">Beauty Products</a><br/>
      <a href="#">Personal Care</a><br/>
      <a href="#"> Special Offers</a>

    </div>
  
    <div className="col p-5">
     <h6> Customer Service</h6><br/>
      <a href="#">About Us</a><br/>
      <a href="#">Contact Us</a><br/>
      <a href="#">Pricing</a><br/>
      <a href="#">Payment Information</a><br/>

    </div>
    <div className="col p-5">
      <h6>Shopping</h6><br/>
      <a href="#">Browse By Brand</a><br/>
      <a href="#">Browse By Condition</a><br/>
      <a href="#">Delivery Information</a><br/>
      <a href="#">Loyaity Rewards</a><br/>
    </div>
    <div className="col pt-5">
     <h6> Stay Updated</h6><br/>
      <div className="input-group">
  <input type="email" className="form-control" placeholder="Your Email"/>  
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Send</button>
  </div>
</div>
<br/>
<h6>Follow Us:</h6><br/>
<a href ="#">Facebook</a>| <a href="#">Twitter</a>| <a href="#">Gmail</a>| <a href="#">Instagram</a>
    </div>
    </div>
</div>
    </>
    </div>
  );
}

export default Footer;