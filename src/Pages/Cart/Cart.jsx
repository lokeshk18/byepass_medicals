import React from 'react'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import { useState,useEffect } from 'react';

function Cart() {
    // const [quantity,setQuantity] = useState("1");
    const [pdt,setPdt] = useState([]);
    const userId = localStorage.getItem("userId");
    useEffect(()=>{
        const userId = localStorage.getItem("userId");
         axios
        .get(`http://localhost:4000/getcart/${userId}`)
        .then(res=>{  
            console.log(res.data)
            setPdt(res.data)
        })
    },[]);

    const post = async(productId)=>{
        console.log(productId)
        await axios
        .post(`http://localhost:4000/removecart/${userId}`,{id:productId})
        .then(res=>{
            
            setPdt(pdt.filter(e=>e._id!=productId));
            console.log("Deleted")
            console.log(res.data)
            }
        ).catch(
            console.log(Error)
        )
    }

    if(pdt!=null){
        return (
    
    <div>
    <Navbar/>

    <section class="section-pagetop bg">
    <div class="container">  
    </div> 
    </section>
    
    <section className="section-content padding-y">
    <div className="container">
    
    <div className="row">
        <main className="col-md-9">
    <div className="cart">
    
    <table className="table table-borderless table-shopping-cart">
    <thead className="text-muted">
    <tr className="small text-uppercase">
    <th scope="col"><h5><b>Product</b></h5></th>
    <th scope="col" width="120"><h5><b>Quantity</b></h5></th>
    <th scope="col" width="120"><h5><b>Price</b></h5></th>
    <th scope="col" className="text-right" width="200"> </th>
    </tr>
    </thead>
    <tbody>
    
    { pdt.map((ele)=>

    <tr>
        <td>
            <figure className="itemside">
                <div className="aside"><img style={{width:"50%"}} src="https://cdn01.pharmeasy.in/dam/products_otc/U97974/everherb-giloy-tulsi-juice-strengthens-body-defence-system-natural-immunity-booster-1-litre-2-1680172279.jpg?dim=700x0&dpr=1&q=100" /></div>
                <figcaption className="info">
                    <a href="#" className="title text-dark"><b>{ele.name}</b></a>
                </figcaption>
            </figure>
        </td>
        <td> 
            <select name="quantity" style={{marginLeft:"8px"}}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
        </td>
        <td> 
            <div className="price-wrap"> 
                <var className="price"><h5>₹{ele.price}</h5></var> 
                <small className="text-muted"><h6>MRP<del>{ele.mrp}</del></h6> </small> 
            </div> 
        </td>
        <td className="text-right"> 
        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
        {/* <Link onClick={()=>post(`${ele.productId}`)} className="btn btn-primary float-md-right"> Remove<i className="fa fa-chevron-right"></i> </Link>
         */}
         <button onClick={(e)=>post(ele._id)} className="btn btn-primary float-md-right"> Remove<i className="fa fa-chevron-right"></i> </button>
         
        </td>
    </tr>
    )}
    </tbody>
    </table>
    
    <div className="card-body border-top">
        <a href="#" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right"></i> </a>
        <a href="#" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
    </div>  
    </div> 
    
    <div className="alert alert-success mt-3">
        <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
    </div>
    
        </main>
        {/* <aside className="col-md-3">
             
            <div className="card">
                <div className="card-body">
                        <dl className="dlist-align">
                        <dt>Total price:</dt>
                        <dd className="text-right"></dd>
                        </dl>
                        <dl className="dlist-align">
                        <dt>Discount:</dt>
                        <dd className="text-right"></dd>
                        </dl>
                        <dl className="dlist-align">
                        <dt>Total:</dt>
                        <dd className="text-right  h5"><strong></strong></dd>
                        </dl>
                        <hr />
                        
                </div> 
            </div>  
        </aside>  */}
    </div>
    
    </div> 
    </section>
</div>
)}
}

export default Cart;