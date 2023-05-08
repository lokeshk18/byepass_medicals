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
    <div className='container' style={{margin:"10px",padding:"0px 85px 0px 80px"}}>
        <pre>{`   
              You can explore our range of products,   
           learn more about  benefits and features,and   
  make informed decisions about which products are right for you. 
We are committed to providing excellent customer service and support,and  
We stand behind our products with a satisfaction guarantee . Thank you !! 
   `
            }           
 </pre>  </div>
        <button className='btn but1'><Link to="/home" style={{textDecoration:"none",color:"white",padding:"10px"}}>Get Started </Link></button>
    </div>
        <div className="col-6"> 
        <img src={img} alt="Doctor gif"/>
        </div>    
        </div>   
        </div>
)
}
export default Lander;