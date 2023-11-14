import React from 'react'
import './imageanimation.scss'
import FunImg from '../../assets/images/fun.png'

const ImageAnimation = () => {
  return (
    <div className='image'>
        <div className="revealing-image">
            <img src={FunImg} alt="" />
        </div>
        <div className="test">
            
        </div>
    </div>
  )
}

export default ImageAnimation