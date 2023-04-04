import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Lander.scss';
import img from "../../assets/Doctors.gif"
import { Link } from 'react-router-dom';

const Lander=()=>{
return (
<div className='home-page-container'>
    <Navbar/>
     <div className="row">
    <div className="col-6 home-page-right"> 
        <p>Keep Yourself Healthy And Fit <br/> with Right Medicine </p>  
        <button className='btn btn-success'><Link to="/home" style={{textDecoration:"none",color:"whitesmoke"}}>Get Started</Link></button>
    </div>  
        <div className="col-6">
        <img src={img} alt="Doctor gif"  />
        </div>    
        </div>   
        </div>
)
}
export default Lander;