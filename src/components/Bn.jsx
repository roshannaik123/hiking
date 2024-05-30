import React from 'react';
import './Banner.css';
import bannner from '../images/bannner.png';
import shape from '../images/Shape (9).png';

const Bn = () => {
  return (
    <div className="banner-container">
      <img src={bannner} alt="Banner" className="banner-image" />
      <img src={shape} alt="Shape" className="shape-image" />
      <p className="banner-text">THE ASANAS PURIFY OUR BODYAND KEEP IT HEALTHY,MAKING IT A SUITABLEVEHICAL FOR OUR SOUL</p>
<button className='banner-btn'>see more</button>
    </div>
  );
}

export default Bn;
