import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
const About = () => {
  return (
   
    <div>
    <Navbar/>   
    <div className="about-container">        
      <h1>About Us</h1>
      <p>
        Welcome to our pharmacy! We are dedicated to providing quality healthcare services and products to our community. With a team of experienced pharmacists and staff, we strive to meet the unique needs of each individual who walks through our doors.
      </p>
      <p>
        Our mission is to improve the health and well-being of our customers by offering a wide range of prescription medications, over-the-counter drugs, and healthcare essentials. We also provide valuable information and advice on managing medications, potential drug interactions, and maintaining a healthy lifestyle.
      </p>
      <p>
        At our pharmacy, we believe in personalized care and building long-lasting relationships with our customers. We take the time to listen to your concerns, answer your questions, and ensure you have a positive experience every time you visit us.
      </p>
      <div className="contact-details">
        <p><strong>Address:</strong> K S Arcade Raja Hospital ,Complex,Vannarapettai ,Tirunelveli</p>
        <p><strong>Phone:</strong> +91 8300230399</p>
        <p><strong>Email:</strong> byepassshunmugam@gmail.com</p>
      </div>
    </div>
    
    </div>
  );
};
export default About;
