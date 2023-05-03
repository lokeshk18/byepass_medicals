import React from "react";
import Navbar from "../Navbar/Navbar"
import './Products.css';
import Footer from "../Footer/Footer";

const Products = () => {
  return (
    <div className="prod">
        <Navbar/>
        <br />
        {/* <div className="heading">
            
        </div> */}

    <div className="container">
    <h4 className="heading"> Baby Products </h4>
        <div className="row  products">
            
            <div className="col-4 product">
                <div className="image">
                    <img src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/6cb501a7eb8149bbb4e51446359d855a.jpg" alt=""/>
                </div>
                <div>
                    <p> Blood Pressure Monitor Fully Automatic, Digital BP Monitor</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>15.99</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -11.99 </h6>
                    
                </div>
                {/* <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <span style={{color:"gray"}}>381 ratings</span>
                </div> */}
                <div className="bay">
                    <button> View </button>
                </div>
            </div>
                
            <div className="col-4 product">
                <div className="image">
                    <img src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/6cb501a7eb8149bbb4e51446359d855a.jpg" alt=""/>
                </div>
                <div>
                    <p> Blood Pressure Monitor Fully Automatic, Digital BP Monitor</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>15.99</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -11.99 </h6>
                </div>
                <div className="bay">
                    <button> View </button>
                </div>
            </div>
            
            <div className="col-4 product">
                <div className="image">
                    <img src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/6cb501a7eb8149bbb4e51446359d855a.jpg" alt=""/>
                </div>
                <div>
                    <p> Blood Pressure Monitor Fully Automatic, Digital BP Monitor</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>15.99</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -11.99 </h6>
                </div>
                <div className="bay">
                    <button> View </button>
                </div>
            </div>
        </div>

        <div className="row products">
            
            <div className="col-4 product">
                <div className="image">
                    <img src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/6cb501a7eb8149bbb4e51446359d855a.jpg" alt=""/>
                </div>
                <div>
                    <p> Blood Pressure Monitor Fully Automatic, Digital BP Monitor</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>15.99</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -11.99 </h6>
                    
                </div>
                {/* <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <span style={{color:"gray"}}>381 ratings</span>
                </div> */}
                <div className="bay">
                    <button> View </button>
                </div>
            </div>
                
            <div className="col-4 product">
                <div className="image">
                    <img src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/6cb501a7eb8149bbb4e51446359d855a.jpg" alt=""/>
                </div>
                <div>
                    <p> Blood Pressure Monitor Fully Automatic, Digital BP Monitor</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>15.99</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -11.99 </h6>
                </div>
                <div className="bay">
                    <button> View </button>
                </div>
            </div>
            
            <div className="col-4 product">
                <div className="image">
                    <img src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/6cb501a7eb8149bbb4e51446359d855a.jpg" alt=""/>
                </div>
                <div>
                    <p> Blood Pressure Monitor Fully Automatic, Digital BP Monitor</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>15.99</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -11.99 </h6>
                </div>
                <div className="bay">
                    <button> View </button>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
  )
}
export default Products