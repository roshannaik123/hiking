import React from 'react'
import "./Home.css"
import  bim  from "../images/mountain.png"

const Mountain = () => {
  return (
    <div>
       <div className="contents">
                <div class="Hiking">
                    
<div className='right-img'>
    <img className="right-imges" src={bim}alt=""/>
    <p className='walking'>Walkign in the Nature as a   Recreational Activity</p>


</div>
<div className='left'>
                    <h1 className='Rock' style={{color:"white"}}>MOUNTAINEEERING </h1>
                    <h1 className='Climb' style={{color:"white"}}>ICE CLIMBING</h1>
                    <p className='classes' style={{color:"white"}}>2.ACTIVITES</p>
                    <p className='text-l' style={{color:"white"}}>Hatha is the most powerful yoga.Its origin  is in the raya Yoga Of Patanjali and other classical texts such as Bhagvad Gita and Hatha Yoga Pradipika. </p>
                   <hr className='line-b'></hr>
                   
                   <p className='modules' style={{color:"white"}}>17 modules </p>
                   <p className='divided' style={{color:"white"}}>divided into 5 Weekends</p>
                   <div className='start-dis'>
                    <div className='start-p' style={{color:"white"}}>
                    <p>Start</p>
                    <p>April 15</p>
                    <p>20.00hs</p>
                    </div>
                   
                   <div>
                    <p style={{color:"white"}}>Price</p>
                    <p style={{color:"white"}}>$900</p>
                    </div>
                    </div>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Mountain
