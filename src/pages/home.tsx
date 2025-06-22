import React from 'react'
import { ScrollIcon } from '../assets/svg/exportIcons'

const Home = () => {
  return (
    <div className='home-page'>
      <header className="intro-header">
        <div className="identity">
          <div className="first-name">Nanni</div>
          <div className="last-name">Nalvazhuthi</div>
        </div>
        <div className="role-location">
          <div className="role">UI/UX Developer</div>
          <div className="location">Based in India</div>
        </div>
      </header>

      {/* <button className='talk-button'>
        Let’s talk business
      </button> */}
      <main className="hero-statement">
        <div className="content">
          I Solve
          Humans <br />
          <div className="highlight">Problems</div>
          Using Telekinesis
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


