import React from 'react'
import "./Home.css"
import  bim  from "../images/right-bim.png"
import bim2 from "../images/Shape (10).png";
import i from "../images/red.png";
import Ban from './Ban';
const Hikingc = () => {
  return (
    <div className="content">

<img className="bgimg" src={bim2} alt=""/>
                <h2 className='Hikingh1'>Hiking and Camping</h2>
                <h2 className="Hikingh2">Classes</h2>
                <div className="features">
                    <div className="feature">
                        <img src={i} alt=""/>
                        <h3>Activities</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit molestie posuere.</p>
                    </div>
                    <div className="feature">
                    <img src={i} alt=""/>
                        <h3>Hiking</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit molestie posuere.</p>
                    </div>
                    <div className="feature">
                    <img src={i} alt=""/>
                        <h3>Mountains</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit molestie posuere.</p>
                    </div>
                </div>
                <div class="Hiking">
                    <div className='left'>
                    <h1 className='Rock'>Rock </h1>
                    <h1 className='Climb'>Climbimbing</h1>
                    <p className='classes'>1.CLASSES & EVENTS</p>
                    <p className='text-l'>Hatha is the most powerful yoga.Its origin  is in the raya Yoga Of Patanjali and other classical texts such as Bhagvad Gita and Hatha Yoga Pradipika. </p>
                   <hr className='line-b'></hr>
                   
                   <p className='modules'>10 modules </p>
                   <p className='divided'>divided into 7 Weekends</p>
                   <div className='start-dis'>
                    <div className='start-p'>
                    <p>Start</p>
                    <p>April 15</p>
                    <p>20.00hs</p>
                    </div>
                   
                   <div>
                    <p>Price</p>
                    <p>$900</p>
                    </div>
                    </div>
                    </div>
<div className='right-img'>
    <img className="right-imges" src={bim}alt=""/>
    <p className='walking'>Walkign in the Nature as a   Recreational Activity</p>


</div>
                </div>
                <Ban/>
            </div>
  )
}

export default Hikingc
