import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.scss';
import img from "../../assets/Doctors.gif"
const Home=()=>{
return (
<div className='home-page-container'>
    <Navbar/>
     <div className="row">
    <div className="col-6 home-page-right"> 
        <p>Keep Yourself Healthy And Fit <br/> with Right Medicine </p>  
        <button className='btn btn-success'>Get Started</button>
    </div>  
        <div className="col-6">
        <img src={img} alt="Doctor gif"  />
        </div>    
        </div>   
        </div>
)
}
export default Home 