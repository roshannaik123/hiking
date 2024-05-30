import React from 'react'
import  img  from "../images/placesimg.png";
import img2 from "../images/Shape (8).png";
import "./Places.css";
const Places = () => {
  return (
    <div className='Dplaces'>
         <h1 className='to-visit' >PLACES TO VISIT</h1>
        <h1 className='to-visit' >IN AUTUMN</h1>
      <div className='places'>
       
        <div className='Flex'>
        <img className='demo' src={img2} alt=""/>
            <img className="img1" src={img} alt=""/>
           
            <p className='mp'>Moutain Loop</p>
            <p class="loop">Lorem ipsum dolor, sit amet consectetur adipisicing ...</p>
            <hr></hr>       
            <p><span>Location</span>0.3 miles</p>     
        
        </div>
        <div className='Flex '>
        <img  className='demo'src={img2} alt=""/>
            <img className="img1"src={img} alt=""/>
           
            <p className='mp'>Canyon Trail</p>
            <p class="loop">Lorem ipsum dolor, sit amet consectetur adipisicing... </p>
            <hr></hr>       
            <p><span>Location</span>0.3 miles</p>     
        
        </div>
        <div className='Flex '>
        <img className='demo'src={img2} alt=""/>
            <img className="img1" src={img} alt=""/>
            
            <p className='mp'>Moutain Loop</p>
            <p class="loop">Lorem ipsum dolor, sit amet consectetur adipisicing...</p>
            <hr></hr>       
            <p className="location"><span>Location</span>0.3 miles</p>     
        
        </div>

      </div>
      <button className='btn'>See more</button>
    </div>
  )
}

export default Places
