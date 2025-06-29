import React from 'react'
import { ScrollIcon } from '../assets/svg/exportIcons'

const Home = () => {
  return (
    <div className='home-page' id='home'>
      <main className="hero-statement">
        <div className="content">
          I build <br />
          custom websites &
          digital solutions

          <div className="highlight">Tailored to your needs</div>

          <a href="#contact" className='talk-button' >
            Let’s discuss your project
          </a>
        </div>

        <div className="scrolling">
          <div className="icon">
            <ScrollIcon />
          </div>
          <div className="scroll">Scroll down to see my work</div>
        </div>
      </main>
    </div>
  )
}

export default Home
