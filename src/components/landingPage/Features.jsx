import React from 'react'
import { 
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
 } from '../../assets'


const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10
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
    </div>
  )
}

export default Features
