import React from 'react'
import img from '../../assests/imag1.jpg'
import './Categories.scss'
 
const Categories = () => {
  const category = [
    {title:"Health & Care",background:"#F7C8E0",color:"#FFFFFF"},
       {title:"Tablets",background:"#95BDFF",color:"#FFFFFF"},
       {title:"HealthCare Devices",background:"#a5e887",color:"#FFFFFF"},
    {title:"Personal Care",background:"#F7C8E0",color:"#FFFFFF"},
   
    {title:"Syrup",background:"#95BDFF",color:"#FFFFFF"},
   
    {title:"Essentials",background:"#a5e887",color:"#FFFFFF"}
  ]
  return (
    <div className='container category-container'>
        <h2 className='p-2 header-title my-3'>Categories</h2>
        <div className="row p-2">
            {category.map((c,i)=>(
              <div key={i} className='col-4 category-list' style={{background:c.background,color:c.color}}>
                <div>
                <img src={img} alt="catrgory-image" />
                </div>
                <div className='title my-3'>
                  {c.title}
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Categories