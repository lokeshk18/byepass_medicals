// import React,{useState} from 'react'
// import Input from '../../Components/Input/Input';
// import Button from '../../Components/Button/Button';
// import FormHeader from '../../Components/FormHeader/FormHeader';
// import Navbar from '../../Components/Navbar/Navbar';
// import './Login.scss';
// import { Link } from 'react-router-dom';
// const Login = () => {
//   const [name,setName]=useState("")
//   const [password,setPassword]=useState("")
//   const inputs= [
//     {
//       type:"text",
//       id:"email",
//       label:"Email",
//       setData:(name)=>{
//         setName(name)
//       },
//       value:name
//     }
//     ,
//     {
//       type:"password",
//       id:"current-password",
//       label:"Password",
//       setData:(pass)=>{
//         setPassword(pass)
//       },
//       value:password
//     }
//   ]
//   return (
//     <div className='login-container'>
//       <Navbar/>
//         <div className="box-outer">
//           <div className="box shadow">
//           <FormHeader />
//           <div className="form-container my-3">
//             <form > 
//             {
//               inputs.map((i,idx)=>(
//                 <Input key={idx} {...i}  />
//               ))
//             }
//             <button className='btn' style={{backgroundColor:"#00AA95"}}><Link to="/home" style={{color:"whitesmoke"}}>Login</Link></button>
//             </form>
//           </div>
           
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Login
