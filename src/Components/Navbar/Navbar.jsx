import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
function Navbar(){
    return(
       <div className="Navbar-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand nav-color" href="#" style={{color:"#17c272",fontFamily: "sanserif",fontSize:"25px",marginLeft:"20px"}}>BYEPASS MEDICALS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home" style={{color:"#c1e6d5"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" style={{color:"#c1e6d5"}}>Login</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/register" style={{color:"#c1e6d5"}}>Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div> 
    )
}
export default Navbar;