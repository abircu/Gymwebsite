import React from 'react'
import'./Program.css'
import RightArrow from'./../assets/rightArrow.png'
import  {programsData} from'../../src/data/programsData'
export const Program = () => {
  return (
    <div className='Programs' id='programs'>
        <div className="program-header">
            <span className='strock-text'>Explore our </span>
            <span>Programs</span>
            <span className='strock-text'> to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
              <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}
export default Program;
