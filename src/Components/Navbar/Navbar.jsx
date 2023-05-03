import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
function Navbar(){
    return(
       <div className="Navbar-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={logo}  style={{width:"50px",height:"50px"}} alt="" />
    <Link className="navbar-brand nav-color" to="./Home" style={{color:"rgb(193, 230, 213)",fontFamily: "sanserif",fontSize:"22px",marginLeft:"20px"}}>BYEPASS MEDICALS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <ul className="navbar-nav">     
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home" style={{color:"#c1e6d5",marginRight:"10px"}}><i class="fa-solid fa-house" style={{marginRight:"5px"}}></i> Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about" style={{color:"#c1e6d5"}}><i class="fa-sharp fa-solid fa-address-card" style={{marginRight:"5px"}}></i> About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" style={{color:"#c1e6d5"}}><i class="fa-solid fa-arrow-right-to-bracket" style={{marginRight:"5px"}}></i> Login</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/register" style={{color:"#c1e6d5"}}><i class="fa-solid fa-arrow-up-right-from-square" style={{marginRight:"5px"}}></i> Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div> 
    )
}
export default Navbar;