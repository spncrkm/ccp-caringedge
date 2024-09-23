import React from 'react'
import { 
  MFHlogo,
  MDSS,
  moberly_school,
  moberly_ymca,
  moberlymedical,
  healthdept,

 } from '../../assets'


const images = [
  MFHlogo,
  MDSS,
  moberly_school,
  moberly_ymca,
  moberlymedical,
  healthdept
];


const Features = () => {
  return (
    <div className='banner'>
      <div className="slider" style={{ '--quantity': images.length }}>
        {images.map((image,index) => (
          <div key={index} className='item' style={{ '--position': index + 1}}>
            <img src={image} alt={`Feature ${index + 1}`} />
          </div>
        ))}
      </div>
        <div className='partner-text'>
          <h1>Partners</h1>
        </div>
    </div>
  )
}

export default Features
