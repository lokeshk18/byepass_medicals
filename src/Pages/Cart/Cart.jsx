import React from 'react'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
    const [quantity,setQuantity] = useState([]);
    const [pdt,setPdt] = useState([]);
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [amount,setAmount] = useState(0);
    const [tax,setTax] = useState(0);

    useEffect(()=>{
        const userId = localStorage.getItem("userId");
         axios
        .get(`https://byepass-server.onrender.com/getcart/${userId}`)
        .then(res=>{  
            console.log(res.data)
            setPdt(res.data.pdt)
            setQuantity(res.data.quantity)
        })
    },[]);

    useEffect(()=>{
        if(quantity.length!=0){
            calc();
        }
    },[quantity])

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

    const calc = ()=>{
        var tot=0;
        for(let i=0;i<pdt.length;i++){
            let price = pdt[i].price;
            tot+=price*quantity[i]; 
        }
        setAmount(tot);
        var t = (tot/100)*18;
        setTax(t);
    }

    const goBack = ()=>{
        navigate(-1);
    }

    const handleChange=(e)=>{
        console.log(e);
        // console.log(quantity)
        const a = e.split("_");
        console.log(a);
        var qty = quantity
        var p = pdt
        qty[a[0]]= a[1]
        p[a[0]].quantity=a[1]
        setPdt(p)
        setQuantity(qty)
        calc()
        console.log(quantity)
    }
    return (
quantity.length!=0 &&
    <div>   
    <Navbar/>

    <section class="section-pagetop bg" style={{marginTop:"12px"}}>
    <div class="container">  
    </div> 
    </section>
            
    <section className="section-content padding-y">
    <div className="container">
    
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
    
    { pdt.map((ele,index)=>

    <tr key={ele.name} className='border-bottom'>
        <td style={{height:"30%",width:"30%"}}>
            <figure className="itemside">
                <div className="aside">
                    <img className='img-fluid' style={{width:"50%"}} src={ele.imageurl} />
                </div> <br />
                <figcaption className="info">
                    <Link to="/view" style={{textDecoration:"none",color:"black",fontWeight:"400"}} state={ele}>{ele.name}</Link>
                </figcaption>
            </figure>
        </td>
        <td className='text-center'> 
            <select className='form-select text-center select1'  value={index+"_"+quantity[index]} onChange={(e)=>(handleChange(e.target.value))}name="quantity" style={{marginLeft:"8px"}}>
      <option value={index+"_1"}>1</option>
      <option value={index+"_2"}>2</option>
      <option value={index+"_3"}>3</option>
      <option value={index+"_4"}>4</option>
      <option value={index+"_5"}>5</option>
      <option value={index+"_6"}>6</option>
      <option value={index+"_7"}>7</option>
      <option value={index+"_8"}>8</option>
      <option value={index+"_9"}>9</option>
      <option value={index+"_10"}>10</option>
    </select>
        </td>
        <td> 
            <div className="price-wrap  text-center"> 
                <var className="price"><h5>₹{ele.price}</h5></var> 
                <small className="text-muted"><h6>MRP<del>{ele.mrp}</del></h6> </small> 
            </div> 
        </td>
        <td className="text-right"> 
        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"></a> 
         <button onClick={(e)=>post(ele._id)} className="btn btn-primary float-md-right"> Remove<i className="fa fa-chevron-right"></i> </button>
         
        </td>
    </tr>
    )}
    </tbody>
    </table>

    <aside className="col-4">
             
             <div className="card">
                 <div className="card-body">
                         <dl className="dlist-align">
                         <dt>Total price: {amount}</dt>
                         <dd className="text-right"></dd>
                         </dl>
                         <dl className="dlist-align">
                         <dt>Tax: {tax}</dt>
                         <dd className="text-right"></dd>
                         </dl>
                         <dl className="dlist-align">
                         <dt>Total: {amount-tax}</dt>
                         <dd className="text-right  h5"><strong></strong></dd>
                         </dl>
                 </div> 
             </div>  
         </aside> 
    
    <div className="card-body">
        <Link to="/pay" state={{pdt:pdt,quantity:quantity}}className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right"></i> </Link>
        <a href="#" onClick={goBack} className="btn btn-light" style={{float:"right"}}> <i className="fa fa-chevron-left"></i> Continue shopping </a>
    </div>
    </div>
    
    <div className="alert alert-success mt-3">
        <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
    </div>
    
        </main>
       
    </div>
    
    </div> 
    </section>
</div>
)}

export default Cart;