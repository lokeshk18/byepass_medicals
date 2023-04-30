import React,{useState} from 'react'
import MaterialIcon from 'material-icons-react'
import './Search.scss'
import { Link } from 'react-router-dom'
const Search = () => {

    const [name,setName]=useState("")
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
    <div className='shadow'>
        <div className=" search-container">
            <div className="search-bar my-3">
                <div className="my-3">
                    <input type="text" placeholder="Search for products" className="form-control" onChange={e=>setName(e.target.value)} />
                </div>
                <div className='search-icon'>
                    <MaterialIcon icon={"search"} size={22} color="black" />
                </div>
                
            </div>
            <div className="cart-icon" style={{marginLeft:"20px"}}> 
             <p className="m-2"> <Link style={{textDecoration:"none",color:"#4c4d4c"}} to="/cart"><i class="fa-solid fa-cart-plus" style={{color: "#2d6322"}}></i> Cart</Link></p>
               
             </div>
        </div>

        <div className="row" style={{margin:"20px"}}>
                <div className="topics-container">
                    {topics.map((t,i)=>(
                        <div className="topic" key={i}>
                          <Link to="/products" className='title' style={{color:"#2b2b2b"}}>{t.title}</Link>   
                        </div>
                    ))}
                </div>            
              </div>

    </div>
  )
}

export default Search