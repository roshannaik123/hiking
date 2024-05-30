import React from 'react';
import bgimg from '../images/backgroundimg.png';
import img1 from '../images/Shape.png';
import img2 from '../images/Shape (1).png';
import img3 from '../images/Shape (3).png';
import img4 from '../images/Shape (4).png';
import logo from "../images/logo.png"
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img src={bgimg} alt="Background" className="background" />
      <img src={img3} alt="Left Shape" className="left-shape" />
      <img src={img1} alt="Top Shape" className="top-shape" />
      <div className="navlinks">
        
   
        <nav>
          <ul>
           <li className='di-log'>  <img src={logo} alt="" /></li>
            <li>Home</li>
            <li>Class</li>
            <li>Promo</li>
            <li>Online Class</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>Discover Your next hike</h1>
        <h4>Discover your Next Hike</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
      <img src={img2} alt="Right Shape" className="right-shape" />
      <img src={img4} alt="right corner" className="right-corner"/>

      
            </div>
  );
};

export default Home;
