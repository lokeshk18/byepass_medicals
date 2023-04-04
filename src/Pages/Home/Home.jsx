import React from "react";
import Search from "../../Components/Search/Search";
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";
import Footer from '../../Components/Footer/Footer';
import './Home.css'
const Home = ()=>{
  const arr=[1,2, 3,4];
    return (
       <div>
        <Navbar/>
        <Search />
        <div className="row">
            <div className="col-8">
                <Carousel />
            </div>
            <div className="col-4">
                <img src="https://plus.unsplash.com/premium_photo-1675186049302-a0dad4cf3412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

           <div className="row">
            {arr.map((a,i)=>(
              <div key={i} className="col-2">
                <Card/>
              </div>
            ))
}
           </div>
           <Footer/>
           
            </div>
            </div>
             
    )
}
export default Home;