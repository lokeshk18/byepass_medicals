import React from 'react'
import './Register.css'
import Navbar from '../../Components/Navbar/Navbar';
const Register = () => {
  return (
  <div>
     <Navbar/>
    <div className="container1">
      
    <div className="form-box">
      <div className="header-form">
        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
        <div className="image">
        </div>
      </div>
      <div className="body-form">
       <form>
 <div className="input-group mb-3">
<div className="input-group-prepend">
<span className="input-group-text" style={{borderRadius:"0%",height:"40px"}}><i class="fa fa-user"></i></span>
</div>
<div className='row'>
<input type="text" className="form-control" style={{borderLeft:"none",borderRadius:"0%"}} placeholder="Username" />
</div>
</div>
<div className="input-group mb-3">
<div className="input-group-prepend">
<span className="input-group-text" style={{height:"40px",border:"none",borderRadius:"0%"}}><i class="fa fa-lock"></i></span>
</div>
<div className='row'>
<input type="text" style={{borderLeft:"none",borderRadius:"0%"}} className="form-control" placeholder="Password" />
</div>
</div>
<button type="button" className="btn btn-primary btn-block btn2">LOGIN</button>
<div className="message">
<div><input type="checkbox" /> Remember ME</div>
<div><a href="#" >Forgot your password</a></div>
</div>
</form>
        <div className="social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter-square"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
        </div>
      </div>
    </div>
   </div>
   </div> 
  )
}

export default Register