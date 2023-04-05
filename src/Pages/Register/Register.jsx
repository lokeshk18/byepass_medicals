import React,{useState} from 'react'
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import FormHeader from '../../Components/FormHeader/FormHeader';
import {Link} from "react-router-dom"
import './Register.scss';
const Register = () => {
  const [name,setName]=useState("")
  const [Fname,setFname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
   const [phone,setPhone]=useState("")
  const inputs= [
    {
        type:"text",
        id:"Fname",
        label:"Name",
        setData:(name)=>{
          setName(name)
        },
        value:name
      }
      ,
    {
      type:"text",
      id:"email",
      label:"Email",
      setData:(name)=>{
        setName(name)
      },
      value:name
    }
    ,
    {
        type:"text",
        id:"phone",
        label:"Phone number",
        setData:(name)=>{
          setName(name)
        },
        value:name
      }
      
      ,
      {
        type:"textarea",
        id:"Address",
        label:"Address",
        setData:(name)=>{
          setName(name)
        },
        value:name
      }
      
      ,
    {
      type:"password",
      id:"current-password",
      label:"Password",
      setData:(pass)=>{
        setPassword(pass)
      },
      value:password
    }
  ]
  return (
    <div className='login-container'>
        <div className="box-outer">
          <div className="box shadow">
          <FormHeader />
          <div className="form-container my-3">
            <form > 
            {
              inputs.map((i,idx)=>(
                <Input key={idx} {...i}  />
              ))
            }
            <button className='btn' style={{backgroundColor:"#00AA95"}}><Link to="/home" style={{color:"whitesmoke"}}>Register</Link></button>
            </form>
          </div>
           
          </div>
        </div>
    </div>
  )
}

export default Register