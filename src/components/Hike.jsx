import React from 'react'
import img2 from "../images/right-bim.png"
import img3 from "../images/blackshirt.png";
import "./Hike.css"
const Hike = () => {
  return (
    <div className='Hike'>
      <h1>How to recover from </h1>
      <h1> A Hike</h1>
      <hr></hr>
      <div className='Hike-div'>
      
        <div className='hike-div2'>
        <div className="img-flex">
            <div>
                <img className="imgesss" src={img2}  alt=""/>
            </div>
            <div className='loreum' >
                
               <p> -Loreum ipsum</p>
               <p>-Dolar sit amet consectetur</p> 
                <p>-Adispising elit aptent</p>
                <p>-torequent interdum</p>
            </div>
        </div>
        <div className="img-flex">
        <div>
                <img  className="imgesss"src={img2}  alt=""/>

            </div>
            <div className='loreum'>
               <p>-Loreum ipsum</p> 
              <p> -Dolar sit amet consectetur</p> 
               <p> -Adispising elit aptent</p>
               <p>-torequent interdum</p> 
            </div>
            </div>
            <div className="img-flex">
        <div>
                <img className='imgesss'src={img2}  alt=""/>

            </div>
            <div className='loreum'>
                <p>-Loreum ipsum</p>
               <p> -Dolar sit amet consectetur</p>
              <p>-Adispising elit aptent</p>  
               <p> -torequent interdum</p>
            </div>
            </div>

      </div>
      <div className='black'>
        <img className ="black-img" src={img3}alt=""/>
        <div className='black-ps'>
        <p className='black-p'>MAKE SURE YOUT</p>
        <p className='black-p'>GEAR FITS</p>
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Hike
