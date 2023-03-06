import React from 'react'
import './Plans.css';
import {plansData} from'./../data/plansData'
import whiteTick from'./../assets/whiteTick.png'

function Plans() {
  return (
    <div className="plans-container"id='plans'>

        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
 
        <div className="program-header" style={{gap:'2 rem'}}>
            <span className='strock-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='strock-text'>NOW WITH US</span>
        </div>
        {/* plans card section */}
        <div className="plans">
            {plansData.map((Plan,i)=>(
                <div className="plan" key={i}>
                    {Plan.icon}
                    <span>{Plan.name}</span>
                    <span>${Plan.price}</span>
                    <div className="features">
                        {Plan.features.map((features,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span> See more benefits -> </span>
                    </div>
                    <button className='btn'>Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
