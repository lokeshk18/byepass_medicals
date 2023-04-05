import React from 'react'
import Shop3 from '../../Components/Card/Shop3'
import Navbar from '../../Components/Navbar/Navbar';
import {Link } from "react-router-dom"

function Allproduct() {
  const topics = [
    {
        title:"Babyproducts",
        link:"/"
      },{
      
        title:"Medicines",
        link:"/"
      },
      {
        title:"Alopathy and Ayush",
        link:"/"
      },
      {
        title:"Veterinary medicine",
        link:"/"
      },
      {
        title:"Surgical products",
        link:"/"
      },
      {
        title:"Consumer Products",
        link:"/"
      },
      {
        title:"Injections",
        link:"/"
      }
]
  return (
    
    <div>
        <Navbar/>
        <p></p>
        <div className="row">
                <div className="topics-container">
                    {topics.map((t,i)=>(
                        <div className="topic" key={i}>
                         <Link to="/products" style={{textDecoration:'none',color:'black'}}>{t.title}</Link>   
                        </div>
                    ))}
                </div>
               
        
        </div>
        <hr />
        <Shop3/>
    </div>
  )
}

export default Allproduct;