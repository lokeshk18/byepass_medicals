import React from "react";
import Navbar from "../../Components/Navbar/Navbar"
import './Products.css';
import Footer from "../../Components/Footer/Footer";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

const Products = () => {
    const params = useParams();
    const [pdt , setPdt] = useState([])
    useEffect(()=>{
            axios
            .get(`https://byepass-server.onrender.com/products/${params.id}`)
            .then(res=>{  
                console.log(res.data)
                setPdt(res.data) 
            }) 
    },[]);

  return (
    <div className="prod">
        <Navbar/>
        <br />

    <div className="container">
    <h4 className="heading"> {params.id} </h4>
        <div className="row  products">
            {pdt.map((ele)=>
            <div className="col-4 product">
                <div className="image">
                    <img src={ele.imageurl} style={{height:"20vh",width:"20vh"}} alt=""/>
                </div>
                <div>
                    <p> {ele.name}</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>₹{ele.mrp}</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -₹{ele.price} </h6>
                    
                </div>
                <div className="bay">
                    <Link to="/view" state={ele}><button> View </button></Link>
                </div>
            </div>
        )}
        </div>

    </div>
    <Footer/>
</div>
  )
}
export default Products