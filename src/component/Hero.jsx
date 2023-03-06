import React from 'react'
import Header from './Header';
import './Hero.css';
import NumberCounter from 'number-counter';
// import {motion} from'framer-motion'
const Hero = () => {
//  const transition= {type:'spring',duration :3}
  return (
    <div className="hero"id='home'>
      <div className='blur hero-blur'></div>
        <div className="left-h">
            <Header/>
            {/* the best add */}
            <div className="the-best-add">
              <div></div>
              <span>The Best fitness club in our town</span>
            </div>
            {/* Hero heading */}
            <div className="hero-text">
              <div>
              <span className='strock-text'>shape</span>
              <span> your</span>
              </div> 
              <div>
                <span>ideal body</span>
              </div> 
              <div>
                <span>
                  In here we will help you to shape and build your ideallive up your life to fullest.
                </span>
              </div>
            </div>
            {/* figuers */}
            <div className="figure">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix="+" />
                </span>
                <span>Expert coachs</span>
                </div>
              <div>
                <span><NumberCounter end={680} start={640} delay='4' preFix="+" /></span>
                <span>members joined</span>
                </div>
              <div>
                <span>
                  <NumberCounter end={45} start={5} delay='4' preFix="+" /></span>
                <span>fitness programs</span>
                </div>
            </div>
            {/* hero button */}
            <div className="hero-button">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
        </div>

        {/* right side start here */}
        <div className="right-h">
          <button className="btn"> Join Now</button>
          <div className="heart-rate">
            <img src="img/heart.png" alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
            </div> 
            <img src="img/hero_image.png" alt="" className='hero-image'/> 
            <img src="img/hero_image_back.png" alt="" className='hero-image-back'/>  
            <div className="calories">
              <img src="img/calories.png" alt="" />
              <div>
              <span>Calories Burn</span>
              <span>220 kcal</span>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Hero