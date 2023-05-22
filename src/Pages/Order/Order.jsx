import React from 'react'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

function Order() {
    const [pdt,setPdt] = useState([]);
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState([]);
    const [amount,setAmount] = useState(0);
    const [tax,setTax] = useState(0);
    const [k,setk]=useState(null)

    const[o,setorder]=useState()

    useEffect(()=>{
        const userId = localStorage.getItem("userId");
         axios
        .get(`https://byepass-server.onrender.com/orders/${userId}`)
        .then(res=>{  
            // setPdt(res.data)
            // setQuantity(res.data[0].quantity)
            // setQuantity(res.data.quantity)
            setorder(res.data)
            console.log(res.data)
        })
        
    },[]);

    // const post = async(productId)=>{
    //     console.log(productId)
    //     await axios
    //     .post(`http://localhost:4000/removecart/${userId}`,{id:productId})
    //     .then(res=>{
            
    //         setPdt(pdt.filter(e=>e._id!=productId));
    //         console.log("Deleted")
    //         console.log(res.data)
    //         }
    //     ).catch(
    //         console.log(Error)
    //     )
    // }
    // onClick={(e)=>post(ele._id)}

    const goBack = ()=>{
        navigate(-1);
    }
    

    return (
o &&
    <div>   
    <Navbar/>
    <br />

    <section class="section-pagetop bg" style={{marginTop:"12px"}}>
    <div class="container">     
    </div> 
    </section>
            
    <section className="section-content padding-y">
    <div className="container">
        <h3 style={{textAlign:"center",marginBottom:"20px"}}>ORDERS</h3> <hr />
    <div className="row">
        <main className="col-md-12">
    <div className="cart">
    <table className="table table-borderless table-shopping-cart">
    <thead className="text-muted">
    <tr className="small text-uppercase">
    <th scope="col"><h5><b>Product</b></h5></th>
    <th scope="col" className=' text-center' width="120"><h5><b>Quantity</b></h5></th>
    <th scope="col" className='text-center' width="120"><h5><b>Price</b></h5></th>
    <th scope="col" className="text-right" width="200"> </th>
    </tr>
    </thead>
    <tbody>

    { o.map((ele,index)=>{
        return(ele.product.map((e,i)=>{return(
            <tr className='border-bottom'>
                            <td style={{height:"30%",width:"30%"}}>
                                <figure className="itemside">
                                    <div className="aside">
                                        <img className='img-fluid' style={{width:"50%"}} src={e.imageurl} />
                                    </div> <br />
                                    <figcaption className="info">
                                        <Link to="/view" style={{textDecoration:"none",color:"black",fontWeight:"400"}} state>{e.name}</Link>
                                    </figcaption>
                                </figure>
                            </td>
                            <td className='text-center'> 
                                <select className='form-select text-center select1' value={i+"_"+ele.quantity[i]} disabled style={{marginLeft:"8px"}}>
                          <option value={i+"_1"}>1</option>
                          <option value={i+"_2"}>2</option>
                          <option value={i+"_3"}>3</option>
                          <option value={i+"_4"}>4</option>
                          <option value={i+"_5"}>5</option>
                          <option value={i+"_6"}>6</option>
                          <option value={i+"_7"}>7</option>
                          <option value={i+"_8"}>8</option>
                          <option value={i+"_9"}>9</option>
                          <option value={i+"_10"}>10</option>
                        </select>
                            </td>
                            <td> 
                                <div className="price-wrap  text-center"> 
                                    <var className="price"><h5>₹{e.price}</h5></var> 
                                    <small className="text-muted"><h6>MRP<del>{e.Mrp}</del></h6> </small> 
                                </div> 
                            </td>
                            <td className="text-right"> 
                            <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"></a> 
                             <button  className="btn btn-primary float-md-right"> Cancel<i className="fa fa-chevron-right"></i> </button>
                             
                            </td>
                        </tr>
    )}))})}
    </tbody>
    </table>
    
    </div>
    <br />
    <div className="alert alert-success mt-3">
        <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 days</p>
    </div>
    
        </main>
       
    </div>
    
    </div> <br /> <br />
    <Footer/>
    </section>
</div>
)}

export default Order;