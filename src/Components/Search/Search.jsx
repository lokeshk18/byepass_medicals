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
            <div className="search-bar">
                <div className='search-icon'>
                    <MaterialIcon icon={"search"} size={24} color="black" />
                </div>
                <div className="my-3">
                    <input type="text" placeholder="Search for products" className="form-control" onChange={e=>setName(e.target.value)} />
                </div>
            </div>
             <div className="col-4"> 
                <Link to="/cart"><MaterialIcon icon={"shopping_cart"} size={24} color="black" /></Link>
             </div>
        </div>

        <div className="row">
                <div className="topics-container">
                    {topics.map((t,i)=>(
                        <div className="topic" key={i}>
                         <Link to={t.link} style={{textDecoration:'none',color:'black'}}>{t.title}</Link>   
                        </div>
                    ))}
                </div>
               
        
        </div>
    </div>
  )
}

export default Search