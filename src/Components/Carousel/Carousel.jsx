import React from 'react'
import './Carousel.css'
import car1 from '../../assets/carousel1.png'
import car2 from '../../assets/carousel2.jpg'
import car3 from '../../assets/carousel3.png'

const Carousel = () => {
  return (
  
    <div className='carousel'>

    <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


  )
}

export default Carousel;