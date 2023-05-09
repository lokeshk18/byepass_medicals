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
             <p className="m-2"> <Link style={{textDecoration:"none",color:"#4c4d4c"}} to="/cart"><i class="fa-solid fa-cart-plus" style={{marginRight:"3px"}}></i> Cart</Link></p>
               
             </div>
        </div>

        <div className="row" style={{margin:"20px"}}>
                <div className="topics-container">
                        <div className="topic"   >
                          <Link to="/products/baby" className='title' style={{color:"#2b2b2b"}}>Baby Products</Link>   
                        </div>
                        <div className="topic"   >
                          <Link to="/products/medicines" className='title' style={{color:"#2b2b2b"}}>Medicines</Link>   
                        </div>
                        <div className="topic"   >
                          <Link to="/products/alopathy" className='title' style={{color:"#2b2b2b"}}>Alopathy and Ayush</Link>   
                        </div>
                        <div className="topic"   >
                          <Link to="/products/veterinary" className='title' style={{color:"#2b2b2b"}}>Veterinary medicine</Link>   
                        </div>
                        <div className="topic"   >
                          <Link to="/products/surgical" className='title' style={{color:"#2b2b2b"}}>Surgical products</Link>   
                        </div>
                        <div className="topic"   >
                          <Link to="/products/consumer" className='title' style={{color:"#2b2b2b"}}>Consumer Products</Link>
                        </div>
                        <div className="topic"   >
                          <Link to="/products/injection" className='title' style={{color:"#2b2b2b"}}>Injections</Link>   
                        </div>
                </div>
              </div>

    </div>
  )
}

export default Search