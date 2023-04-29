import React from "react";
import Search from "../../Components/Search/Search";
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from "../../Components/Carousel/Carousel";
// import Card from "../../Components/Card/Card";
import Footer from '../../Components/Footer/Footer';
import './Home.scss'
import offer from '../../assets/offer.webp'
// import Shop2 from "../../Components/Card/Shop2";
import Scrolls from "../../Components/Scrolls/Scrolls";
import Brands from "../../Components/Brands/Brands";
import userimg from "../../assets/users.png"
// import Product from "../../Components/Card/Product";

const Home = ()=>{
  // const arr=[1,2, 3,4];
    return (
       <div className="home-container">
        <Navbar/>
        <Search />
    
        <div className="row">
            <div className="col-8">
                <Carousel />
            </div>
            <div className="col-4">
                <img src={offer} style={{width:"95%"}} alt="" />
            </div>

           <div className="row">
            {/* {arr.map((a,i)=>(
              <div key={i} className="col-2">
                
              </div>
            ))
            
            } */}
   </div>
            <div className="deals-container  my-3 ">
                    <h5 className="p-3" style={{color:"black"}}>Deals of the Day</h5>
                    <Scrolls/>
            </div>

            <div className="shops-container my-3 ">
                  <h5 className="p-3" style={{color:"black"}}>Shop By health concerns</h5>
                  <Scrolls/>
            </div>
            <div className="shops-container my-3 ">
                  <h5 className="p-3" style={{color:"black"}}>Top Brands</h5>
                  <Brands/>
            </div>
               
                
           </div>
           <div style={{padding:"30px"}} className="deals-container  my-3 ">
                    <h5 className="p-3" style={{color:"black"}}>Why Choose US</h5>
                   
        

         <div className="choose-container">

          <div className="choose">
            <div className="img-container">
              <img src={userimg} style={{marginLeft:"20px"}} alt="" />  
            </div>
            <div className="content" style={{marginLeft:"30px"}} > 
              <div className="count p-0 m-0">1000+ </div>
              <div className="words m-0">Registered users </div>
            </div>
         </div>

         <div className="choose">
          <div className="img-container">
            <img src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0" alt="" />
          </div>
          <div className="content">
            <p className="count p-0 m-0" >Orders</p>
            <p className="words m-0">Delivered on time </p>
          </div>
         </div>

        <div className="choose">
          <div className="img-container">
            <img src="https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=96x0" alt="" />
          </div>
         <div className="content">
            <p className="count p-0 m-0" >2000+ </p>
            <p className="words m-0">Brands are sold</p>
         </div>
        </div>

        <div className="choose">
          <div className="img-container">
            <img src="https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=96x0" alt="" />  
          </div>
          <div className="content">
            <p className="count p-0 m-0">40+</p> 
            <p className="words m-0"> Years Of Experience</p>
            </div>
          </div>

        </div>    </div>

                {/* Footer */}

           <hr style={{marginTop:"80px"}}/>
              <Footer/>
        
            </div>
             
    )
}
export default Home;