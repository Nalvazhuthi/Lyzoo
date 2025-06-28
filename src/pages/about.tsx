import React from 'react'
import webImage from "../assets/images/about/webImage.png"
const About = () => {
  return (
    <div className='about-page' id='about'>

      <div className="about">
        With over a year of hands-on experience working alongside global brands,
        I now focus exclusively on collaborating with purpose-driven projects.
        My mission is to contribute to initiatives that create positive social and environmental impact.
      </div>

      <div className="image-scroller">
        <img src={webImage} alt="" />
      </div>
    </div>
  )
}

export default About