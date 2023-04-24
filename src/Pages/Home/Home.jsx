import React from "react";
import Search from "../../Components/Search/Search";
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from "../../Components/Carousel/Carousel";
// import Card from "../../Components/Card/Card";
import Footer from '../../Components/Footer/Footer';
import './Home.scss'
import offer from '../../assets/offer.webp'
import Shop2 from "../../Components/Card/Shop2";
import Scrolls from "../../Components/Scrolls/Scrolls";
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

                <Shop2/>
                
           </div>
           <hr style={{marginTop:"80px"}}/>
              <Footer/>
         
            </div>
             
    )
}
export default Home;