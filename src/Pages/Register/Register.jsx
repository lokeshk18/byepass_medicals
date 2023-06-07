import React from 'react'
import axios from 'axios';
import './Register.css';
import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
const Register = () => {

  const [username, setUsername] = useState( "" )
    const [email, setEmail] = useState("" )
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    async function post(e) {
        e.preventDefault()
        const inputs = {
            username,
            email,
            address,
            password
        };
        try {
            const res = await axios.post("https://byepass-server.onrender.com/register", inputs);
            res.data && window.location.replace("/login");
        }
        catch (err) {
            console.log(err);
        }

    };

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
       <form onSubmit={post} method='POST'>
 <div className="input-group mb-3">
<div className="input-group-prepend">
<span className="input-group-text"  style={{borderRadius:"0%",height:"40px"}}><i class="fa fa-user"></i></span>
</div>
<div className='row'>
<input type="text" className="form-control"  value={username} onChange={e => setUsername(e.target.value)} style={{borderLeft:"none",borderRadius:"0%"}} placeholder="Username" />
</div>
</div>
<div className="input-group mb-3">
<div className="input-group-prepend">
<span className="input-group-text" style={{height:"40px",border:"none",borderRadius:"0%"}}><i class="fa fa-lock"></i></span>
</div>
<div className='row'>
<input type="text" style={{borderLeft:"none",borderRadius:"0%"}}  value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" />
</div>
</div>
<div className="input-group mb-3">
<div className="input-group-prepend">
<span className="input-group-text" style={{height:"40px",border:"none",borderRadius:"0%"}}><i class="fa fa-lock"></i></span>
</div>
<div className='row'>
<input type="password" style={{borderLeft:"none",borderRadius:"0%"}}  value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
</div>
</div>
<div className="input-group mb-3">
<div className="input-group-prepend">
<span className="input-group-text" style={{height:"40px",border:"none",borderRadius:"0%"}}><i class="fa fa-lock"></i></span>
</div>
<div className='row'>
<textarea name="" id="" cols="30" rows="3" tyle={{borderLeft:"none",borderRadius:"0%"}}  value={address} onChange={e => setAddress(e.target.value)} className="form-control" placeholder="Address" ></textarea>
</div>
</div>
<button type="submit" style={{marginTop:"10px"}} className="btn btn-primary btn-block btn2">REGISTER</button>
<div className="message">
{/* <div><input type="checkbox" /> Remember ME</div> */}
{/* <div><a href="#" >Forgot your password</a></div> */}
</div>
</form>
        {/* <div className="social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter-square"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
        </div> */}
      </div>
    </div>
   </div>
   </div> 
  )
}
export default Register