// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// // import StripeCheckout from 'react-stripe-checkout'
// import img1 from "../../assets/byepass logo.jpg"

// const Pay = () => {

//     const [stripeToken , setStripeToken] = useState(null);

//     const onToken = (token)=>{
//         setStripeToken(token);
//     }

//     useEffect(()=>{
//         const makeRequest = async()=>{
//             try{
//                 const res = await axios.post("http://localhost:4000/payment",{
//                     tokenId : stripeToken.id,
//                     amount:2000
//                 });
//                 console.log(res.data)
//             }
//             catch(err){
//                 console.log(err)
//             }
//         }
//         stripeToken && makeRequest()
//     },[stripeToken])

//   return (
//     <div>
//         {/* <StripeCheckout 
//             name="Byepass Medicals"
//             image={img1}
//             billingAddress
//             shippingAddress
//             description="Your total is Rs.20"
//             amount={2000}
//             token={onToken}
//             stripeKey="pk_test_51N79ssSB7rYxWztbsgVmguibjcnD23dvugNZOliBVzuX1Dif8JtE8XBZcGniWdAK8RZmkG65HXqmJ4dqkXt7kmqp004PYmiXUD"
//         > */}
//             <button>Pay</button>
//         {/* </StripeCheckout> */}
//     </div>
//   )
// }

// export default Pay

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import "./Pay.css"
import { useLocation } from 'react-router-dom'

const Pay = () => {
    const [stripeToken ,setStripeToken] = useState(null)
    const [pdt,setPdt] = useState([]);
    const userId = localStorage.getItem("userId");
    const location = useLocation();
    var products=location.state.pdt;
    var quantity=location.state.quantity;
    var [amount,setAmount]=useState(0)
    const [address,setAddress]= useState("")

    const handleToken = async(token,addresses)=>{
        console.log(token.card)
        var ad=token.card.address_line1+","+token.card.address_city+","+token.card.address_country+"-"+token.card.address_zip;
        console.log(ad)
        setAddress(ad)
        // let a=pdt;
        // a[0]={userId:userId,amount:amount,address:address,...a}
        // setPdt(a)
        // console.log(pdt)
        setStripeToken(token)
    }

    useEffect(()=>{
        var b=0
        console.log(products)
        for(var i=0;i<products.length;i++){
            b+=products[i].price*quantity[i]
        }
        setAmount(b)
    },[amount])

    useEffect(()=>{
        const makeRequest = async()=>{
            try{
                const res = await axios.post("https://byepass-server.onrender.com/payment",{
                    tokenId:stripeToken.id,
                    amount:amount
                });
                console.log(res)
                if(res){
                    var a=[]
                    for(var i=0;i<products.length;i++){
                        a.push({productId:products[i]._id,quantity:quantity[i]})
                    }
                    
                    console.log(pdt)
                    await axios.post(`https://byepass-server.onrender.com/addorder`,{
                            userId,
                            amount:amount,
                            address,
                            products:a
                    })
                }
            }
            catch(err){
                console.log(err);
            }
        }
        stripeToken && makeRequest()
    },[stripeToken])

    // useEffect(()=>{
    //     axios
    //     .get(`http://localhost:4000/getordercart/${userId}`)
    //     .then(res=>{  
    //         console.log(res.data)
    //         setPdt(res.data)
    //     })
    // },[]);

  return (
    amount!=0 &&
    <div className='pay'>
        <div className='container'>
            <h4 style={{marginBottom:"30px"}}>Proceed with the Payment</h4>
            <div className='form-group-container'>
                <StripeCheckout 
                stripeKey="pk_test_51N79ssSB7rYxWztbsgVmguibjcnD23dvugNZOliBVzuX1Dif8JtE8XBZcGniWdAK8RZmkG65HXqmJ4dqkXt7kmqp004PYmiXUD"
                token = {handleToken}
                amount={amount*100}
                name="ByePass"
                billingAddress
                shippingAddress
                />
            </div>
        </div>
    </div>
  )
}

export default Pay