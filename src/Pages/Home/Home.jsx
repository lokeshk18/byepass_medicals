import React from 'react';
import './Home.scss';
import img from "../../assests/Doctors.gif"
const Home=()=>{
return (
<div className='home-page-container'>
     <div className="row">
    <div className="col-6">
        <p>Keep Yourself Healthy And Fit <br/> with Right Medicine </p>  
    </div>  
        <div className="col-6">
        <img src={img} alt="Doctor gif" />
        </div>
        
        </div>  
       
</div>
)
}
export default Home 