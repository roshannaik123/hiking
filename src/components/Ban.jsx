
import './Banner.css';
import bannner from '../images/bannner.png';
import shape from '../images/Shape (9).png';
const Ban = () => {
  return (
    <div>
      <h1>s</h1>
    <div className="banner-container">
    <img src={bannner} alt="Banner" className="banner-image" />
    <img src={shape} alt="Shape" className="shape-image" />
    <h1 className="banner-text bg">BIG BAND NATIONAL PARKHIKING GUIDE</h1>
    <p className="banner-text bp">THIS IS THE NEXT BEST OPTION</p>
    <p>LOREUM IPSUM</p>
<button className='banner-btn'>see more</button>
  </div>
  </div>
  )
}

export default Ban;
