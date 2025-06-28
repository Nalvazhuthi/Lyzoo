import React from 'react'
import { ScrollIcon } from '../assets/svg/exportIcons'

const Home = () => {
  return (
    <div className='home-page' id='home'>
      <main className="hero-statement">
        <div className="content">
          I Solve
          Humans <br />
          <div className="highlight">Problems</div>
          Using Telekinesis

          <button className='talk-button'>
            Let’s talk business
          </button>

        </div>


        <div className="scrolling">
          <div className="icon">
            <ScrollIcon />
          </div>
          <div className="scroll">Psssh! Scroll a little</div>
        </div>
      </main>
    </div>
  )
}

export default Home


