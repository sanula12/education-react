import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Veniam tempore 
            suscipit blanditiis. Est laudantium inventore, 
            blanditiis ab temporibus ipsum fugit enim quam iure, 
            magnam aliquid nemo culpa, 
            corrupti consectetur vel?</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
